import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from "./en/english.json";
import estonian from "./et/estonian.json";
import spanish from "./es/spanish.json";
import portuguese from "./pt/portuguese.json";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "pt_BR",
    resources: {
      en_US: english,
      pt_BR: portuguese,
      es_ES: spanish,
      et: estonian,
    },
    compatibilityJSON: "v3",
    react: {
      useSuspense: false,
    },
  });

export default i18n;
