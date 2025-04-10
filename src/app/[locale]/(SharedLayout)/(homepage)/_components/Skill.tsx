import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";

function Skill({ t }: { t: TFunction }) {
  return (
    <section className="skill">
    <div className="container">
      <div className="floating-image floating-image-left floating-image-6">
        <img src="images/floating-images/4.png" alt="" />
      </div>
      <div className="row">
        <div className="col-lg-6 wow animated fadeInLeft">
          <div className="pq-sticky-top">
            <div className="pq-section-title pq-style-1 pq-mb-30">
              <span className="pq-section-sub-title">{t("skill.skillSubTitle")}</span>
              <h5 className="pq-section-main-title">{t("skill.skillMainTitle")}</h5>
              <p className="pq-section-description">{t("skill.skillDescription")}</p>
            </div>
            <a className="pq-button pq-button-flat" href="contact-us">
              <div className="pq-button-block">
                <span className="pq-button-text">{t("skill.contactUsButton")}</span>
                <span className="pq-button-line-right"></span>
                <i className="ion ion-ios-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="col-lg-6 mt-4 mt-lg-0 wow animated fadeInRight">
          <div className="pq-icon-box pq-style-4">
            <div className="pq-icon-box-content">
              <h3 className="pq-icon-box-title">{t("skill.marbleFlooringTitle")}</h3>
              <p className="pq-icon-box-description">{t("skill.marbleFlooringDescription")}</p>
            </div>
            <div className="pq-icon">
              <i className="flaticon-tile-1"></i>
            </div>
          </div>

          <div className="pq-icon-box pq-style-4 pq-mt-30">
            <div className="pq-icon-box-content">
              <h3 className="pq-icon-box-title">{t("skill.graniteFlooringTitle")}</h3>
              <p className="pq-icon-box-description">{t("skill.graniteFlooringDescription")}</p>
            </div>
            <div className="pq-icon">
              <i className="flaticon-stone"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Skill;
