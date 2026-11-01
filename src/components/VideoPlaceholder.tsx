import React, { useState } from 'react';
import { Play, Volume2, ShieldCheck, Film } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  duration?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9';
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'Orange Studio Sanctuary: A Day in Movement & Clay',
  subtitle = 'An intimate glimpse into our morning sunlight practice, ceramics wheel, and garden tea lounge.',
  duration = '03:45',
  aspectRatio = '16/9',
  className = ''
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-900 text-white ${className}`}>
      {/* Aspect Ratio Box */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 flex flex-col justify-between p-6 sm:p-8">
        {/* Subtle decorative background pattern imitating an ambient studio */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-stone-800/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-stone-200 border border-stone-700">
              <Film className="h-3.5 w-3.5 text-orange-400" />
              <span>Studio Video Tour</span>
            </span>
            <span className="text-xs text-stone-400 bg-stone-800/60 px-2.5 py-1 rounded-full font-mono">
              {duration}
            </span>
          </div>

          <div className="text-[11px] font-mono tracking-wider uppercase text-stone-400 bg-black/40 px-2.5 py-1 rounded border border-stone-800">
            YouTube Placeholder
          </div>
        </div>

        {/* Center Play Symbol and interactive placeholder state */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
          <button
            onClick={() => setClicked(!clicked)}
            className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-orange-600/90 text-white shadow-xl shadow-orange-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
            aria-label="Play video preview"
          >
            <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-25 duration-1000" />
            <Play className="h-8 w-8 sm:h-10 sm:w-10 ml-1 transition-transform group-hover:scale-110" />
          </button>

          {clicked ? (
            <div className="mt-4 px-4 py-2 rounded-xl bg-stone-800/95 border border-stone-700 text-center max-w-md animate-fade-in">
              <p className="text-xs text-orange-300 font-medium">
                Video Area Blank Placeholder Active
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                In accordance with applet requirements, external YouTube video embeds are preserved with exact 16:9 layout and visual proportions without running external iframe scripts.
              </p>
            </div>
          ) : (
            <p className="mt-4 text-xs tracking-wider uppercase font-medium text-stone-300 flex items-center gap-1.5">
              <span>Click to view video placeholder details</span>
            </p>
          )}
        </div>

        {/* Bottom Bar Info */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 pt-4 border-t border-stone-800/80">
          <div>
            <h4 className="text-base sm:text-lg font-serif font-medium text-white tracking-wide">
              {title}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl line-clamp-1 mt-0.5">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-stone-400 text-xs shrink-0">
            <Volume2 className="h-4 w-4 text-stone-400" />
            <span className="text-[11px]">HD 1080p • Dolby Atmos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
