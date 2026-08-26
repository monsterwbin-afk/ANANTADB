import React, { createContext, useContext, useState } from 'react';
import { translations } from '../locales';

export type Language = 'EN' | 'CN' | 'TW' | 'JP' | 'KR' | 'DE' | 'FR' | 'IT' | 'RU';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('EN');

  const t = (key: string) => {
    const keys = key.split('.');
    let val: any = translations[lang as keyof typeof translations];
    for (const k of keys) {
      if (val === undefined) break;
      val = val[k];
    }
    return val || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
