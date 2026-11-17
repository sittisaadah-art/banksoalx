import { Coins, X } from 'lucide-react';
import { CANTEEN_ITEMS } from '../data/questions';
import { getTranslations } from '../i18n/translations';
import { CanteenItem, LanguageCode } from '../types/edublox';

interface CanteenModalProps {
  coins: number;
  language: LanguageCode;
  onBuyItem: (item: CanteenItem) => void;
  onClose: () => void;
}

export function CanteenModal({ coins, language, onBuyItem, onClose }: CanteenModalProps) {
  const t = getTranslations(language);

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/75 flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-2xl rounded-3xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto border-2 border-amber-300 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div>
            <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-slate-900">
              {t.canteen.title}
            </h2>
            <p className="text-xs text-slate-600 font-semibold">
              {t.canteen.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-extrabold text-sm inline-flex items-center gap-1.5 tabular-nums">
              <Coins className="w-4 h-4 text-amber-600" /> {coins} {t.canteen.coinsLabel}
            </span>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CANTEEN_ITEMS.map((item) => {
            const loc = t.canteen.items[item.id];
            return (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-1">{item.icon}</div>
                  <div className="font-fredoka font-bold text-slate-900 text-base">
                    {loc?.name || item.name}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">{loc?.desc || item.desc}</p>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-extrabold text-purple-700 mb-2 tabular-nums">
                    +{item.xp} XP
                  </div>
                  <button
                    type="button"
                    onClick={() => onBuyItem(item)}
                    className="btn-3d btn-emerald w-full py-2 text-xs"
                  >
                    {t.canteen.buyBtn(item.price)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
