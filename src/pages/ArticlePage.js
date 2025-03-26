import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import articlesData from "../data/articles.json";

function ArticlePage() {
  const { language } = useContext(LanguageContext);
  const { id } = useParams();
  const article = articlesData.find(a => a.id === parseInt(id));

  if (!article) return <h2>{language === "kk" ? "Мақала табылмады" : "Статья не найдена"}</h2>;

  return (
    <div>
      <h1>{article.title[language]}</h1>
      <p>{article.summary[language]}</p>
    </div>
  );
}

export default ArticlePage;
