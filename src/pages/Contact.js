import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h1>{language === "kk" ? "Байланыс" : "Контакты"}</h1>
      <p>
        {language === "kk"
          ? "Кері байланыс үшін бізге хабарласыңыз."
          : "Свяжитесь с нами для обратной связи."}
      </p>
    </div>
  );
}

export default Contact;
