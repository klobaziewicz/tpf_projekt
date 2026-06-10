import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import "../home/home.css";
import "./search.css";

const subcategories = [
  { id: "math", name: "Matematyka", icon: "Σ" },
  { id: "phys", name: "Fizyka", icon: "⚛" },
  { id: "lang", name: "Języki", icon: "文" },
];

const specializations = ["Algebra", "Geometria", "Statystyka"];

const tutors = [
  {
    id: "jakub",
    name: "Jakub",
    price: 70,
    rating: 5.0,
    reviews: 10,
    desc: "Absolwent Politechniki Warszawskiej. Specjalista w...",
    tags: [
      { label: "ALGEBRA", premium: false },
      { label: "STATYSTYKA", premium: false },
      { label: "PREMIUM", premium: true },
    ],
    availability: "Dostępność: Pon, Śr, Pt",
    avatarClass: "avatar-jakub",
    responseTime: false,
    iconType: "calendar",
    premiumVerified: true,
  },
  {
    id: "anna",
    name: "Anna",
    price: 85,
    rating: 4.9,
    reviews: 10,
    desc: "Doktorantka fizyki teoretycznej. Wyjaśniam złożone zjawiska...",
    tags: [
      { label: "FIZYKA", premium: false },
      { label: "GEOMETRIA", premium: false },
    ],
    availability: "Czas odpowiedzi: ~1 godz.",
    avatarClass: "avatar-anna",
    responseTime: true,
    iconType: "clock",
    premiumVerified: false,
  },
  {
    id: "marek",
    name: "marek",
    displayName: "Marek",
    price: 60,
    rating: 4.8,
    reviews: 10,
    desc: "Praktyczne podejście do geometrii i architektury. Pomagam studento...",
    tags: [
      { label: "GEOMETRIA", premium: false },
      { label: "ARCHITEKTURA", premium: false },
    ],
    availability: "Warszawa / Online",
    avatarClass: "avatar-marek",
    responseTime: false,
    iconType: "location",
    premiumVerified: false,
  },
  {
    id: "kasia",
    name: "Kasia",
    price: 95,
    rating: 5.0,
    reviews: 10,
    desc: "Studentka Uniwersytetu Medycznego. Fizyka to moja pasj...",
    tags: [
      { label: "FIZYKA", premium: false },
      { label: "BIOLOGIA", premium: false },
    ],
    availability: "Wschodząca gwiazda",
    avatarClass: "avatar-kasia",
    responseTime: false,
    iconType: "trending",
    premiumVerified: false,
  },
];

