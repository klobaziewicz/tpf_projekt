import React, { useState } from "react";
import Logo from "../../components/logo";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Footer from "../../components/footer";
import { useAuth } from "../../hooks/useAuth";
import { getAuthErrorMessage } from "../../utils/authErrors";

export default function Login() {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setSubmitting(true);

    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setMessage("");
    setSubmitting(true);

    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Podaj adres email, aby zresetować hasło.");
      return;
    }

    setError("");
    setMessage("");
    setSubmitting(true);

    try {
      await resetPassword(email);
      setMessage("Link do resetowania hasła został wysłany na podany adres email.");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-content">
          <Link to="/" className="login-logo">
            <Logo size="lg" showSub={true} />
          </Link>

          <div className="login-card">
            <h1 className="login-title">Witaj ponownie</h1>
            <p className="login-subtitle">
              Zaloguj się do swojego profilu nauczyciela.
            </p>

            {error && <p className="auth-message auth-message-error">{error}</p>}
            {message && (
              <p className="auth-message auth-message-success">{message}</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M2.5 5.5A1.5 1.5 0 014 4h12a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0116 16H4a1.5 1.5 0 01-1.5-1.5v-9z"
                        stroke="#bbb"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M2.5 6l7.5 5 7.5-5"
                        stroke="#bbb"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="jan@example.pl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    disabled={submitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-row-between">
                  <label className="form-label" style={{ margin: 0 }}>
                    Hasło
                  </label>
                  <button
                    type="button"
                    className="forgot-link"
                    onClick={handlePasswordReset}
                    disabled={submitting}
                  >
                    Zapomniałeś hasła?
                  </button>
                </div>
                <div className="input-wrapper" style={{ marginTop: 8 }}>
                  <span className="input-icon">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <rect
                        x="3.5"
                        y="9"
                        width="13"
                        height="8.5"
                        rx="1.5"
                        stroke="#bbb"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M6.5 9V6.5a3.5 3.5 0 017 0V9"
                        stroke="#bbb"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    disabled={submitting}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                    disabled={submitting}
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z"
                          stroke="#bbb"
                          strokeWidth="1.3"
                        />
                        <circle
                          cx="10"
                          cy="10"
                          r="2.5"
                          stroke="#bbb"
                          strokeWidth="1.3"
                        />
                        <line
                          x1="3"
                          y1="3"
                          x2="17"
                          y2="17"
                          stroke="#bbb"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z"
                          stroke="#bbb"
                          strokeWidth="1.3"
                        />
                        <circle
                          cx="10"
                          cy="10"
                          r="2.5"
                          stroke="#bbb"
                          strokeWidth="1.3"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn-login"
                disabled={submitting}
              >
                {submitting ? "Logowanie..." : "Zaloguj się"}
              </button>
            </form>

            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">lub przez</span>
              <div className="divider-line" />
            </div>

            <div className="social-row">
              <button
                type="button"
                className="btn-social"
                onClick={handleGoogleSignIn}
                disabled={submitting}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
            </div>

            <div className="register-row">
              Nie masz konta? <Link to="/register">Zarejestruj się</Link>
            </div>
          </div>
        </div>

        <Footer variant="login" />
      </div>
    </>
  );
}
