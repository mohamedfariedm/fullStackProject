import initTranslations from "@/app/i18n";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
export const dynamic = "force-dynamic";
export const revalidate = 60; // seconds
type props = {
  params: { locale: string };
};

async function Page({ params: { locale } }: props) {
  const { t } = await initTranslations(locale, ["factory"]);

  return (
    <>
      <div className="p-2 xl:p-0">
      <BreadCrumbComponent data={["/images/pics/faqtory/1.png","/images/pics/faqtory/fac.jpeg","/images/pics/faqtory/2.jpg","/images/pics/faqtory/3.jpeg"]}  name={t("name")} title={t("title")} description={t("description")} />
      
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
          {/* Large image */}
          <div className="col-lg-12 col-md-6 mt-4">
            <a href="/images/pics/faqtory/fac.jpeg">
              <img
                src="/images/pics/faqtory/fac.jpeg"
                className="responsive-image"
                style={{ width: "100%" }}
                alt="Project 1"
              />
            </a>
          </div>

          {/* Grid images */}
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/1.png">
              <img src="/images/pics/faqtory/1.png" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/2.jpg">
              <img src="/images/pics/faqtory/2.jpg" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/3.jpeg">
              <img src="/images/pics/faqtory/3.jpeg" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/5.webp">
              <img src="/images/pics/faqtory/5.webp" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/6.png">
              <img src="/images/pics/faqtory/6.png" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/7.jpg">
              <img src="/images/pics/faqtory/7.jpg" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/8.jpg">
              <img src="/images/pics/faqtory/8.jpg" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/9.jpg">
              <img src="/images/pics/faqtory/9.jpg" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/images/pics/faqtory/11.jpg">
              <img src="/images/pics/faqtory/11.jpg" style={{ width: "100%", height: "50vh" }} alt="Project 1" />
            </a>
          </div>
        </div>
      </div>
    </section>

      </div>
    </>
  );
}

export default Page;
