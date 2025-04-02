import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";

function Flooring({ t }: { t: TFunction }) {
  const flooringItems = [
    {
      key: "laminateFlooring",
      icon: "flaticon-floor",
      img: "images/gallery/3.jpg",
    },
    {
      key: "marbleFlooring",
      icon: "flaticon-stones",
      img: "images/gallery/8.jpg",
    },
    {
      key: "industrialFlooring",
      icon: "flaticon-tile-1",
      img: "images/gallery/7.jpg",
    },
    {
      key: "kitchenRenovation",
      icon: "flaticon-tile-1",
      img: "images/gallery/9.jpg",
    },
  ];
  return (
    <section className="flooring p-0">
    <div className="container-fluid">
      <div className="row">
        {flooringItems.map(({ key, icon, img }) => (
          <div key={key} className="col-xl-3 col-lg-6 col-md-6 p-0">
            <div className="pq-service-box pq-style-5">
              <div className="pq-service-media">
                <div className="pq-service-img">
                  <img src={img} alt="service-img" />
                </div>
              </div>
              <div className="pq-service-info">
                <div className="pq-service-icon">
                  <i className={icon} aria-hidden="true"></i>
                </div>
                <h5 className="pq-service-title">
                  <a>{t(`${key}`)}</a>
                </h5>
                <p>{t(`${key}Desc`)}</p>
              </div>
              <div className="pq-btn-container">
                <a className="pq-button pq-button-link">
                  <div className="pq-button-block">
                    <div className="pq-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64.356"
                        height="36.52"
                        viewBox="0 0 64.356 36.52"
                      >
                        <g transform="translate(-6.444 -1.74)">
                          <g data-name="Group 2">
                            <circle
                              cx="17"
                              cy="17.76"
                              r="17.76"
                              transform="translate(34.78 2.24)"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="1"
                              opacity="0.5"
                            />
                            <circle
                              cx="17"
                              cy="17.76"
                              r="17.76"
                              transform="translate(34.78 2.24)"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="1"
                            />
                          </g>
                          <path
                            d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                            fill="#ffffff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Flooring;
