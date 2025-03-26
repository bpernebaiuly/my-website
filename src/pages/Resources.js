import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Resources() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h1>{language === "kk" ? "Пайдалы ресурстар" : "Полезные ресурсы"}</h1>
      <p>
        {language === "kk"
          ? "Мұнда пайдалы материалдар мен құжаттарды табуға болады."
          : "Здесь вы найдете полезные материалы и документы."}
      </p>
    </div>
  );
}

export default Resources;
