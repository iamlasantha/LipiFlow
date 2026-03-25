import { Editor } from '@/components/Editor';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col animate-in fade-in duration-700 w-full mt-4">
      <div className="w-full flex justify-between items-end mb-4 px-2">
        <h1 className="text-2xl font-bold text-slate-200">
          Transliterate
        </h1>
        <p className="text-sm text-slate-500">Real-time phonetic translation</p>
      </div>
      <Editor />
      {/* Toolbar placeholder */}
    </div>
  );
}
