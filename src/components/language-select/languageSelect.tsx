import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { useTranslation } from "react-i18next";
import { languageDetected } from "../../helpers/languageDetected";
import '../group-select/groupSelect.css';

const LanguageSelect = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const { lang } = useAppContext();
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    const newPath = pathname.replace(lang, newLang);
    navigate(newPath, {state});
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="select" >
      <div className="select__wrap">
        <select
          onChange={changeLanguage}
          className="select__field"
          defaultValue={languageDetected(pathname)}
          name="lang"
        >
          <option value="uz">O'zbek</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelect;