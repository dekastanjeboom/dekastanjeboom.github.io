import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationNL from './locales/nl/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  nl: {
    translation: translationNL,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "nl",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;