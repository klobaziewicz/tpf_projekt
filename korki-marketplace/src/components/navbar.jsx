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
          <Link to="/">Platforma</Link>
        </li>
        <li>
          <Link to="/">Jak to Działa</Link>
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
