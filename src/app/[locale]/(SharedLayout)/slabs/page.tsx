import React from "react";
import initTranslations from "@/app/i18n";
import { Metadata } from "next";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
export const dynamic = "force-dynamic";
export const revalidate = 60; // seconds

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { t } = await initTranslations(params.locale, ["slabs"]);
  return {
    title: t("title"),
  };
}

export default async function SlabsPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["slabs"]);

  const images = Array.from({ length: 8 }, (_, i) => `/images/pics/slabs/${i + 1}.jpeg`);

  return (
    <>
    <BreadCrumbComponent
            name={t('breadcrumb.current')}
            title={t('contact.title')}
            description={t('contact.description')}
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
            {images.map((src, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mt-4">
                <a href={src}>
                  <img src={src} alt={`Slab ${idx + 1}`} style={{ width: "100%", height: "50vh" }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
