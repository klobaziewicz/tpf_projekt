import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./dashboard-student.css";

const stats = [
  { icon: "📚", value: "24", label: "Ukończone lekcje", delta: "+3" },
  { icon: "⏱", value: "36h", label: "Godziny nauki", delta: "+5h" },
  { icon: "⭐", value: "4.8", label: "Średnia ocen", delta: "+0.2" },
  { icon: "🔥", value: "12", label: "Dni z rzędu", delta: "+2" },
];

const schedule = [
  { day: "29", weekday: "Czw", subject: "Mechanika klasyczna", tutor: "Anna Wiśniewska · Fizyka", time: "14:00–15:30" },
  { day: "31", weekday: "Sob", subject: "Angielski B2 — gramatyka", tutor: "Ewa Jabłońska · Języki", time: "10:00–11:00" },
  { day: "03", weekday: "Wt", subject: "Statystyka — egzamin próbny", tutor: "Jakub Malinowski · Matematyka", time: "16:00–17:30", highlight: true },
];

const progress = [
  { label: "Matematyka", pct: 78, color: "#3b5bdb" },
  { label: "Fizyka", pct: 55, color: "#2f9e44" },
  { label: "Angielski", pct: 90, color: "#f59f00" },
  { label: "Statystyka", pct: 42, color: "#fa5252" },
];

const completed = [
  { icon: "➗", bg: "#eef2ff", subject: "Całki nieoznaczone", meta: "24 maja · Maria Z. · 90 min", stars: 5 },
  { icon: "⚡", bg: "#e6f4ea", subject: "Optyka geometryczna", meta: "21 maja · Anna W. · 90 min", stars: 4 },
  { icon: "📖", bg: "#fff8e6", subject: "Angielski — czas przyszły", meta: "18 maja · Ewa J. · 60 min", stars: 5 },
];

const reviews = [
  {
    initials: "MZ", color: "#3b5bdb", name: "Maria Zawadzka", role: "Matematyka · 24 maja", stars: 5,
    text: "Anna robi świetne postępy! Opanowała całki nieoznaczone bardzo szybko. Polecam kontynuację przed egzaminem.",
  },
  {
    initials: "AW", color: "#2f9e44", name: "Anna Wiśniewska", role: "Fizyka · 21 maja", stars: 4,
    text: "Dobra praca z optyką — warto jeszcze poćwiczyć zadania na soczewki. Materiały wysłałam na maila.",
  },
];

function Stars({ count, total = 5 }) {
  return (
    <div className="ds-stars">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < count ? "star-f" : "star-e"}>★</span>
      ))}
    </div>
  );
}

export default function DashboardStudent() {
  return (
    <div className="ds-page">
      <Navbar />

      <div className="ds-body">
        <div className="ds-topbar">
          <div>
            <h1 className="ds-greeting">Dzień dobry, Anno 👋</h1>
            <p className="ds-sub">Wtorek, 27 maja 2025 — masz dziś 1 zaplanowaną lekcję</p>
          </div>
          <div className="ds-topbar-right">
            <div className="ds-search-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Szukaj...
            </div>
            <div className="ds-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <div className="ds-notif-dot" />
            </div>
            <div className="ds-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
          </div>
        </div>

        <div className="ds-stats">
          {stats.map((s) => (
            <div key={s.label} className="ds-stat-card">
              <div className="ds-stat-top">
                <div className="ds-stat-icon">{s.icon}</div>
                <span className="ds-stat-delta">{s.delta}</span>
              </div>
              <div className="ds-stat-num">{s.value}</div>
              <div className="ds-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="ds-next-lesson">
          <span className="ds-nl-badge">Następna lekcja</span>
          <h2 className="ds-nl-title">Analiza matematyczna — całki</h2>
          <p className="ds-nl-sub">Moduł 4 z 6 · Całki oznaczone i ich zastosowania</p>
          <div className="ds-nl-meta">
            <span>📅 Dziś, 27 maja</span>
            <span>🕔 17:00 – 18:30</span>
            <span>🎥 Online (Zoom)</span>
          </div>
          <div className="ds-nl-footer">
            <div className="ds-nl-tutor">
              <img
                className="ds-nl-avatar"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80"
                alt="Maria"
              />
              <div>
                <div className="ds-nl-tutor-name">Maria Zawadzka</div>
                <div className="ds-nl-tutor-role">Mgr Matematyki, AGH</div>
              </div>
            </div>
            <button className="ds-nl-btn">Dołącz do lekcji →</button>
          </div>
        </div>

        <div className="ds-two-col">
          <div className="ds-card">
            <div className="ds-card-header">
              <span className="ds-card-title">Nadchodzące zajęcia</span>
              <Link to="#" className="ds-card-link">Zobacz wszystkie →</Link>
            </div>
            {schedule.map((s) => (
              <div key={s.day} className="ds-sched-item">
                <div className="ds-sched-date" style={s.highlight ? { background: "#fff8e6" } : {}}>
                  <span className="ds-sched-num" style={s.highlight ? { color: "#f59f00" } : {}}>{s.day}</span>
                  <span className="ds-sched-day">{s.weekday}</span>
                </div>
                <div className="ds-sched-info">
                  <div className="ds-sched-subject">{s.subject}</div>
                  <div className="ds-sched-tutor">{s.tutor}</div>
                </div>
                <div className="ds-sched-time">{s.time}</div>
              </div>
            ))}
          </div>

          <div className="ds-card">
            <div className="ds-card-header">
              <span className="ds-card-title">Postępy</span>
              <Link to="#" className="ds-card-link">Szczegóły →</Link>
            </div>
            {progress.map((p) => (
              <div key={p.label} className="ds-progress-item">
                <div className="ds-progress-header">
                  <span className="ds-progress-label">{p.label}</span>
                  <span className="ds-progress-pct">{p.pct}%</span>
                </div>
                <div className="ds-progress-bg">
                  <div className="ds-progress-fill" style={{ width: `${p.pct}%`, background: p.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-bottom-row">
          <div className="ds-card">
            <div className="ds-card-header">
              <span className="ds-card-title">Ostatnie lekcje</span>
              <Link to="#" className="ds-card-link">Historia →</Link>
            </div>
            {completed.map((c) => (
              <div key={c.subject} className="ds-comp-item">
                <div className="ds-comp-icon" style={{ background: c.bg }}>{c.icon}</div>
                <div>
                  <div className="ds-comp-subject">{c.subject}</div>
                  <div className="ds-comp-meta">{c.meta}</div>
                </div>
                <Stars count={c.stars} />
                <div className="ds-comp-check">✓</div>
              </div>
            ))}
          </div>

          <div className="ds-card">
            <div className="ds-card-header">
              <span className="ds-card-title">Opinie od nauczycieli</span>
              <Link to="#" className="ds-card-link">Wszystkie →</Link>
            </div>
            {reviews.map((r) => (
              <div key={r.name} className="ds-review-card">
                <div className="ds-review-top">
                  <div className="ds-review-avatar" style={{ background: r.color }}>{r.initials}</div>
                  <div>
                    <div className="ds-review-name">{r.name}</div>
                    <div className="ds-review-role">{r.role}</div>
                  </div>
                  <Stars count={r.stars} />
                </div>
                <p className="ds-review-text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}