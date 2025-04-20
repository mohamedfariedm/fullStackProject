"use client";
import { useState, useEffect } from 'react';

function BreadCrumb({
  product,
  className,
  lang = "en",
}: {
  product: any;
  className?: string;
  lang?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const images = product.image_array || [product.main_image]; // Default to product.main_image if no image array

  // Function to automatically change the image every 3000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change image every 3 seconds (3000ms)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]); // Re-run the effect if the number of images changes

  // Get the current image for the background
  const backgroundImage = images[currentIndex];

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`pq-breadcrumb ${className || ''}`}
    >
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
  );
}

export default BreadCrumb;
