import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h1>{language === "kk" ? "Басты бет" : "Главная страница"}</h1>
      <p>{language === "kk" ? "Бұл менің React сайтым!" : "Это мой сайт на React!"}</p>

      {/* "Мақалалар" бетіне сілтеме */}
      <Link to="/articles">
        <button>{language === "kk" ? "Мақалаларға өту" : "Перейти к статьям"}</button>
      </Link>
    </div>
  );
}

export default Home;
