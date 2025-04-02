"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation("homepage");

  const products = [
    {
      title: t("products.items.0.title"),
      description: t("products.items.0.description"),
      image: "/assets/images/products/product.svg",
    },
    {
      title: t("products.items.1.title"),
      description: t("products.items.1.description"),
      image: "/assets/images/products/product.svg",
    },
    {
      title: t("products.items.2.title"),
      description: t("products.items.2.description"),
      image: "/assets/images/products/product.svg",
    },
    {
      title: t("products.items.3.title"),
      description: t("products.items.3.description"),
      image: "/assets/images/products/product.svg",
    },
  ];

  return (
    <div className="main-container flex w-full xl:w-[1440px] flex-col gap-[48px] justify-center items-center relative mx-auto">
      {/* Section Title */}
      <div className="flex w-full xl:w-[1030px] flex-col gap-[48px] justify-center items-start">
        <div className="flex w-full xl:w-[882px] flex-col gap-[8px] justify-center items-start">
          <div className="flex w-full rtl:xl:w-[198px] flex-col items-start">
            <span className="flex w-full rtl:xl:w-[56px] rtl:xl:h-[29px] text-[16px] font-medium leading-[29px] text-[#dbdbdb]">
              {t("products.title")}
            </span>
            <span className="flex w-full rtl:xl:w-[198px] rtl:h-[36px] text-[20px] font-bold leading-[36px] text-[#f8992f]">
              {t("products.subtitle")}
            </span>
          </div>
          <span className="flex w-full xl:w-[882px] rtl:xl:h-[29px] text-[16px] font-medium leading-[29px] text-[#dbdbdb]">
            {t("products.description")}
          </span>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full xl:w-[1030px] relative"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-full xl:w-[1030px] xl:h-[249px] flex-col xl:flex-row justify-between items-center xl:items-start">
              {/* Product Info */}
              <div className="flex w-full xl:w-[550px] flex-col gap-[39px] pt-5 items-start">
                <div className="flex w-full xl:w-auto flex-col gap-[8px]">
                  <span className="xl:h-[33px] text-[18px] font-bold leading-[32.76px] text-[#fff]">
                    {product.title}
                  </span>
                  <span className="flex w-full xl:w-[550px] xl:h-[75px] text-[14px] font-medium leading-[25.48px] text-[#dbdbdb]">
                    {product.description}
                  </span>
                </div>
              </div>

              {/* Product Image */}
              <div
                style={{ backgroundImage: `url(${product.image})` }}
                className="w-[250px] sm:w-[327px] h-[249px] bg-contain sm:bg-cover bg-no-repeat"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="flex h-32 ltr:flex-row-reverse sm:h-auto justify-center sm:justify-start w-full sm:w-[112px] gap-[16px] sm:items-center shrink-0 flex-nowrap md:absolute md:bottom-5 z-[18]">
          <div
            className="swiper-prev hover:bg-white transition-all duration-500 cursor-pointer flex w-[48px] h-[48px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-solid border border-[#dbdbdb] relative z-[19]"
          >
            <div
              style={{
                backgroundImage: `url(/assets/images/products/arrow-right.svg)`,
              }}
              className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[20]"
            ></div>
          </div>
          <div
            className="swiper-next hover:bg-white transition-all duration-500 cursor-pointer flex w-[48px] h-[48px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-solid border border-[#dbdbdb] relative z-[19]"
          >
            <div
              style={{
                backgroundImage: `url(/assets/images/products/arrow-left.svg)`,
              }}
              className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[20]"
            ></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Products;
