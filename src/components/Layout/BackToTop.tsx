"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="back-to-top"
      className={visible ? "active" : ""}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 1000,
        display: visible ? "block" : "none",
        cursor: "pointer",
      }}
    >
      <a className="top" id="top" onClick={scrollToTop}>
        <i className="ion-ios-arrow-up" style={{ fontSize: 24 }}></i>
      </a>
    </div>
  );
}
