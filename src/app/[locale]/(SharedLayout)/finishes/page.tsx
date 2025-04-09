"use client"

import { useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb"
import { useTranslation } from "react-i18next"
import FinishesSlider from "@/components/finishes-slider"
import "./finishes.css"

type Props = {
  params: { locale: string }
}

export default function FinishesPage({ params: { locale } }: Props) {
  const { t } = useTranslation("finishes");



  return (
    <main>
      {/* Use your existing BreadCrumb component */}
      <BreadCrumbComponent
        title={t("breadcrumb.current")}
        name={t("breadcrumb.current")}
        links={[
          { title: t("breadcrumb.home"), url: "/" },
          { title: t("breadcrumb.current"), url: `/${locale}/finishes` },
        ]}
      />

      {/* Finishes Section */}
      <section className="finishes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pq-section-title pq-style-1 text-center">
                <span className="pq-section-sub-title">{t("sections.finishesTitle")}</span>
                <h5 className="pq-section-main-title">{t("sections.finishesSubTitle")}</h5>
              </div>
            </div>
          </div>
          <div style={{ rowGap: "50px" }} className="row">
            {/* Saw-Cut Section */}
            <div className="col-lg-4 col-md-6 mt-4">
              <h3 className="text-center pb-5">{t("sections.categories.saw-cut")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/saw cut/1.jpg", alt: "saw cut Finish" },
                  { src: "/images/pics/finishes/saw cut/2.jpeg", alt: "saw cut Finish" },
                  { src: "/images/pics/finishes/saw cut/3.jpg", alt: "saw cut Finish" },
                  { src: "/images/pics/finishes/saw cut/4.jpg", alt: "saw cut Finish" },
                  { src: "/images/pics/finishes/saw cut/4.webp", alt: "saw cut Finish" },
                  { src: "/images/pics/finishes/saw cut/5.jpg", alt: "saw cut Finish" },
                ]}
                id="saw-cut"
              />
            </div>

            {/* Polished Section */}
            <div className="col-lg-4 col-md-6 mt-4">
              <h3 className="text-center pb-5">{t("sections.categories.polished")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/polished/1.jpg", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/2.gif", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/3.jpg", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/4.jpg", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/5.jpeg", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/6.jpeg", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/7.jpg", alt: "Polished Finish" },
                  { src: "/images/pics/finishes/polished/8.webp", alt: "Polished Finish" },
                ]}
                id="polished"
              />
            </div>

            {/* Honed Section */}
            <div className="col-lg-4 col-md-6 mt-4">
              <h3 className="text-center pb-5">{t("sections.categories.honed")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/hond/1.webp", alt: "hond Finish" },
                  { src: "/images/pics/finishes/hond/2.png", alt: "hond Finish" },
                  { src: "/images/pics/finishes/hond/3.jpg", alt: "hond Finish" },
                  { src: "/images/pics/finishes/hond/4.jpg", alt: "hond Finish" },
                  { src: "/images/pics/finishes/hond/5.jpg", alt: "hond Finish" },
                  { src: "/images/pics/finishes/hond/8.webp", alt: "hond Finish" },
                ]}
                id="honed"
              />
            </div>

            {/* Brushed Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.brushed")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/bruched/1.jpg", alt: "bruched Finish" },
                  { src: "/images/pics/finishes/bruched/2.jpg", alt: "bruched Finish" },
                  { src: "/images/pics/finishes/bruched/3.webp", alt: "bruched Finish" },
                  { src: "/images/pics/finishes/bruched/4.jpg", alt: "bruched Finish" },
                  { src: "/images/pics/finishes/bruched/5.jpg", alt: "bruched Finish" },
                  { src: "/images/pics/finishes/bruched/6.webp", alt: "bruched Finish" },
                  { src: "/images/pics/finishes/bruched/7.jpg", alt: "bruched Finish" },
                ]}
                id="brushed"
              />
            </div>

            {/* Bush Hammered Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.bush-hammered")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/hamerd/1.jpg", alt: "Bush hamerd Finish" },
                  { src: "/images/pics/finishes/hamerd/2.webp", alt: "Bush hamerd Finish" },
                  { src: "/images/pics/finishes/hamerd/3.webp", alt: "Bush hamerd Finish" },
                  { src: "/images/pics/finishes/hamerd/4.jpg", alt: "Bush hamerd Finish" },
                  { src: "/images/pics/finishes/hamerd/5.webp", alt: "Bush hamerd Finish" },
                  { src: "/images/pics/finishes/hamerd/6.webp", alt: "Bush hamerd Finish" },
                ]}
                id="bush-hammered"
              />
            </div>

            {/* Acid Wash Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.acid-wash")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/acid/1.webp", alt: "Acid Wash Finish" },
                  { src: "/images/pics/finishes/acid/2.jpg", alt: "Acid Wash Finish" },
                  { src: "/images/pics/finishes/acid/3.jpg", alt: "Acid Wash Finish" },
                ]}
                id="acid-wash"
              />
            </div>

            {/* Scratch Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.scratch")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/scratch/1.jpg", alt: "Scratch Finish For Sunny Menia" },
                  { src: "/images/pics/finishes/scratch/2.jpg", alt: "Scratch Finish For Sinai Pearl Gray" },
                ]}
                id="scratch"
              />
            </div>

            {/* Tumbled Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.tumbled")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/trambel/1.jpeg", alt: "Sunny Menia Tumbled Finish" },
                  { src: "/images/pics/finishes/trambel/2.jpg", alt: "Sunny Menia Tumbled Finish" },
                  { src: "/images/pics/finishes/trambel/3.jpg", alt: "Sunny Tumbled Finish" },
                  { src: "/images/pics/finishes/trambel/4.jpg", alt: "Sunny Tumbled Finish" },
                  { src: "/images/pics/finishes/trambel/5.jpg", alt: "Sunny Tumbled Finish" },
                ]}
                id="tumbled"
              />
            </div>

            {/* Stripped Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.stripped")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/striped/1.webp", alt: "Striped Tiles Finish" },
                  { src: "/images/pics/finishes/striped/2.jpg", alt: "Striped Tiles Finish" },
                  { src: "/images/pics/finishes/striped/3.png", alt: "Striped Tiles Finish" },
                  { src: "/images/pics/finishes/striped/4.jpg", alt: "Striped Tiles Finish" },
                ]}
                id="stripped"
              />
            </div>

            {/* Flamed Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.flamed")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/flamed/1.jpeg", alt: "Flamed Tiles Finish" },
                  { src: "/images/pics/finishes/flamed/2.jpg", alt: "Flamed Tiles Finish" },
                  { src: "/images/pics/finishes/flamed/3.webp", alt: "Flamed Tiles Finish" },
                  { src: "/images/pics/finishes/flamed/4.jpg", alt: "Flamed Tiles Finish" },
                  { src: "/images/pics/finishes/flamed/6.jpg", alt: "Flamed Tiles Finish" },
                ]}
                id="flamed"
                autoplay={true}
              />
            </div>

            {/* Sandblasted Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.sandblasted")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/sandblasted/1.jpg", alt: "Sandblasted Finish" },
                  { src: "/images/pics/finishes/sandblasted/2.webp", alt: "Sandblasted Finish" },
                  { src: "/images/pics/finishes/sandblasted/3.jpg", alt: "Sandblasted Finish" },
                  { src: "/images/pics/finishes/sandblasted/4.jpg", alt: "Sandblasted Finish" },
                  { src: "/images/pics/finishes/sandblasted/5.jpg", alt: "Sandblasted Finish" },
                  { src: "/images/pics/finishes/sandblasted/6.webp", alt: "Sandblasted Finish" },
                ]}
                id="sandblasted"
                autoplay={true}
              />
            </div>

            {/* Split Face Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="text-center pb-5">{t("sections.categories.split-face")}</h3>
              <FinishesSlider
                images={[
                  { src: "/images/pics/finishes/split-face/1.jpeg", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/2.jpg", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/3.jpeg", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/4.webp", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/5.webp", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/6.jpg", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/7.jpg", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/8.jpg", alt: "Split Face Finish" },
                  { src: "/images/pics/finishes/split-face/9.jpg", alt: "Split Face Finish" },
                ]}
                id="split-face"
                autoplay={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
