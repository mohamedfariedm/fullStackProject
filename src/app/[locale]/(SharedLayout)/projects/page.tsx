"use client";
import React, { useState } from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { useTranslation } from "react-i18next";

type Props = {
  params: { locale: string };
};

function Page({ params: { locale } }: Props) {
  const { t } = useTranslation("projects");
  return (
    <>
    <BreadCrumbComponent name={t("name")} title={t("title")} description={t("description")} />

{/* Project Description */}
<div style={{ paddingTop: "30px" }} className="project-description">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 id="name-display-3">
          <span id="heading">{t("heading")}</span>
        </h2>
        <p className="pq-section-description">
          <span id="description">{t("description")}</span>
        </p>
      </div>
    </div>
  </div>
</div>

{/* Projects Gallery */}
<section className="gallery">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-8 col-md-8">
        <div className="pq-section-title pq-style-1">
          <span className="pq-section-sub-title" id="gallery-sub-title">
            {t("gallery.subTitle")}
          </span>
          <h5 className="pq-section-main-title" id="gallery-main-title">
            {t("gallery.mainTitle")}
          </h5>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="divider pq-left-border pq-45"></div>
      </div>
    </div>
    <div className="row" id="gallery-container">
      {/* Gallery Images */}
      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
        <div key={num} className="col-lg-4 col-md-6 mt-4">
          <a href={`/images/pics/projects/${num}.jpeg`}>
            <img
              src={`/images/pics/projects/${num}.jpeg`}
              style={{ width: "100%", height: "50vh" }}
              alt={`Project ${num}`}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default Page;
