import React, { useState, useEffect } from 'react';
import { EcosystemId, Organism } from './types';
import { ECOSYSTEMS_DATA } from './data/ecosystems';
import { Header } from './components/Header';
import { DigitalWheel } from './components/DigitalWheel';
import { OrganismResultCard } from './components/OrganismResultCard';
import { FoodChainDiagram } from './components/FoodChainDiagram';
import { ModalKenaliTokoh } from './components/ModalKenaliTokoh';
import { ModalDongeng } from './components/ModalDongeng';
import { ModalMisi } from './components/ModalMisi';
import { ModalPanduan } from './components/ModalPanduan';
import { Sparkles, Layers, Compass, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentEcosystemId, setCurrentEcosystemId] = useState<EcosystemId>('sawah');
  const [selectedOrganism, setSelectedOrganism] = useState<Organism | null>(null);

  // Active modal views
  const [activeModal, setActiveModal] = useState<'kenali' | 'dongeng' | 'misi' | 'panduan' | null>(null);

  // Fullscreen state for classroom Interactive Whiteboard / Smartboard
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentEcosystem = ECOSYSTEMS_DATA[currentEcosystemId];

  // Handle switching ecosystems strictly according to requirement 6:
  // "Ketika guru memilih ekosistem sawah, laut, atau gurun:
  // - Ganti organisme pada roda.
  // - Kembalikan roda ke posisi awal dalam keadaan diam.
  // - Hapus hasil tokoh sebelumnya.
  // - Tunggu sampai siswa memutar roda secara manual.
  // Jangan memutar roda secara otomatis setelah pergantian ekosistem."
  const handleSelectEcosystem = (newEcosystemId: EcosystemId) => {
    if (newEcosystemId === currentEcosystemId) return;
    setCurrentEcosystemId(newEcosystemId);
    setSelectedOrganism(null); // Clear previous selection
    // Wheel will automatically reset to stationary 0 deg because organisms prop changes!
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col overflow-x-hidden">
      {/* Dynamic Background Image of current ecosystem with darkening scrim */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-700 pointer-events-none scale-102"
        style={{
          backgroundImage: `url(${currentEcosystem.bgImage})`,
          filter: 'brightness(0.28) saturate(1.15)',
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/95 pointer-events-none" />

      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header
        currentEcosystem={currentEcosystemId}
        onSelectEcosystem={handleSelectEcosystem}
        onOpenGuide={() => setActiveModal('panduan')}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Classroom Workspace Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 flex flex-col justify-between">
        {/* Ecosystem Title Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-850">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Media Pembelajaran Digital IPAS SD
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">Kurikulum Merdeka</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 font-display tracking-tight flex items-center gap-2">
              <span>{currentEcosystem.name}</span>
              <span className="text-sm font-normal text-slate-400">({currentEcosystem.subtitle})</span>
            </h1>
          </div>

          {/* Quick Ecosystem Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800">
            {(['sawah', 'laut', 'gurun'] as EcosystemId[]).map((ecoKey) => {
              const eco = ECOSYSTEMS_DATA[ecoKey];
              const isActive = currentEcosystemId === ecoKey;
              return (
                <button
                  key={ecoKey}
                  onClick={() => handleSelectEcosystem(ecoKey)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {ecoKey === 'sawah' && '🌾 Sawah'}
                  {ecoKey === 'laut' && '🌊 Laut'}
                  {ecoKey === 'gurun' && '🌵 Gurun'}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Zone Interactive Learning Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
          {/* Left / Center Zone: Digital Wheel Interactive Component */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <DigitalWheel
              organisms={currentEcosystem.organisms}
              selectedOrganism={selectedOrganism}
              onOrganismSelected={(org) => setSelectedOrganism(org)}
              primaryColor={currentEcosystem.primaryColor}
            />
          </div>

          {/* Right Zone: Selection Result Card or Instruction Placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {selectedOrganism ? (
              <OrganismResultCard
                organism={selectedOrganism}
                onOpenKenali={() => setActiveModal('kenali')}
                onOpenDongeng={() => setActiveModal('dongeng')}
                onOpenMisi={() => setActiveModal('misi')}
              />
            ) : (
              /* Waiting for manual spin state */
              <div className="p-6 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-dashed border-slate-700/80 text-center flex flex-col items-center justify-center space-y-3 min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shadow-inner">
                  <Compass className="w-7 h-7 text-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-display">
                    Roda Menunggu Putaran Siswa
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                    Pegang atau sentuh roda di sebelah kiri, lalu geser ke arah yang kamu inginkan untuk menemukan tokoh organisme ekosistem!
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">
                    🌾 Produsen
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">
                    🦗 Konsumen
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">
                    🍄 Pengurai
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Zone: Interactive Food Chain / Energy Flow Diagram */}
        <div className="mt-4">
          <FoodChainDiagram
            ecosystem={currentEcosystem}
            selectedOrganism={selectedOrganism}
            onSelectOrganismById={(orgId) => {
              const found = currentEcosystem.organisms.find((o) => o.id === orgId);
              if (found) setSelectedOrganism(found);
            }}
          />
        </div>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 w-full border-t border-slate-900 bg-slate-950/90 py-3 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Eko Misi · Media Pembelajaran Interaktif Roda Digital Literasi Sains SD</span>
          <button
            onClick={() => setActiveModal('panduan')}
            className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Petunjuk Guru & Siswa</span>
          </button>
        </div>
      </footer>

      {/* Modals for Selected Organism Features */}
      {activeModal === 'kenali' && selectedOrganism && (
        <ModalKenaliTokoh
          organism={selectedOrganism}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'dongeng' && selectedOrganism && (
        <ModalDongeng
          organism={selectedOrganism}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'misi' && selectedOrganism && (
        <ModalMisi
          organism={selectedOrganism}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'panduan' && (
        <ModalPanduan onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
