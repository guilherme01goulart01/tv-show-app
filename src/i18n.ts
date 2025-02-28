import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a TV Show app.",
    },
  },
  pt: {
    translation: {
      welcome: "Bem-vindo",
      description: "Este é um aplicativo de séries de TV.",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      description: "Esta es una aplicación de series de TV.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma padrão
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
