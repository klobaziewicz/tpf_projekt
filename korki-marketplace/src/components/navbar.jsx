import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { useAuth } from "../hooks/useAuth";

export default function Navbar({ activeLink }) {
  const { user, loading, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Zamknij dropdown po kliknięciu poza nim
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Inicjały z displayName lub pierwsza litera emaila
  const getInitials = () => {
    if (user?.displayName) {
      return user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    return user?.email?.[0].toUpperCase() ?? "?";
  };

  const handleLogOut = async () => {
    setDropdownOpen(false);
    await logOut();
    navigate("/");
  };

  return (
    <nav className="nav">
      <Link to="/home" className="nav-logo">
        <Logo size="md" showSub={false} />
      </Link>

      <ul className="nav-links">
        <li>
          <Link
            to="/search"
            className={activeLink === "platforma" ? "nav-active" : undefined}
          >
            Platforma
          </Link>
        </li>
        <li>
          <a href="/home#how-it-works">Jak to Działa</a>
        </li>
      </ul>

      <div className="nav-right">
        {!loading && user ? (
          /* ── ZALOGOWANY ── */
          <div className="nav-avatar-wrapper" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-avatar-btn ${dropdownOpen ? "open" : ""}`}
              onClick={() => setDropdownOpen((o) => !o)}
              aria-expanded={dropdownOpen}
              aria-label="Menu użytkownika"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName ?? "Użytkownik"}
                  className="nav-avatar-img"
                />
              ) : (
                <div className="nav-avatar-initials">{getInitials()}</div>
              )}
              <span className="nav-avatar-name">
                {user.displayName?.split(" ")[0] ?? user.email?.split("@")[0]}
              </span>
              <svg
                className="nav-avatar-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="nav-dropdown">
                <div className="nav-dd-user">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="nav-dd-avatar-img"
                    />
                  ) : (
                    <div className="nav-dd-avatar">{getInitials()}</div>
                  )}
                  <div>
                    <div className="nav-dd-name">
                      {user.displayName ?? "Użytkownik"}
                    </div>
                    <div className="nav-dd-email">{user.email}</div>
                  </div>
                </div>

                <div className="nav-dd-divider" />

                <Link
                  to="/dashboard"
                  className="nav-dd-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                  </svg>
                  Dashboard
                </Link>

                <Link
                  to="/profil"
                  className="nav-dd-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                  Edytuj profil
                </Link>

                <Link
                  to="/ustawienia"
                  className="nav-dd-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                  Ustawienia
                </Link>

                <div className="nav-dd-divider" />

                <button
                  type="button"
                  className="nav-dd-item danger"
                  onClick={handleLogOut}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Wyloguj się
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ── NIEZALOGOWANY ── */
          <>
            <Link to="/" className="btn-ghost">
              Zaloguj się
            </Link>
            <Link to="/register" className="btn-primary nav-register">
              Zarejestruj się
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}