import { createContext, useContext, useState } from 'react'
import { data, type CVData, type Lang } from '../data'

type LanguageContextType = {
  lang: Lang
  cv: CVData
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang((l) => (l === 'en' ? 'es' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, cv: data[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
