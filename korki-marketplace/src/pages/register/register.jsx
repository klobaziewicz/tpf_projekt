import React, { useState } from "react";
import Logo from "../../components/logo";
import { Link, useNavigate } from "react-router-dom";
import "../login/login.css";
import Footer from "../../components/footer";
import { useAuth } from "../../hooks/useAuth";
import { getAuthErrorMessage } from "../../utils/authErrors";

export default function Register() {
  const navigate = useNavigate();
  const { signUp, signInWithGoogle } = useAuth();
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
      await signUp(email, password);
      navigate("/home");
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
      await signInWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <Link to="/" className="login-logo">
          <Logo size="lg" showSub={true} />
        </Link>

        <div className="login-card">
          <h1 className="login-title">Utwórz konto</h1>
          <p className="login-subtitle">
            Zarejestruj się, aby rozpocząć jako nauczyciel.
          </p>

          {error && <p className="auth-message auth-message-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  className="form-input form-input-plain"
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
              <label className="form-label">Hasło</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input form-input-plain"
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
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                  disabled={submitting}
                >
                  {showPassword ? "Ukryj" : "Pokaż"}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-login" disabled={submitting}>
              {submitting ? "Rejestracja..." : "Zarejestruj się"}
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
              Google
            </button>
          </div>

          <div className="register-row">
            Masz już konto? <Link to="/">Zaloguj się</Link>
          </div>
        </div>
      </div>

      <Footer variant="login" />
    </div>
  );
}
