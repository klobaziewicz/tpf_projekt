import React from "react";

const logoStyles = `
  .logo-wrap {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    line-height: 1;
  }

  .logo-text {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 700;
    color: #1a1a2e;
    letter-spacing: -0.3px;
    white-space: nowrap;
  }

  .logo-text span {
    color: #3b5bdb;
  }

  .logo-sub {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #888;
    margin-top: 3px;
  }
`;

export default function Logo({ size = "md", showSub = false, href = "#", light = false }) {
  const sizes = {
    sm: { text: 16, sub: 8 },
    md: { text: 20, sub: 9 },
    lg: { text: 28, sub: 10 },
    xl: { text: 36, sub: 11 },
  };

  const s = sizes[size] || sizes.md;

  return (
    <>
      <style>{logoStyles}</style>
      <a href={href} className="logo-wrap">
        <span className="logo-text" style={{ fontSize: s.text, color: light ? "#fff" : "#1a1a2e" }}>
          Twoje<span style={{ color: light ? "#6c8ff0" : "#3b5bdb" }}>Korki</span>
        </span>
        {showSub && (
          <span className="logo-sub" style={{ fontSize: s.sub }}>
            Portal Korepetycji
          </span>
        )}
      </a>
    </>
  );
}