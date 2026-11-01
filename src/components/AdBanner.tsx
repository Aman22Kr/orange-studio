import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

interface AdBannerProps {
  slotId?: string;
  className?: string;
  compact?: boolean;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slotId = 'studio-sponsor-slot',
  className = '',
  compact = false
}) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 print:hidden ${className}`}
      aria-label="Advertisement Placeholder"
    >
      <div className="relative overflow-hidden rounded-2xl border border-dashed border-stone-300 bg-stone-100/80 p-4 sm:p-5 transition hover:bg-stone-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Ad Label & Content */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-medium">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-600 bg-stone-200/90 px-1.5 py-0.5 rounded">
                  Advertisement
                </span>
                <span className="text-xs text-stone-600 font-medium">Community Partner Spotlight</span>
              </div>
              <p className="text-sm font-medium text-stone-700 mt-0.5">
                Artisan Ceramic Glazes & Eco-Friendly Yoga Mats by EarthCraft Studios
              </p>
            </div>
          </div>

          {/* Action Link Placeholder */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg border border-orange-200/70 transition cursor-pointer">
              <span>Explore Partner Collection</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Subtle Slot Identifier for transparency */}
        <div className="mt-2 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-600">
          <span>Orange Studio Partner Network • Slot {slotId}</span>
          <span>Compliant Ad Slot Placeholder</span>
        </div>
      </div>
    </div>
  );
};
