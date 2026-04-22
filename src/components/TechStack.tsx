import { techStack } from '../data'

export default function TechStack() {
  return (
    <section id="tech" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-esri-blue hover:text-white transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
