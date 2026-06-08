import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./dashboard-tutor.css";

export default function DashboardTutor() {
  const [earnings, setEarnings] = useState({
    total: "4 250,00",
    lessons: 34,
    rate: 125
  });

  const schedule = [
    { time: "14:00", duration: "60 MIN", subject: "Matematyka Rozszerzona", student: "Michał Kwiatkowski", icon: "video" },
    { time: "15:30", duration: "90 MIN", subject: "Analiza Matematyczna", student: "Karolina Nowak", icon: "video" }
  ];

  const queries = [
    { id: 1, initials: "JP", name: "Janusz P.", info: "Fizyka • Poziom Liceum", message: "Dzień dobry, szukam stałej pomocy w przygotowaniu do matury rozszerzonej z..." },
    { id: 2, initials: "MK", name: "Marta K.", info: "Matematyka • Egzamin 8-klasisty", message: "" }
  ];

  return (
    <div className="ds-page">
      <Navbar />

      <main className="ds-body">
        <header className="ds-header-section">
          <div className="ds-header-text">
            <span className="ds-badge">KONTO PREMIUM</span>
            <h1 className="ds-title">Panel Korepetytora</h1>
            <p className="ds-subtitle">
              Witaj ponownie, Adamie. Masz dzisiaj 3 zaplanowane lekcje i 2 nowe prośby o kontakt.
            </p>
          </div>
        </header>

        <div className="ds-grid">
          {/* Lewa kolumna: Główna treść */}
          <div className="ds-main-col">
            <section className="ds-card ds-whiteboard-card">
              <div className="ds-whiteboard-content">
                <h2>Sala Lekcyjna & Tablica</h2>
                <p>Dołącz do swojej interaktywnej sali lekcyjnej z wbudowaną tablicą cyfrową i narzędziami do współpracy.</p>
                <button className="ds-btn-whiteboard">Uruchom Whiteboard</button>
              </div>
              <div className="ds-whiteboard-visual">
                <div className="visual-placeholder">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
              </div>
            </section>

            <section className="ds-section">
              <div className="ds-section-header">
                <h2>Dzisiejszy Grafik</h2>
                <a href="#full-week" className="ds-link">PEWNY TYDZIEŃ →</a>
              </div>
              <div className="ds-schedule-list">
                {schedule.map((item, idx) => (
                  <div key={idx} className="ds-schedule-item">
                    <div className="ds-sch-time">
                      <strong>{item.time}</strong>
                      <span>{item.duration}</span>
                    </div>
                    <div className="ds-sch-info">
                      <h3>{item.subject}</h3>
                      <p>Uczeń: {item.student}</p>
                    </div>
                    <div className="ds-sch-actions">
                      <button className="ds-icon-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                      </button>
                      <button className="ds-icon-btn">⋮</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="ds-section">
              <div className="ds-section-header">
                <h2>Moi Uczniowie</h2>
              </div>
              <div className="ds-students-grid">
                <div className="ds-student-card">
                  <div className="ds-student-avatar">MK</div>
                  <div className="ds-student-info">
                    <strong>Michał Kwiatkowski</strong>
                    <span>Ostatnia lekcja: 2 dni temu</span>
                  </div>
                  <button className="ds-text-btn">Profil</button>
                </div>
                <div className="ds-student-card">
                  <div className="ds-student-avatar pink">KN</div>
                  <div className="ds-student-info">
                    <strong>Karolina Nowak</strong>
                    <span>Ostatnia lekcja: Dzisiaj</span>
                  </div>
                  <button className="ds-text-btn">Profil</button>
                </div>
              </div>
            </section>
          </div>

          {/* Prawa kolumna: Sidebar */}
          <aside className="ds-sidebar-col">
            <div className="ds-card ds-earnings-card">
              <span className="ds-label">PODSUMOWANIE ZAROBKÓW</span>
              <div className="ds-earnings-value">
                <strong>{earnings.total}</strong> <small>PLN</small>
              </div>
              <p className="ds-earnings-stats">W tym miesiącu (Wzrost o 12% vs poprz.)</p>
              
              <div className="ds-earnings-details">
                <div className="ds-detail-row">
                  <span>Zrealizowane lekcje</span>
                  <strong>{earnings.lessons}</strong>
                </div>
                <div className="ds-detail-row">
                  <span>Stawka średnia</span>
                  <strong>{earnings.rate} PLN</strong>
                </div>
              </div>
              
              <button className="ds-btn-payout">Wypłać Środki</button>
            </div>

            <div className="ds-card ds-queries-card">
              <div className="ds-card-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                <h2>Nowe Zapytania (2)</h2>
              </div>
              <div className="ds-queries-list">
                {queries.map((q) => (
                  <div key={q.id} className="ds-query-item">
                    <div className="ds-query-user">
                      <div className="ds-user-avatar-sm">{q.initials}</div>
                      <div className="ds-user-meta">
                        <strong>{q.name}</strong>
                        <span>{q.info}</span>
                      </div>
                    </div>
                    {q.message && <p className="ds-query-msg">"{q.message}"</p>}
                    <div className="ds-query-btns">
                      <button className="ds-btn-accept">Zaakceptuj</button>
                      <button className="ds-btn-reject">Odrzuć</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-card ds-expert-card">
              <span className="ds-label-expert">PORADA EKSPERTA</span>
              <h3>Uzupełnij kalendarz na przyszły miesiąc</h3>
              <p>Korepetytorzy, którzy planują dostępność z 3-tygodniowym wyprzedzeniem, otrzymują o 40% więcej zapytań.</p>
              <a href="#settings" className="ds-expert-link">Otwórz Ustawienia Kalendarza</a>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
