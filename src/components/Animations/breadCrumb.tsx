"use client";
import React, { useEffect, useState } from "react";
const BreadCrumb: React.FC<{
  className?: string;
   name:string,
   name2?:string,
   title:string,
   data?:string[],
   links?: Array<{ title: string; url: string }>,
   description?:string
}> = ({ className,name,title,description,name2,links,data}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const images = data||["/images/Breadcrumb/4.jpeg"] // Default to product.main_image if no image array

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
                <h1 id="breadcrumb-title">{name}</h1>
              </div>
              <div className="pq-breadcrumb-container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" id="breadcrumb-home">
                      <i className="fas fa-home me-2"></i>Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" id="breadcrumb-current">
                    {name}
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BreadCrumbComponent = React.memo(BreadCrumb);
