import { useLanguage } from '../context/LanguageContext'
import { type Lang } from '../data'

export default function Navbar() {
  const { lang, cv, toggle } = useLanguage()

  const links = [
    { label: cv.ui.experience, href: '#experience' },
    { label: cv.ui.education, href: '#education' },
    { label: cv.ui.certificates, href: '#certificates' },
    { label: cv.ui.programmingCourses, href: '#programming' },
    { label: cv.ui.techStack, href: '#tech' },
    { label: cv.ui.languages, href: '#languages' },
  ]

  const options: { value: Lang; flag: string; label: string }[] = [
    { value: 'en', flag: '🇬🇧', label: 'EN' },
    { value: 'es', flag: '🇪🇸', label: 'ES' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <ul className="hidden md:flex items-center gap-5 flex-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs text-slate-600 hover:text-esri-blue transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 shrink-0">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => opt.value !== lang && toggle()}
              className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full transition-colors ${
                lang === opt.value
                  ? 'bg-esri-blue text-white'
                  : 'border border-slate-200 text-slate-500 hover:border-esri-blue hover:text-esri-blue'
              }`}
            >
              <span>{opt.flag}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
