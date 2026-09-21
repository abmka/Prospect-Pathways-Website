"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LANGUAGES } from "../site.config";

type TextSize = "normal" | "large" | "larger";
type Contrast = "normal" | "high";

const KEY_SIZE = "pp-text-size";
const KEY_CONTRAST = "pp-contrast";

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* private mode etc. — the setting still applies for this page view */
  }
}

/**
 * Text size, contrast and language controls. The chosen settings are written
 * onto <html> as data attributes (styled in globals.css) and remembered per
 * browser. A tiny inline script in layout.tsx applies them before first paint
 * so there is no flash of the default size.
 */
export default function AccessibilityBar() {
  const [size, setSize] = useState<TextSize>("normal");
  const [contrast, setContrast] = useState<Contrast>("normal");

  useEffect(() => {
    const s = read(KEY_SIZE) as TextSize | null;
    const c = read(KEY_CONTRAST) as Contrast | null;
    if (s === "large" || s === "larger") setSize(s);
    if (c === "high") setContrast(c);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (size === "normal") root.removeAttribute("data-text-size");
    else root.setAttribute("data-text-size", size);
    write(KEY_SIZE, size);
  }, [size]);

  useEffect(() => {
    const root = document.documentElement;
    if (contrast === "normal") root.removeAttribute("data-contrast");
    else root.setAttribute("data-contrast", contrast);
    write(KEY_CONTRAST, contrast);
  }, [contrast]);

  return (
    <div className="a11y-bar">
      <div className="container a11y-bar__inner">
        <span className="a11y-bar__label" id="a11y-size-label">
          Text size
        </span>
        <div className="a11y-group" role="group" aria-labelledby="a11y-size-label">
          <button type="button" className="a11y-btn" aria-pressed={size === "normal"} onClick={() => setSize("normal")}>
            A
          </button>
          <button type="button" className="a11y-btn" aria-pressed={size === "large"} onClick={() => setSize("large")} style={{ fontSize: "15px" }}>
            A
          </button>
          <button type="button" className="a11y-btn" aria-pressed={size === "larger"} onClick={() => setSize("larger")} style={{ fontSize: "17px" }}>
            A
          </button>
        </div>

        <button
          type="button"
          className="a11y-btn"
          aria-label="High contrast"
          aria-pressed={contrast === "high"}
          onClick={() => setContrast(contrast === "high" ? "normal" : "high")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 3a9 9 0 010 18z" fill="currentColor" />
          </svg>
          <span className="a11y-btn__text">High contrast</span>
        </button>

        <details className="lang-menu">
          <summary className="a11y-btn a11y-btn--lang" aria-label="Choose a language">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="a11y-btn__text">Languages</span>
          </summary>
          <div className="lang-menu__panel">
            {LANGUAGES.map((l) => (
              <Link key={l.code} href={l.code === "en" ? "/" : `/languages#${l.code}`} lang={l.code} dir={l.dir}>
                <span>{l.native}</span>
                <small lang="en" dir="ltr">
                  {l.english}
                </small>
              </Link>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
