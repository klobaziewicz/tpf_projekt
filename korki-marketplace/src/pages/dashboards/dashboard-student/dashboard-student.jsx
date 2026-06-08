import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./dashboard-student.css";

const lessons = [
  {
    id: 1,
    tag: "DZIŚ 16:30",
    tagType: "today",
    title: "Analiza Matematyczna",
    tutor: "dr Anna Kwiatkowska",
    avatarInitials: "AK",
    avatarColor: "#3b5bdb",
    action: "Dołącz za 45 minut",
    actionIcon: "🎥",
    icon: "🎥",
  },
  {
    id: 2,
    tag: "JUTRO 10:00",
    tagType: "tomorrow",
    title: "Literatura Współczesna",
    tutor: "mgr Marek Nowak",
    avatarInitials: "MN",
    avatarColor: "#2f9e44",
    action: "Przygotuj lekturę",
    actionIcon: "📖",
    icon: "📖",
  },
];

const homework = [
  {
    id: 1,
    title: "Zestaw zadań: Trygonometria",
    due: "Termin: 25:45",
    status: "ROZPOCZNIJ",
    statusType: "start",
    icon: "⚠️",
    iconBg: "#fff0f0",
    iconColor: "#fa5252",
  },
  {
    id: 2,
    title: "Esej: Analiza 'Kordiana'",
    due: "Termin: 27.04.85",
    status: null,
    icon: "📅",
    iconBg: "#f4f6ff",
    iconColor: "#3b5bdb",
  },
  {
    id: 3,
    title: "Słówka: Unit 4 —",
    due: "Oddane",
    status: null,
    done: true,
    icon: "✓",
    iconBg: "#e6f4ea",
    iconColor: "#2f9e44",
  },
];

const materials = [
  { id: 1, icon: "📄", type: "PDF", title: "Wzory skróconego mnożenia", subject: "MATEMATYKA · 1.2 MB" },
  { id: 2, icon: "▶️", type: "VIDEO", title: "Wykład: Romantyzm polski", subject: "JĘZYK POLSKI · 15:34 MIN" },
  { id: 3, icon: "📝", type: "DOC", title: "Słownictwo: Business English", subject: "ANGIELSKI · 8.5 KB" },
];

const contacts = [
  { initials: "AK", color: "#3b5bdb" },
  { initials: "MN", color: "#2f9e44" },
  { initials: "EJ", color: "#f59f00" },
];

const BAR_DATA = [18, 12, 22, 8, 24.5, 10, 16, 6, 14, 20, 9, 11];

export default function DashboardStudent() {
  const [progressView, setProgressView] = useState("Tydniowi");

  return (
    <div className="ds-page">
      <Navbar />

      <div className="ds-body">
        <div className="ds-main">

          <div className="ds-hero">
            <h1 className="ds-hero-title">Witaj ponownie, Aleksandrze.</h1>
            <p className="ds-hero-sub">Twoja ścieżka edukacyjna wygląda dziś obiecująco. Masz 2 nadchodzące lekcje.</p>
          </div>

          <section className="ds-section">
            <div className="ds-section-header">
              <h2 className="ds-section-title">Moje Lekcje</h2>
              <Link to="#" className="ds-section-link">Zobacz kalendarz →</Link>
            </div>
            <div className="ds-lessons-grid">
              {lessons.map((l) => (
                <div key={l.id} className="ds-lesson-card">
                  <div className="ds-lesson-top">
                    <span className={`ds-lesson-tag ${l.tagType}`}>{l.tag}</span>
                    <span className="ds-lesson-type-icon">{l.icon}</span>
                  </div>
                  <h3 className="ds-lesson-title">{l.title}</h3>
                  <p className="ds-lesson-tutor">Prowadzący: {l.tutor}</p>
                  <div className="ds-lesson-footer">
                    <div className="ds-lesson-avatar" style={{ background: l.avatarColor }}>
                      {l.avatarInitials}
                    </div>
                    <span className="ds-lesson-action">{l.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section ds-progress-section">
            <div className="ds-progress-top">
              <div>
                <h2 className="ds-section-title">Moje Postępy</h2>
                <p className="ds-progress-sub">Podsumowanie Twojej aktywności w tym miesiącu</p>
              </div>
              <div className="ds-progress-tabs">
                {["Tydniowi", "Miesiąc"].map((t) => (
                  <button
                    key={t}
                    className={`ds-tab ${progressView === t ? "active" : ""}`}
                    onClick={() => setProgressView(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="ds-progress-hours">
              <span className="ds-hours-label">GODZINY NAUKI</span>
              <div className="ds-hours-value">24.5h</div>
              <span className="ds-hours-delta">↑ +12% vs zeszły tydzień</span>
            </div>
            <div className="ds-bar-chart">
              {BAR_DATA.map((h, i) => (
                <div key={i} className="ds-bar-col">
                  <div
                    className={`ds-bar ${i === 4 ? "active" : ""}`}
                    style={{ height: `${(h / 25) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section">
            <h2 className="ds-section-title">Ostatnie Materiały</h2>
            <div className="ds-materials-grid">
              {materials.map((m) => (
                <div key={m.id} className="ds-material-card">
                  <div className="ds-material-icon">{m.icon}</div>
                  <div className="ds-material-title">{m.title}</div>
                  <div className="ds-material-subject">{m.subject}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="ds-sidebar">
          <div className="ds-card">
            <h2 className="ds-card-title">Zadania Domowe</h2>
            <div className="ds-hw-list">
              {homework.map((h) => (
                <div key={h.id} className={`ds-hw-item ${h.done ? "done" : ""}`}>
                  <div className="ds-hw-icon" style={{ background: h.iconBg, color: h.iconColor }}>
                    {h.icon}
                  </div>
                  <div className="ds-hw-info">
                    <div className="ds-hw-title">{h.title}</div>
                    <div className="ds-hw-due">{h.due}</div>
                    {h.status && (
                      <span className={`ds-hw-status ${h.statusType}`}>{h.status}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="ds-hw-all-btn">Wszystkie zadania (12)</button>
          </div>

          <div className="ds-card ds-tip-card">
            <span className="ds-tip-label">PORADA EDUKACYJNA</span>
            <h3 className="ds-tip-title">Metoda Pomodoro</h3>
            <p className="ds-tip-text">
              Pracuj przez 25 minut, a potem zrób 5 minut przerwy. Ta dwutaktowna zwięksaza koncentrację przy trudnych tematach.
            </p>
          </div>

          <div className="ds-card">
            <h2 className="ds-card-title">SZYBKI KONTAKT</h2>
            <div className="ds-contacts-row">
              {contacts.map((c) => (
                <div key={c.initials} className="ds-contact-avatar" style={{ background: c.color }}>
                  {c.initials}
                </div>
              ))}
              <div className="ds-contact-more">+9</div>
            </div>
            <button className="ds-msg-btn">Wyślij wiadomość</button>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}