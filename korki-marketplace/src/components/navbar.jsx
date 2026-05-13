import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <Logo size="md" showSub={false} />
      </Link>
      <ul className="nav-links">
        <li>
          <a href="#">Platforma</a>
        </li>
        <li>
          <a href="#">Jak to Działa</a>
        </li>
      </ul>
      <div className="nav-right">
        <Link to="/login" className="btn-ghost">
          Zaloguj się
        </Link>
        <button className="btn-primary">Zarejestruj się</button>
      </div>
    </nav>
  );
}
