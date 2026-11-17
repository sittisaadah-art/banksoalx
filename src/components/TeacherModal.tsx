import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Edit3,
  Eye,
  EyeOff,
  FileDown,
  FileUp,
  Lock,
  Plus,
  RotateCcw,
  Save,
  ShieldCheck,
  Trash2,
  X,
} from 'lucide-react';
import { BUILDINGS_META } from '../data/questions';
import {
  BuildingCode,
  DifficultyLevel,
  LeaderboardEntry,
  OptionLetter,
  OrnamentType,
  QuestionItem,
  QuestionType,
  TeacherConfig,
  TrueFalseChoice,
} from '../types/edublox';
import { downloadFile } from '../utils/storage';

interface TeacherModalProps {
  config: TeacherConfig;
  questionBank: QuestionItem[];
  leaderboard: LeaderboardEntry[];
  onSaveConfig: (nextConfig: TeacherConfig) => void;
  onUpdateQuestionBank: (nextBank: QuestionItem[]) => void;
  onResetDefaultQuestions: () => void;
  onAddOrnament: (type: OrnamentType) => void;
  onClearOrnaments: () => void;
  onOpenRekap: () => void;
  onShowToast: (msg: string, variant: 'success' | 'warning' | 'info') => void;
  onClose: () => void;
}

type TeacherTab = 'general' | 'questions' | 'ornaments' | 'results';

