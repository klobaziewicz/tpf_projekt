import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./dashboard-parent.css";

const lessons = [
  {
    id: 1,
    tag: "DZIŚ",
    tagType: "today",
    title: "Matematyka: Analiza Funkcji",
    student: "Kacper",
    tutor: "Dr. Nowak",
    avatarInitials: "DN",
    avatarColor: "#3b5bdb",
    timeStart: "16:30",
    timeEnd: "17:30",
    mode: "WIDEO-POŁĄCZENIE",
    modeType: "video",
  },
  {
    id: 2,
    tag: "JUTRO",
    tagType: "tomorrow",
    title: "Język Angielski: Business English",
    student: "Zuzia",
    tutor: "Sarah J.",
    avatarInitials: "SJ",
    avatarColor: "#2f9e44",
    timeStart: "15:00",
    timeEnd: "16:00",
    mode: "STACJONARNIE",
    modeType: "pin",
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah J.",
    initials: "SJ",
    avatarColor: "#3b5bdb",
    text: "Cześć Anno, Zuzia zrobiła dziś ogromny postęp w gramatyce...",
    time: "15 min temu",
  },
  {
    id: 2,
    sender: "Adam Nowak",
    initials: "AN",
    avatarColor: "#2f9e44",
    text: "Dziękuję za lekcję. Kacper potrzebuje jeszcze trochę pracy nad...",
    time: "2 godz. temu",
  },
];

const supportSubjects = [
  { emoji: "⚡", label: "Fizyka" },
  { emoji: "📜", label: "Historia" },
  { emoji: "💻", label: "Kodowanie" },
  { emoji: "···", label: "Więcej" },
];

function VideoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function DashboardParent() {
  return (
    <div className="dp-page">
      <Navbar />

      <div className="dp-wrap">

        {/* Page header */}
        <div className="dp-hero">
          <div>
            <h1 className="dp-hero-title">Panel Rodzica</h1>
            <p className="dp-hero-sub">Witaj ponownie, Anno. Oto podsumowanie nauki Twoich dzieci.</p>
          </div>
          <div className="dp-hero-actions">
            <button className="dp-btn-outline">Opłać pakiety</button>
            <button className="dp-btn-primary">Nowa Lekcja</button>
          </div>
        </div>

        {/* Body: main + sidebar */}
        <div className="dp-body">

          {/* LEFT — main content */}
          <div className="dp-main">

            {/* Upcoming lessons */}
            <div className="dp-card">
              <div className="dp-card-header">
                <h2 className="dp-card-title-lg">Nadchodzące Lekcje</h2>
                <Link to="#" className="dp-section-link">ZOBACZ KALENDARZ</Link>
              </div>
              <div className="dp-lessons-list">
                {lessons.map((l) => (
                  <div key={l.id} className="dp-lesson-row">
                    <div className={`dp-day-badge ${l.tagType}`}>{l.tag}</div>
                    <div className="dp-lesson-info">
                      <div className="dp-lesson-title">{l.title}</div>
                      <div className="dp-lesson-meta">
                        Uczeń: {l.student} &bull; Korepetytor: {l.tutor}
                      </div>
                    </div>
                    <div className="dp-lesson-right">
                      <div className="dp-lesson-time">{l.timeStart} – {l.timeEnd}</div>
                      <div className={`dp-mode-badge ${l.modeType}`}>
                        {l.modeType === "video" ? <VideoIcon /> : <PinIcon />}
                        {l.mode}
                      </div>
                    </div>
                    <button className="dp-cal-btn" aria-label="Dodaj do kalendarza">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="dp-card">
              <div className="dp-card-header">
                <h2 className="dp-card-title-lg">Ostatnie Wiadomości</h2>
                <Link to="#" className="dp-section-link">WIĘ CEJ</Link>
              </div>
              <div className="dp-messages-list">
                {messages.map((msg) => (
                  <div key={msg.id} className="dp-msg-row">
                    <div className="dp-msg-avatar" style={{ background: msg.avatarColor }}>
                      {msg.initials}
                    </div>
                    <div className="dp-msg-body">
                      <div className="dp-msg-sender">{msg.sender}</div>
                      <div className="dp-msg-text">{msg.text}</div>
                    </div>
                    <div className="dp-msg-time">{msg.time}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — sidebar */}
          <aside className="dp-sidebar">

            {/* Progress card */}
            <div className="dp-card dp-card-progress">
              <div className="dp-progress-label">PROFIL: KACPER</div>
              <h3 className="dp-progress-title">Postępy<br />Miesiąca</h3>
              <div className="dp-progress-pct-row">
                <span className="dp-pct-num">85%</span>
                <span className="dp-pct-sub">celów<br />osiągniętych</span>
              </div>
              <div className="dp-progress-bar-track">
                <div className="dp-progress-bar-fill" style={{ width: "85%" }} />
              </div>
              <button className="dp-report-btn">Raport Szczegółowy</button>
            </div>

            {/* Find support */}
            <div className="dp-card">
              <h2 className="dp-card-title-sm">Znajdź Wsparcie</h2>
              <div className="dp-support-grid">
                {supportSubjects.map((s) => (
                  <button key={s.label} className="dp-support-btn">
                    <span className="dp-support-emoji">{s.emoji}</span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Expert tip */}
            <div className="dp-card dp-card-tip">
              <div className="dp-tip-header">
                <span className="dp-tip-dot" />
                PORADA EKSPERTA
              </div>
              <p className="dp-tip-text">
                Kacper najlepiej przyswaja wiedzę między 16:00 a 18:00. Rozważ
                planowanie trudniejszych tematów w tym oknie czasowym.
              </p>
            </div>

          </aside>
        </div>

        {/* Exam prep banner */}
        <div className="dp-banner">
          <div className="dp-banner-content">
            <h3 className="dp-banner-title">Przygotowanie do Egzaminów?</h3>
            <p className="dp-banner-desc">
              Skorzystaj z naszych dedykowanych kursów maturalnych i
              ósmoklasistów z certyfikowanymi ekspertami.
            </p>
            <button className="dp-banner-btn">Sprawdź Kursy</button>
          </div>
          <div className="dp-banner-figures" aria-hidden="true">
            <span className="dp-fig dp-fig-1">🧑‍💻</span>
            <span className="dp-fig dp-fig-2">👩‍🎓</span>
            <span className="dp-fig dp-fig-3">👨‍🏫</span>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}