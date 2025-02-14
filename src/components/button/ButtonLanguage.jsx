import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../js/i18n.js";
import cambodiaFlag from "../../../public/img/cambodia-flag.png";
import englishFlag from "../../../public/img/english-flag.png";

const ButtonLanguage = () => {
  const { i18n } = useTranslation();

  // Get saved language or default to English
  const savedLanguage = localStorage.getItem("language") || "en";

  // State to track the current flag
  const [currentFlag, setCurrentFlag] = useState(
    savedLanguage === "en" ? englishFlag : cambodiaFlag
  );

  useEffect(() => {
    i18n.changeLanguage(savedLanguage);
  }, [savedLanguage, i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "kh" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);

    // Update flag based on language
    setCurrentFlag(newLang === "en" ? englishFlag : cambodiaFlag);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 "
    >
      <img src={currentFlag} alt="Language Flag" className="w-8 h-8" />
    </button>
  );
};

export default ButtonLanguage;
