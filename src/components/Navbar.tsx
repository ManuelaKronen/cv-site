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

  const options: { value: Lang; flag: JSX.Element; label: string }[] = [
    { value: 'en', flag: <FlagEN />, label: 'EN' },
    { value: 'es', flag: <FlagES />, label: 'ES' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 px-6">
      <div className="max-w-4xl mx-auto h-14 flex items-center justify-between gap-4">
        <ul className="hidden md:flex items-center gap-5 flex-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs text-esri-dark hover:bg-white hover:text-esri-dark px-2 py-1 rounded transition-colors whitespace-nowrap"
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
              className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full transition-colors ${
                lang === opt.value
                  ? 'bg-esri-blue text-white'
                  : 'border border-slate-200 text-slate-500 hover:border-esri-blue hover:text-esri-blue'
              }`}
            >
              {opt.flag}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function FlagEN() {
  return (
    <svg viewBox="0 0 60 36" width="20" height="12" className="rounded-sm shrink-0" aria-hidden="true">
      <rect width="60" height="36" fill="#012169"/>
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="white" strokeWidth="9"/>
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="5"/>
      <rect x="22" y="0" width="16" height="36" fill="white"/>
      <rect x="0" y="10" width="60" height="16" fill="white"/>
      <rect x="25" y="0" width="10" height="36" fill="#C8102E"/>
      <rect x="0" y="13" width="60" height="10" fill="#C8102E"/>
    </svg>
  )
}

function FlagES() {
  return (
    <svg viewBox="0 0 60 36" width="20" height="12" className="rounded-sm shrink-0" aria-hidden="true">
      <rect width="60" height="36" fill="#c60b1e"/>
      <rect y="9" width="60" height="18" fill="#ffc400"/>
    </svg>
  )
}
