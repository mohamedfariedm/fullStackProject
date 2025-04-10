import initTranslations from "@/app/i18n";
import LanguageChanger from "../LanguageChanger";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

const getPRoducts = async () => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
async function Header({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);
  const products = await getPRoducts(); // Fetch products
  console.log("productsArray",products);
// Sort and group products by type and extract keys
const grouped = products.reduce(
  (acc, item) => {
    const key = item.name?.en?.replace(/\s+/g, "").toLowerCase() || "unknown"
    if (item.type === "granite") acc.granite.push({ ...item, key })
    else acc.marble.push({ ...item, key })
    return acc
  },
  { granite: [], marble: [] }
)
console.log(grouped.marble, grouped.granite);


  return (
    <>
      <div
        id="sticky-social-icons-container"
        className="design-rounded alignment-right with-animation hide-in-mobile"
      >
        <ul>
          <li className="fab-fa-facebook">
            <a
              href="https://www.facebook.com/share/p/YuLFEhc923F4tHim/"
              target="_blank"
              className="fab-fa-facebook"
              aria-label="Facebook"
              data-microtip-position="left"
              role="tooltip"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="fab-fa-instagram">
            <a
              href="https://www.instagram.com/kingstone6224?utm_source=qr&igsh=b3A2bTRucW1jdTZw"
              target="_blank"
              className="fab-fa-instagram"
              aria-label="Instagram"
              data-microtip-position="left"
              role="tooltip"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="fab-fa-linkedin">
            <a
              href="https://www.linkedin.com/in/king-stone-103628331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="fab-fa-linkedin"
              aria-label="LinkedIn"
              data-microtip-position="left"
              role="tooltip"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="fab-fa-whatsapp">
            <a
              href="https://wa.me/201271823154"
              target="_blank"
              className="fab-fa-whatsapp"
              aria-label="WhatsApp"
              data-microtip-position="left"
              role="tooltip"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="fab-fa-youtube">
            <a
              href="https://youtube.com/@kingstonemarblegranite?si=NZ18psHhZHH9MVin"
              target="_blank"
              className="fab-fa-youtube"
              aria-label="youtube"
              data-microtip-position="left"
              role="tooltip"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <header id="pq-header" className="pq-header-style-4 pq-has-sticky">
        <div className="pq-bottom-header">
          <div className="containerMax">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" href="/">
                    <img
                      className="img-fluid logo"
                      style={{ scale: "1.5" }}
                      src="/images/Logo/logo-4.png"
                      alt="kingStoneMarbleGranite"
                    />
                  </Link>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div id="pq-menu-contain" className="pq-menu-contain">
                      <ul id="pq-main-menu" className="navbar-nav ml-auto">
                        <li className="menu-item current-menu-item menu-item-has-children">
                          <Link href="/">{t("menuHome")}</Link>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <Link href="#">{t("menuEgyptianMarble")}</Link>
                          <i className="fa fa-chevron-down pq-submenu-icon"></i>
                          <ul
                            style={{ height: "50vh", overflowY: "scroll" }}
                            className="sub-menu"
                          >
                            {grouped.marble.map((one:any) => (
                              <li className="menu-item" key={one.name.en}>
                                <a
                                  href={`/products/${one.name.en.toLowerCase().trim()}`}
                                >
                                  {one.name[locale]}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <Link href="#">{t("menuEgyptianGranite")}</Link>
                          <i className="fa fa-chevron-down pq-submenu-icon"></i>
                          <ul
                            style={{ height: "50vh", overflowY: "scroll" }}
                            className="sub-menu"
                          >
                            {grouped.granite.map((all:any) => (
                              <li className="menu-item" key={all.name.en}>
                                <Link
                                  href={`/products/${all.name.en.toLowerCase().trim()}`}
                                >
                                  {all.name[locale]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <Link href="#">{t("menuPacking")}</Link>
                          <i className="fa fa-chevron-down pq-submenu-icon"></i>
                          <ul
                            className="sub-menu"
                            style={{ maxHeight: "50vh" }}
                          >
                            <li className="menu-item">
                              <Link href={`/slabs`}>
                                {t("slabsPacking")}
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link href={`/tiles`}>
                                {t("tilesPacking")}
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item">
                          <Link href={`/finishes`}>
                            {t("menuFinishes")}
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link href={`/factory`}>
                            {t("menuFactory")}
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link href={`/projects`}>
                            {t("menuProjects")}
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link href={`/contact-us`}>
                            {t("menuContact")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <LanguageChanger />

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
