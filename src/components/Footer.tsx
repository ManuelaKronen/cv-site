import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="bg-esri-dark text-slate-400 py-8 px-6 text-center text-sm">
      <p>
        {profile.name} · {profile.title}
      </p>
      <p className="mt-1">
        <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
          {profile.email}
        </a>
      </p>
    </footer>
  )
}
