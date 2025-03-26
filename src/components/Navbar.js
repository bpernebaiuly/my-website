import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Басты бет</Link></li>
        <li><Link to="/articles">Мақалалар</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
