export default function SettingsPage() {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto animate-in fade-in duration-700 mt-4 pb-12">
      <h1 className="text-3xl font-bold text-slate-200 mb-8">Settings</h1>
      
      <div className="grid gap-6">
        {/* Appearance overrides */}
        <section className="glass-panel p-6">
          <h2 className="text-xl font-semibold text-indigo-400 mb-4">Appearance</h2>
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="font-medium text-slate-200">Dark Mode</p>
              <p className="text-sm text-slate-500">Enable or disable subdued dark mode.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
            </label>
          </div>
        </section>

        {/* Custom Keymappings */}
        <section className="glass-panel p-6">
          <h2 className="text-xl font-semibold text-violet-400 mb-4">Typing Rules & Keymaps</h2>
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="font-medium text-slate-200">Custom Phonetic Mapping</p>
              <p className="text-sm text-slate-500">Override default Singlish rules (e.g., map &apos;f&apos; to &apos;ෆ&apos;).</p>
            </div>
            <button className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-white/5 disabled:opacity-50" disabled>
              Coming Soon
            </button>
          </div>
        </section>

        {/* PWA Cache Management */}
        <section className="glass-panel p-6">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">Advanced & Storage</h2>
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="font-medium text-slate-200">Clear Local Cache</p>
              <p className="text-sm text-slate-500">Free up space and clear offline PWA data.</p>
            </div>
            <button className="px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors border border-red-500/20 active:scale-95">
              Clear Data
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