export function TeacherModal({
  config,
  questionBank,
  leaderboard,
  onSaveConfig,
  onUpdateQuestionBank,
  onResetDefaultQuestions,
  onAddOrnament,
  onClearOrnaments,
  onOpenRekap,
  onShowToast,
  onClose,
}: TeacherModalProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [pinError, setPinError] = useState('');

  const [activeTab, setActiveTab] = useState<TeacherTab>('general');
  const [formConfig, setFormConfig] = useState<TeacherConfig>(config);
  const [searchTerm, setSearchTerm] = useState('');

  // Question Form state
  const [qFormOpen, setQFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [qType, setQType] = useState<QuestionType>('single');
  const [qBuilding, setQBuilding] = useState<BuildingCode>('A');
  const [qCategory, setQCategory] = useState('Algoritma & Diagram Alir');
  const [qText, setQText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [optE, setOptE] = useState('');
  const [qAnswer, setQAnswer] = useState<OptionLetter>('A');
  const [qComplexAnswers, setQComplexAnswers] = useState<OptionLetter[]>(['A', 'B']);
  const [qStatements, setQStatements] = useState<[string, string, string]>(['', '', '']);
  const [qTfAnswers, setQTfAnswers] = useState<[TrueFalseChoice, TrueFalseChoice, TrueFalseChoice]>([
    'Benar',
    'Salah',
    'Benar',
  ]);
  const [qShortAnswers, setQShortAnswers] = useState('');
  const [qExplanation, setQExplanation] = useState('');

  const handleSaveGeneral = () => {
    onSaveConfig({
      gameTitle: formConfig.gameTitle.trim() || 'EDUBLOX – INFORMATICS ADVENTURE CITY',
      className: formConfig.className.trim() || 'X-A',
      arenaName: formConfig.arenaName.trim() || 'Informatics Adventure City',
      questionLimit: Math.max(5, Math.min(100, Number(formConfig.questionLimit) || 50)),
      quizMinutes: Math.max(1, Number(formConfig.quizMinutes) || 45),
      coinReward: Math.max(1, Number(formConfig.coinReward) || 10),
      difficulty: formConfig.difficulty,
    });
  };

  const openQuestionForm = (item?: QuestionItem) => {
    if (item) {
      setEditingId(item.id);
      setQType(item.type);
      setQBuilding(item.building);
      setQCategory(item.category);
      setQText(item.question);
      setOptA(item.options?.A || '');
      setOptB(item.options?.B || '');
      setOptC(item.options?.C || '');
      setOptD(item.options?.D || '');
      setOptE(item.options?.E || '');
      setQAnswer(item.answer || 'A');
      setQComplexAnswers(item.complexAnswers || ['A', 'B']);
      setQStatements([
        item.statements?.[0] || '',
        item.statements?.[1] || '',
        item.statements?.[2] || '',
      ]);
      setQTfAnswers([
        item.tfAnswers?.[0] || 'Benar',
        item.tfAnswers?.[1] || 'Salah',
        item.tfAnswers?.[2] || 'Benar',
      ]);
      setQShortAnswers((item.acceptedAnswers || []).join(', '));
      setQExplanation(item.explanation);
    } else {
      setEditingId(null);
      setQType('single');
      setQBuilding('A');
      setQCategory('Algoritma & Diagram Alir');
      setQText('');
      setOptA('');
      setOptB('');
      setOptC('');
      setOptD('');
      setOptE('');
      setQAnswer('A');
      setQComplexAnswers(['A', 'B']);
      setQStatements(['', '', '']);
      setQTfAnswers(['Benar', 'Salah', 'Benar']);
      setQShortAnswers('');
      setQExplanation('');
    }
    setQFormOpen(true);
  };

  const toggleComplexKey = (letter: OptionLetter) => {
    setQComplexAnswers((prev) => {
      if (prev.includes(letter)) return prev.filter((l) => l !== letter);
      return [...prev, letter];
    });
  };

  const handleSaveQuestion = () => {
    if (!qText.trim()) {
      onShowToast('⚠️ Teks pertanyaan wajib diisi!', 'warning');
      return;
    }

    const existing = editingId !== null ? questionBank.find((q) => q.id === editingId) : undefined;
    const baseId = editingId ?? Math.max(0, ...questionBank.map((q) => q.id)) + 1;

    let nextItem: QuestionItem = {
      id: baseId,
      building: qBuilding,
      category: qCategory.trim() || 'Informatika',
      source: existing?.source || 'Bank Soal',
      type: qType,
      visualId: existing?.visualId,
      question: qText.trim(),
      explanation:
        qExplanation.trim() || 'Jawaban sesuai materi Informatika kelas X SMA.',
    };

    if (qType === 'single' || qType === 'complex') {
      if (!optA.trim() || !optB.trim() || !optC.trim() || !optD.trim()) {
        onShowToast('⚠️ Lengkapi minimal keempat opsi A, B, C, dan D!', 'warning');
        return;
      }
      nextItem.options = {
        A: optA.trim(),
        B: optB.trim(),
        C: optC.trim(),
        D: optD.trim(),
        ...(optE.trim() ? { E: optE.trim() } : {}),
      };
      if (qType === 'single') {
        nextItem.answer = qAnswer === 'E' && !optE.trim() ? 'A' : qAnswer;
      } else {
        const validKeys = qComplexAnswers.filter((l) => l !== 'E' || Boolean(optE.trim()));
        if (validKeys.length < 1) {
          onShowToast('⚠️ Pilih minimal 1 kunci jawaban untuk Pilihan Ganda Kompleks!', 'warning');
          return;
        }
        nextItem.complexAnswers = [...validKeys].sort();
      }
    } else if (qType === 'truefalse') {
      if (qStatements.some((s) => !s.trim())) {
        onShowToast('⚠️ Lengkapi 3 pernyataan Benar/Salah!', 'warning');
        return;
      }
      nextItem.statements = qStatements.map((s) => s.trim());
      nextItem.tfAnswers = [...qTfAnswers];
      nextItem.tfLabels = existing?.tfLabels || ['Benar', 'Salah'];
    } else if (qType === 'short') {
      const list = qShortAnswers
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      if (list.length === 0) {
        onShowToast('⚠️ Masukkan minimal satu kata kunci jawaban singkat!', 'warning');
        return;
      }
      nextItem.acceptedAnswers = list.map((s) => s.toLowerCase());
      nextItem.displayAnswer = list[0];
    }

    const nextBank =
      editingId !== null
        ? questionBank.map((q) => (q.id === editingId ? nextItem : q))
        : [...questionBank, nextItem];

    onUpdateQuestionBank(nextBank);
    setQFormOpen(false);
    onShowToast('✅ Bank soal berhasil diperbarui!', 'success');
  };

  const handleDeleteQuestion = (id: number) => {
    if (questionBank.length <= 5) {
      onShowToast('⚠️ Minimal harus tersisa 5 soal di bank soal.', 'warning');
      return;
    }
    onUpdateQuestionBank(questionBank.filter((q) => q.id !== id));
    onShowToast('🗑️ Soal dihapus dari bank soal.', 'info');
  };

  const handleImportJSON = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(String(ev.target?.result || ''));
        if (
          Array.isArray(imported) &&
          imported.length > 0 &&
          imported[0].question &&
          imported[0].type
        ) {
          onUpdateQuestionBank(imported);
          onShowToast(`✅ Berhasil mengimpor ${imported.length} soal!`, 'success');
        } else {
          onShowToast('❌ Format file JSON bank soal tidak valid.', 'warning');
        }
      } catch {
        onShowToast('❌ Gagal membaca file JSON.', 'warning');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const filteredQuestions = questionBank.filter((q) => {
    const term = searchTerm.toLowerCase();
    return (
      q.question.toLowerCase().includes(term) ||
      q.category.toLowerCase().includes(term) ||
      q.building.toLowerCase().includes(term) ||
      (q.source || '').toLowerCase().includes(term)
    );
  });

  const renderKeyPreview = (q: QuestionItem) => {
    if (q.type === 'single' && q.answer && q.options) {
      return `${q.answer} (${q.options[q.answer]})`;
    }
    if (q.type === 'complex' && q.complexAnswers) {
      return q.complexAnswers.join(' & ');
    }
    if (q.type === 'truefalse' && q.tfAnswers) {
      return q.tfAnswers.join(', ');
    }
    if (q.type === 'short') {
      return q.displayAnswer || q.acceptedAnswers?.[0] || '-';
    }
    return '-';
  };

  const typeBadge: Record<QuestionType, string> = {
    single: 'PG',
    complex: 'PG Kompleks',
    truefalse: 'Benar-Salah',
    short: 'Isian Singkat',
  };

  const TEACHER_PIN = 'guru123';

  const handlePinSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === TEACHER_PIN) {
      setIsUnlocked(true);
      setPinError('');
      setPinInput('');
      onShowToast('🔓 Berhasil masuk ke Mode Guru!', 'success');
    } else {
      setPinError('PIN salah! Silakan periksa kembali PIN guru.');
      onShowToast('❌ PIN guru tidak valid.', 'warning');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-40 bg-slate-950/85 flex items-center justify-center p-3 sm:p-5">
        <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-7 border-4 border-purple-500 shadow-2xl">
          <div className="flex items-start justify-between gap-2 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 border-2 border-purple-300 flex items-center justify-center text-purple-700 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold text-purple-700">
                  EDUBLOX – INFORMATIKA
                </div>
                <h2 className="font-fredoka text-xl font-bold text-slate-900">
                  Login Mode Guru
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-rose-500 hover:text-white flex items-center justify-center transition"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-4 leading-relaxed">
            Masukkan PIN Guru untuk mengakses pengaturan kelas, manajemen bank soal, ornamen kota 3D, dan hasil nilai siswa.
          </p>

          <form onSubmit={handlePinSubmit} className="space-y-3.5">
            <div>
              <label
                htmlFor="teacher-pin-input"
                className="block text-xs font-extrabold text-slate-700 mb-1.5"
              >
                PIN Mode Guru
              </label>
              <div className="relative">
                <input
                  id="teacher-pin-input"
                  type={showPin ? 'text' : 'password'}
                  autoFocus
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError('');
                  }}
                  placeholder="Masukkan PIN guru..."
                  className="w-full px-4 py-3 pr-11 rounded-2xl border-2 border-slate-300 focus:border-purple-600 outline-none font-bold text-slate-900 bg-slate-50 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPin((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-purple-700 p-1"
                  aria-label={showPin ? 'Sembunyikan PIN' : 'Tampilkan PIN'}
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {pinError && (
                <p className="mt-1.5 text-xs font-bold text-rose-600">
                  {pinError}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="btn-3d btn-slate px-4 py-2.5 text-xs sm:text-sm flex-1"
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn-3d btn-purple px-5 py-2.5 text-xs sm:text-sm flex-1"
              >
                <ShieldCheck className="w-4 h-4" />
                Masuk Mode Guru
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/85 flex items-center justify-center p-2 sm:p-5">
      <div className="bg-white w-full max-w-5xl rounded-3xl p-4 sm:p-6 max-h-[94vh] flex flex-col overflow-hidden border-4 border-purple-500 shadow-2xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
          <div>
            <div className="text-[11px] font-extrabold text-purple-700">
              EDUBLOX – INFORMATIKA · BY SITTY
            </div>
            <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-slate-900">
              ⚙️ Panel Pengaturan Guru & Manajemen Bank Soal
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsUnlocked(false);
                onShowToast('🔒 Mode Guru dikunci kembali.', 'info');
              }}
              className="px-3 py-2 rounded-xl bg-purple-100 text-purple-800 hover:bg-purple-200 font-bold text-xs inline-flex items-center gap-1.5 transition"
              title="Kunci Mode Guru"
            >
              <Lock className="w-3.5 h-3.5" />
              Kunci
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-rose-500 hover:text-white flex items-center justify-center transition"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { id: 'general' as TeacherTab, label: '1. Pengaturan Arena & Kelas' },
            {
              id: 'questions' as TeacherTab,
              label: `2. Kelola Bank Soal (${questionBank.length})`,
            },
            { id: 'ornaments' as TeacherTab, label: '3. Ornamen Kota 3D' },
            { id: 'results' as TeacherTab, label: '4. Hasil Siswa' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto pr-1">
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Judul Game
                  </label>
                  <input
                    type="text"
                    value={formConfig.gameTitle}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, gameTitle: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Kelas
                  </label>
                  <input
                    type="text"
                    value={formConfig.className}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, className: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Arena Kota
                  </label>
                  <input
                    type="text"
                    value={formConfig.arenaName}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, arenaName: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jumlah Soal Aktif per Sesi
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={100}
                    value={formConfig.questionLimit}
                    onChange={(e) =>
                      setFormConfig({
                        ...formConfig,
                        questionLimit: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white tabular-nums"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Waktu Quiz Challenge (Menit)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={120}
                    value={formConfig.quizMinutes}
                    onChange={(e) =>
                      setFormConfig({
                        ...formConfig,
                        quizMinutes: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white tabular-nums"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Koin per Jawaban Benar
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={formConfig.coinReward}
                    onChange={(e) =>
                      setFormConfig({
                        ...formConfig,
                        coinReward: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white tabular-nums"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tingkat Kesulitan
                  </label>
                  <select
                    value={formConfig.difficulty}
                    onChange={(e) =>
                      setFormConfig({
                        ...formConfig,
                        difficulty: e.target.value as DifficultyLevel,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-sm bg-white"
                  >
                    <option value="Mudah">Mudah (Waktu Ekstra)</option>
                    <option value="Normal">Normal (Standar Kelas X SMA)</option>
                    <option value="Tantangan">Tantangan (Waktu Cepat)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleSaveGeneral}
                  className="btn-3d btn-emerald px-5 py-2.5 text-sm"
                >
                  <Save className="w-4 h-4" /> Simpan Pengaturan
                </button>
                <button
                  type="button"
                  onClick={onResetDefaultQuestions}
                  className="btn-3d btn-orange px-5 py-2.5 text-sm"
                >
                  <RotateCcw className="w-4 h-4" /> Pulihkan 50 Soal PSAS X + Bank Soal
                </button>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 bg-purple-50 p-3 rounded-2xl border border-purple-200">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => openQuestionForm()}
                    className="btn-3d btn-emerald px-3.5 py-2 text-xs"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah Soal Baru
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      downloadFile(
                        JSON.stringify(questionBank, null, 2),
                        'Bank_Soal_Edublox_Informatika.json',
                        'application/json'
                      )
                    }
                    className="btn-3d btn-sky px-3.5 py-2 text-xs"
                  >
                    <FileDown className="w-3.5 h-3.5" /> Ekspor JSON
                  </button>
                  <label className="btn-3d btn-orange px-3.5 py-2 text-xs cursor-pointer">
                    <FileUp className="w-3.5 h-3.5" /> Impor JSON
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportJSON}
                      className="hidden"
                    />
                  </label>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari soal / kategori / PSAS..."
                  className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold w-full sm:w-56 bg-white"
                />
              </div>

              {qFormOpen && (
                <div className="bg-slate-50 p-4 rounded-2xl border-2 border-emerald-400 space-y-3">
                  <h4 className="font-fredoka font-bold text-base text-slate-900">
                    {editingId !== null ? `Edit Soal #${editingId}` : 'Tambah Soal Baru'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-600">Tipe Soal</label>
                      <select
                        value={qType}
                        onChange={(e) => setQType(e.target.value as QuestionType)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                      >
                        <option value="single">Pilihan Ganda (A–E)</option>
                        <option value="complex">PG Kompleks (&gt;1 Jawaban)</option>
                        <option value="truefalse">Benar / Salah (3 Pernyataan)</option>
                        <option value="short">Isian Singkat</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600">Gedung Materi</label>
                      <select
                        value={qBuilding}
                        onChange={(e) => setQBuilding(e.target.value as BuildingCode)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                      >
                        {(Object.keys(BUILDINGS_META) as BuildingCode[]).map((code) => (
                          <option key={code} value={code}>
                            {BUILDINGS_META[code].name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600">Kategori Materi</label>
                      <input
                        type="text"
                        value={qCategory}
                        onChange={(e) => setQCategory(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600">Teks Pertanyaan</label>
                    <textarea
                      rows={2}
                      value={qText}
                      onChange={(e) => setQText(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    />
                  </div>

                  {(qType === 'single' || qType === 'complex') && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Pilihan A"
                          value={optA}
                          onChange={(e) => setOptA(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Pilihan B"
                          value={optB}
                          onChange={(e) => setOptB(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Pilihan C"
                          value={optC}
                          onChange={(e) => setOptC(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Pilihan D"
                          value={optD}
                          onChange={(e) => setOptD(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Pilihan E (opsional)"
                          value={optE}
                          onChange={(e) => setOptE(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white sm:col-span-2"
                        />
                      </div>

                      {qType === 'single' ? (
                        <div>
                          <label className="text-xs font-bold text-slate-600">Kunci Jawaban</label>
                          <select
                            value={qAnswer}
                            onChange={(e) => setQAnswer(e.target.value as OptionLetter)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            {optE.trim() && <option value="E">E</option>}
                          </select>
                        </div>
                      ) : (
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">
                            Pilih Kunci Jawaban (&gt;1):
                          </label>
                          <div className="flex gap-2">
                            {(['A', 'B', 'C', 'D', 'E'] as OptionLetter[]).map((l) => (
                              <button
                                key={l}
                                type="button"
                                onClick={() => toggleComplexKey(l)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                                  qComplexAnswers.includes(l)
                                    ? 'bg-purple-600 text-white border-purple-700'
                                    : 'bg-white text-slate-700 border-slate-300'
                                }`}
                              >
                                {l}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {qType === 'truefalse' && (
                    <div className="space-y-2">
                      {[0, 1, 2].map((idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            placeholder={`Pernyataan ${idx + 1}`}
                            value={qStatements[idx]}
                            onChange={(e) => {
                              const next = [...qStatements] as [string, string, string];
                              next[idx] = e.target.value;
                              setQStatements(next);
                            }}
                            className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                          />
                          <select
                            value={qTfAnswers[idx]}
                            onChange={(e) => {
                              const next = [...qTfAnswers] as [
                                TrueFalseChoice,
                                TrueFalseChoice,
                                TrueFalseChoice,
                              ];
                              next[idx] = e.target.value as TrueFalseChoice;
                              setQTfAnswers(next);
                            }}
                            className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                          >
                            <option value="Benar">Benar</option>
                            <option value="Salah">Salah</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  )}

                  {qType === 'short' && (
                    <div>
                      <label className="text-xs font-bold text-slate-600">
                        Kata Kunci Jawaban (pisahkan dengan koma jika ada sinonim)
                      </label>
                      <input
                        type="text"
                        placeholder="contoh: dekomposisi, decomposition"
                        value={qShortAnswers}
                        onChange={(e) => setQShortAnswers(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-slate-600">Pembahasan Jawaban</label>
                    <input
                      type="text"
                      value={qExplanation}
                      onChange={(e) => setQExplanation(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleSaveQuestion}
                      className="btn-3d btn-emerald px-4 py-2 text-xs"
                    >
                      Simpan Soal
                    </button>
                    <button
                      type="button"
                      onClick={() => setQFormOpen(false)}
                      className="btn-3d btn-slate px-4 py-2 text-xs"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {filteredQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-yellow-300 font-bold mr-1.5">
                        Gd.{q.building}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold mr-1.5">
                        {typeBadge[q.type]}
                      </span>
                      {q.source && (
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold mr-1.5">
                          {q.source}
                        </span>
                      )}
                      <span className="font-bold text-purple-700">{q.category}</span>
                      <p className="font-bold text-slate-900 mt-1">
                        {idx + 1}. {q.question}
                      </p>
                      <div className="text-slate-600 mt-0.5">
                        Kunci: <b className="text-emerald-700">{renderKeyPreview(q)}</b>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => openQuestionForm(q)}
                        className="px-3 py-1.5 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-600 inline-flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" /> Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(q.id)}
                        className="px-3 py-1.5 rounded-xl bg-rose-500 text-white font-bold hover:bg-rose-600 inline-flex items-center gap-1"
                        aria-label="Hapus Soal"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ornaments' && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h3 className="font-fredoka font-bold text-base text-slate-900 mb-1">
                Tambahkan Ornamen Baru ke Kota 3D
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Ornamen akan langsung muncul di sekitar taman dan jalur kota Edublox.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  onClick={() => onAddOrnament('sakura')}
                  className="btn-3d btn-pink py-2.5 px-3 text-xs"
                >
                  🌸 Pohon Sakura
                </button>
                <button
                  type="button"
                  onClick={() => onAddOrnament('gazebo')}
                  className="btn-3d btn-sky py-2.5 px-3 text-xs"
                >
                  🏛️ Gazebo Literasi
                </button>
                <button
                  type="button"
                  onClick={() => onAddOrnament('robot')}
                  className="btn-3d btn-purple py-2.5 px-3 text-xs"
                >
                  🤖 Robot Maskot
                </button>
                <button
                  type="button"
                  onClick={() => onAddOrnament('picnic')}
                  className="btn-3d btn-emerald py-2.5 px-3 text-xs"
                >
                  🧺 Meja Piknik
                </button>
                <button
                  type="button"
                  onClick={() => onAddOrnament('bench')}
                  className="btn-3d btn-orange py-2.5 px-3 text-xs"
                >
                  🪑 Bangku Taman
                </button>
                <button
                  type="button"
                  onClick={() => onAddOrnament('flowers')}
                  className="btn-3d btn-yellow py-2.5 px-3 text-xs"
                >
                  🌻 Taman Bunga
                </button>
                <button
                  type="button"
                  onClick={() => onAddOrnament('infoboard')}
                  className="btn-3d btn-sky py-2.5 px-3 text-xs"
                >
                  📋 Papan Informasi
                </button>
                <button
                  type="button"
                  onClick={onClearOrnaments}
                  className="btn-3d btn-slate py-2.5 px-3 text-xs"
                >
                  🧹 Reset Ornamen
                </button>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-fredoka font-bold text-base text-slate-900">
                  Daftar Skor & Pencapaian Seluruh Pemain
                </h3>
                <button
                  type="button"
                  onClick={onOpenRekap}
                  className="btn-3d btn-sky px-3 py-1.5 text-xs"
                >
                  Buka Rekap Lengkap
                </button>
              </div>

              {leaderboard.length === 0 ? (
                <div className="p-6 bg-slate-50 rounded-2xl text-xs text-slate-500 font-bold text-center border border-slate-200">
                  Belum ada siswa yang menyelesaikan sesi kuis.
                </div>
              ) : (
                <div className="space-y-2 tabular-nums">
                  {leaderboard.map((r, i) => (
                    <div
                      key={`${r.name}-${i}`}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <b>
                          {i + 1}. {r.name}
                        </b>{' '}
                        ({r.className}) — {r.date}
                      </div>
                      <div>
                        Nilai: <b className="text-sky-600 text-sm">{r.score}</b> ({r.correct}/
                        {r.total}) · Koin: <b>{r.coins}</b>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
