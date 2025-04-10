import { supabase } from "@/lib/supabaseClient";
import initTranslations from "@/app/i18n";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
                  <h1>{product.name[lang]}</h1>
                </div>
                <div className="pq-breadcrumb-container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <i className="fas fa-home me-2"></i>
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="breadcrumb-item active">{product.name[lang]}</li>
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
              <h2>{product.name[lang]}</h2>
              <h5 className="pq-section-main-title">at your home</h5>
              <p>{product.description[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery">
        <div className="container">
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
      
      {/* Add aboutUs, relatedField, etc., similarly */}
    </>
  );
}
