import React from "react";
import initTranslations from "@/app/i18n";
import Link from "next/link";
import BackToTop from "./BackToTop";

async function Footer({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <footer id="pq-footer">
      <div className="pq-footer-style-1">
        <div className="pq-subscribe align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="pq-subscribe-bg">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="pq-footer-logo">
                        <img
                          style={{ scale: "1.5" }}
                          src="/images/Logo/logo-4.png"
                          className="pq-footer-logo"
                          alt="marblex-footer-logo"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 align-self-center">
                      <div className="pq-subscribe-from">
                        <form>
                          <div className="subscribe-form">
                            <input
                              type="email"
                              name="EMAIL"
                              placeholder={t("footer.emailPlaceholder")}
                              className="form-control"
                              required
                            />
                            <input
                              className="submit"
                              type="submit"
                              value={t("footer.signUpButton")}
                            />
                            <i className="ion-ios-paperplane"></i>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pq-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <h4 className="footer-title">{t("footer.aboutUs")}</h4>
                  <p>{t("footer.aboutUsDescription")}</p>
                  <ul>
                    <li>
                      <a
                        href="https://wa.me/201271823154"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>0 12 71823154</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <h4 className="footer-title">{t("footer.ourNavigate")}</h4>
                  <ul className="menu">
                    <li>
                      <Link href="/finishes">{t("footer.finishes")}</Link>
                    </li>
                    <li>
                      <Link href="/factory">{t("footer.factoryQuarry")}</Link>
                    </li>
                    <li>
                      <Link href="/projects">{t("footer.ourProjects")}</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">{t("footer.contactUs")}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <h4 className="footer-title">{t("footer.ourServices")}</h4>
                  <ul className="menu">
                    <li>
                      <Link href="/slabs">{t("footer.slabsPacking")}</Link>
                    </li>
                    <li>
                      <Link href="/tiles">{t("footer.tilesPacking")}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget widget-port-1">
                  <h4 className="footer-title">{t("footer.ourShowroom")}</h4>
                  <ul className="pq-contact">
                    <li>
                      <i className="fas fa-map-marker"></i>
                      <span>{t("footer.showroomAddress")}</span>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/201271823154"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>0 12 71823154</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@kingstone-eg.com">
                        <i className="fas fa-envelope"></i>
                        <span>{t("footer.email")}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pq-copyright-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-self-center">
                <span className="pq-copyright">
                  {t("footer.copyright")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}

export default Footer;
