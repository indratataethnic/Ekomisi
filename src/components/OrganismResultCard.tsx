import React from 'react';
import { Organism } from '../types';
import { BookOpen, Sparkles, Target, Compass, Award } from 'lucide-react';

interface OrganismResultCardProps {
  organism: Organism;
  onOpenKenali: () => void;
  onOpenDongeng: () => void;
  onOpenMisi: () => void;
}

export const OrganismResultCard: React.FC<OrganismResultCardProps> = ({
  organism,
  onOpenKenali,
  onOpenDongeng,
  onOpenMisi,
}) => {
  // Determine category badge styling
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'Produsen':
        return {
          bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
          dot: 'bg-emerald-400',
          title: 'Produsen (Penghasil Makanan)',
        };
      case 'Konsumen I':
        return {
          bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
          dot: 'bg-amber-400',
          title: 'Konsumen I (Herbivora)',
        };
      case 'Konsumen II':
        return {
          bg: 'bg-sky-500/15 border-sky-500/30 text-sky-300',
          dot: 'bg-sky-400',
          title: 'Konsumen II (Karnivora/Omnivora)',
        };
      case 'Konsumen Puncak':
        return {
          bg: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
          dot: 'bg-rose-400',
          title: 'Konsumen Puncak (Apex Predator)',
        };
      case 'Pengurai':
        return {
          bg: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
          dot: 'bg-purple-400',
          title: 'Pengurai / Dekomposer (Daur Ulang)',
        };
      default:
        return {
          bg: 'bg-slate-500/15 border-slate-500/30 text-slate-300',
          dot: 'bg-slate-400',
          title: cat,
        };
    }
  };

  const theme = getCategoryTheme(organism.category);

  return (
    <div className="w-full bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 p-5 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
      {/* Header Result: Organism Badge & Status */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {/* Organism Avatar / Icon */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-inner border border-white/20 shrink-0"
            style={{ backgroundColor: organism.sliceColor }}
          >
            <span>{organism.emoji}</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${theme.bg}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                <span>{organism.category}</span>
              </span>
              <span className="text-xs text-slate-400">· {organism.trophicRole}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-1 font-display tracking-tight">
              {organism.name}
            </h3>

            <p className="text-xs italic text-slate-400 font-mono">
              {organism.scientificName}
            </p>
          </div>
        </div>

        {/* Selected Tag */}
        <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-lg border border-amber-500/20">
          <Award className="w-3.5 h-3.5" />
          <span>Tokoh Terpilih</span>
        </div>
      </div>

      {/* Summary Brief */}
      <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-sm text-slate-300 leading-relaxed">
        {organism.summary}
      </div>

      {/* Quick Ecological Attributes */}
      <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
        <div className="p-2.5 bg-slate-900/40 rounded-lg border border-slate-800/80">
          <span className="text-slate-400 block mb-0.5">Habitat:</span>
          <span className="text-slate-200 font-medium line-clamp-1">{organism.habitat}</span>
        </div>
        <div className="p-2.5 bg-slate-900/40 rounded-lg border border-slate-800/80">
          <span className="text-slate-400 block mb-0.5">Adaptasi Khas:</span>
          <span className="text-emerald-300 font-medium line-clamp-1">{organism.adaptation}</span>
        </div>
      </div>

      {/* 3 MANDATORY ACTION BUTTONS strictly complying with item 4:
          1. Tampilkan tombol KENALI TOKOH
          2. Tampilkan tombol MULAI DONGENG
          3. Tampilkan tombol JALANKAN MISI
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5">
        <button
          onClick={onOpenKenali}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white text-sm font-semibold rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
        >
          <Compass className="w-4 h-4 text-sky-200" />
          <span>KENALI TOKOH</span>
        </button>

        <button
          onClick={onOpenDongeng}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-600 hover:bg-amber-500 active:scale-98 text-white text-sm font-semibold rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
        >
          <BookOpen className="w-4 h-4 text-amber-200" />
          <span>MULAI DONGENG</span>
        </button>

        <button
          onClick={onOpenMisi}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white text-sm font-semibold rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
        >
          <Target className="w-4 h-4 text-emerald-200" />
          <span>JALANKAN MISI</span>
        </button>
      </div>
    </div>
  );
};
