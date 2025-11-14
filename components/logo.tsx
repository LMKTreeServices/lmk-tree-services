// components/logo.tsx
import React from "react";

export default function Logo() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 text-xs font-semibold text-white shadow-sm">
        BSD
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-slate-900">
          Blank Slate Dev
        </span>
        <span className="text-xs text-slate-500">
          From idea to production
        </span>
      </div>
    </div>
  );
}
