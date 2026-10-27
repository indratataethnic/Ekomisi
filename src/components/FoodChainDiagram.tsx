import React from 'react';
import { EcosystemData, Organism } from '../types';
import { Sun, ArrowRight, Check } from 'lucide-react';

interface FoodChainDiagramProps {
  ecosystem: EcosystemData;
  selectedOrganism: Organism | null;
  onSelectOrganismById: (id: string) => void;
}

export const FoodChainDiagram: React.FC<FoodChainDiagramProps> = ({
  ecosystem,
  selectedOrganism,
  onSelectOrganismById,
}) => {
  return (
    <div className="w-full bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/80 p-4 sm:p-5 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
            <span>Aliran Energi & Rantai Makanan: {ecosystem.name}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Energi matahari mengalir berurutan melalui tingkatan trofik hingga didaur ulang oleh pengurai.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 shrink-0 self-start sm:self-auto">
          <Sun className="w-3.5 h-3.5" />
          <span>Matahari sebagai Sumber Utama</span>
        </div>
      </div>

      {/* Interactive Flow Chain Strip */}
      <div className="overflow-x-auto pb-2 pt-1 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-[620px]">
          {/* Sun Origin Node */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-center w-24 shrink-0">
            <Sun className="w-6 h-6 text-amber-400 mb-1 animate-spin-slow" />
            <span className="text-xs font-bold">Matahari</span>
            <span className="text-[10px] text-amber-300/70">Energi Alami</span>
          </div>

          <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />

          {/* Flow steps */}
          {ecosystem.chainFlow.map((step, idx) => {
            const org = ecosystem.organisms.find((o) => o.id === step.organismId);
            const isCurrentlySelected = selectedOrganism?.id === step.organismId;

            return (
              <React.Fragment key={step.organismId}>
                <button
                  onClick={() => onSelectOrganismById(step.organismId)}
                  className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all cursor-pointer relative shrink-0 w-28 ${
                    isCurrentlySelected
                      ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-2 ring-emerald-500/40 scale-102'
                      : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {isCurrentlySelected && (
                    <span className="absolute -top-2 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  )}
                  <span className="text-xl mb-1">{org?.emoji || '🌱'}</span>
                  <span className="text-xs font-bold line-clamp-1">{step.label}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{step.level}</span>
                </button>

                {idx < ecosystem.chainFlow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
