import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const categories = [
  { bg: "cat-bg-math", emoji: "📐", tag: "NAUKI ŚCISŁE", name: "Matematyka" },
  { bg: "cat-bg-phys", emoji: "⚡", tag: "NAUKI ŚCISŁE", name: "Fizyka" },
  { bg: "cat-bg-lang", emoji: "📚", tag: "JĘZYKI", name: "Języki Obce" },
];

const steps = [
  {
    emoji: "🔍",
    num: "Krok 01",
    title: "Znajdź Nauczyciela",
    desc: "Odkryj grono ekspertów w wybranej dziedzinie. Filtruj według tematu, ceny i dostępności.",
  },
  {
    emoji: "📋",
    num: "Krok 02",
    title: "Umów Sesję",
    desc: "Skontaktuj się z nauczycielem i umów pierwszą lekcję w terminie odpowiednim dla Ciebie.",
  },
  {
    emoji: "🎯",
    num: "Krok 03",
    title: "Osiągnij Cel",
    desc: "Ucz się we własnym tempie i śledź postępy. Twój nauczyciel jest z Tobą na każdym etapie.",
  },
];

const testimonials = [
  {
    stars: 4,
    text: "Polecam serdecznie wszystkim! Twoje Korki to świetna platforma — znalazłam idealnego nauczyciela matematyki dla mojej córki w ciągu kilku minut.",
    name: "Michał Nowak",
    role: "Rodzic ucznia, Kraków",
    avatarColor: "var(--color-primary)",
    initials: "MN",
  },
  {
    stars: 5,
    text: "Dzięki tej platformie zdałem maturę z fizyki na 95%! Pan Kowalski to niesamowity nauczyciel, który tłumaczy wszystko prostym językiem.",
    name: "Julia Kowalska",
    role: "Maturzystka, Warszawa",
    avatarColor: "var(--color-success)",
    initials: "JK",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <>
      {/* <style>{styles}</style> */}
      <div className="tutor-app">
        {/* NAV */}
        <Navbar />

        {/* HERO */}
        <section style={{ background: "#fff" }}>
          <div className="hero">
            <div className="hero-content">
              <span className="hero-badge">Platforma Edukacyjna</span>
              <h1 className="hero-title">
                Znajdź idealnego
                <br />
                <em>nauczyciela.</em>
              </h1>
              <p className="hero-subtitle">
                Wyselekcjonowana grono ekspertów, którzy pomogą Ci osiągnąć
                możliwości w wybranej dziedzinie. Nauka rośnie razem z Twoimi
                ambicjami.
              </p>
              <form className="search-bar" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Szukaj po dziedzinie..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  Szukaj
                </button>
              </form>
            </div>

            <div className="hero-image">
              <div className="hero-img-card">
                <div className="hero-img-avatar">👨‍🏫</div>
                <div className="hero-quote-bubble">
                  "Nauka matematyki stała się dla mnie przyjemnością dzięki
                  świetnemu nauczycielowi z Twoje Korki."
                  <strong>Anna K. — uczennica liceum</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <div className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Eksperckie Dziedziny</h2>
            </div>
            <Link to="/" className="section-link">
              Wszystkie kategorie →
            </Link>
          </div>
          <p className="section-desc">
            Specjaliści w matematyce, naukach ścisłych i językach obcych czekają
            na Ciebie.
          </p>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div key={cat.name} className="category-card">
                <div className={`cat-bg ${cat.bg}`}>{cat.emoji}</div>
                <div className="category-label">
                  <span className="cat-tag">{cat.tag}</span>
                  <span className="cat-name">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="how-section" id="how-it-works">
          <div className="how-inner">
            <h2 className="section-title">Jak to Działa</h2>
            <div className="steps-grid">
              {steps.map((step) => (
                <div key={step.title} className="step">
                  <div className="step-icon">{step.emoji}</div>
                  <div className="step-num">{step.num}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="testimonials-section">
          <div className="testimonials-left">
            <h2 className="section-title">W słowach naszych studentów</h2>
            <p>
              Dołącz do tysięcy uczniów, którzy zmienili swoje wyniki i
              zamiłowanie do nauki dzięki platformie Twoje Korki.
            </p>
            <div className="stats-row">
              <div className="stat">
                <div className="stat-num">4,200</div>
                <div className="stat-label">Aktywnych uczniów</div>
              </div>
              <div className="stat">
                <div className="stat-num">620+</div>
                <div className="stat-label">Ekspertów</div>
              </div>
            </div>
          </div>

          <div className="testimonial-cards">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="stars">
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div
                    className="author-avatar"
                    style={{ background: t.avatarColor }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
