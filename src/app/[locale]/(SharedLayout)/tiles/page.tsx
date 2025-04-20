import React from "react";
import initTranslations from "@/app/i18n";
import { Metadata } from "next";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

export const dynamic = "force-dynamic";
export const revalidate = 60; // seconds
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { t } = await initTranslations(params.locale, ["tiles"]);
  return {
    title: t("title"),
  };
}

export default async function TilesPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["tiles"]);

  const images = [
    "/images/pics/tiles/4.jpeg",
    "/images/pics/tiles/5.jpeg",
    "/images/pics/tiles/6.jpeg",
    "/images/pics/tiles/7.jpeg",
    "/images/pics/tiles/8.jpeg",
    "/images/pics/tiles/3.jpeg",
    "/images/pics/tiles/9.jpeg",
    "/images/pics/tiles/1.jpeg",
    "/images/pics/tiles/2.jpeg",
  ];

  return (
    <>
    <BreadCrumbComponent
            name={t('breadcrumb.current')}
            title={t('contact.title')}
            description={t('contact.description')}
            data={images}
          />
      {/* Project Description */}
      <div style={{ paddingTop: 90 }} className="project-description">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="name-display-3">
                <span>{t("heading")}</span>
              </h2>
              <p className="pq-section-description">
                <span>{t("description")}</span>
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
                <span className="pq-section-sub-title">{t("gallery.subTitle")}</span>
                <h5 className="pq-section-main-title">{t("gallery.mainTitle")}</h5>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="divider pq-left-border pq-45"></div>
            </div>
          </div>

          <div className="row" id="gallery-container">
            {images.map((src, index) => (
              <div key={index} className="col-lg-4 col-md-6 mt-4">
                <a href={src}>
                  <img src={src} alt={`Tile ${index + 1}`} style={{ width: "100%", height: "auto" }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
