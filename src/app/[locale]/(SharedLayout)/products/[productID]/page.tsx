import initTranslations from "@/app/i18n";

async function page({
  params: { locale, productID },
}: {
  params: { locale: string; productID: string };
}) {
  const relatedFieldMarbel = [
    {
      name: {
        en: "Sinai Pearl – Triesta",
        ar: "سيناء بيرل – تريستا",
        pt: "Pérola do Sinai – Triesta",
        fr: "Perle du Sinaï – Triesta",
      },
      image: "images/pics/Galala/1.jpg",
      categorie: {
        en: "Sinai",
        ar: "سيناء",
        pt: "Sinai",
        fr: "Sinai",
      },
      url: "about-us.html?name=Sinai%20Pearl%20–%20Triesta",
    },
    {
      name: {
        en: "Galala Beige Marble",
        ar: "رخام جلالة بيج",
        pt: "Mármore Galala Bege",
        fr: "Marbre Galala Beige",
      },
      image: "images/pics/Galala/2.jpg",
      categorie: {
        en: "Galala",
        ar: "جلالة",
        pt: "Galala",
        fr: "Galala",
      },
      url: "about-us.html?name=Galala%20Beige%20Marble",
    },
    {
      name: {
        en: "Galala Light Marble",
        ar: "رخام جلالة لايت",
        pt: "Mármore Galala Light",
        fr: "Marbre Galala Light",
      },
      image: "images/pics/Sunny/1.jpg",
      categorie: {
        en: "Galala",
        ar: "جلالة",
        pt: "Galala",
        fr: "Galala",
      },
      url: "about-us.html?name=Galala%20Light%20Marble",
    },
    {
      name: {
        en: "Onyx Marble",
        ar: "رخام أونيكس",
        pt: "Mármore Ônix",
        fr: "Marbre Onyx",
      },
      image: "images/pics/onyex/4.jpg",
      categorie: {
        en: "Onyx",
        ar: "أونيكس",
        pt: "Ônix",
        fr: "Onyx",
      },
      url: "about-us.html?name=Onyx%20Marble",
    },
    {
      name: {
        en: "Samaha Marble",
        ar: "رخام سماحة",
        pt: "Mármore Samaha",
        fr: "Marbre Samaha",
      },
      image: "images/pics/Samaha/1.jpg",
      categorie: {
        en: "Samaha",
        ar: "سماحة",
        pt: "Samaha",
        fr: "Samaha",
      },
      url: "about-us.html?name=Samaha%20Marble",
    },
    {
      name: {
        en: "Zafarana Marble",
        ar: "رخام زعفرانة",
        pt: "Mármore Zafarana",
        fr: "Marbre Zafarana",
      },
      image: "images/pics/Zaafrana/1.jpg",
      categorie: {
        en: "Zaafrana",
        ar: "زعفرانة",
        pt: "Zaafrana",
        fr: "Zaafrana",
      },
      url: "about-us.html?name=Zafarana%20Marble",
    },
  ];

  const relatedFieldGranite = [
    {
      name: {
        en: "Gandola Granite",
        ar: "جرانيت جندولة",
        pt: "Granito Gandola",
        fr: "Granite Gandola",
      },
      image: "images/pics/gandola/3.jpeg",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=Gandola%20Granite",
    },
    {
      name: {
        en: "New Halayeb Granite",
        ar: "جرانيت حلايب الجديد",
        pt: "Granito Novo Halayeb",
        fr: "Granite Nouveau Halayeb",
      },
      image: "images/pics/newhalayp/1.jpg",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=New%20Halayeb%20Granite",
    },
    {
      name: {
        en: "Rosa Hodi Granite",
        ar: "جرانيت روزا هودي",
        pt: "Granito Rosa Hodi",
        fr: "Granite Rosa Hodi",
      },
      image: "images/pics/rosa hody/2.jpeg",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=Rosa%20Hodi%20Granite",
    },
    {
      name: {
        en: "Red Aswan Granite",
        ar: "جرانيت أسوان الأحمر",
        pt: "Granito Aswan Vermelho",
        fr: "Granite Rouge d'Assouan",
      },
      image: "images/pics/Aswan red/1.jpg",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=Red%20Aswan%20Granite",
    },
    {
      name: {
        en: "Rosa Elnasr Granite",
        ar: "جرانيت روزا النصر",
        pt: "Granito Rosa Elnasr",
        fr: "Granite Rosa Elnasr",
      },
      image: "images/pics/rosa nasr/1.jpeg",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=Rosa%20Elnasr%20Granite",
    },
    {
      name: {
        en: "Red Forsan Granite",
        ar: "جرانيت فورسان الأحمر",
        pt: "Granito Vermelho Forsan",
        fr: "Granite Rouge Forsan",
      },
      image: "images/pics/red forsan/1.jpeg",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=Red%20Forsan%20Granite",
    },
    {
      name: {
        en: "Verdy Gazal Granite",
        ar: "جرانيت فيردي غزال",
        pt: "Granito Verdy Gazal",
        fr: "Granite Verdy Gazal",
      },
      image: "images/pics/vardy/4.webp",
      categorie: {
        en: "Granite",
        ar: "جرانيت",
        pt: "Granito",
        fr: "Granite",
      },
      url: "about-us.html?name=Verdy%20Gazal%20Granite",
    },
  ];

  const featuredProduct = [
    {
      icon: "flaticon-tile-2",
      title: {
        en: "Smooth Finish",
        ar: "تشطيب ناعم",
        pt: "Acabamento Suave",
        fr: "Finition Lisse",
      },
    },
    {
      icon: "flaticon-modern-art",
      title: {
        en: "Timeless Appeal",
        ar: "جاذبية خالدة",
        pt: "Atrativo Atemporal",
        fr: "Attrait Intemporel",
      },
    },
  ];

  const checklist = [
    {
      en: "Ideal for flooring and wall cladding",
      ar: "مثالي للأرضيات وتكسية الجدران",
      pt: "Ideal para pisos e revestimentos de parede",
      fr: "Idéal pour les sols et le revêtement mural",
    },
    {
      en: "Resistant to wear and tear",
      ar: "مقاوم للتآكل والتمزق",
      pt: "Resistente ao desgaste",
      fr: "Résistant à l'usure",
    },
    {
      en: "Adds a touch of luxury to interiors",
      ar: "يضيف لمسة من الفخامة إلى الديكورات الداخلية",
      pt: "Acrescenta um toque de luxo aos interiores",
      fr: "Ajoute une touche de luxe aux intérieurs",
    },
  ];

const product={
  image_array: [
    "images/pics/Triesta/1.jpg",
    "images/pics/Triesta/2.jpg",
    "images/pics/Triesta/3.jpg",
    "images/pics/Triesta/4.jpg",
    "images/pics/Triesta/5.jpg",
    "images/pics/Triesta/6.jpg",
    "images/pics/Triesta/7.jpg",
  ],
  aboutUs: {
    images: ["images/pics/Triesta/6.jpg", "images/pics/Triesta/7.jpg"],
    title: {
      en: "The Warm Elegance of Sinai Pearl – Triesta",
      ar: "أناقة دافئة للؤلؤة سيناء – تريستا",
      fr: "L'élégance chaleureuse de la Perle du Sinaï – Triesta",
      pt: "A Elegância Calorosa da Pérola do Sinai – Triesta",
    },
    description: {
      en: "Sinai Pearl – Triesta offers warmth and elegance, perfect for both classic and modern designs.",
      ar: "توفر لؤلؤة سيناء – تريستا الدفء والأناقة، مثالية للتصاميم الكلاسيكية والحديثة.",
      fr: "La Perle du Sinaï – Triesta offre chaleur et élégance, parfaite pour les designs classiques et modernes.",
      pt: "A Pérola do Sinai – Triesta oferece calor e elegância, perfeita para designs clássicos e modernos.",
    },
    features: featuredProduct,
    checklist: checklist,
  },
  relatedField: relatedFieldMarbel,
  name: {
    en: "Sinai Pearl – Triesta",
    ar: "لؤلؤة سيناء – تريستا",
    fr: "Perle du Sinaï – Triesta",
    pt: "Pérola do Sinai – Triesta",
  },
  description: {
    en: "A premium Egyptian marble with a unique texture.",
    ar: "رخام مصري فاخر بملمس فريد.",
    fr: "Un marbre égyptien premium avec une texture unique.",
    pt: "Um mármore egípcio premium com uma textura única.",
  },
  main_image: "images/sinai_pearl_triesta.jpg",
}
  const lang = locale || "en";
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
            <p>{product.description[lang]}</p>
            <p className="pq-mb-45">This is dynamic page content.</p>
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
              <a href={`/${img}`} target="_blank" rel="noopener noreferrer">
                <img src={`/${img}`} alt="product gallery" style={{ width: "100%" }} />
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
              <img src={`/${product.aboutUs.images[0]}`} className="pq-image1" alt="About Us" />
              <img src={`/${product.aboutUs.images[1]}`} className="pq-image2" alt="About Us 2" />
            </div>
          </div>
          <div className="col-xl-6 pq-about-us-padding">
            <div className="pq-section-title pq-style-1 pq-mb-35">
              <span className="pq-section-sub-title">About Us</span>
              <h5 className="pq-section-main-title">{product.aboutUs.title[lang]}</h5>
              <p className="pq-section-description">{product.aboutUs.description[lang]}</p>
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
                      src={`/${item.image}`}
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
  </>  );
}

export default page;
