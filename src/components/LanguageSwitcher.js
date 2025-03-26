import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => setLanguage("kk")} disabled={language === "kk"}>Қазақша</button>
      <button onClick={() => setLanguage("ru")} disabled={language === "ru"}>Русский</button>
    </div>
  );
}

export default LanguageSwitcher;
