import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XhrBackend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import 'moment/locale/fr';

const backend = {
  loadPath: '/locales/{{lng}}.json',
  crossDomain: true,
};

i18n
  .use(LanguageDetector)
  .use(XhrBackend)
  .use(initReactI18next)
  .init({
    backend,

    fallbackLng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
