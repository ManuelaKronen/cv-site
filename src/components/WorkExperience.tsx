import { useLanguage } from '../context/LanguageContext'

export default function WorkExperience() {
  const { cv } = useLanguage()

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {cv.ui.experience}
        </h2>
        <div className="relative border-l-2 border-esri-blue/30 ml-3 space-y-10">
          {cv.experience.map((job, i) => (
            <div key={i} className="relative pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-esri-blue ring-4 ring-white" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
                <span className="text-sm text-slate-400">{job.period}</span>
              </div>
              <p className="text-esri-blue font-medium text-sm mb-3">
                {job.company} · {job.location}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
