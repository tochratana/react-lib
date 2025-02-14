import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../components/locales/en.json";
import kh from "../components/locales/kh.json";

// Get the saved language from localStorage or default to "en"
const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kh: { translation: kh },
  },
  lng: savedLanguage, // Set the initial language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
