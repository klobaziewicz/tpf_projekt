import Logo from "./logo";

export default function Footer({ variant }) {
  if (variant === "login") {
    return (
      <footer className="login-footer">
        <div className="footer-logo-small">
          <Logo size="sm" />
        </div>
        <ul className="footer-links-small">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Community Guidelines</a>
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
          <a href="#">Privacy Policy</a>
        </li>

        <li>
          <a href="#">Terms of Service</a>
        </li>

        <li>
          <a href="#">Help Center</a>
        </li>

        <li>
          <a href="#">Community Guidelines</a>
        </li>
      </ul>
    </footer>
  );
}
