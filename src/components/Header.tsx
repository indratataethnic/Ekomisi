import React from 'react';
import { EcosystemId } from '../types';
import { Maximize2, Minimize2, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentEcosystem: EcosystemId;
  onSelectEcosystem: (id: EcosystemId) => void;
  onOpenGuide: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentEcosystem,
  onSelectEcosystem,
  onOpenGuide,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 font-display">
            Eko Misi
          </span>
          <span className="hidden sm:inline-block text-xs text-emerald-400 font-medium">
            Literasi Sains SD
          </span>
        </div>

        {/* Zone 2: Ecosystem selector tabs & guides */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectEcosystem('sawah')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentEcosystem === 'sawah'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Sawah
          </button>
          <button
            onClick={() => onSelectEcosystem('laut')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentEcosystem === 'laut'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Laut
          </button>
          <button
            onClick={() => onSelectEcosystem('gurun')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentEcosystem === 'gurun'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Gurun
          </button>

          <button
            onClick={onOpenGuide}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Petunjuk Guru & Siswa</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Layar Penuh (Optimal untuk Papan Interaktif Digital)"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Keluar Penuh</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Papan Interaktif</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
