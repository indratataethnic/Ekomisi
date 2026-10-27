import React from 'react';
import { X, Hand, MousePointer, Monitor, Sparkles, BookOpen, Target, CheckCircle2 } from 'lucide-react';

interface ModalPanduanProps {
  onClose: () => void;
}

export const ModalPanduan: React.FC<ModalPanduanProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Panduan Penggunaan Roda Digital Eko Misi
              </h3>
              <p className="text-xs text-slate-400">Media Pembelajaran Literasi Sains & Ekosistem SD</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300">
          <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-800/40">
            <h4 className="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Prinsip Putar Manual Siswa</span>
            </h4>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              Roda ini dirancang khusus menyerupai alat peraga roda fisik. Siswa memutar roda secara langsung menggunakan gerakan tangan mereka, bukan dengan tombol otomatis.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
              <Hand className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">
                  Layar Sentuh / HP / Tablet / Papan Interaktif (Digital Board)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Sentuh roda, geser jari mengikuti arah putaran yang diinginkan, lalu lepaskan. Roda akan mengikuti gerakan jari secara langsung dan melambat alami.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
              <MousePointer className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">
                  Komputer / Laptop
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Klik dan tahan mouse pada roda, geser mouse mengikuti arah putaran, kemudian lepaskan tombol mouse.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
              <Target className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">
                  Penentuan Tokoh & Fitur Pembelajaran
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Ketika roda berhenti, penunjuk di atas roda menentukan organisme terpilih. Guru dan siswa dapat mengeksplorasi 3 fitur: <strong>Kenali Tokoh</strong>, <strong>Mulai Dongeng</strong>, dan <strong>Jalankan Misi</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Mengerti & Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
};
