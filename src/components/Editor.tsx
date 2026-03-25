'use client';

import { useTransliteration } from '@/hooks/useTransliteration';
import { Toolbar } from './Toolbar';

export function Editor() {
  const { inputText, outputText, handleInputChange, clear } = useTransliteration();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row gap-6 h-[60vh] lg:h-[70vh] min-h-[400px]">
        {/* Left Card: Input */}
        <div className="flex-1 glass-panel flex flex-col overflow-hidden relative group border-indigo-500/20 focus-within:border-indigo-500/60 focus-within:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300">
          <div className="bg-slate-900/40 px-5 py-3 border-b border-white/5 flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Phonetic Input
            </span>
            <span className="text-xs text-slate-500 font-medium">Singlish</span>
          </div>
          <textarea
            value={inputText}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Type here in Singlish (e.g., 'ammaa', 'sinhala')..."
            className="flex-1 w-full bg-transparent p-5 text-lg md:text-xl text-slate-100 placeholder:text-slate-600 focus:outline-none resize-none custom-scrollbar"
            spellCheck={false}
            autoFocus
          />
        </div>

        {/* Right Card: Output */}
        <div className="flex-1 glass-panel flex flex-col overflow-hidden relative border-violet-500/20 transition-all duration-300 hover:border-violet-500/40">
          <div className="bg-slate-900/40 px-5 py-3 border-b border-white/5 flex items-center justify-between">
             <span className="text-xs font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
              Sinhala Output
            </span>
            <span className="text-xs text-slate-500 font-medium">Unicode</span>
          </div>
          <textarea
            value={outputText}
            readOnly
            placeholder="සිංහල අකුරු මෙතැන දිස්වේවි..."
            className="flex-1 w-full bg-transparent p-5 text-xl md:text-2xl text-slate-100 placeholder:text-slate-700 focus:outline-none resize-none custom-scrollbar font-sinhala leading-relaxed"
            spellCheck={false}
          />
        </div>
      </div>

      {/* Toolbar actions */}
      <Toolbar outputText={outputText} onClear={clear} />
    </div>
  );
}
