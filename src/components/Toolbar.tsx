'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';

interface ToolbarProps {
  outputText: string;
  onClear: () => void;
}

export function Toolbar({ outputText, onClear }: ToolbarProps) {
  const [copied, setCopied] = useState(false);
  const { keyboardLayout, setKeyboardLayout } = useStore();

  const handleCopy = async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `LipiFlow_export_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between glass-panel px-6 py-4 border-indigo-500/10 mt-6 gap-4">
      {/* Layout Toggle Mapping (Singlish / Wijesekara mapping selection) */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
          <input 
            type="radio" 
            name="layout" 
            className="w-4 h-4 accent-indigo-500 border-slate-600 bg-slate-800" 
            checked={keyboardLayout === 'singlish'}
            onChange={() => setKeyboardLayout('singlish')}
          />
          Singlish Phonetic
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors">
          <input 
            type="radio" 
            name="layout" 
            className="w-4 h-4 accent-indigo-500 border-slate-700 bg-slate-800" 
            checked={keyboardLayout === 'wijesekara'}
            onChange={() => setKeyboardLayout('wijesekara')}
          />
          Wijesekara 
        </label>
      </div>

      {/* Editor Utilities */}
      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
        <button 
          onClick={onClear} 
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-red-400 transition-all border border-white/5 active:scale-95 whitespace-nowrap"
        >
          Clear
        </button>
        <button 
          onClick={handleCopy} 
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border active:scale-95 whitespace-nowrap ${
            copied 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10'
          }`}
        >
          {copied ? '✓ Copied' : 'Copy Text'}
        </button>
        <button 
          onClick={handleDownload} 
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-500/20 active:scale-95 border border-violet-400/20 whitespace-nowrap"
        >
          Download .txt
        </button>
      </div>
    </div>
  );
}
