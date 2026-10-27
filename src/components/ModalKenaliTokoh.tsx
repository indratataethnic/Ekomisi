import React, { useState, useEffect } from 'react';
import { Organism } from '../types';
import { speakIndonesianText, stopSpeaking } from '../utils/audio';
import { X, Volume2, Square, Info, Shield, Sparkles, MapPin, Utensils, AlertTriangle } from 'lucide-react';

interface ModalKenaliTokohProps {
  organism: Organism;
  onClose: () => void;
}

export const ModalKenaliTokoh: React.FC<ModalKenaliTokohProps> = ({ organism, onClose }) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'profil' | 'adaptasi' | 'fakta'>('profil');

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleToggleSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const textToRead = `Mengenal tokoh ${organism.name}. Nama ilmiahnya adalah ${organism.scientificName}. Tergolong sebagai ${organism.category}. ${organism.summary}. Habitatnya berada di ${organism.habitat}. Makanannya adalah ${organism.diet}. Adaptasi khususnya: ${organism.adaptation}. Fakta serunya: ${organism.funFact}.`;
      speakIndonesianText(textToRead, () => {
        setIsSpeaking(false);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-850">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/20 shrink-0"
              style={{ backgroundColor: organism.sliceColor }}
            >
              {organism.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  {organism.category}
                </span>
                <span className="text-xs text-slate-400 font-mono italic">
                  {organism.scientificName}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-0.5 font-display">
                Kenali Tokoh: {organism.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Reader Button */}
            <button
              onClick={handleToggleSpeak}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isSpeaking
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="Dengarkan pembacaan profil tokoh"
            >
              {isSpeaking ? <Square className="w-3.5 h-3.5 fill-current" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
              <span>{isSpeaking ? 'Berhenti Suara' : 'Dengarkan Fakta'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 px-5 pt-2 gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('profil')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'profil'
                ? 'border-sky-500 text-sky-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Profil & Habitat
          </button>
          <button
            onClick={() => setActiveTab('adaptasi')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'adaptasi'
                ? 'border-emerald-500 text-emerald-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Adaptasi & Makanan
          </button>
          <button
            onClick={() => setActiveTab('fakta')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'fakta'
                ? 'border-amber-500 text-amber-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Fakta Seru Sains
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-sm text-slate-300">
          {activeTab === 'profil' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60">
                <h4 className="font-semibold text-white mb-1.5 flex items-center gap-1.5 text-sky-400">
                  <Info className="w-4 h-4" />
                  <span>Deskripsi Tokoh Ekologi</span>
                </h4>
                <p className="leading-relaxed">{organism.summary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/40">
                  <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>Habitat Tempat Tinggal</span>
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm">{organism.habitat}</p>
                </div>

                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/40">
                  <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-semibold">
                    <Shield className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Tingkat Trofik Rantai Makanan</span>
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm">{organism.trophicRole}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'adaptasi' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-800/40">
                <h4 className="font-semibold text-emerald-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Adaptasi Khusus (Kekuatan Alami)</span>
                </h4>
                <p className="leading-relaxed text-emerald-100/90">{organism.adaptation}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/40">
                  <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-semibold">
                    <Utensils className="w-3.5 h-3.5 text-amber-400" />
                    <span>Makanan & Nutrisi</span>
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm">{organism.diet}</p>
                </div>

                <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/40">
                  <span className="text-xs text-slate-400 flex items-center gap-1 mb-1 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>Predator / Ancaman Alami</span>
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm">{organism.predator}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fakta' && (
            <div className="space-y-4">
              <div className="p-5 bg-gradient-to-br from-amber-950/40 to-slate-900 rounded-xl border border-amber-700/40">
                <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-base">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Tahukah Kamu? (Fakta Seru Sains)</span>
                </div>
                <p className="text-base text-amber-100 leading-relaxed italic">
                  "{organism.funFact}"
                </p>
              </div>

              <div className="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/50 text-xs text-slate-400">
                <span className="font-semibold text-slate-200 block mb-1">Materi Kurikulum Merdeka IPAS SD:</span>
                Setiap makhluk hidup di bumi memiliki peran ekologis penting dalam menjaga aliran energi dan daur materi. Tidak ada organisme yang tidak berguna di alam semesta.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Kategori Ekologi: <span className="text-white font-medium">{organism.category}</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  );
};
