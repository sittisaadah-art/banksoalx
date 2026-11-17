import { Globe } from 'lucide-react';
import { LANGUAGE_OPTIONS } from '../i18n/translations';
import { LanguageCode } from '../types/edublox';

interface LanguageSwitcherProps {
  language: LanguageCode;
  onChange: (lang: LanguageCode) => void;
  variant?: 'dark' | 'light' | 'panel';
}

export function LanguageSwitcher({
  language,
  onChange,
  variant = 'dark',
}: LanguageSwitcherProps) {
  if (variant === 'panel') {
    return (
      <div className="grid grid-cols-3 gap-2">
        {LANGUAGE_OPTIONS.map((opt) => {
          const active = opt.code === language;
          return (
            <button
              key={opt.code}
              type="button"
              onClick={() => onChange(opt.code)}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm border-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
                active
                  ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-sky-300'
              }`}
            >
              <span aria-hidden="true">{opt.flag}</span>
              <span>{opt.name}</span>
            </button>
          );
        })}
      </div>
    );
  }

  const wrapperClass =
    variant === 'dark'
      ? 'hud-surface-dark p-1 rounded-2xl inline-flex items-center gap-1'
      : 'bg-slate-100 border border-slate-300 p-1 rounded-2xl inline-flex items-center gap-1';

  return (
    <div
      className={wrapperClass}
      role="group"
      aria-label="Language Settings"
      title="Bahasa / Language / 言語"
    >
      <Globe
        className={`w-3.5 h-3.5 ml-1.5 mr-0.5 shrink-0 ${
          variant === 'dark' ? 'text-sky-300' : 'text-slate-600'
        }`}
      />
      {LANGUAGE_OPTIONS.map((opt) => {
        const active = opt.code === language;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => onChange(opt.code)}
            className={`px-2 py-1 rounded-xl text-xs font-extrabold transition inline-flex items-center gap-1 cursor-pointer ${
              active
                ? 'bg-sky-500 text-white shadow-sm'
                : variant === 'dark'
                ? 'text-slate-200 hover:bg-white/10'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
            aria-pressed={active}
            title={opt.name}
          >
            <span aria-hidden="true">{opt.flag}</span>
            <span>{opt.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
