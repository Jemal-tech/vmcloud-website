import { translations, defaultLang, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: keyof typeof translations['ro']): string {
  return translations[lang][key] || translations[defaultLang][key] || key;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ro' ? 'en' : 'ro';
}

export function getNavItems(lang: Lang) {
  return [
    { label: t(lang, 'nav.home'), href: getLocalizedPath(lang, '/') },
    { label: t(lang, 'nav.why-us'), href: getLocalizedPath(lang, lang === 'ro' ? '/de-ce-noi/' : '/why-us/') },
    { label: t(lang, 'nav.blog'), href: getLocalizedPath(lang, '/blog/') },
    { label: t(lang, 'nav.portfolio'), href: getLocalizedPath(lang, lang === 'ro' ? '/portofoliu/' : '/portfolio/') },
    { label: t(lang, 'nav.contact'), href: getLocalizedPath(lang, '/contact/') },
  ];
}
