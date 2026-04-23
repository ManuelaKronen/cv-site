import { useLanguage } from '../context/LanguageContext'

const levelWidth: Record<string, string> = {
  Native: 'w-full',
  Nativo: 'w-full',
  C2: 'w-11/12',
  C1: 'w-4/5',
  B2: 'w-3/5',
  B1: 'w-2/5',
}

function barWidth(level: string): string {
  const key = level.split(' ')[0]
  return levelWidth[key] ?? 'w-1/2'
}

export default function Languages() {
  const { cv } = useLanguage()

  return (
    <section id="languages" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {cv.ui.languages}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {cv.languages.map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between text-base mb-1.5">
                <span className="font-medium text-slate-800">{lang.name}</span>
                <span className="text-slate-500">{lang.level}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className={`h-2 rounded-full bg-esri-blue ${barWidth(lang.level)}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
