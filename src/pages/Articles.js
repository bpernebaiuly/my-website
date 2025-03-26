import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import articlesData from "../data/articles.json";

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
    <div>
      <h1>{language === "kk" ? "Мақалалар" : "Статьи"}</h1>

      {/* Іздеу жолағы */}
      <input
        type="text"
        placeholder={language === "kk" ? "Іздеу..." : "Поиск..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />

      {/* Фильтр батырмалары */}
      <div>
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

      <ul>
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>{article.title[language]}</Link>
              <p>{article.summary[language]}</p>
            </li>
          ))
        ) : (
          <p>{language === "kk" ? "Мақалалар табылмады" : "Статьи не найдены"}</p>
        )}
      </ul>
    </div>
  );
}

export default Articles;
