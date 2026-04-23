import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { cv } = useLanguage()

  return (
    <section id="certificates" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {cv.ui.certificates}
        </h2>
        <div className="space-y-3">
          {cv.certificates.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-esri-blue/50 transition-colors"
            >
              <GlobeIcon />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{cert.name}</p>
              </div>
              <span className="text-sm font-bold text-esri-blue bg-esri-blue/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlobeIcon() {
  return (
    <div className="w-9 h-9 rounded-lg bg-esri-dark flex items-center justify-center shrink-0">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    </div>
  )
}
