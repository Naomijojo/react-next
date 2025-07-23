import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// 客戶端初始化 i18n
if (typeof window !== 'undefined') {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'zh',
      debug: true, // 開啟debug模式
      
      interpolation: {
        escapeValue: false,
      },
      
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',

        convertDetectedLanguage: (lng) => {
          if (lng.startsWith('zh')) return 'zh'
          return lng
        }
      },
    });
}

export default i18n; 