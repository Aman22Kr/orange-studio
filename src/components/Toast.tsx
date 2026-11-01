import React from 'react';
import { useStudio } from '../context/StudioContext';
import { CheckCircle2, Heart, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStudio();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let icon = <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />;
        let borderColor = 'border-emerald-200 bg-emerald-50/95';
        if (toast.type === 'favorite') {
          icon = <Heart className="h-5 w-5 text-rose-500 fill-rose-500 shrink-0" />;
          borderColor = 'border-rose-200 bg-rose-50/95';
        } else if (toast.type === 'info') {
          icon = <Info className="h-5 w-5 text-amber-600 shrink-0" />;
          borderColor = 'border-amber-200 bg-amber-50/95';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg backdrop-blur-md transition-all duration-300 animate-slide-up text-stone-900 ${borderColor}`}
            role="status"
          >
            {icon}
            <div className="flex-1">
              <h5 className="text-sm font-semibold text-stone-900">{toast.title}</h5>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-stone-700 p-0.5 rounded transition"
              aria-label="Dismiss toast"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
