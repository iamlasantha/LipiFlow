import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-2 z-50 w-full glass-panel px-5 py-3 flex items-center justify-between max-w-7xl mx-auto mt-2">
      <div className="flex items-center gap-2">
        <Link 
          href="/" 
          className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400"
        >
          සිංLipiFlow
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <Link href="/" className="hover:text-indigo-400 transition-colors">
          Editor
        </Link>
        <Link href="/settings" className="hover:text-indigo-400 transition-colors">
          Settings
        </Link>
        <Link href="/help" className="hover:text-indigo-400 transition-colors">
          Help
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Placeholder */}
        <button 
          className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-white/5 transition-colors focus:ring-2 focus:ring-indigo-500 outline-none" 
          aria-label="Toggle Theme"
        >
          <svg className="w-5 h-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
