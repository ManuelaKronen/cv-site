import { languages } from '../data'

const levelWidth: Record<string, string> = {
  Native: 'w-full',
  Fluent: 'w-5/6',
  Advanced: 'w-4/5',
  Intermediate: 'w-3/5',
  Basic: 'w-2/5',
}

export default function Languages() {
  return (
    <section id="languages" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          Languages
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {languages.map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-slate-800">{lang.name}</span>
                <span className="text-slate-400">{lang.level}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div
                  className={`h-2 rounded-full bg-esri-blue ${levelWidth[lang.level] ?? 'w-1/2'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
