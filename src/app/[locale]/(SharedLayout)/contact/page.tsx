import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import ContactForm from "./_components/ContactForm";
import LeftPart from "./_components/LeftPart";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["contactUs"]);

  return (
<>
<BreadCrumbComponent t={t} name={t("name")} title={t("title")} description={t("description")} />
<div className="main-container  flex flex-col xl:flex-row w-full  xl:w-[1148px] gap-[64px] justify-center items-end flex-nowrap relative mx-auto my-10">
<ContactForm/>
<LeftPart t={t}/>
<div className="w-[1440px] h-[70.65%] bg-[url(/assets/images/contact/vector.svg)] bg-cover bg-no-repeat ltr:rotate-y-180 absolute top-[2.4%] rtl:end-1/2 rtl:translate-x-[-50.03%] translate-y-0 z-[1]" />


  </div>
</>

  );
}

export default page;
