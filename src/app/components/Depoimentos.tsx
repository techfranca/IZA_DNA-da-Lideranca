"use client";

import { useState } from "react";

const TOTAL = 17;

export function Depoimentos() {
  const [stage, setStage] = useState(0); // 0 = 4, 1 = 9, 2 = all

  const visible = stage === 0 ? 4 : stage === 1 ? 9 : TOTAL;
  const remaining = TOTAL - visible;

  return (
    <>
      <div className="mt-12 columns-2 gap-4 md:columns-3">
        {Array.from({ length: visible }, (_, i) => (
          <img
            key={i}
            src={`/depoimentos/dep-${i + 1}.png`}
            alt={`Depoimento ${i + 1}`}
            className="mb-4 w-full rounded-xl border border-white/10 shadow-lg"
          />
        ))}
      </div>

      {stage < 2 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-white/40 mb-4">
            {stage === 0
              ? `E esses são apenas alguns... ainda tem mais ${TOTAL - 4} depoimentos reais`
              : `Mais ${remaining} depoimentos de líderes transformados`}
          </p>
          <button
            onClick={() => setStage(stage + 1)}
            className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            {stage === 0 ? "VER MAIS DEPOIMENTOS" : "VER TODOS OS DEPOIMENTOS"}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
