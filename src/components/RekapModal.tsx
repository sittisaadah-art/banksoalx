import { Copy, FileCode2, FileSpreadsheet, Trash2, X } from 'lucide-react';
import { getTranslations } from '../i18n/translations';
import { LanguageCode, LeaderboardEntry, RekapLogItem } from '../types/edublox';
import { downloadFile } from '../utils/storage';

interface RekapModalProps {
  logs: RekapLogItem[];
  leaderboard: LeaderboardEntry[];
  language: LanguageCode;
  onClearLogs: () => void;
  onShowToast: (msg: string, variant: 'success' | 'warning' | 'info') => void;
  onClose: () => void;
}

export function RekapModal({
  logs,
  leaderboard,
  language,
  onClearLogs,
  onShowToast,
  onClose,
}: RekapModalProps) {
  const t = getTranslations(language);
  const total = logs.length;
  const correct = logs.filter((l) => l.status === 'Benar').length;
  const wrong = total - correct;
  const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
  const avgScore =
    leaderboard.length > 0
      ? Math.round(leaderboard.reduce((s, x) => s + x.score, 0) / leaderboard.length)
      : acc;

  const handleExportCSV = () => {
    if (logs.length === 0) {
      onShowToast(t.rekap.empty, 'warning');
      return;
    }
    const headers = [
      t.rekap.colTime,
      t.rekap.colPlayer,
      t.rekap.colClass,
      t.rekap.colNo,
      t.rekap.colCategory,
      t.rekap.colQuestion,
      t.rekap.colAnswer,
      t.rekap.colKey,
      t.rekap.colStatus,
      t.rekap.colPoints,
    ];
    const rows = logs.map((l) =>
      [
        l.timestamp,
        l.playerName,
        l.className,
        l.qNumber,
        l.category,
        `"${l.question.replace(/"/g, '""')}"`,
        `"${l.playerAnswer.replace(/"/g, '""')}"`,
        `"${l.correctAnswer.replace(/"/g, '""')}"`,
        l.status === 'Benar' ? t.rekap.statusCorrect : t.rekap.statusWrong,
        l.points,
      ].join(',')
    );
    downloadFile(
      [headers.join(','), ...rows].join('\n'),
      'Rekap_Nilai_Edublox_Informatika.csv',
      'text/csv'
    );
  };

  const handleExportJSON = () => {
    if (logs.length === 0) {
      onShowToast(t.rekap.empty, 'warning');
      return;
    }
    downloadFile(
      JSON.stringify(logs, null, 2),
      'Rekap_Nilai_Edublox_Informatika.json',
      'application/json'
    );
  };

  const handleCopyTable = async () => {
    if (logs.length === 0) {
      onShowToast(t.rekap.empty, 'warning');
      return;
    }
    const lines = logs.map(
      (l) =>
        `${l.timestamp}\t${l.playerName}\t${l.className}\t${l.qNumber}\t${l.category}\t${
          l.status === 'Benar' ? t.rekap.statusCorrect : t.rekap.statusWrong
        }\t${l.points}`
    );
    const content = `${t.rekap.colTime}\t${t.rekap.colPlayer}\t${t.rekap.colClass}\t${t.rekap.colNo}\t${t.rekap.colCategory}\t${t.rekap.colStatus}\t${t.rekap.colPoints}\n${lines.join('\n')}`;
    try {
      await navigator.clipboard.writeText(content);
      onShowToast('📋 OK!', 'success');
    } catch {
      onShowToast(t.rekap.exportCsv, 'warning');
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/80 flex items-center justify-center p-2 sm:p-5">
      <div className="bg-white w-full max-w-5xl rounded-3xl p-4 sm:p-6 max-h-[92vh] flex flex-col overflow-hidden border-2 border-slate-200 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
          <div>
            <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-slate-900">
              {t.rekap.title}
            </h2>
            <p className="text-xs text-slate-500 font-semibold">
              {t.rekap.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleExportCSV}
              className="btn-3d btn-emerald px-3 py-2 text-xs"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" /> {t.rekap.exportCsv}
            </button>
            <button
              type="button"
              onClick={handleExportJSON}
              className="btn-3d btn-sky px-3 py-2 text-xs"
            >
              <FileCode2 className="w-3.5 h-3.5" /> {t.rekap.exportJson}
            </button>
            <button
              type="button"
              onClick={handleCopyTable}
              className="btn-3d btn-orange px-3 py-2 text-xs"
            >
              <Copy className="w-3.5 h-3.5" /> {t.rekap.copyTable}
            </button>
            <button
              type="button"
              onClick={onClearLogs}
              className="btn-3d btn-pink px-3 py-2 text-xs"
            >
              <Trash2 className="w-3.5 h-3.5" /> {t.rekap.resetLog}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-rose-500 hover:text-white flex items-center justify-center transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-4 tabular-nums">
          <div className="bg-slate-100 rounded-2xl p-3 text-center">
            <div className="text-[11px] font-bold text-slate-500">{t.rekap.totalActivity}</div>
            <div className="font-fredoka text-xl font-bold text-slate-900">{total}</div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-3 text-center border border-emerald-200">
            <div className="text-[11px] font-bold text-emerald-700">{t.rekap.correctAnswers}</div>
            <div className="font-fredoka text-xl font-bold text-emerald-700">{correct}</div>
          </div>
          <div className="bg-rose-50 rounded-2xl p-3 text-center border border-rose-200">
            <div className="text-[11px] font-bold text-rose-700">{t.rekap.wrongAnswers}</div>
            <div className="font-fredoka text-xl font-bold text-rose-700">{wrong}</div>
          </div>
          <div className="bg-sky-50 rounded-2xl p-3 text-center border border-sky-200">
            <div className="text-[11px] font-bold text-sky-700">{t.rekap.avgScore}</div>
            <div className="font-fredoka text-xl font-bold text-sky-700">{avgScore}</div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-3 text-center border border-purple-200 col-span-2 sm:col-span-1">
            <div className="text-[11px] font-bold text-purple-700">{t.rekap.accuracy}</div>
            <div className="font-fredoka text-xl font-bold text-purple-700">{acc}%</div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto border border-slate-200 rounded-2xl bg-white">
          <table className="w-full text-left border-collapse text-xs tabular-nums">
            <thead className="bg-slate-800 text-white sticky top-0">
              <tr>
                <th className="p-2.5">{t.rekap.colTime}</th>
                <th className="p-2.5">{t.rekap.colPlayer}</th>
                <th className="p-2.5">{t.rekap.colClass}</th>
                <th className="p-2.5">{t.rekap.colNo}</th>
                <th className="p-2.5">{t.rekap.colCategory}</th>
                <th className="p-2.5">{t.rekap.colQuestion}</th>
                <th className="p-2.5">{t.rekap.colAnswer}</th>
                <th className="p-2.5">{t.rekap.colKey}</th>
                <th className="p-2.5">{t.rekap.colStatus}</th>
                <th className="p-2.5">{t.rekap.colPoints}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={10} className="p-8 text-center text-slate-400 font-bold">
                    {t.rekap.empty}
                  </td>
                </tr>
              ) : (
                logs.slice(0, 200).map((l, idx) => (
                  <tr key={`${l.timestamp}-${idx}`} className="hover:bg-slate-50">
                    <td className="p-2 whitespace-nowrap">{l.timestamp}</td>
                    <td className="p-2 font-bold text-slate-900">{l.playerName}</td>
                    <td className="p-2">{l.className}</td>
                    <td className="p-2 text-center">{l.qNumber}</td>
                    <td className="p-2">{l.category}</td>
                    <td className="p-2 max-w-xs truncate" title={l.question}>
                      {l.question}
                    </td>
                    <td className="p-2">{l.playerAnswer}</td>
                    <td className="p-2 text-emerald-700 font-bold">{l.correctAnswer}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-0.5 rounded-md font-bold ${
                          l.status === 'Benar'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {l.status === 'Benar' ? t.rekap.statusCorrect : t.rekap.statusWrong}
                      </span>
                    </td>
                    <td className="p-2 font-bold">{l.points}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
