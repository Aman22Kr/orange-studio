import React from 'react';
import { useStudio } from '../context/StudioContext';
import { X, ExternalLink, Github, Database, Sparkles, RefreshCw, Check, BookOpen, Layers } from 'lucide-react';

interface QuickSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSettingsModal: React.FC<QuickSettingsModalProps> = ({ isOpen, onClose }) => {
  const {
    brandName,
    githubUser,
    referenceUrl,
    cartCount,
    favorites,
    bookings,
    rentalInquiries,
    resetAllDemoData
  } = useStudio();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">Project Identity & Settings</h3>
              <p className="text-xs text-stone-400">Orange Studio Configuration & Deployment Parameters</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-full transition"
            aria-label="Close settings"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Brand & Reference Mapping */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-800">New Brand Identity</span>
              <p className="text-base font-bold text-stone-900 mt-1">{brandName}</p>
              <p className="text-xs text-stone-600 mt-0.5">Styled as orangestudio throughout the app</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Reference Source</span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-sm font-semibold text-stone-800 truncate">Tangerine Arts Studio</span>
                <a
                  href={referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700"
                  title="Open original reference"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="text-xs text-stone-500 truncate mt-0.5">{referenceUrl}</p>
            </div>
          </div>

          {/* GitHub Pages & Workflow Spec */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-stone-700" />
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">Target Deployment</span>
              </div>
              <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                GitHub Pages Ready
              </span>
            </div>
            <div className="text-xs text-stone-600 space-y-1 font-mono">
              <p>Repository Owner: <span className="text-stone-900 font-bold">{githubUser}</span></p>
              <p>Primary Workflow: <span className="text-stone-900 font-bold">.github/workflows/deploy.yml</span></p>
              <p>Router Mode: <span className="text-orange-700 font-bold">React Router HashRouter (./)</span></p>
              <p>Lockfile: <span className="text-emerald-700 font-bold">package-lock.json committed</span></p>
            </div>
          </div>

          {/* LocalStorage Data Status */}
          <div className="p-4 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">Local Storage State</span>
              </div>
              <span className="text-[11px] text-stone-500">Persistent across refreshes</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="bg-stone-50 p-2 rounded-xl border border-stone-100">
                <p className="text-lg font-bold text-stone-900">{cartCount}</p>
                <p className="text-[11px] text-stone-500">Cart Items</p>
              </div>
              <div className="bg-stone-50 p-2 rounded-xl border border-stone-100">
                <p className="text-lg font-bold text-stone-900">{favorites.length}</p>
                <p className="text-[11px] text-stone-500">Saved Wishlist</p>
              </div>
              <div className="bg-stone-50 p-2 rounded-xl border border-stone-100">
                <p className="text-lg font-bold text-stone-900">{bookings.length}</p>
                <p className="text-[11px] text-stone-500">Bookings</p>
              </div>
              <div className="bg-stone-50 p-2 rounded-xl border border-stone-100">
                <p className="text-lg font-bold text-stone-900">{rentalInquiries.length}</p>
                <p className="text-[11px] text-stone-500">Space Inquiries</p>
              </div>
            </div>

            <button
              onClick={resetAllDemoData}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Demo State to Clean Slate</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold shadow-sm transition"
          >
            Close Settings
          </button>
        </div>
      </div>
    </div>
  );
};
