import Logo from "./logo";
import { Link } from "react-router-dom";

export default function Footer({ variant }) {
  if (variant === "login") {
    return (
      <footer className="login-footer">
        <div className="footer-logo-small">
          <Logo size="sm" />
        </div>
        <ul className="footer-links-small">
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms of Service</Link>
          </li>
          <li>
            <Link to="/">Help Center</Link>
          </li>
          <li>
            <Link to="/">Community Guidelines</Link>
          </li>
        </ul>
        <div className="footer-copy-small">
          © 2026 TwojeKorki. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">
          <Logo size="md" light={true} showSub={false} />
        </div>

        <div className="footer-copy">
          © 2026 Twoje Korki. Wszelkie prawa zastrzeżone.
        </div>
      </div>

      <ul className="footer-links">
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>

        <li>
          <Link to="/">Terms of Service</Link>
        </li>

        <li>
          <Link to="/">Help Center</Link>
        </li>

        <li>
          <Link to="/">Community Guidelines</Link>
        </li>
      </ul>
    </footer>
  );
}
