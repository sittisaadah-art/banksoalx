import { useState } from 'react';
import { CheckCircle2, Globe, UserRound, X } from 'lucide-react';
import { AVATARS, OUTFIT_COLORS } from '../data/questions';
import { getTranslations } from '../i18n/translations';
import { LanguageCode } from '../types/edublox';
import { LanguageSwitcher } from './LanguageSwitcher';

interface CharacterModalProps {
  initialName: string;
  initialAvatarId: string;
  initialOutfitColor: string;
  initialPlayerCount: number;
  initialLanguage: LanguageCode;
  onSave: (
    name: string,
    avatarId: string,
    outfitColor: string,
    playerCount: number,
    language: LanguageCode
  ) => void;
  onClose: () => void;
}

export function CharacterModal({
  initialName,
  initialAvatarId,
  initialOutfitColor,
  initialPlayerCount,
  initialLanguage,
  onSave,
  onClose,
}: CharacterModalProps) {
  const [name, setName] = useState(initialName);
  const [avatarId, setAvatarId] = useState(initialAvatarId);
  const [outfitColor, setOutfitColor] = useState(initialOutfitColor);
  const [playerCount, setPlayerCount] = useState(initialPlayerCount);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(initialLanguage);

  const t = getTranslations(selectedLanguage);

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/75 flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-3xl w-full max-w-3xl p-5 sm:p-6 max-h-[92vh] overflow-y-auto border-2 border-slate-200 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div>
            <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <UserRound className="w-6 h-6 text-sky-500" />
              {t.character.title}
            </h2>
            <p className="text-xs text-slate-500 font-semibold">
              {t.character.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-rose-500 hover:text-white text-slate-700 flex items-center justify-center transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.character.playerNameLabel}
              </label>
              <input
                type="text"
                maxLength={18}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.character.playerNamePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:border-sky-500 outline-none font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.character.outfitColorLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {OUTFIT_COLORS.map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => setOutfitColor(hex)}
                    className={`w-9 h-9 rounded-xl transition ${
                      outfitColor === hex
                        ? 'ring-2 ring-offset-2 ring-slate-900 scale-105'
                        : 'border-2 border-white shadow'
                    }`}
                    style={{ backgroundColor: hex }}
                    aria-label={hex}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.character.playerCountLabel}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPlayerCount(n)}
                    className={`py-2 rounded-xl font-bold text-sm border-2 transition ${
                      playerCount === n
                        ? 'border-sky-500 bg-sky-500 text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-sky-300'
                    }`}
                  >
                    {n === 1 ? t.character.soloLabel : `${n}P`}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                {t.character.controlsHint}
              </p>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3">
              <label className="flex items-center gap-1.5 text-xs font-extrabold text-sky-900 mb-2">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                {t.character.languageSectionLabel}
              </label>
              <LanguageSwitcher
                language={selectedLanguage}
                onChange={setSelectedLanguage}
                variant="panel"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              {t.character.avatarListLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {AVATARS.map((av) => {
                const selected = av.id === avatarId;
                return (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setAvatarId(av.id)}
                    className={`p-3 rounded-2xl border-2 text-center transition ${
                      selected
                        ? 'border-sky-500 bg-sky-50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-sky-300'
                    }`}
                  >
                    <div className="text-3xl mb-1">{av.icon}</div>
                    <div className="font-fredoka font-bold text-xs text-slate-900">
                      {av.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {t.avatars[av.id] || av.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-4">
          <button
            type="button"
            onClick={() =>
              onSave(
                name.trim() || 'Explorer',
                avatarId,
                outfitColor,
                playerCount,
                selectedLanguage
              )
            }
            className="btn-3d btn-emerald px-6 py-3 text-base"
          >
            <CheckCircle2 className="w-5 h-5" />
            {t.character.saveBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
