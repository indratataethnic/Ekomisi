import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Organism } from '../types';
import { playPegTick, playSuccessChime } from '../utils/audio';
import { RotateCcw, Hand, MousePointer, Volume2, VolumeX } from 'lucide-react';

interface DigitalWheelProps {
  organisms: Organism[];
  selectedOrganism: Organism | null;
  onOrganismSelected: (organism: Organism | null) => void;
  primaryColor: string;
}

export const DigitalWheel: React.FC<DigitalWheelProps> = ({
  organisms,
  selectedOrganism,
  onOrganismSelected,
  primaryColor,
}) => {
  const wheelSvgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Wheel physical rotational state in degrees
  const [rotation, setRotation] = useState<number>(0);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [pointerFlapperAngle, setPointerFlapperAngle] = useState<number>(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);

  // References for direct gesture tracking
  const activePointerId = useRef<number | null>(null);
  const lastTouchAngle = useRef<number>(0);
  const rotationRef = useRef<number>(0);
  rotationRef.current = rotation;

  const totalAngleDraggedRef = useRef<number>(0);
  const velocitySamplesRef = useRef<Array<{ time: number; angle: number }>>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const lastPegCrossRef = useRef<number>(0);

  const numSlices = organisms.length || 8;
  const sliceSpan = 360 / numSlices; // 45 degrees for 8 organisms

  // Mathematical formula: which slice is currently under the top pointer (12 o'clock, -90 deg)?
  const getSliceUnderPointer = useCallback(
    (rotDeg: number): number => {
      // Top pointer is at -90 deg screen angle.
      // Slices are drawn centered at -90 + i * sliceSpan.
      // i * sliceSpan + rotation = 0 mod 360 => i * sliceSpan = -rotation mod 360
      const norm = ((-rotDeg % 360) + 360) % 360;
      const index = Math.round(norm / sliceSpan) % numSlices;
      return (index + numSlices) % numSlices;
    },
    [numSlices, sliceSpan]
  );

  // Check peg crossings to trigger audio ticks and flapper deflection
  const checkPegTick = useCallback(
    (newRot: number, delta: number) => {
      // Pegs are at slice boundaries: -90 + i*45 + 22.5
      const currentPegIdx = Math.floor((newRot + sliceSpan / 2) / sliceSpan);
      if (currentPegIdx !== lastPegCrossRef.current) {
        lastPegCrossRef.current = currentPegIdx;
        if (isSoundEnabled) {
          const speedFactor = Math.min(2.0, Math.max(0.7, Math.abs(delta) * 0.15));
          playPegTick(speedFactor);
        }
        // Flapper deflection toward drag direction
        const deflection = delta > 0 ? 16 : -16;
        setPointerFlapperAngle(deflection);
        setTimeout(() => setPointerFlapperAngle(0), 70);
      }
    },
    [sliceSpan, isSoundEnabled]
  );

  // Stop any running inertia or reset animation
  const stopAllAnimations = useCallback(() => {
    if (animFrameIdRef.current !== null) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }
  }, []);

  // When organisms prop changes (ecosystem switched), reset wheel to stationary 0 deg
  useEffect(() => {
    stopAllAnimations();
    setRotation(0);
    rotationRef.current = 0;
    activePointerId.current = null;
    setIsInteracting(false);
    lastPegCrossRef.current = 0;
  }, [organisms, stopAllAnimations]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopAllAnimations();
    };
  }, [stopAllAnimations]);

  // Handle POINTER DOWN (Mouse press or Finger touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Prevent multi-touch conflict
    if (activePointerId.current !== null) return;

    const targetEl = e.currentTarget;
    targetEl.setPointerCapture(e.pointerId);
    activePointerId.current = e.pointerId;

    stopAllAnimations();
    setIsInteracting(true);
    totalAngleDraggedRef.current = 0;

    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const angleRad = Math.atan2(e.clientY - cy, e.clientX - cx);
    const angleDeg = angleRad * (180 / Math.PI);

    lastTouchAngle.current = angleDeg;
    velocitySamplesRef.current = [{ time: performance.now(), angle: rotationRef.current }];
  };

  // Handle POINTER MOVE (Direct manual drag tracking!)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;

    const targetEl = e.currentTarget;
    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const angleRad = Math.atan2(e.clientY - cy, e.clientX - cx);
    const angleDeg = angleRad * (180 / Math.PI);

    let delta = angleDeg - lastTouchAngle.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    lastTouchAngle.current = angleDeg;
    totalAngleDraggedRef.current += Math.abs(delta);

    const nextRot = rotationRef.current + delta;
    rotationRef.current = nextRot;
    setRotation(nextRot);

    checkPegTick(nextRot, delta);

    // Keep velocity tracking samples for momentum
    const now = performance.now();
    const samples = velocitySamplesRef.current;
    samples.push({ time: now, angle: nextRot });
    // Filter to last 140ms
    while (samples.length > 2 && now - samples[0].time > 140) {
      samples.shift();
    }
  };

  // Handle POINTER UP & CANCEL (Finger release or Mouse release)
  const handlePointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if capture was already lost
    }
    activePointerId.current = null;
    setIsInteracting(false);

    // Compute release velocity (degrees per millisecond)
    const samples = velocitySamplesRef.current;
    const now = performance.now();
    let releaseVelocity = 0;

    if (samples.length >= 2) {
      const oldest = samples[0];
      const newest = samples[samples.length - 1];
      const dt = newest.time - oldest.time;
      if (dt > 15 && dt < 200 && now - newest.time < 80) {
        releaseVelocity = (newest.angle - oldest.angle) / dt;
      }
    }

    // Clamp maximum release velocity so it won't spin uncontrollably
    const maxVelocity = 2.2; // deg / ms
    if (releaseVelocity > maxVelocity) releaseVelocity = maxVelocity;
    if (releaseVelocity < -maxVelocity) releaseVelocity = -maxVelocity;

    // Minimum angular movement threshold to recognize as a real spin gesture
    const hasMeaningfulDrag = totalAngleDraggedRef.current > 4;

    // If user held still before release or dragged very little, stop right where released!
    if (!hasMeaningfulDrag || Math.abs(releaseVelocity) < 0.05) {
      finalizeWheelStop(rotationRef.current);
      return;
    }

    // Otherwise, simulate natural momentum with smooth friction deceleration
    let currentVel = releaseVelocity;
    let lastTime = performance.now();

    const coastInertia = (time: number) => {
      const dt = Math.min(32, time - lastTime);
      lastTime = time;

      // Friction deceleration: decay factor ~0.965 per frame
      const frictionDecay = Math.pow(0.965, dt / 16.667);
      currentVel *= frictionDecay;

      const deltaRot = currentVel * dt;
      const nextRot = rotationRef.current + deltaRot;
      rotationRef.current = nextRot;
      setRotation(nextRot);

      checkPegTick(nextRot, deltaRot);

      // Stop condition: when velocity is tiny (< 0.015 deg/ms)
      if (Math.abs(currentVel) < 0.015) {
        stopAllAnimations();
        finalizeWheelStop(rotationRef.current);
      } else {
        animFrameIdRef.current = requestAnimationFrame(coastInertia);
      }
    };

    animFrameIdRef.current = requestAnimationFrame(coastInertia);
  };

  // Called when wheel comes to a complete halt
  const finalizeWheelStop = (finalRot: number) => {
    const chosenIndex = getSliceUnderPointer(finalRot);
    const chosenOrg = organisms[chosenIndex];

    if (chosenOrg) {
      if (isSoundEnabled) {
        playSuccessChime();
      }
      onOrganismSelected(chosenOrg);
    }
  };

  // RESET POSISI: smoothly animates angle back to 0 without choosing an organism
  const handleResetPosition = () => {
    stopAllAnimations();
    onOrganismSelected(null);

    const startRot = rotationRef.current;
    // Normalize to closest 0 deg equivalent
    const targetRot = 0;
    const diff = targetRot - (startRot % 360);
    const finalRot = startRot + diff;

    const startTime = performance.now();
    const duration = 450; // ms

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const stepReset = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);

      const current = startRot + (finalRot - startRot) * eased;
      rotationRef.current = current;
      setRotation(current);

      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(stepReset);
      } else {
        rotationRef.current = 0;
        setRotation(0);
        stopAllAnimations();
      }
    };

    animFrameIdRef.current = requestAnimationFrame(stepReset);
  };

  // SVG Geometry Calculation
  const size = 500;
  const center = size / 2;
  const radius = 224;
  const innerHubRadius = 48;

  // Compute slice SVG path
  const makeSlicePath = (index: number) => {
    // Slices are centered around: -90 + index * sliceSpan
    const startAngleDeg = -90 + index * sliceSpan - sliceSpan / 2;
    const endAngleDeg = -90 + index * sliceSpan + sliceSpan / 2;

    const startRad = (startAngleDeg * Math.PI) / 180;
    const endRad = (endAngleDeg * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    const largeArcFlag = sliceSpan > 180 ? 1 : 0;

    return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Current organism under pointer preview during drag
  const currentPreviewIndex = getSliceUnderPointer(rotation);
  const currentHoveredOrganism = organisms[currentPreviewIndex];

  return (
    <div className="flex flex-col items-center select-none" ref={containerRef}>
      {/* Top Controls Bar: Sound Toggle & Quick Helper */}
      <div className="w-full max-w-md flex items-center justify-between px-2 mb-2">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span>Putar Manual Langsung</span>
        </div>

        <button
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-md border border-slate-700/60 transition-colors"
          title={isSoundEnabled ? 'Matikan Suara Putaran' : 'Nyalakan Suara Putaran'}
        >
          {isSoundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
          <span>{isSoundEnabled ? 'Suara ON' : 'Suara MUTE'}</span>
        </button>
      </div>

      {/* Main Wheel Container with Pointer Events */}
      <div className="relative flex items-center justify-center p-3">
        {/* Glowing Rim Ambience */}
        <div
          className="absolute inset-4 rounded-full blur-2xl opacity-25 pointer-events-none transition-all duration-300"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Tactile Top Pointer Fixed Flapper */}
        <div
          className="absolute top-0 z-30 flex flex-col items-center pointer-events-none transition-transform duration-75"
          style={{
            transform: `translateY(4px) rotate(${pointerFlapperAngle}deg)`,
            transformOrigin: 'top center',
          }}
        >
          {/* Metallic Pin Mount */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-b from-amber-200 to-amber-500 shadow-lg border-2 border-amber-700 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-900" />
          </div>
          {/* Sharp Flapper Pointer Arrow */}
          <svg width="34" height="42" viewBox="0 0 34 42" className="-mt-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            <polygon points="17,42 2,4 32,4" fill="#f59e0b" stroke="#78350f" strokeWidth="2.5" />
            <polygon points="17,37 6,7 28,7" fill="#fbbf24" />
            <polygon points="17,32 10,10 24,10" fill="#fef08a" />
          </svg>
        </div>

        {/* Wheel SVG Interactive Target */}
        <div
          className="wheel-interactive relative rounded-full touch-none shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-4 ring-slate-800/80"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrCancel}
          onPointerCancel={handlePointerUpOrCancel}
          style={{
            width: 'min(86vw, 440px)',
            height: 'min(86vw, 440px)',
          }}
        >
          <svg
            ref={wheelSvgRef}
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full transform-gpu"
          >
            <defs>
              {/* Outer Golden/Chrome Rim Gradient */}
              <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="35%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#fef3c7" />
                <stop offset="85%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              {/* Hub Chrome Gradient */}
              <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="60%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </radialGradient>

              {/* Shadow filter for depth */}
              <filter id="pegShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Rotatable Wheel Group */}
            <g transform={`rotate(${rotation} ${center} ${center})`}>
              {/* Slices */}
              {organisms.map((org, idx) => {
                const pathD = makeSlicePath(idx);
                const isSelected = selectedOrganism?.id === org.id;

                // Center angle of this slice
                const centerAngleDeg = -90 + idx * sliceSpan;
                const centerAngleRad = (centerAngleDeg * Math.PI) / 180;

                // Position for organism label and icon
                const labelRadius = radius * 0.68;
                const lx = center + labelRadius * Math.cos(centerAngleRad);
                const ly = center + labelRadius * Math.sin(centerAngleRad);

                const iconRadius = radius * 0.42;
                const ix = center + iconRadius * Math.cos(centerAngleRad);
                const iy = center + iconRadius * Math.sin(centerAngleRad);

                return (
                  <g key={org.id} className="transition-opacity duration-150">
                    {/* Slice Wedge */}
                    <path
                      d={pathD}
                      fill={org.sliceColor}
                      stroke="#0f172a"
                      strokeWidth="2.5"
                      className="hover:brightness-105 transition-all"
                    />

                    {/* Subtle inner slice divider pattern */}
                    <path
                      d={pathD}
                      fill="url(#rimGradient)"
                      opacity="0.06"
                    />

                    {/* Organism Name Text along radial angle */}
                    <g transform={`translate(${lx}, ${ly}) rotate(${centerAngleDeg + 90})`}>
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="#ffffff"
                        fontWeight="700"
                        fontSize={numSlices > 8 ? "13" : "14"}
                        letterSpacing="0.02em"
                        className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] font-display"
                      >
                        {org.name.length > 13 ? org.name.slice(0, 12) + '…' : org.name}
                      </text>
                    </g>

                    {/* Organism Emoji Icon badge */}
                    <g transform={`translate(${ix}, ${iy})`}>
                      <circle
                        r="18"
                        fill="rgba(15, 23, 42, 0.65)"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="1.5"
                      />
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="17"
                      >
                        {org.emoji}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Pegs at the outer boundary of each slice */}
              {organisms.map((_, idx) => {
                const pegAngleDeg = -90 + idx * sliceSpan + sliceSpan / 2;
                const pegAngleRad = (pegAngleDeg * Math.PI) / 180;
                const pegRadius = radius - 8;
                const px = center + pegRadius * Math.cos(pegAngleRad);
                const py = center + pegRadius * Math.sin(pegAngleRad);

                return (
                  <g key={`peg-${idx}`} filter="url(#pegShadow)">
                    <circle cx={px} cy={py} r="5" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
                    <circle cx={px} cy={py} r="2" fill="#ffffff" />
                  </g>
                );
              })}

              {/* Outer Decorative Gold/Chrome Rim */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="url(#rimGradient)"
                strokeWidth="14"
              />
              <circle
                cx={center}
                cy={center}
                r={radius - 7}
                fill="none"
                stroke="#0f172a"
                strokeWidth="1.5"
              />

              {/* Center Hub Outer Plate */}
              <circle
                cx={center}
                cy={center}
                r={innerHubRadius + 10}
                fill="#0f172a"
                stroke="url(#rimGradient)"
                strokeWidth="4"
              />

              {/* Center Hub Inner Shiny Core */}
              <circle
                cx={center}
                cy={center}
                r={innerHubRadius}
                fill="url(#hubGradient)"
              />

              {/* Center Hub Branding */}
              <circle
                cx={center}
                cy={center}
                r={innerHubRadius - 10}
                fill="#1e293b"
                stroke="#475569"
                strokeWidth="1.5"
              />
              <text
                x={center}
                y={center - 7}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#38bdf8"
                fontSize="12"
                fontWeight="800"
                className="font-display tracking-wider"
              >
                EKO
              </text>
              <text
                x={center}
                y={center + 8}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#f59e0b"
                fontSize="11"
                fontWeight="800"
                className="font-display tracking-widest"
              >
                MISI
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Guidance Section strictly matching prompt requirements */}
      <div className="w-full max-w-md mt-3 px-4 text-center">
        <div className="p-3 bg-slate-800/70 rounded-xl border border-slate-700/60 shadow-sm">
          <p className="text-sm font-semibold text-emerald-300 flex items-center justify-center gap-1.5">
            <Hand className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sentuh dan geser roda untuk memutarnya!</span>
          </p>
          <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1.5">
            <MousePointer className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Klik dan tahan roda, lalu geser ke arah yang kamu inginkan.</span>
          </p>
        </div>

        {/* Live Hover/Pointer indicator while dragging */}
        {isInteracting && currentHoveredOrganism && (
          <div className="mt-2 text-xs text-slate-300">
            Penunjuk melintasi: <span className="font-semibold text-amber-300">{currentHoveredOrganism.name}</span>
          </div>
        )}

        {/* RESET POSISI Button - strictly required:
            "Sediakan tombol RESET POSISI hanya jika dibutuhkan. Tombol ini mengembalikan posisi roda ke posisi awal secara halus tanpa memilih organisme dan tanpa menjalankan putaran otomatis."
        */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            onClick={handleResetPosition}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600/60 transition-colors shadow-sm active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>RESET POSISI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
