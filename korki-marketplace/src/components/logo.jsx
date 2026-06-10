import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";

export default function Logo({ size = "md", showSub = false, href = "#", light = false }) {
  const sizes = {
    sm: { text: 16, sub: 8 },
    md: { text: 20, sub: 9 },
    lg: { text: 28, sub: 10 },
    xl: { text: 36, sub: 11 },
  };

  const s = sizes[size] || sizes.md;

  return (
    <Link to="/" className="logo-wrap">
      <span className="logo-text" style={{ fontSize: s.text, color: light ? "#fff" : "var(--color-text-primary)" }}>
        Twoje<span style={{ color: light ? "var(--color-primary-mid)" : "var(--color-primary)" }}>Korki</span>
      </span>
      {showSub && (
        <span className="logo-sub" style={{ fontSize: s.sub }}>
          Portal Korepetycji
        </span>
      )}
    </Link>
  );
}