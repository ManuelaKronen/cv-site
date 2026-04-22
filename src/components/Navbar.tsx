const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Languages', href: '#languages' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-esri-blue font-semibold text-sm tracking-wide">ArcGIS SE</span>
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
      </div>
    </nav>
  )
}
