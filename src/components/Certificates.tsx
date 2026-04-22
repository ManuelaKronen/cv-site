import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { cv } = useLanguage()

  return (
    <section id="certificates" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {cv.ui.certificates}
        </h2>
        <div className="space-y-3">
          {cv.certificates.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-esri-blue/50 transition-colors"
            >
              <EsriLogo />
              <div className="flex-1">
                <p className="font-medium text-slate-900 text-sm">{cert.name}</p>
              </div>
              <span className="text-xs font-semibold text-esri-blue bg-esri-blue/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EsriLogo() {
  return (
    <div className="w-12 h-9 rounded-lg bg-esri-dark flex items-center justify-center shrink-0">
      <span className="text-white font-bold text-sm tracking-widest select-none">esri</span>
    </div>
  )
}
