import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { cv } = useLanguage()

  return (
    <section id="education" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {cv.ui.education}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {cv.education.map((edu, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5 hover:border-esri-blue/50 transition-colors">
              <p className="text-xs font-bold text-esri-blue uppercase tracking-widest mb-1">
                {edu.period}
              </p>
              <h3 className="font-semibold text-slate-900 mb-1">{edu.degree}</h3>
              <p className="text-sm text-slate-600">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
