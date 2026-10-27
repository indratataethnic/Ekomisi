import React, { useState, useEffect } from 'react';
import { Organism } from '../types';
import { speakIndonesianText, stopSpeaking } from '../utils/audio';
import { X, Volume2, Square, BookOpen, Heart, HelpCircle, CheckCircle2 } from 'lucide-react';

interface ModalDongengProps {
  organism: Organism;
  onClose: () => void;
}

export const ModalDongeng: React.FC<ModalDongengProps> = ({ organism, onClose }) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const dongeng = organism.dongeng;

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
      // Combine title, paragraphs, and moral for a complete audiobook experience
      const fullStoryText = `${dongeng.title}. ${dongeng.synopsis}. ${dongeng.paragraphs
        .map((p) => `${p.sceneTitle}. ${p.content}`)
        .join(' ')}. Pesan moral dari dongeng ini: ${dongeng.moralValue}`;

      speakIndonesianText(fullStoryText, () => {
        setIsSpeaking(false);
      });
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base leading-relaxed';
      case 'xl':
        return 'text-lg leading-loose';
      default:
        return 'text-sm leading-relaxed';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
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
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Dongeng Literasi Sains SD
                </span>
                <span className="text-xs text-slate-400">· {dongeng.theme}</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-0.5 font-display">
                {dongeng.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Storyteller Button */}
            <button
              onClick={handleToggleSpeak}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isSpeaking
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="Dengarkan pembacaan dongeng"
            >
              {isSpeaking ? <Square className="w-3.5 h-3.5 fill-current" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
              <span>{isSpeaking ? 'Hentikan Cerita' : 'Bacakan Dongeng'}</span>
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

        {/* Reader Toolbar: Font Size Adjuster */}
        <div className="flex items-center justify-between px-5 py-2 border-b border-slate-800 bg-slate-900/40 text-xs text-slate-400">
          <span className="italic">{dongeng.synopsis}</span>
          <div className="flex items-center gap-1 shrink-0 ml-3">
            <span className="text-slate-500 mr-1">Ukuran Huruf:</span>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded text-xs font-medium ${
                fontSize === 'normal' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded text-sm font-medium ${
                fontSize === 'large' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xl')}
              className={`px-2 py-0.5 rounded text-base font-medium ${
                fontSize === 'xl' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              A++
            </button>
          </div>
        </div>

        {/* Story Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {dongeng.paragraphs.map((para, idx) => (
            <div key={idx} className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <h4 className="text-sm font-bold text-amber-300 mb-2 font-display">
                {para.sceneTitle}
              </h4>
              <p className={`text-slate-200 ${getFontSizeClass()}`}>
                {para.content}
              </p>
            </div>
          ))}

          {/* Pesan Moral Box */}
          <div className="p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 flex items-start gap-3">
            <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                Pesan Moral & Nilai Karakter
              </h4>
              <p className="text-sm text-rose-100/90 leading-relaxed">
                {dongeng.moralValue}
              </p>
            </div>
          </div>

          {/* Refleksi Sains Box */}
          <div className="p-4 bg-sky-950/30 rounded-xl border border-sky-800/40">
            <div className="flex items-start gap-2.5">
              <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-1">
                  Pertanyaan Refleksi Literasi Sains
                </h4>
                <p className="text-sm text-white font-medium mb-3">
                  {dongeng.scienceQuestion}
                </p>

                {showAnswer ? (
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-sky-700/40 text-xs text-sky-200 flex items-start gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{dongeng.scienceAnswer}</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-3 py-1.5 text-xs font-semibold text-sky-300 hover:text-white bg-sky-900/40 hover:bg-sky-800/50 border border-sky-700/50 rounded-lg transition-colors cursor-pointer"
                  >
                    Buka Kunci Jawaban Ilmiah
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Dongeng Eko Misi Tokoh {organism.name}</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Selesai Membaca
          </button>
        </div>
      </div>
    </div>
  );
};
