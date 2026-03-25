export default function HelpPage() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto animate-in fade-in duration-700 mt-4 pb-12">
      <h1 className="text-3xl font-bold text-slate-200 mb-2">Help & Quick Guide</h1>
      <p className="text-slate-400 mb-8">Master the Singlish phonetic typing rules used by the LipiFlow engine.</p>
      
      <div className="grid gap-6">
        {/* Vowels */}
        <section className="glass-panel p-6">
          <h2 className="text-xl font-semibold text-indigo-400 mb-4">Vowels (ස්වර)</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { si: 'අ', en: 'a' }, { si: 'ආ', en: 'aa' }, 
              { si: 'ඇ', en: 'A' }, { si: 'ඈ', en: 'Aa / AA' },
              { si: 'ඉ', en: 'i' }, { si: 'ඊ', en: 'ii' },
              { si: 'උ', en: 'u' }, { si: 'ඌ', en: 'uu' },
              { si: 'ඍ', en: 'R' }, { si: 'ඎ', en: 'Ru' },
            ].map((v) => (
              <div key={v.en} className="p-3 bg-slate-800/40 rounded-xl border border-white/5 text-center">
                <span className="text-3xl font-sinhala block text-slate-100">{v.si}</span>
                <span className="text-sm text-indigo-300 font-mono mt-2 block bg-slate-950/50 py-1 rounded inline-block px-2">{v.en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Consonants */}
        <section className="glass-panel p-6">
          <h2 className="text-xl font-semibold text-violet-400 mb-4">Consonants (ව්යංජන)</h2>
          <p className="text-sm text-slate-400 mb-6 bg-slate-800/50 p-3 rounded-lg border border-white/5 inline-block">
            Type the English letter to get the base consonant with hal-kirima (e.g., <code className="text-violet-300">k</code> → ක්). 
            Add a vowel modifier to complete it (e.g., <code className="text-violet-300">ka</code> → ක).
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { si: 'ක', en: 'ka' }, { si: 'ග', en: 'ga' }, { si: 'ච', en: 'cha' }, 
              { si: 'ජ', en: 'ja' }, { si: 'ට', en: 'ta' }, { si: 'ඩ', en: 'da' },
              { si: 'ත', en: 'tha' }, { si: 'ද', en: 'dha' }, { si: 'න', en: 'na' },
              { si: 'ප', en: 'pa' }, { si: 'බ', en: 'ba' }, { si: 'ම', en: 'ma' },
              { si: 'ය', en: 'ya' }, { si: 'ර', en: 'ra' }, { si: 'ල', en: 'la' },
            ].map((c) => (
              <div key={c.en} className="p-2 sm:p-3 bg-slate-800/40 rounded-xl border border-white/5 text-center flex flex-col items-center justify-between">
                <span className="text-2xl sm:text-3xl font-sinhala text-slate-100 mb-2">{c.si}</span>
                <span className="text-xs text-violet-300 font-mono bg-slate-950/50 py-1 px-2 rounded w-full">{c.en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bindings & Ligatures */}
        <section className="glass-panel p-6">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">Ligatures & Modifiers (පිළි)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
              <p className="text-sm font-semibold text-slate-300 mb-2">Yansaya</p>
              <div className="flex items-center gap-3">
                <code className="px-2 py-1 bg-slate-900 rounded text-emerald-300 font-mono text-sm">kya</code> 
                <span className="text-emerald-500">→</span>
                <span className="text-2xl font-sinhala text-slate-100">ක්ය</span> 
              </div>
            </div>
            <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
              <p className="text-sm font-semibold text-slate-300 mb-2">Rakaransaya</p>
              <div className="flex items-center gap-3">
                <code className="px-2 py-1 bg-slate-900 rounded text-emerald-300 font-mono text-sm">kra</code> 
                <span className="text-emerald-500">→</span>
                <span className="text-2xl font-sinhala text-slate-100">ක්ර</span> 
              </div>
            </div>
            <div className="p-4 bg-slate-800/40 rounded-xl border border-white/5">
              <p className="text-sm font-semibold text-slate-300 mb-2">Sannyaka</p>
              <div className="flex items-center gap-3">
                <code className="px-2 py-1 bg-slate-900 rounded text-emerald-300 font-mono text-sm">zga</code> 
                <span className="text-emerald-500">→</span>
                <span className="text-2xl font-sinhala text-slate-100">ඟ</span> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
