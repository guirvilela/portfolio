import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUs from "../i18n/en_US.json";
import ptBr from "../i18n/pt_BR.json";

export const configureTranslate = () => {
  i18n.use(initReactI18next).init({
    resources: {
      pt: {
        translation: ptBr,
      },
      en: {
        translation: enUs,
      },
    },
    lng: "pt",
    fallbackLng: "pt",
  });

  return i18n;
};
