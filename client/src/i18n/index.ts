import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import mrTranslation from "./locales/mr/translation.json";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    resources: {
      en: { translation: enTranslation },
      mr: { translation: mrTranslation },
    },
  });

export default i18n;
