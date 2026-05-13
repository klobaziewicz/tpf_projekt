import React, { useState } from "react";
import Logo from "../../components/logo" 

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
 
  * { box-sizing: border-box; margin: 0; padding: 0; }
 
  .login-page {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #e8ecf0;
    position: relative;
    overflow: hidden;
  }
 
  /* Checkerboard background */
  .login-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(45deg, #d8dde3 25%, transparent 25%),
      linear-gradient(-45deg, #d8dde3 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #d8dde3 75%),
      linear-gradient(-45deg, transparent 75%, #d8dde3 75%);
    background-size: 180px 180px;
    background-position: 0 0, 0 90px, 90px -90px, -90px 0px;
    background-color: #e8ecf0;
    opacity: 0.6;
  }
 
  .login-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    position: relative;
    z-index: 1;
  }
 
  /* Logo */
  .login-logo {
    text-align: center;
    margin-bottom: 28px;
  }
  .login-logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    color: #1a1a2e;
    letter-spacing: -0.5px;
    text-decoration: none;
    display: block;
  }
  .login-logo-text span { color: #3b5bdb; }
  .login-logo-sub {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #888;
    margin-top: 4px;
  }
 
  /* Card */
  .login-card {
    background: #fff;
    border-radius: 20px;
    padding: 40px 44px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.10);
  }
 
  .login-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 6px;
    letter-spacing: -0.3px;
  }
  .login-subtitle {
    font-size: 13px;
    color: #999;
    font-weight: 300;
    margin-bottom: 28px;
    line-height: 1.5;
  }
 
  /* Form */
  .form-group {
    margin-bottom: 18px;
  }
  .form-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 8px;
  }
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .input-icon {
    position: absolute;
    left: 14px;
    color: #bbb;
    font-size: 15px;
    pointer-events: none;
  }
  .form-input {
    width: 100%;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    padding: 13px 14px 13px 40px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a2e;
    background: #fafafa;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .form-input:focus {
    border-color: #3b5bdb;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(59,91,219,0.1);
  }
  .form-input::placeholder { color: #ccc; }
 
  .password-toggle {
    position: absolute;
    right: 14px;
    background: none;
    border: none;
    cursor: pointer;
    color: #bbb;
    font-size: 15px;
    padding: 0;
    display: flex;
    align-items: center;
    transition: color 0.2s;
  }
  .password-toggle:hover { color: #555; }
 
  .form-row-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .forgot-link {
    font-size: 12px;
    color: #3b5bdb;
    text-decoration: none;
    font-weight: 500;
  }
  .forgot-link:hover { text-decoration: underline; }
 
  .btn-login {
    width: 100%;
    background: #3b5bdb;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 14px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    margin-top: 8px;
    transition: background 0.2s, transform 0.1s;
    letter-spacing: 0.2px;
  }
  .btn-login:hover { background: #2f4ac0; transform: translateY(-1px); }
  .btn-login:active { transform: translateY(0); }
 
  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 22px 0;
  }
  .divider-line {
    flex: 1;
    height: 1px;
    background: #ebebeb;
  }
  .divider-text {
    font-size: 12px;
    color: #bbb;
    font-weight: 400;
    white-space: nowrap;
  }
 
  /* Social */
  .social-row {
    display: flex;
    gap: 12px;
  }
  .btn-social {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    padding: 11px 16px;
    font-size: 13px;
    font-weight: 500;
    color: #333;
    background: #fff;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s, background 0.2s;
  }
  .btn-social:hover { border-color: #bbb; background: #fafafa; }
  .btn-social svg { width: 16px; height: 16px; flex-shrink: 0; }
 
  /* Register link */
  .register-row {
    text-align: center;
    margin-top: 24px;
    font-size: 13px;
    color: #999;
  }
  .register-row a {
    color: #3b5bdb;
    text-decoration: none;
    font-weight: 500;
  }
  .register-row a:hover { text-decoration: underline; }
 
  /* Footer */
  .login-footer {
    position: relative;
    z-index: 1;
    padding: 20px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .footer-logo-small {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-style: italic;
    color: #1a1a2e;
    font-weight: 700;
  }
  .footer-logo-small span { color: #3b5bdb; }
  .footer-links-small {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  .footer-links-small a {
    font-size: 12px;
    color: #999;
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-links-small a:hover { color: #555; }
  .footer-copy-small {
    font-size: 12px;
    color: #bbb;
  }
`;
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };
 
  return (
    <>
      <style>{styles}</style>
      <div className="login-page">
 
        <div className="login-content">
 
          {/* Logo */}
          <div className="login-logo">
            <Logo size="lg" showSub={true}/>
          </div>
 
          {/* Card */}
          <div className="login-card">
            <h1 className="login-title">Witaj ponownie</h1>
            <p className="login-subtitle">Zaloguj się do swojego profilu nauczyciela.</p>
 
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M2.5 5.5A1.5 1.5 0 014 4h12a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0116 16H4a1.5 1.5 0 01-1.5-1.5v-9z" stroke="#bbb" strokeWidth="1.3"/>
                      <path d="M2.5 6l7.5 5 7.5-5" stroke="#bbb" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="jan@example.pl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>
 
              {/* Password */}
              <div className="form-group">
                <div className="form-row-between">
                  <label className="form-label" style={{ margin: 0 }}>Hasło</label>
                  <a href="#" className="forgot-link">Zapomniałeś hasła?</a>
                </div>
                <div className="input-wrapper" style={{ marginTop: 8 }}>
                  <span className="input-icon">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <rect x="3.5" y="9" width="13" height="8.5" rx="1.5" stroke="#bbb" strokeWidth="1.3"/>
                      <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke="#bbb" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                        <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#bbb" strokeWidth="1.3"/>
                        <circle cx="10" cy="10" r="2.5" stroke="#bbb" strokeWidth="1.3"/>
                        <line x1="3" y1="3" x2="17" y2="17" stroke="#bbb" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                        <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#bbb" strokeWidth="1.3"/>
                        <circle cx="10" cy="10" r="2.5" stroke="#bbb" strokeWidth="1.3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
 
              <button type="submit" className="btn-login">Zaloguj się</button>
            </form>
 
            {/* Divider */}
            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">lub przez</span>
              <div className="divider-line" />
            </div>
 
            {/* Social */}
            <div className="social-row">
              <button className="btn-social">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="btn-social">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
                Facebook
              </button>
            </div>
 
            <div className="register-row">
              Nie masz konta? <a href="#">Zarejestruj się</a>
            </div>
          </div>
        </div>
 
        {/* Footer */}
        <footer className="login-footer">
          <div className="footer-logo-small"><Logo size="sm"/></div>
          <ul className="footer-links-small">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
          <div className="footer-copy-small">© 2026 TwojeKorki. All rights reserved.</div>
        </footer>
 
      </div>
    </>
  );
}