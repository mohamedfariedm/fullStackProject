import { supabase } from "@/lib/supabaseClient";
import initTranslations from "@/app/i18n";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 60; // seconds

type Props = {
  params: { locale: string; productID: string };
};

const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data || [];
};

const getProductBySlug = async (slug: string) => {
  const products = await getProducts();
  
  const normalizedSlug = decodeURIComponent(slug)
    .replace(/[\s\-\–]+/g, "")
    .trim()
    .toLowerCase();

  console.log("Normalized Slug:", normalizedSlug);
  
  return products.find((product) => {
    const normalizedProductName = product.name.en
      .replace(/[\s\-\–]+/g, "")
      .trim()
      .toLowerCase();

    return normalizedProductName === normalizedSlug;
  });
};



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productID, locale } = params;
  const product = await getProductBySlug(productID);

  return {
    title: product.metaTitle[locale] || product.name[locale] || "King Stone",
    description:
      product.metaDescription[locale] ||
      product.name[locale] ||
      "Discover our products",
  };
}



export default async function ProductPage({
  params: { locale, productID },
}: {
  params: { locale: string; productID: string };
}) {
  const lang = locale || "en";
  const product = await getProductBySlug(productID);

  if (!product) {
    return notFound(); // Handle not found clearly
  }

  return (
    <>
    <div className="pq-breadcrumb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <div className="pq-breadcrumb-title">
                <h1 id="name-display-2">{product.name[lang]}</h1>
              </div>
              <div className="pq-breadcrumb-container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">
                      <i className="fas fa-home me-2"></i>
                      <span>Home</span>
                    </a>
                  </li>
                  <li id="name-display-1" className="breadcrumb-item active">
                    {product.name[lang]}
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div className="container">
        <div className="row">
          <div className="mt-4 mt-lg-0">
            <h5 className="pq-section-main-title">Choose</h5>
            <h2 id="name-display-3">{product.name[lang]}</h2>
            <h5 className="pq-section-main-title">at your home</h5>
            <div
  className="rich-text-content"
  dangerouslySetInnerHTML={{ __html: product.description[lang] }}
/>
          </div>
        </div>
      </div>
    </section>

    <div className="gallery">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <div className="pq-section-title pq-style-1">
              <span className="pq-section-sub-title">latest work</span>
              <h5 className="pq-section-main-title">discover our creation</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="divider pq-left-border pq-45"></div>
          </div>
        </div>
        <div className="row">
          {product.image_array.map((img, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mt-4">
              <a href={`${img}`} target="_blank" rel="noopener noreferrer">
                <img src={`${img}`} alt="product gallery" style={{ width: "100%" }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="about-us pq-pb-180">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-us-img">
              <img src={`${product.aboutUs.images[0]}`} className="pq-image1" alt="About Us" />
              <img src={`${product.aboutUs.images[1]}`} className="pq-image2" alt="About Us 2" />
            </div>
          </div>
          <div className="col-xl-6 pq-about-us-padding">
            <div className="pq-section-title pq-style-1 pq-mb-35">
              <span className="pq-section-sub-title">About Us</span>
              <h5 className="pq-section-main-title">{product.aboutUs.title[lang]}</h5>
              <div
  className="rich-text-content"
  dangerouslySetInnerHTML={{ __html: product.aboutUs.description[lang] }}
              
              />
            </div>
            <div className="row pq-mb-45">
              {product.aboutUs.features.map((f, idx) => (
                <div key={idx} className="col-lg-6 col-md-6">
                  <div className="pq-icon-box pq-style-2">
                    <div className="pq-icon">
                      <i className={f.icon}></i>
                    </div>
                    <div className="pq-icon-box-content">
                      <h5>{f.title[lang]}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="pq-list-check pq-mb-45">
              {product.aboutUs.checklist.map((c, idx) => (
                <li key={idx}>
                  <i className="fas fa-circle"></i>
                  <span>{c[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="portfolio">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <div className="pq-section-title pq-style-1">
              <span className="pq-section-sub-title">Related Product</span>
              <h5 className="pq-section-main-title">Related Marble</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="divider pq-right-border pq-45"></div>
          </div>
          <div className="col-lg-12">
            <div className="pq-portfoliobox-2">
              <div className="pq-protfolio-tabs">
                {product.relatedField.map((item, idx) => (
                  <div key={idx} className="protfolio-tabs-item">
                    <a href={`/${item.url}`} className="protfolio-tabs-link">
                      <span className="portfolio-number">{String(idx + 1).padStart(2, "0")}</span>
                      <h5 className="portfolio-title">{item.name[lang]}</h5>
                      <p className="portfolio-location">Category: {item.categorie[lang]}</p>
                    </a>
                    <img
                      src={`${item.image}`}
                      alt={item.name[lang]}
                      className="protfolio-tabs-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </> 
  );
}
