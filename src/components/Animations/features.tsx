"use client";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation("blog");

  return (
    <>
      <div className="p-2 xl:p-0">
<BreadCrumbComponent t={t} name={t("name")} name2={t("name2")} title={t("title")}  />

        <div className="main-container max-w-[1160px] w-full flex flex-col justify-center items-center text-[0px] rounded-[20px] relative mx-auto my-10 px-4 lg:px-0">
          {/* Background Image */}
          <div className="w-full max-w-[1160px] h-[400px] sm:h-[500px] md:h-[550px] lg:h-[662.94px] bg-cover bg-no-repeat rounded-[20px]" 
            style={{ backgroundImage: `url(/assets/images/products/main.svg)` }} />

          {/* Description */}
          <span className="w-full max-w-[1100px] text-[16px] sm:text-[18px] font-medium leading-[28px] sm:leading-[32.76px] text-[#fff] text-start z-[1] mt-[32px]">
            {t("coffee_intro")}
            <br /><br />

            <strong>1. {t("energy_boost_title")}</strong>
            <br />
            {t("energy_boost_desc")}
            <br /><br />

            <strong>2. {t("antioxidants_title")}</strong>
            <br />
            {t("antioxidants_desc")}
            <br /><br />

            <strong>3. {t("mood_improvement_title")}</strong>
            <br />
            {t("mood_improvement_desc")}
            <br /><br />

            <strong>4. {t("brain_health_title")}</strong>
            <br />
            {t("brain_health_desc")}
            <br /><br />

            <strong>5. {t("sports_performance_title")}</strong>
            <br />
            {t("sports_performance_desc")}
            <br /><br />

            <strong>6. {t("liver_health_title")}</strong>
            <br />
            {t("liver_health_desc")}
            <br /><br />

            <strong>7. {t("metabolism_boost_title")}</strong>
            <br />
            {t("metabolism_boost_desc")}
            <br /><br />

            <strong>{t("moderate_coffee_title")}</strong>
            <br />
            {t("moderate_coffee_desc")}
            <br /><br />

            {t("final_thoughts")}
          </span>
        </div>
      </div>
    </>
  );
}

export default Features;
