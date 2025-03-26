import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Жаңа стиль файлы

function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>{language === "kk" ? "Қош келдіңіз!" : "Добро пожаловать!"}</h1>
        <p>
          {language === "kk"
            ? "Бұл сайт ата-аналар мен мамандар үшін пайдалы ақпарат ұсынуға арналған."
            : "Этот сайт предназначен для предоставления полезной информации родителям и специалистам."}
        </p>
        <Link to="/articles" className="hero-button">
          {language === "kk" ? "Мақалаларды оқу" : "Читать статьи"}
        </Link>
      </header>

      {/* Карточкалар */}
      <section className="cards-container">
        <div className="card">
          <img src="/images/articles.jpg" alt="Мақалалар" />
          <h3>{language === "kk" ? "Мақалалар" : "Статьи"}</h3>
          <p>{language === "kk" ? "Пайдалы мақалаларды оқыңыз." : "Читайте полезные статьи."}</p>
          <Link to="/articles">{language === "kk" ? "Толығырақ" : "Подробнее"}</Link>
        </div>

        <div className="card">
          <img src="/images/resources.jpg" alt="Ресурстар" />
          <h3>{language === "kk" ? "Ресурстар" : "Ресурсы"}</h3>
          <p>{language === "kk" ? "Қосымша материалдарды қараңыз." : "Просматривайте дополнительные материалы."}</p>
          <Link to="/resources">{language === "kk" ? "Толығырақ" : "Подробнее"}</Link>
        </div>

        <div className="card">
          <img src="/images/contact.jpg" alt="Байланыс" />
          <h3>{language === "kk" ? "Байланыс" : "Контакты"}</h3>
          <p>{language === "kk" ? "Бізбен байланысыңыз." : "Свяжитесь с нами."}</p>
          <Link to="/contact">{language === "kk" ? "Толығырақ" : "Подробнее"}</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
