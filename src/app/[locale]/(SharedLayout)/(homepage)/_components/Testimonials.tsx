import { TFunction } from "i18next";

function Testimonials({ t }: { t: TFunction }) {
  return (
    <section className="form pq-bg-dark pq-bg-img-2 p-0">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12 wow animated fadeInLeft pq-testimonial-slider-padding">
          <div className="pq-section-title pq-style-1 pq-mb-45">
            <span className="pq-section-sub-title">{t("testimonial.testimonialTitle")}</span>
            <h5 className="pq-section-main-title pq-text-white">{t("testimonial.testimonialSubtitle")}</h5>
          </div>
          <div className="pq-testimonial-box-slider pq-style-5 owl-carousel owl-loaded owl-drag">
            {[1, 2, 3].map((i) => (
              <div className="item" key={i}>
                <div className="pq-testimonial-box pq-style-5">
                  <div className="pq-testimonial-info">
                    <div className="pq-testimonial-content">
                      <div className="pq-testimonial-star">
                        {Array.from({ length: i === 1 ? 3 : 5 }).map((_, idx) => (
                          <i key={idx} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="pq-testimonial-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                      <p className="pq-testimonial-description">
                        {t(`testimonial.testimonial${i}Desc`)}
                      </p>
                    </div>
                    <div className="pq-testimonial-media">
                      <div className="pq-testimonial-img">
                        <img
                          src={`images/testimonial/${i === 3 ? "6" : i}.jpg`}
                          alt={`testimonial-${i}`}
                          decoding="async"
                        />
                      </div>
                      <div className="pq-testimonial-meta">
                        <h5 className="pq-testmonial-title">{t(`testimonial.testimonial${i}Name`)}</h5>
                        <span>{t(`testimonial.testimonial${i}Position`)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Testimonials;
