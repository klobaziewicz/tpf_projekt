import { Link } from "react-router-dom";
import Logo from "./logo";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, loading, logOut } = useAuth();

  return (
    <nav className="nav">
      <Link to="/home" className="nav-logo">
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
        {!loading && user ? (
          <>
            <span className="nav-user">{user.email}</span>
            <button type="button" className="btn-ghost" onClick={logOut}>
              Wyloguj się
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-ghost">
              Zaloguj się
            </Link>
            <button className="btn-primary">Zarejestruj się</button>
          </>
        )}
      </div>
    </nav>
  );
}
