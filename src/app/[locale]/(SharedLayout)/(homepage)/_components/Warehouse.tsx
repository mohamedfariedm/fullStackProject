import { TFunction } from "i18next";
import React from "react";
import Link from "next/link";

interface ArticleData {
  title: string;
  description: string;
  url: string;
}
function Warehouse({ t }: { t: TFunction }) {

  return (
    <section className="warehouse pq-bg-dark pq-bg-img-2">
    <div className="container">
      <div className="row align-items-center pq-pb-130">
        <div className="col-xl-6 wow animated fadeInLeft">
          <div className="pq-warehouse-img-overflow">
            <img src="images/warehouse/5.jpeg" className="img-fluid w-100" alt="" />
          </div>
        </div>
        <div className="col-xl-6 mt-4 mt-xl-0 ps-xl-30 wow animated fadeInRight">
          <div className="pq-section-title pq-style-1">
            <span className="pq-section-sub-title">{t("warehouseSubTitle")}</span>
            <h5 className="pq-section-main-title pq-text-white">{t("warehouseMainTitle1")}</h5>
            <p className="pq-section-description pq-text-white">{t("warehouseDescription")}</p>
          </div>
          <div className="pq-heading-box pq-mt-30">
            <h5 className="pq-heading-box-title">
              <span>01</span> <span>{t("warehouseFeature1")}</span>
            </h5>
            <div className="divider pq-my-30"></div>
            <h5 className="pq-heading-box-title">
              <span>02</span> <span>{t("warehouseFeature2")}</span>
            </h5>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-8 col-md-8 wow animated fadeInLeft">
          <div className="pq-section-title pq-style-1">
            <span className="pq-section-sub-title">{t("chooseYourStone")}</span>
            <h5 className="pq-section-main-title pq-text-white">{t("showroomTitle")}</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 wow animated fadeInLeft">
          <div className="button-align">
            <Link href="finishes.html" className="pq-button pq-button-flat">
              <div className="pq-button-block">
                <span className="pq-button-text">{t("viewMore")}</span>
                <span className="pq-button-line-right"></span>
                <i className="ion ion-ios-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-12 wow animated fadeInLeft">
          <div className="divider pq-left-border pq-45"></div>
        </div>

        {[
          { src: "images/stone/grid/8.webp", key: "stoneMarble" },
          { src: "images/stone/grid/25.jpg", key: "stoneGranite" },
          { src: "images/stone/grid/10.webp", key: "stoneQuartzite" },
          { src: "images/stone/grid/11.jpeg", key: "stoneLimestone" },
          { src: "images/stone/grid/12.webp", key: "stoneTravertine" },
          { src: "images/stone/grid/13.webp", key: "stoneOnyx" },
        ].map((item, index) => (
          <div className={`col-lg-4 col-md-6 mt-4 ${index < 3 ? "" : "mt-lg-0"} wow animated fadeInUp`} key={item.key}>
            <div className="pq-image-box pq-style-4">
              <div className="pq-image-box-img">
                <span>
                  <img style={{ height: "370px" }} src={item.src} className="img-fluid w-100" alt="" />
                </span>
              </div>
              <div className="pq-image-box-content">
                <h4 className="pq-image-box-title">
                  <span>{t(item.key)}</span>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Warehouse;
