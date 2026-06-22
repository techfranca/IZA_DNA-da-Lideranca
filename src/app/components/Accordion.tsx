"use client";

import { useState } from "react";

export function Accordion({
  title,
  children,
  number,
}: {
  title: string;
  children: React.ReactNode;
  number?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all ${
        open
          ? "border-gold/30 bg-white/[0.04]"
          : "border-white/5 bg-white/[0.02] hover:border-gold/15"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {number && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-sm font-bold text-gold">
            {number}
          </span>
        )}
        <span className="flex-1 text-lg font-bold text-white">{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 text-white/75">{children}</div>
        </div>
      </div>
    </div>
  );
}
