import React from "react";
import { useTranslation } from "react-i18next";
const Text = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default Text;
