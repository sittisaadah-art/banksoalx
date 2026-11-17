import { useCallback, useRef, useState } from 'react';
import { CanteenModal } from './components/CanteenModal';
import { CharacterModal } from './components/CharacterModal';
import { CityCanvas3D, CityCanvasHandle } from './components/CityCanvas3D';
import { ConfettiOverlay } from './components/ConfettiOverlay';
import { HudOverlay } from './components/HudOverlay';
import { LandingOverlay } from './components/LandingOverlay';
import { LeaderboardModal } from './components/LeaderboardModal';
import { QuizModal } from './components/QuizModal';
import { RekapModal } from './components/RekapModal';
import { ResultModal } from './components/ResultModal';
import { TeacherModal } from './components/TeacherModal';
import { AVATARS, DEFAULT_QUESTIONS } from './data/questions';
import { getTranslations } from './i18n/translations';
import {
  AppState,
  BuildingCode,
  CanteenItem,
  CustomOrnament,
  GameMode,
  LanguageCode,
  OrnamentType,
  ProximityTarget,
  QuestionItem,
  QuizResultSummary,
  RekapLogItem,
  TeacherConfig,
} from './types/edublox';
import { AudioEngine } from './utils/audio';
import {
  formatTime,
  getPlayerLevel,
  loadAppState,
  loadCustomOrnaments,
  loadLeaderboard,
  loadQuestionBank,
  loadRekapLogs,
  saveAppState,
  saveCustomOrnaments,
  saveLeaderboard,
  saveQuestionBank,
  saveRekapLogs,
} from './utils/storage';

type ActiveModal =
  | null
  | 'character'
  | 'canteen'
  | 'leaderboard'
  | 'rekap'
  | 'teacher'
  | 'result';

interface QuizLauncherState {
  active: boolean;
  filterBuilding: BuildingCode | 'ALL';
  mode: GameMode;
  sessionKey: number;
}

interface ToastState {
  id: number;
  text: string;
  variant: 'success' | 'warning' | 'info';
}

