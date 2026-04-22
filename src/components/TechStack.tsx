import { useLanguage } from '../context/LanguageContext'

export default function TechStack() {
  const { cv } = useLanguage()
  const { techStack, ui } = cv

  const categories = [
    { label: ui.techCategories.esri, items: techStack.esri },
    { label: ui.techCategories.development, items: techStack.development },
    { label: ui.techCategories.other, items: techStack.other },
  ]

  return (
    <section id="tech" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          {ui.techStack}
        </h2>
        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="text-xs font-semibold text-esri-blue uppercase tracking-widest mb-3">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-esri-blue hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
