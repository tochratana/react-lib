import React from "react";
import { useTranslation } from "react-i18next";

const AnotherComponent = () => {
  const { t } = useTranslation();

  return (
    <button className="px-4 py-2 bg-green-500 text-white rounded">
      {t("button_text")}
    </button>
  );
};

export default AnotherComponent;
