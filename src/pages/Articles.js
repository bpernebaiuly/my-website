import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import articlesData from "../data/articles.json";
import "../styles/global.css"; // Жалпы стильдерді қосу

function Articles() {
  const { language } = useContext(LanguageContext);
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setArticles(articlesData);
    setFilteredArticles(articlesData);
  }, []);

  // Іздеу функциясы
  useEffect(() => {
    let results = articles.filter(article =>
      article.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary[language].toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "all") {
      results = results.filter(article => article.category === selectedCategory);
    }

    setFilteredArticles(results);
  }, [searchTerm, selectedCategory, language, articles]);

  return (
    <div className="page-container">
      <h1>{language === "kk" ? "Мақалалар" : "Статьи"}</h1>

      {/* Іздеу жолағы */}
      <input
        type="text"
        placeholder={language === "kk" ? "Іздеу..." : "Поиск..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Фильтр батырмалары */}
      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory("all")}>
          {language === "kk" ? "Барлығы" : "Все"}
        </button>
        <button onClick={() => setSelectedCategory("education")}>
          {language === "kk" ? "Білім беру" : "Образование"}
        </button>
        <button onClick={() => setSelectedCategory("inclusion")}>
          {language === "kk" ? "Инклюзия" : "Инклюзия"}
        </button>
      </div>

      {/* Мақалалар тізімі (карточкалар түрінде) */}
      <section className="cards-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <div className="card" key={article.id}>
              <img src={`/images/articles/${article.image}`} alt={article.title[language]} />
              <h3>{article.title[language]}</h3>
              <p>{article.summary[language]}</p>
              <Link to={`/articles/${article.id}`}>
                {language === "kk" ? "Оқу" : "Читать"}
              </Link>
            </div>
          ))
        ) : (
          <p>{language === "kk" ? "Мақалалар табылмады" : "Статьи не найдены"}</p>
        )}
      </section>
    </div>
  );
}

export default Articles;
