import {
  BarChart3,
  BookOpen,
  Box,
  GraduationCap,
  Play,
  SlidersHorizontal,
  UserRound,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react';
import { getTranslations } from '../i18n/translations';
import { GameMode, LanguageCode } from '../types/edublox';
import { LanguageSwitcher } from './LanguageSwitcher';

interface LandingOverlayProps {
  arenaName: string;
  questionCount: number;
  audioEnabled: boolean;
  language: LanguageCode;
  onChangeLanguage: (lang: LanguageCode) => void;
  onToggleAudio: () => void;
  onStartMode: (mode: GameMode) => void;
  onOpenCharacter: () => void;
  onOpenRekap: () => void;
  onOpenTeacher: () => void;
}

export function LandingOverlay({
  arenaName,
  questionCount,
  audioEnabled,
  language,
  onChangeLanguage,
  onToggleAudio,
  onStartMode,
  onOpenCharacter,
  onOpenRekap,
  onOpenTeacher,
}: LandingOverlayProps) {
  const t = getTranslations(language);

  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-b from-sky-950/55 via-slate-900/20 to-slate-950/70 pointer-events-auto overflow-y-auto">
      {/* Top Header */}
      <header className="w-full max-w-6xl flex flex-wrap items-center justify-between gap-3">
        <div className="hud-surface-dark px-4 py-2 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-slate-900 shrink-0">
            <Box className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-bold text-sky-300 truncate">
              {t.landing.subjectHeader}
            </div>
            <div className="font-fredoka text-sm sm:text-base font-bold text-white truncate">
              EDUBLOX – INFORMATICS ADVENTURE CITY
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 shrink-0">
          <LanguageSwitcher
            language={language}
            onChange={onChangeLanguage}
            variant="dark"
          />
          <button
            type="button"
            onClick={onToggleAudio}
            className="btn-3d btn-yellow px-3 py-2 text-sm min-h-[40px]"
            aria-label={t.landing.audioTitle}
            title={t.landing.audioTitle}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onOpenRekap}
            className="btn-3d btn-sky px-4 py-2 text-sm min-h-[40px]"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">{t.landing.scoreRecap}</span>
          </button>
          <button
            type="button"
            onClick={onOpenTeacher}
            className="btn-3d btn-purple px-4 py-2 text-sm min-h-[40px]"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.landing.teacherSettings}</span>
          </button>
        </div>
      </header>

      {/* Center Hero Card */}
      <main className="text-center max-w-2xl mx-auto my-auto py-4">
        <div className="text-xs sm:text-sm font-extrabold tracking-wide text-yellow-300 mb-2 drop-shadow">
          {t.landing.subtitleBadge}
        </div>

        <h1 className="font-fredoka text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-none drop-shadow-[0_6px_0_rgba(15,23,42,0.85)]">
          <span className="text-sky-400">EDU</span>
          <span className="text-emerald-400">BLOX</span>
        </h1>

        <h2 className="font-fredoka text-xl sm:text-3xl font-bold text-yellow-300 mt-2 drop-shadow-[0_3px_0_rgba(15,23,42,0.9)] uppercase">
          {arenaName}
        </h2>

        <p className="text-white text-sm sm:text-base font-semibold mt-3 bg-slate-950/75 px-5 py-2 rounded-2xl inline-block border border-white/15">
          {t.landing.tagline}
        </p>

        {/* Action Grid */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 max-w-xl mx-auto">
          <button
            type="button"
            onClick={() => onStartMode('adventure')}
            className="btn-3d btn-emerald py-4 px-6 text-lg sm:text-xl sm:col-span-2 min-h-[54px]"
          >
            <Play className="w-6 h-6 fill-current" />
            {t.landing.startAdventure}
          </button>

          <button
            type="button"
            onClick={onOpenCharacter}
            className="btn-3d btn-sky py-3.5 px-5 text-base min-h-[48px]"
          >
            <UserRound className="w-5 h-5" />
            {t.landing.chooseCharacter}
          </button>

          <button
            type="button"
            onClick={() => onStartMode('challenge')}
            className="btn-3d btn-orange py-3.5 px-5 text-base min-h-[48px]"
          >
            <Zap className="w-5 h-5" />
            {t.landing.quizChallenge}
          </button>

          <button
            type="button"
            onClick={() => onStartMode('practice')}
            className="btn-3d btn-pink py-3.5 px-5 text-base min-h-[48px]"
          >
            <BookOpen className="w-5 h-5" />
            {t.landing.practiceMode}
          </button>

          <button
            type="button"
            onClick={onOpenTeacher}
            className="btn-3d btn-purple py-3.5 px-5 text-base min-h-[48px]"
          >
            <SlidersHorizontal className="w-5 h-5" />
            {t.landing.teacherSettings}
          </button>
        </div>
      </main>

      {/* Footer Metadata */}
      <footer className="w-full text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 hud-surface-dark px-5 py-2 rounded-2xl text-xs sm:text-sm text-slate-200">
          <span className="font-bold text-yellow-300">EDUBLOX – INFORMATIKA</span>
          <span aria-hidden="true">·</span>
          <span>{t.landing.buildingsCount}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{t.landing.questionsCount(questionCount)}</span>
          <span aria-hidden="true">·</span>
          <span className="font-bold text-pink-300">By Sitty</span>
        </div>
      </footer>
    </div>
  );
}
