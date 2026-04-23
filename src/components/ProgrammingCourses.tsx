import { useLanguage } from '../context/LanguageContext'

export default function ProgrammingCourses() {
  const { cv } = useLanguage()

  return (
    <section id="programming" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {cv.ui.programmingCourses}
        </h2>
        <div className="space-y-3">
          {cv.programmingCourses.map((course, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:border-esri-blue/50 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-esri-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">{course.name}</p>
              </div>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                {course.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
