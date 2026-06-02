import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../home/home.css";
import "./tutor-profile.css";

const tutorsData = {
  maria: {
    name: "Maria Zawadzka",
    title: "EKSPERTKA JĘZYKA POLSKIEGO I LITERATURY",
    rating: 4.9,
    reviews: 124,
    tags: ["Egzamin Ósmoklasisty", "Matura Rozszerzona", "Native Speaker"],
    price: 120,
    headline: "Pasja do słowa, skuteczność w nauczaniu.",
    about: [
      "Od ponad 8 lat pomagam uczniom odkrywać piękno polskiej literatury i doskonalić umiejętności językowe. Moje podejście opiera się na zrozumieniu indywidualnych potrzeb – nie uczę schematów, lecz krytycznego myślenia i precyzyjnego wyrażania myśli.",
      "Specjalizuję się w przygotowaniu do egzaminów państwowych. Moi uczniowie regularnie osiągają wyniki powyżej 90 percentyla. Wierzę, że każda lektura może być fascynująca, jeśli tylko znajdziemy odpowiedni klucz do jej interpretacji.",
    ],
    education: [
      {
        title: "Uniwersytet Warszawski",
        desc: "Magister Filologii Polskiej, Specjalizacja Nauczycielska",
        type: "graduation",
      },
      {
        title: "Certyfikat OKE",
        desc: "Uprawnienia Egzaminatora Maturalnego",
        type: "certificate",
      },
    ],
    avatarClass: "avatar-maria",
  },
  jakub: {
    name: "Jakub",
    title: "EKSPERT MATEMATYKI AKADEMICKIEJ",
    rating: 5.0,
    reviews: 10,
    tags: ["ALGEBRA", "STATYSTYKA", "PREMIUM"],
    price: 70,
    headline: "Absolwent Politechniki Warszawskiej. Specjalista w algebrze.",
    about: [
      "Absolwent Politechniki Warszawskiej. Specjalizuję się w algebrze liniowej i analizie matematycznej dla studentów pierwszego roku.",
      "Pomagam studentom zrozumieć trudne zagadnienia i przygotować się do egzaminów.",
    ],
    education: [
      {
        title: "Politechnika Warszawska",
        desc: "Magister Matematyki Stosowanej",
        type: "graduation",
      },
    ],
    avatarClass: "avatar-jakub",
  },
};

const weekDays = [
  { day: "PON", date: "12 Lut", slots: ["14:00", "16:30", "Zajęte"] },
  { day: "WT", date: "13 Lut", slots: ["Zajęte", "17:00", "18:30"] },
  { day: "ŚR", date: "14 Lut", slots: ["15:00", "Zajęte", "Zajęte"] },
  { day: "CZW", date: "15 Lut", slots: ["10:00", "11:30", "14:00"] },
  { day: "PT", date: "16 Lut", slots: ["16:00", "17:30", "19:00"] },
  { day: "SOB", date: "17 Lut", weekend: true },
  { day: "NDZ", date: "18 Lut", weekend: true },
];

function CertIcon({ type }) {
  if (type === "graduation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path
          d="M12 3L2 8l10 5 10-5-10-5z"
          stroke="#3b5bdb"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 11v4c0 0 2.5 3 6 3s6-3 6-3v-4"
          stroke="#3b5bdb"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M20 8v6" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <path
        d="M12 3l7 3v6c0 3.5-3 6-7 9-4-3-7-5.5-7-9V6l7-3z"
        stroke="#3b5bdb"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#3b5bdb"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AvatarMock({ type }) {
  return (
    <div className={`avatar-mock ${type}`}>
      <svg viewBox="0 0 24 24" fill="none" width="30%" height="30%" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

export default function TutorProfile() {
  const { id } = useParams();
  const tutor = tutorsData[id] || tutorsData.maria;
  const [weekOffset, setWeekOffset] = useState(0);

  return (
    <div className="tutor-app profile-page">
      <Navbar activeLink="platforma" />

      <div className="profile-container">
        <aside className="profile-sidebar">
          <div className="profile-photo-wrapper">
            <AvatarMock type={tutor.avatarClass} />
            <div className="profile-rating-badge">
              <span className="badge-star">★</span>
              {tutor.rating} ({tutor.reviews} opinie)
            </div>
          </div>

          <h1>{tutor.name}</h1>
          <p className="profile-title">{tutor.title}</p>

          <div className="profile-tags">
            {tutor.tags.map((tag) => {
              const isBlue = tag === "Native Speaker" || tag === "PREMIUM";
              return (
                <span key={tag} className={`profile-tag ${isBlue ? "blue-tag" : "grey-tag"}`}>
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="cert-card">
            <h2>Certyfikaty i Edukacja</h2>
            <ul className="cert-list">
              {tutor.education.map((item) => (
                <li key={item.title}>
                  <span className="cert-icon-wrap">
                    <CertIcon type={item.type} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="profile-main">
          <section className="about-section">
            <span className="section-label">O MNIE</span>
            <h2>{tutor.headline}</h2>
            {tutor.about.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </section>

          <div className="pricing-box">
            <div className="pricing-info">
              <span className="pricing-label">Cena za godzinę (60 min)</span>
              <div className="pricing-value-row">
                <span className="pricing-amount">{tutor.price} zł</span>
                <span className="pricing-note">w tym materiały</span>
              </div>
            </div>
            <button type="button" className="btn-book">
              Zarezerwuj lekcję
            </button>
          </div>

          <section className="availability-section">
            <span className="section-label">DOSTĘPNOŚĆ</span>
            <div className="availability-header">
              <h2>Najbliższy tydzień</h2>
              <div className="week-nav">
                <button
                  type="button"
                  onClick={() => setWeekOffset(weekOffset - 1)}
                  aria-label="Poprzedni tydzień"
                  className="week-nav-btn"
                >
                  &lt;
                </button>
                <button
                  type="button"
                  onClick={() => setWeekOffset(weekOffset + 1)}
                  aria-label="Następny tydzień"
                  className="week-nav-btn"
                >
                  &gt;
                </button>
              </div>
            </div>

            <div className="calendar-panel">
              <div className="calendar-header-row">
                {weekDays.map((col) => (
                  <div
                    key={col.date}
                    className={`calendar-header-cell ${col.weekend ? "weekend" : ""}`}
                  >
                    <span className="cal-day">{col.day}</span>
                    <span className="cal-date">{col.date}</span>
                  </div>
                ))}
              </div>
              <div className="calendar-body-row">
                {weekDays.map((col) => (
                  <div
                    key={`body-${col.date}`}
                    className={`calendar-body-cell ${col.weekend ? "weekend" : ""}`}
                  >
                    {col.weekend ? (
                      <span className="weekend-label">WEEKEND</span>
                    ) : (
                      col.slots.map((slot, i) =>
                        slot === "Zajęte" ? (
                          <span key={i} className="slot-booked">
                            Zajęte
                          </span>
                        ) : (
                          <button key={i} type="button" className="slot-btn">
                            {slot}
                          </button>
                        )
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
