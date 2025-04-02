"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const Counter = () => {
  const { t } = useTranslation("homepage");
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // default open first

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const counters = document.querySelectorAll(".timer");

    counters.forEach((counter) => {
      const element = counter as HTMLElement;
      const to = parseInt(element.dataset.to || "0", 10);
      const speed = parseInt(element.dataset.speed || "2000", 10);
      let start = 0;
      const step = Math.ceil(to / (speed / 50));

      const animate = () => {
        start += step;
        if (start < to) {
          element.innerText = start.toString();
          requestAnimationFrame(animate);
        } else {
          element.innerText = to.toString();
        }
      };

      animate();
    });
  }, []);

  return (<>
    <section className="counter pq-counter-padding pq-bg-primary">
      <div className="container">
        <div className="row text-center">
          {[
            {
              icon: "flaticon-trowel",
              number: 786,
              label: t("clientSatisfaction"),
            },
            {
              icon: "flaticon-chisel",
              number: 600,
              label: t("exportWorldwide"),
            },
            {
              icon: "flaticon-blueprint",
              number: 989,
              label: t("amazingProjects"),
            },
            {
              icon: "flaticon-suckers",
              number: 125,
              label: t("productionPlans"),
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-6 col-md-6 ${
                index > 0 ? "mt-4 mt-xl-0" : ""
              }`}
            >
              <div
                className={`pq-counter pq-counter-style-1 text-center ${
                  index < 3 ? "pq-border-right" : ""
                }`}
              >
                <div className="pq-counter-media">
                  <i className={item.icon}></i>
                </div>
                <div className="pq-counter-info">
                  <div className="pq-counter-num-prefix">
                    <h5 className="timer" data-to={item.number} data-speed="5000">
                      0
                    </h5>
                    <span className="pq-counter-prefix">+</span>
                  </div>
                  <p className="pq-counter-description">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="discover">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8 wow animated fadeInRight">
            <div className="pq-section-title pq-style-1">
              <span className="pq-section-sub-title">
                {t("discover.ourClient")}
              </span>
              <h5 className="pq-section-main-title">
                {t("discover.discoverOurCreation")}
              </h5>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="divider pq-left-border pq-45"></div>
          </div>

          <div className="col-lg-12 wow fadeInUp">
            <div className="pq-accordion-block pq-style-3">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div className="pq-accordion-block" key={index}>
                  <div
                    className={`pq-accordion-box ${activeIndex === index ? "pq-active" : ""}`}
                    onClick={() => toggleIndex(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="pq-ad-title">
                      <h4 className="ad-title-text">{t(`discover.question${index}`)}</h4>
                    </div>

                    <AnimatePresence initial={false}>
                      {activeIndex === index && (
                        <motion.div
                          className="pq-accordion-details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="pq-detail-text">{t(`discover.answer${index}`)}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Counter;
