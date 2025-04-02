import { TFunction } from "i18next";
import Link from "next/link";

function AboutApp({ t }: { t: TFunction }) {
  return (
    <section className="about-us-page-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInLeft">
            <div className="pq-section-title pq-style-1">
              <span className="pq-section-sub-title">
                {t("aboutUsSubTitle")}
              </span>
              <h5 className="pq-section-main-title">
                {t("aboutUsMainTitle1")}
              </h5>
            </div>
            <ul className="pq-list-check-2">
              <li>
                <i className="ion ion-checkmark-round"></i>
                <span>{t("aboutUsStep1")}</span>
              </li>
              <li>
                <i className="ion ion-checkmark-round"></i>
                <span>{t("aboutUsStep2")}</span>
              </li>
              <li>
                <i className="ion ion-checkmark-round"></i>
                <span>{t("aboutUsStep3")}</span>
              </li>
              <li>
                <i className="ion ion-checkmark-round"></i>
                <span>{t("aboutUsStep4")}</span>
              </li>
            </ul>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0 wow animated zoomIn">
            <img
              src="images/about-us/avatar1.jpeg"
              className="img-fluid w-100"
              alt="about avatar"
            />
          </div>

          <div className="col-xl-4 col-lg-12 mt-4 mt-xl-0 wow animated fadeInRight">
            <div className="pq-section-title pq-style-1">
              <h5 className="pq-section-main-title">
                {t("aboutUsMainTitle2")}
              </h5>
              <p className="pq-section-description">
                {t("aboutUsDescription")}
              </p>
            </div>

            <div className="pq-progressbar-box pq-progressbar-style-1 pq-mb-45">
              <div className="pq-progressbar-content">
                <span className="progress-title">
                  {t("marbleFlooring")}
                </span>
                <span className="progress-value">90%</span>
                <div className="pq-progress-bar">
                  <span data-width="90" className="show-progress"></span>
                </div>
              </div>
              <div className="pq-progressbar-content">
                <span className="progress-title">
                  {t("graniteTiles")}
                </span>
                <span className="progress-value">79%</span>
                <div className="pq-progress-bar">
                  <span data-width="79" className="show-progress"></span>
                </div>
              </div>
            </div>

            <Link href="/contact-us" className="pq-button pq-button-flat">
              <div className="pq-button-block">
                <span className="pq-button-text">
                  {t("contactUsButton")}
                </span>
                <span className="pq-button-line-right"></span>
                <i className="ion ion-ios-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutApp;
