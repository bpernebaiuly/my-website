import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div>
          <LanguageSwitcher />
          <Navbar />  {/* Навигацияны барлық беттерде көрсету */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