function FooterIcon({ type }) {
  if (type === "calendar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }
  if (type === "trending") {
    return (
      <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    );
  }
  return null;
}

function AvatarMock({ type }) {
  return (
    <div className={`avatar-mock ${type}`}>
      <svg viewBox="0 0 24 24" fill="none" width="40%" height="40%" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

export default function Search() {
  const [activeSub, setActiveSub] = useState("math");
  const [activeSpec, setActiveSpec] = useState("Algebra");
  const [sortBy, setSortBy] = useState("rating");
  const [page, setPage] = useState(1);

  return (
    <div className="tutor-app search-page">
      <Navbar activeLink="platforma" />

      <div className="search-container">
        <aside className="search-sidebar">
          <div className="sidebar-header">
            <div>
              <h2>Filtry</h2>
              <p>Zawęź wyszukiwanie</p>
            </div>
            <span className="sidebar-filter-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </span>
          </div>

          <div className="filter-section">
            <h4>PODKATEGORIA</h4>
            <ul className="subcategory-list">
              {subcategories.map((sub) => (
                <li key={sub.id}>
                  <button
                    type="button"
                    className={`subcategory-btn ${activeSub === sub.id ? "active" : ""}`}
                    onClick={() => setActiveSub(sub.id)}
                  >
                    <span className="sub-icon">{sub.icon}</span>
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h4>SPECJALIZACJA</h4>
            <div className="spec-tags">
              {specializations.map((spec) => (
                <button
                  key={spec}
                  type="button"
                  className={`spec-tag ${activeSpec === spec ? "active" : ""}`}
                  onClick={() => setActiveSpec(spec)}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="btn-apply-filters">
            Zastosuj filtry
          </button>

          <div className="sidebar-footer">
            <button type="button" className="sidebar-link">
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              Ustawienia
            </button>
            <button type="button" className="sidebar-link">
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Pomoc
            </button>
          </div>
        </aside>

        <main className="search-main">
          <div className="search-header">
            <div className="search-header-text">
              <h1 className="search-title">Znaleziono 32 korepetytorów</h1>
              <p className="search-subtitle">
                Dopasowane do Twoich kryteriów dla Matematyki i Fizyki na
                poziomie akademickim.
              </p>
            </div>
            <div className="sort-control">
              <label htmlFor="sort">Sortuj wg:</label>
              <div className="sort-select-wrap">
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="rating">Najwyższa ocena</option>
                  <option value="price-asc">Najniższa cena</option>
                  <option value="price-desc">Najwyższa cena</option>
                </select>
                <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="#888"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="tutors-grid">
            {tutors.slice(0, 2).map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}

            <div className="featured-banner">
              <div className="featured-math-card" aria-hidden="true">
                <div className="math-row">
                  <span>−</span>
                  <span>×</span>
                </div>
                <div className="math-row">
                  <span>+</span>
                  <span>=</span>
                </div>
              </div>
              <div className="featured-content">
                <span className="featured-label">POLECANY KOREPETYTOR</span>
                <h3>
                  Opanuj analizę matematyczną na poziomie akademickim z Marią
                </h3>
                <p>
                  Maria specjalizuje się w intensywnym przygotowaniu do egzaminów dla
                  studentów kierunków STEM. Obecnie przyjmuje 2 nowych uczniów na semestr
                  letni.
                </p>
                <div className="featured-bottom">
                  <div className="featured-teacher">
                    <div className="featured-avatar-mock">
                      <AvatarMock type="avatar-maria" />
                    </div>
                    <div>
                      <strong>Maria Zawadzka</strong>
                      <span>Mgr Matematyki, AGH</span>
                    </div>
                  </div>
                  <Link to="/tutor/maria" className="btn-featured">
                    Zobacz profil
                  </Link>
                </div>
              </div>
            </div>

            {tutors.slice(2).map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>

          <div className="pagination">
            <button
              type="button"
              className="page-btn page-arrow"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              aria-label="Poprzednia strona"
            >
              &lt;
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                type="button"
                className={`page-btn ${page === p ? "active" : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
            <span className="page-dots">...</span>
            <button type="button" className="page-btn" onClick={() => setPage(8)}>
              8
            </button>
            <button
              type="button"
              className="page-btn page-arrow"
              onClick={() => setPage(page + 1)}
              aria-label="Następna strona"
            >
              &gt;
            </button>
          </div>
        </main>
      </div>

      <button type="button" className="chat-widget" aria-label="Czat">
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

function TutorCard({ tutor }) {
  const displayName = tutor.displayName || tutor.name;
  return (
    <article className="tutor-card">
      <div className="tutor-card-top">
        <div className="tutor-avatar-wrapper">
          <AvatarMock type={tutor.avatarClass} />
          {tutor.premiumVerified && (
            <span className="premium-verified-badge" title="Zweryfikowany Profil Premium">
              <svg viewBox="0 0 24 24" fill="none" width="8" height="8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          )}
        </div>
        <div className="tutor-card-head">
          <div className="tutor-head-main">
            <h3>{displayName}</h3>
            <div className="tutor-rating">
              <span className="star">★</span>
              <span className="rating-value">{tutor.rating.toFixed(1)}</span>
              <span className="reviews-count">({tutor.reviews} opinii)</span>
            </div>
          </div>
          <div className="tutor-price-block">
            <span className="price-amount">{tutor.price} PLN</span>
            <span className="price-label">ZA GODZINĘ</span>
          </div>
        </div>
      </div>

      <p className="tutor-desc">{tutor.desc}</p>

      <div className="tutor-tags">
        {tutor.tags.map((tag) => (
          <span
            key={tag.label}
            className={`tutor-tag ${tag.premium ? "premium" : ""}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className="tutor-footer">
        <span className="tutor-availability">
          <FooterIcon type={tutor.iconType} />
          {tutor.availability}
        </span>
        <Link to={`/tutor/${tutor.id}`} className="btn-trial">
          Umów lekcję próbną
        </Link>
      </div>
    </article>
  );
}
