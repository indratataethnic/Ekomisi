import React, { useState } from 'react';
import { Organism, MissionQuestion } from '../types';
import { X, Target, Award, Star, CheckCircle, AlertCircle, RotateCcw } from 'lucide-react';

interface ModalMisiProps {
  organism: Organism;
  onClose: () => void;
}

export const ModalMisi: React.FC<ModalMisiProps> = ({ organism, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionLabel, setSelectedOptionLabel] = useState<string | null>(null);
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const mission = organism.misi;
  const questions = mission.questions;
  const currentQ: MissionQuestion = questions[currentQuestionIndex];

  const handleSelectOption = (label: string) => {
    if (hasAnsweredCurrent) return;
    setSelectedOptionLabel(label);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionLabel || hasAnsweredCurrent) return;
    setHasAnsweredCurrent(true);

    const chosen = currentQ.options.find((o) => o.label === selectedOptionLabel);
    if (chosen?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionLabel(null);
      setHasAnsweredCurrent(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleResetMission = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionLabel(null);
    setHasAnsweredCurrent(false);
    setScore(0);
    setIsCompleted(false);
  };

  const currentOption = currentQ?.options.find((o) => o.label === selectedOptionLabel);

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
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Misi Literasi Sains
                </span>
                <span className="text-xs text-slate-400">· {organism.name}</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-0.5 font-display">
                {mission.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mission Scenario Brief */}
        <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="italic">{mission.scenario}</span>
          </div>

          {!isCompleted && (
            <span className="font-mono text-slate-400 font-semibold shrink-0 ml-2">
              Soal {currentQuestionIndex + 1} / {questions.length}
            </span>
          )}
        </div>

        {/* Mission Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!isCompleted ? (
            <div>
              {/* Question Card */}
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 mb-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Tantangan {currentQuestionIndex + 1}: {currentQ.title}
                </span>
                <p className="text-base text-white font-medium leading-relaxed">
                  {currentQ.prompt}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOptionLabel === opt.label;
                  let optStyle = 'bg-slate-800/40 border-slate-700/80 hover:bg-slate-800 text-slate-200';

                  if (hasAnsweredCurrent) {
                    if (opt.isCorrect) {
                      optStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                    } else if (isSelected && !opt.isCorrect) {
                      optStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                    } else {
                      optStyle = 'bg-slate-800/20 border-slate-800 text-slate-500 opacity-60';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-emerald-900/40 border-emerald-400 text-white ring-1 ring-emerald-400';
                  }

                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(opt.label)}
                      disabled={hasAnsweredCurrent}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                        {opt.label}
                      </span>
                      <span className="text-sm leading-snug">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanations */}
              {hasAnsweredCurrent && currentOption && (
                <div
                  className={`mt-4 p-4 rounded-xl border flex items-start gap-3 animate-in fade-in ${
                    currentOption.isCorrect
                      ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                      : 'bg-amber-950/40 border-amber-800/60 text-amber-200'
                  }`}
                >
                  {currentOption.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold block mb-1">
                      {currentOption.isCorrect ? 'Jawaban Kamu Tepat! 🎉' : 'Penjelasan Konsep Sains:'}
                    </span>
                    <p>{currentOption.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Completed Screen with Stars & Badge */
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-2">
                <Award className="w-12 h-12" />
              </div>

              <h3 className="text-2xl font-bold text-white font-display">
                Misi Sains Selesai!
              </h3>

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3].map((starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-8 h-8 ${
                      starIdx <= score
                        ? 'fill-amber-400 text-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]'
                        : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-300 text-sm">
                Kamu berhasil menjawab benar <span className="font-bold text-emerald-400">{score}</span> dari{' '}
                <span className="font-bold text-white">{questions.length}</span> tantangan sains ekosistem.
              </p>

              {/* Unlocked Badge */}
              <div className="p-4 max-w-sm mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-500/40 shadow-lg text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span>Lencana yang Diraih:</span>
                </div>
                <div className="text-base font-bold text-white">
                  {mission.badgeName}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Pahlawan cilik penjaga keharmonisan dan kelestarian ekosistem!
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          {!isCompleted ? (
            <>
              <span className="text-xs text-slate-400">
                Pilih jawaban lalu tekan tombol verifikasi
              </span>

              {!hasAnsweredCurrent ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOptionLabel}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Kunci Jawaban
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}
                </button>
              )}
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <button
                onClick={handleResetMission}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Misi</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Tutup Misi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
