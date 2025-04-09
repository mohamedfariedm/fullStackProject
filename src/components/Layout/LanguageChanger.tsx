"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const locales = [
  { code: "en", name: "English", flag: "us" },
  { code: "ar", name: "العربية", flag: "sa" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "pt", name: "Português", flag: "pt" },
];

function getFlagSrc(code: string) {
  return `https://flagsapi.com/${code.toUpperCase()}/shiny/64.png`;
}

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = i18n.language;
  const selected = locales.find((l) => l.code === currentLocale) || locales[0];

  const changeLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Save to cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 30}`;

    // Update the route by replacing the locale segment
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    i18n.changeLanguage(newLocale);
    router.push(newPath);
    window.location.reload();
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pq-header-info-box">
      <div
        ref={dropdownRef}
        className="dropdown"
        tabIndex={0}
        style={{ position: "relative", display: "inline-block" }}
      >
        <button
          id="dropdown-btn"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          style={{
            background: "transparent",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <img
            src={getFlagSrc(selected.flag)}
            alt={selected.name}
            style={{ width: "20px", height: "auto" }}
          />
          <span style={{ color: "#000", fontSize: "14px" }}>{selected.name}</span>
          <span className="arrow-down" />
        </button>

        {open && (
          <ul
            id="dropdown-content"
            className="dropdown-content"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "6px",
              padding: "8px 0",
              minWidth: "150px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 999,
              listStyle: "none",
            }}
          >
            {locales
              .filter((l) => l.code !== currentLocale)
              .map((locale) => (
                <li
                  key={locale.code}
                  onClick={() => changeLocale(locale.code)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  <img
                    src={getFlagSrc(locale.flag)}
                    alt={locale.name}
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  {locale.name}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
