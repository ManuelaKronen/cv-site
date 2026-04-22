import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, cv, toggle } = useLanguage()

  const links = [
    { label: cv.ui.experience, href: '#experience' },
    { label: cv.ui.education, href: '#education' },
    { label: cv.ui.certificates, href: '#certificates' },
    { label: cv.ui.techStack, href: '#tech' },
    { label: cv.ui.languages, href: '#languages' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-esri-blue font-semibold text-sm tracking-wide">ArcGIS SE</span>
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-slate-600 hover:text-esri-blue transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 hover:border-esri-blue hover:text-esri-blue transition-colors"
          >
            <span>{lang === 'en' ? '🇬🇧' : '🇪🇸'}</span>
            <span>{lang === 'en' ? 'EN' : 'ES'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
