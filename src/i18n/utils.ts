import { translations, defaultLang, type Language, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|fr)/, '');
  return `/${lang}${cleanPath || '/'}`;
}

export function getAlternateLocale(lang: Language): Language {
  return lang === 'en' ? 'fr' : 'en';
}
