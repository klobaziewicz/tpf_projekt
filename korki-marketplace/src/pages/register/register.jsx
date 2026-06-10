import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useAuth } from "../../hooks/useAuth";
import { getAuthErrorMessage } from "../../utils/authErrors";
import {
  ROLES,
  REGISTER_ROLE_CARDS,
  getDashboardPath,
} from "../../constants/roles";
import "./register.css";

function RoleIcon({ type }) {
  if (type === "parent") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 7.5l3 7M16 7.5l-3 7M8.5 6h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "student") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9.5L12 4l9 5.5L12 15 3 9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6.5 11.5V16c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M19.5 10v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 14h3v-4H7v4zM10.5 10h3v4h-3v-4zM14 12h3v2h-3v-2z" fill="currentColor" />
    </svg>
  );
}

function StepIcon({ type }) {
  if (type === "mentor") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 19c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M19.5 19.5L22 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "session") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 14h2v2H9v-2z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5 17l.9 2.2L8 20l-2.1.8L5 23l-.9-2.2L2 20l2.1-.8L5 17zM19 14l.7 1.7L21 17l-1.3.5L19 19l-.7-1.8L17 17l1.3-.5L19 14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

const HOW_STEPS = [
  {
    icon: "mentor",
    title: "1. Wybierz mentora",
    description:
      "Przeglądaj profile, sprawdzaj opinie i wybieraj eksperta idealnie dopasowanego do Twoich potrzeb.",
  },
  {
    icon: "session",
    title: "2. Umów sesję",
    description:
      "Zarezerwuj dogodny termin w kalendarzu i połącz się z mentorem na interaktywnej lekcji online.",
  },
  {
    icon: "goal",
    title: "3. Osiągnij cel",
    description:
      "Śledź swoje postępy, zdobywaj certyfikaty i rozwijaj się we własnym tempie z naszym wsparciem.",
  },
];

export default function Register() {
  const navigate = useNavigate();
  const { signUp, signInWithGoogle } = useAuth();
  const [step, setStep] = useState(1); // 1 = role selection, 2 = registration details
  const [role, setRole] = useState(ROLES.STUDENT);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const { profile } = await signUp(email, password, role);
      navigate(getDashboardPath(profile.role));
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSubmitting(true);

    try {
      const { profile } = await signInWithGoogle(role);
      navigate(getDashboardPath(profile.role));
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 2) {
    return (
      <div className="tutor-app register-page">
        <Navbar activeLink="" />

        <section className="reg-account-step">
          <button
            type="button"
            className="reg-back-btn"
            onClick={() => {
              setError("");
              setStep(1);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Cofnij do wyboru roli ({REGISTER_ROLE_CARDS.find((c) => c.value === role)?.label})
          </button>

          <div className="reg-account-card">
            <h2 className="reg-account-title">Utwórz konto</h2>
            <p className="reg-account-subtitle">
              Wypełnij dane, aby dokończyć rejestrację jako{" "}
              {REGISTER_ROLE_CARDS.find((c) => c.value === role)?.label.toLowerCase()}.
            </p>

            {error && <p className="reg-auth-error">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="reg-form-group">
                <label className="reg-form-label" htmlFor="register-email">
                  Email
                </label>
                <input
                  id="register-email"
                  type="email"
                  className="reg-form-input"
                  placeholder="jan@example.pl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  disabled={submitting}
                  autoFocus
                />
              </div>

              <div className="reg-form-group">
                <label className="reg-form-label" htmlFor="register-password">
                  Hasło
                </label>
                <div className="reg-password-wrap">
                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    className="reg-form-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                    minLength={6}
                    disabled={submitting}
                  />
                  <button
                    type="button"
                    className="reg-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                    disabled={submitting}
                  >
                    {showPassword ? "Ukryj" : "Pokaż"}
                  </button>
                </div>
              </div>

              <button type="submit" className="reg-btn-submit" disabled={submitting}>
                {submitting ? "Rejestracja..." : "Zarejestruj się"}
              </button>
            </form>

            <div className="reg-divider">
              <div className="reg-divider-line" />
              <span className="reg-divider-text">lub przez</span>
              <div className="reg-divider-line" />
            </div>

            <button
              type="button"
              className="reg-btn-google"
              onClick={handleGoogleSignIn}
              disabled={submitting}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>

            <p className="reg-login-link">
              Masz już konto? <Link to="/login">Zaloguj się</Link>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="tutor-app register-page">
      <Navbar activeLink="" />

      <section className="reg-hero">
        <span className="reg-hero-badge">Wybierz swoją ścieżkę</span>
        <h1 className="reg-hero-title">
          Dołącz do naszej <bl>platformy</bl>
        </h1>
        <p className="reg-hero-desc">
          Zapewniamy najwyższą jakość edukacji, łącząc pasję nauczania z
          nowoczesną technologią. Wybierz rolę, aby rozpocząć proces rejestracji.
        </p>
      </section>

      <section className="reg-roles">
        <div className="reg-roles-grid" role="radiogroup" aria-label="Wybierz rolę">
          {REGISTER_ROLE_CARDS.map((card) => {
            return (
              <button
                key={card.value}
                type="button"
                className="reg-role-card"
                onClick={() => {
                  setRole(card.value);
                  setStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={submitting}
              >
                <div className="reg-role-icon">
                  <RoleIcon type={card.icon} />
                </div>
                <h2 className="reg-role-title">{card.label}</h2>
                <p className="reg-role-desc">{card.description}</p>
                <ul className="reg-role-features">
                  {card.features.map((feature) => (
                    <li key={feature}>
                      <span className="reg-check" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.2 2.2L8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </section>

      <section className="reg-how" id="how-it-works">
        <div className="reg-how-inner">
          <h2 className="reg-section-title">Jak działają TwojeKorki?</h2>
          <div className="reg-section-underline" />
          <div className="reg-steps">
            {HOW_STEPS.map((step) => (
              <div key={step.title} className="reg-step">
                <div className="reg-step-icon">
                  <StepIcon type={step.icon} />
                </div>
                <h3 className="reg-step-title">{step.title}</h3>
                <p className="reg-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reg-quote-section">
        <div className="reg-quote-card">
          <div className="reg-quote-content">
            <blockquote className="reg-quote-text">
              „Edukacja to klucz do sukcesu, a TwojeKorki to droga do niego.”
            </blockquote>
            <div className="reg-quote-author">
              <div className="reg-quote-avatar">AN</div>
              <div>
                <div className="reg-quote-name">Dr Anna Nowak</div>
                <div className="reg-quote-role">Główny Metodyk TwojeKorki</div>
              </div>
            </div>
          </div>
          <div className="reg-quote-image" aria-hidden="true" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
