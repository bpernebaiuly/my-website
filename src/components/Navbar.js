import { Link } from "react-router-dom";
import "../styles/global.css";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "var(--primary-color)", padding: "10px" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0 }}>
        <li><Link to="/" style={{ color: "white" }}>Басты бет</Link></li>
        <li><Link to="/articles" style={{ color: "white" }}>Мақалалар</Link></li>
        <li><Link to="/resources" style={{ color: "white" }}>Ресурстар</Link></li>
        <li><Link to="/contact" style={{ color: "white" }}>Байланыс</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