export default function App() {
  const cityRef = useRef<CityCanvasHandle | null>(null);

  const [appState, setAppState] = useState<AppState>(() => loadAppState());
  const [questionBank, setQuestionBank] = useState<QuestionItem[]>(() =>
    loadQuestionBank()
  );
  const [rekapLogs, setRekapLogs] = useState<RekapLogItem[]>(() =>
    loadRekapLogs()
  );
  const [leaderboard, setLeaderboard] = useState(() => loadLeaderboard());
  const [ornaments, setOrnaments] = useState<CustomOrnament[]>(() =>
    loadCustomOrnaments()
  );

  const [isLanding, setIsLanding] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [proximityTarget, setProximityTarget] =
    useState<ProximityTarget | null>(null);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [lastResult, setLastResult] = useState<QuizResultSummary | null>(null);
  const [confettiKey, setConfettiKey] = useState(0);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const [quizState, setQuizState] = useState<QuizLauncherState>({
    active: false,
    filterBuilding: 'ALL',
    mode: 'adventure',
    sessionKey: 0,
  });

  const showToast = useCallback(
    (text: string, variant: 'success' | 'warning' | 'info' = 'info') => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, text, variant }]);
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 2800);
    },
    []
  );

  const t = getTranslations(appState.language);

  const handleChangeLanguage = useCallback(
    (lang: LanguageCode) => {
      setAppState((prev) => {
        if (prev.language === lang) return prev;
        const updated = { ...prev, language: lang };
        saveAppState(updated);
        return updated;
      });
      const nextT = getTranslations(lang);
      showToast(nextT.toasts.languageChanged(nextT.languageName), 'info');
    },
    [showToast]
  );

  const handleToggleAudio = () => {
    const next = !audioEnabled;
    AudioEngine.enabled = next;
    if (next) AudioEngine.init();
    setAudioEnabled(next);
    showToast(next ? t.toasts.audioOn : t.toasts.audioOff, 'info');
  };

  const handleStartMode = (mode: GameMode) => {
    AudioEngine.init();
    AudioEngine.startBGM();
    const nextState = { ...appState, gameMode: mode };
    setAppState(nextState);
    saveAppState(nextState);
    setIsLanding(false);
    cityRef.current?.setAutoRotate(false);
    setAutoRotate(false);

    if (mode === 'challenge' || mode === 'practice') {
      setQuizState((prev) => ({
        active: true,
        filterBuilding: 'ALL',
        mode,
        sessionKey: prev.sessionKey + 1,
      }));
    } else {
      showToast(t.toasts.welcomeAdventure(nextState.playerName), 'success');
    }
  };

  const handleOpenQuiz = useCallback(
    (buildingFilter: BuildingCode | 'ALL', forcedMode?: GameMode) => {
      AudioEngine.init();
      const mode = forcedMode || appState.gameMode || 'adventure';
      setProximityTarget(null);
      setQuizState((prev) => ({
        active: true,
        filterBuilding: buildingFilter,
        mode,
        sessionKey: prev.sessionKey + 1,
      }));
    },
    [appState.gameMode]
  );

  const handleAnswerEvaluated = useCallback(
    ({
      questionId,
      isCorrect,
      coinGain,
      xpGain,
      logItem,
    }: {
      questionId: number;
      isCorrect: boolean;
      coinGain: number;
      xpGain: number;
      logItem: RekapLogItem;
    }) => {
      setAppState((prev) => {
        const oldLevel = getPlayerLevel(prev.xp).level;
        const nextXP = prev.xp + xpGain;
        const newLevelInfo = getPlayerLevel(nextXP);
        if (newLevelInfo.level > oldLevel) {
          AudioEngine.levelUp();
          const lvTitle = t.levels[newLevelInfo.level] || newLevelInfo.title;
          showToast(t.toasts.levelUp(newLevelInfo.level, lvTitle), 'success');
        }
        const nextSolved =
          isCorrect && !prev.solvedIds.includes(questionId)
            ? [...prev.solvedIds, questionId]
            : prev.solvedIds;

        const updated: AppState = {
          ...prev,
          coins: prev.coins + coinGain,
          xp: nextXP,
          solvedIds: nextSolved,
        };
        saveAppState(updated);
        return updated;
      });

      setRekapLogs((prev) => {
        const next = [logItem, ...prev];
        saveRekapLogs(next);
        return next;
      });
    },
    [showToast, t]
  );

  const handleFinishQuiz = (summary: QuizResultSummary) => {
    setQuizState((prev) => ({ ...prev, active: false }));
    AudioEngine.finish();
    setConfettiKey((k) => k + 1);

    const avName =
      AVATARS.find((a) => a.id === appState.avatarId)?.name || 'Raja Blox';
    const nextEntry = {
      name: appState.playerName,
      className: appState.config.className,
      avatar: avName,
      score: summary.score,
      correct: summary.correct,
      total: summary.total,
      coins: appState.coins,
      xp: appState.xp,
      time: formatTime(summary.elapsedSeconds),
      date: new Date().toLocaleDateString('id-ID'),
    };

    const nextLb = [...leaderboard, nextEntry]
      .sort((a, b) => b.score - a.score || b.xp - a.xp)
      .slice(0, 30);
    setLeaderboard(nextLb);
    saveLeaderboard(nextLb);
    setLastResult(summary);
    setActiveModal('result');
  };

  const handleSaveCharacter = (
    name: string,
    avatarId: string,
    outfitColor: string,
    playerCount: number,
    language: LanguageCode
  ) => {
    const nextState: AppState = {
      ...appState,
      playerName: name,
      avatarId,
      outfitColor,
      playerCount,
      language,
    };
    setAppState(nextState);
    saveAppState(nextState);
    cityRef.current?.rebuildPlayers(name, avatarId, outfitColor, playerCount);
    setActiveModal(null);

    const nextT = getTranslations(language);
    if (isLanding) {
      handleStartMode('adventure');
    } else {
      showToast(nextT.toasts.characterSaved(name), 'success');
    }
  };

  const handleBuyCanteenItem = (item: CanteenItem) => {
    if (appState.coins < item.price) {
      showToast(t.toasts.notEnoughCoins, 'warning');
      return;
    }
    const oldLv = getPlayerLevel(appState.xp).level;
    const nextXP = appState.xp + item.xp;
    const newLv = getPlayerLevel(nextXP);
    const updated: AppState = {
      ...appState,
      coins: appState.coins - item.price,
      xp: nextXP,
    };
    setAppState(updated);
    saveAppState(updated);
    AudioEngine.coin();
    if (newLv.level > oldLv) {
      AudioEngine.levelUp();
      const lvTitle = t.levels[newLv.level] || newLv.title;
      showToast(t.toasts.levelUp(newLv.level, lvTitle), 'success');
    } else {
      const itemName = t.canteen.items[item.id]?.name || item.name;
      showToast(t.toasts.boughtItem(itemName, item.xp), 'success');
    }
  };

  const handleSaveTeacherConfig = (nextConfig: TeacherConfig) => {
    const updated = { ...appState, config: nextConfig };
    setAppState(updated);
    saveAppState(updated);
    showToast('✅ Pengaturan guru berhasil disimpan!', 'success');
  };

  const handleUpdateQuestionBank = (nextBank: QuestionItem[]) => {
    setQuestionBank(nextBank);
    saveQuestionBank(nextBank);
  };

  const handleResetDefaultQuestions = () => {
    const fresh: QuestionItem[] = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
    setQuestionBank(fresh);
    saveQuestionBank(fresh);
    showToast('🔄 50 Soal Informatika bawaan berhasil dipulihkan!', 'success');
  };

  const handleAddOrnament = (type: OrnamentType) => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 24 + Math.random() * 65;
    const x = Math.round(Math.cos(angle) * dist);
    const z = Math.round(Math.sin(angle) * dist);
    const next = [...ornaments, { type, x, z }];
    setOrnaments(next);
    saveCustomOrnaments(next);
    cityRef.current?.renderCustomOrnaments(next);
    showToast(`✨ Ornamen ${type} ditambahkan ke kota 3D!`, 'success');
  };

  const handleClearOrnaments = () => {
    setOrnaments([]);
    saveCustomOrnaments([]);
    cityRef.current?.renderCustomOrnaments([]);
    showToast('🧹 Ornamen tambahan dibersihkan.', 'info');
  };

  const handleTeleport = (target: 'plaza' | 'canteen' | BuildingCode) => {
    cityRef.current?.teleportTo(target);
    setAutoRotate(false);
    const label =
      target === 'plaza'
        ? t.toasts.plazaLabel
        : target === 'canteen'
        ? t.toasts.canteenLabel
        : t.toasts.buildingLabel(target);
    showToast(t.toasts.teleportTo(label), 'info');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950">
      {/* 3D Voxel City Canvas */}
      <CityCanvas3D
        ref={cityRef}
        isLanding={isLanding}
        isQuizActive={quizState.active}
        initialPlayerName={appState.playerName}
        initialAvatarId={appState.avatarId}
        initialOutfitColor={appState.outfitColor}
        initialPlayerCount={appState.playerCount}
        initialOrnaments={ornaments}
        onSelectBuilding={(code) => handleOpenQuiz(code)}
        onOpenCanteen={() => setActiveModal('canteen')}
        onProximityChange={setProximityTarget}
        onAutoRotateChange={setAutoRotate}
      />

      {/* Confetti */}
      <ConfettiOverlay triggerKey={confettiKey} />

      {/* Toast Stack */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none px-4 w-full max-w-md items-center">
        {toasts.map((t) => {
          const styleMap = {
            success: 'bg-emerald-600 border-emerald-300 text-white',
            warning: 'bg-amber-400 border-yellow-200 text-slate-950',
            info: 'bg-slate-900 border-sky-400 text-white',
          };
          return (
            <div
              key={t.id}
              className={`px-5 py-2.5 rounded-2xl border-2 font-fredoka text-xs sm:text-sm font-bold shadow-xl text-center ${styleMap[t.variant]}`}
            >
              {t.text}
            </div>
          );
        })}
      </div>

      {/* Landing Screen vs In-Game HUD */}
      {isLanding ? (
        <LandingOverlay
          arenaName={appState.config.arenaName}
          questionCount={questionBank.length}
          audioEnabled={audioEnabled}
          language={appState.language}
          onChangeLanguage={handleChangeLanguage}
          onToggleAudio={handleToggleAudio}
          onStartMode={handleStartMode}
          onOpenCharacter={() => setActiveModal('character')}
          onOpenRekap={() => setActiveModal('rekap')}
          onOpenTeacher={() => setActiveModal('teacher')}
        />
      ) : (
        <HudOverlay
          appState={appState}
          questionCount={questionBank.length}
          audioEnabled={audioEnabled}
          autoRotate={autoRotate}
          proximityTarget={proximityTarget}
          onChangeLanguage={handleChangeLanguage}
          onToggleAudio={handleToggleAudio}
          onOpenQuiz={(b) => handleOpenQuiz(b)}
          onOpenCanteen={() => setActiveModal('canteen')}
          onOpenLeaderboard={() => setActiveModal('leaderboard')}
          onOpenRekap={() => setActiveModal('rekap')}
          onOpenTeacher={() => setActiveModal('teacher')}
          onOpenCharacter={() => setActiveModal('character')}
          onReturnHome={() => {
            setQuizState((prev) => ({ ...prev, active: false }));
            setIsLanding(true);
            cityRef.current?.setAutoRotate(true);
            setAutoRotate(true);
          }}
          onTeleport={handleTeleport}
          onRotateCamera={(rad) => {
            cityRef.current?.rotateCameraBy(rad);
            setAutoRotate(false);
          }}
          onToggleAutoRotate={() => {
            const next = cityRef.current?.toggleAutoRotate() ?? false;
            setAutoRotate(next);
          }}
          onFocusPlayer={() => {
            cityRef.current?.focusCameraOnPlayer();
            setAutoRotate(false);
          }}
          onJump={() => cityRef.current?.triggerJump(0)}
          onJoystickMove={(x, y) => cityRef.current?.setJoystickVector(x, y)}
          onTriggerProximity={() => {
            if (!proximityTarget) return;
            if (proximityTarget.type === 'canteen') {
              setActiveModal('canteen');
            } else if (proximityTarget.code) {
              handleOpenQuiz(proximityTarget.code);
            }
          }}
        />
      )}

      {/* Active Quiz Modal */}
      {quizState.active && (
        <QuizModal
          key={quizState.sessionKey}
          questionBank={questionBank}
          filterBuilding={quizState.filterBuilding}
          mode={quizState.mode}
          language={appState.language}
          playerName={appState.playerName}
          currentCoins={appState.coins}
          config={appState.config}
          onAnswerEvaluated={handleAnswerEvaluated}
          onTriggerConfetti={() => setConfettiKey((k) => k + 1)}
          onShowToast={showToast}
          onFinish={handleFinishQuiz}
          onExit={() => setQuizState((prev) => ({ ...prev, active: false }))}
        />
      )}

      {/* Character & Multiplayer Modal */}
      {activeModal === 'character' && (
        <CharacterModal
          initialName={appState.playerName}
          initialAvatarId={appState.avatarId}
          initialOutfitColor={appState.outfitColor}
          initialPlayerCount={appState.playerCount}
          initialLanguage={appState.language}
          onSave={handleSaveCharacter}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Final Result Modal */}
      {activeModal === 'result' && lastResult && (
        <ResultModal
          result={lastResult}
          language={appState.language}
          playerName={appState.playerName}
          className={appState.config.className}
          avatarId={appState.avatarId}
          totalCoins={appState.coins}
          totalXP={appState.xp}
          onRestart={() => {
            setActiveModal(null);
            handleOpenQuiz(lastResult.filterBuilding, lastResult.mode);
          }}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Canteen Modal */}
      {activeModal === 'canteen' && (
        <CanteenModal
          coins={appState.coins}
          language={appState.language}
          onBuyItem={handleBuyCanteenItem}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Leaderboard Modal */}
      {activeModal === 'leaderboard' && (
        <LeaderboardModal
          entries={leaderboard}
          language={appState.language}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Rekap Nilai Otomatis Modal */}
      {activeModal === 'rekap' && (
        <RekapModal
          logs={rekapLogs}
          leaderboard={leaderboard}
          language={appState.language}
          onClearLogs={() => {
            setRekapLogs([]);
            saveRekapLogs([]);
            showToast('🗑️ Log aktivitas rekap telah dikosongkan.', 'info');
          }}
          onShowToast={showToast}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Teacher Settings & Bank Soal Panel */}
      {activeModal === 'teacher' && (
        <TeacherModal
          config={appState.config}
          questionBank={questionBank}
          leaderboard={leaderboard}
          onSaveConfig={handleSaveTeacherConfig}
          onUpdateQuestionBank={handleUpdateQuestionBank}
          onResetDefaultQuestions={handleResetDefaultQuestions}
          onAddOrnament={handleAddOrnament}
          onClearOrnaments={handleClearOrnaments}
          onOpenRekap={() => setActiveModal('rekap')}
          onShowToast={showToast}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
