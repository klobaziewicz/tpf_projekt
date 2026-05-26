import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


const tutors = [
  {
    id: 1,
    name: "Jakub",
    price: "70 PLN",
    rating: 5.0,
    subjects: ["Algebra", "Statystyka"],
    desc: "Absolwent Politechniki Warszawskiej. Specjalista w matematyce akademickiej.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    location: "Pon, Śr, Pt",
  },
  {
    id: 2,
    name: "Anna",
    price: "85 PLN",
    rating: 4.9,
    subjects: ["Fizyka", "Geometria"],
    desc: "Doktorantka fizyki teoretycznej. Wyjaśniam złożone zagadnienia prostym językiem.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    location: "Odpowiedź do 1h",
  },
  {
    id: 3,
    name: "Marek",
    price: "60 PLN",
    rating: 4.8,
    subjects: ["Geometria", "Architektura"],
    desc: "Praktyczne podejście do geometrii i architektury. Pomagam studentom technicznym.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    location: "Warszawa / Online",
  },
  {
    id: 4,
    name: "Kasia",
    price: "95 PLN",
    rating: 5.0,
    subjects: ["Fizyka", "Biologia"],
    desc: "Studentka Uniwersytetu Medycznego. Fizyka i biologia to moja pasja.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
    location: "Wschodząca gwiazda",
  },
];

const filters = {
  categories: ["Matematyka", "Fizyka", "Języki"],
  specializations: ["Algebra", "Geometria", "Statystyka"],
};

export default function Platform() {
  return (
    <>
      <div className="tutors-page">
        <Navbar />

        <div className="tutors-layout">
          {/* SIDEBAR */}
          <aside className="filters-sidebar">
            <div>
              <div className="filters-top">
                <button className="filter-icon">☰</button>
                <div>
                  <h4>Filtry</h4>
                  <p>Zawęż wyszukiwanie</p>
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Podkategoria</span>

                {filters.categories.map((cat, index) => (
                  <button
                    key={cat}
                    className={`filter-item ${
                      index === 0 ? "active-filter" : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="filter-group">
                <span className="filter-label">Specjalizacje</span>

                <div className="filter-tags">
                  {filters.specializations.map((item, index) => (
                    <span
                      key={item}
                      className={`tag ${index === 0 ? "active-tag" : ""}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar-bottom">
              <button className="apply-btn">Zastosuj filtry</button>

              <div className="sidebar-links">
                <button>⚙️ Ustawienia</button>
                <button>❓ Pomoc</button>
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main className="tutors-content">
            {/* TOP */}
            <div className="tutors-header">
              <div>
                <span className="opinions">(10 opinii)</span>

                <h1>
                  Znaleziono 32
                  <br />
                  korepetytorów
                </h1>

                <p>
                  Dopasowano do Twoich kryteriów dla Matematyki i Fizyki
                  na poziomie akademickim.
                </p>
              </div>

              <div className="sort-box">
                <span>Sortuj wg:</span>

                <select>
                  <option>Najwyższa ocena</option>
                  <option>Najniższa cena</option>
                  <option>Popularność</option>
                </select>
              </div>
            </div>

            {/* GRID */}
            <div className="tutors-grid">
              {tutors.slice(0, 2).map((tutor) => (
                <div key={tutor.id} className="tutor-card">
                  <div className="card-top">
                    <img src={tutor.avatar} alt={tutor.name} />

                    <div className="card-info">
                      <div className="name-row">
                        <div>
                          <h3>{tutor.name}</h3>
                          <span className="rating">⭐ {tutor.rating}</span>
                        </div>

                        <div className="price">
                          {tutor.price}
                          <span>ZA GODZINĘ</span>
                        </div>
                      </div>

                      <p>{tutor.desc}</p>

                      <div className="subjects">
                        {tutor.subjects.map((subject) => (
                          <span key={subject}>{subject}</span>
                        ))}

                        <span className="premium">PREMIUM</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span>📅 Dostępność: {tutor.location}</span>

                    <button>Umów lekcję próbną</button>
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURED BANNER */}
            <section className="featured-banner">
              <div className="featured-left">
                <span className="featured-badge">
                  POLECANY KOREPETYTOR
                </span>

                <h2>
                  Opanuj analizę matematyczną
                  <br />
                  na poziomie akademickim z Marią
                </h2>

                <p>
                  Maria specjalizuje się w intensywnym przygotowaniu
                  do egzaminów dla studentów kierunków STEM.
                  Obecnie przyjmuje 2 nowych uczniów na semestr letni.
                </p>

                <div className="featured-author">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
                    alt="Maria"
                  />

                  <div>
                    <strong>Maria Zawadzka</strong>
                    <span>Mgr Matematyki, AGH</span>
                  </div>
                </div>
              </div>

              <div className="featured-right">
                <div className="math-icon">✖️➕➗</div>

                <button>Zobacz profil</button>
              </div>
            </section>

            {/* GRID 2 */}
            <div className="tutors-grid">
              {tutors.slice(2, 4).map((tutor) => (
                <div key={tutor.id} className="tutor-card">
                  <div className="card-top">
                    <img src={tutor.avatar} alt={tutor.name} />

                    <div className="card-info">
                      <div className="name-row">
                        <div>
                          <h3>{tutor.name}</h3>
                          <span className="rating">⭐ {tutor.rating}</span>
                        </div>

                        <div className="price">
                          {tutor.price}
                          <span>ZA GODZINĘ</span>
                        </div>
                      </div>

                      <p>{tutor.desc}</p>

                      <div className="subjects">
                        {tutor.subjects.map((subject) => (
                          <span key={subject}>{subject}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span>📍 {tutor.location}</span>

                    <button>Umów lekcję próbną</button>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="pagination">
              <button>{"<"}</button>

              <button className="active-page">1</button>
              <button>2</button>
              <button>3</button>

              <span>...</span>

              <button>8</button>

              <button>{">"}</button>
            </div>
          </main>
        </div>

        {/* FLOATING CHAT */}
        <button className="chat-btn">💬</button>

        <Footer />
      </div>
    </>
  );
}