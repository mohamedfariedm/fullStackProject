import initTranslations from "@/app/i18n";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

type props = {
  params: { locale: string };
};

async function page({ params: { locale } }: props) {
  const { t } = await initTranslations(locale, ["aboutUs"]);

  return (
    <>
      <div className="p-2 xl:p-0">
      <BreadCrumbComponent t={t} name={t("name")} title={t("title")} description={t("description")} />

        <div className="flex flex-col gap-y-10 justify-center items-center flex-nowrap relative mx-auto my-10">
          {/* Section 1 */}
          <div className="main-container xl:w-[1440px] flex justify-end items-start xl:h-[341.711px] relative mx-auto my-0">
            <div className="flex xl:w-[479px] flex-col gap-[16px] justify-center items-start flex-nowrap relative z-[3] mt-[72px] xl:me-[250px]">
              <span className="xl:h-[36px] self-stretch shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[2]">
                {t("vision_title")}
              </span>
              <span className="flex xl:w-[479px] xl:h-[87px] items-start shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative">
                {t("vision_description")}
              </span>
            </div>
            <div
              style={{ backgroundImage: `url(/assets/images/about/coffeCup.svg)` }}
              className="w-full h-full bg-contain xl:bg-cover rotate-y-180 xl:rotate-y-0 ltr:rotate-y-180 bg-no-repeat absolute top-0 left-0"
            />
          </div>

          {/* Section 2 */}
          <div className="main-container xl:w-[1440px] xl:h-[302.272px] flex justify-start items-start relative mx-auto my-0">
            <div className="flex xl:w-[479px] flex-col gap-[16px] justify-center items-start flex-nowrap relative mt-[55px] xl:ms-[250px]">
              <span className="xl:h-[36px] self-stretch shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[3]">
                {t("mission_title")}
              </span>
              <span className="flex xl:w-[479px] xl:h-[116px] items-start shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative z-[2]">
                {t("mission_description")}
              </span>
            </div>
            <div
              style={{ backgroundImage: `url(/assets/images/about/group.svg)` }}
              className="w-full h-full bg-contain xl:bg-cover bg-no-repeat ltr:rotate-y-180 absolute top-0 left-0 z-[1]"
            />
          </div>

          {/* Section 3 */}
          <div className="main-container flex w-full max-w-[1440px] px-4 lg:px-0 py-[96px] flex-col gap-[48px] items-center relative mx-auto my-0">
            {/* Title Section */}
            <div className="flex w-full max-w-[856px] flex-col gap-[16px] justify-center items-center">
              <span className="text-[20px] font-bold leading-[36px] text-[#f8992f] text-center">
                {t("values_title")}
              </span>
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] text-center">
                {t("values_description")}
              </span>
            </div>

            {/* Values Section */}
            <div className="flex w-full max-w-[964px] flex-col gap-[32px] items-center">
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
                {[
                  { key: "quality", title: t("quality_title"), description: t("quality_description") },
                  { key: "innovation", title: t("innovation_title"), description: t("innovation_description") },
                  { key: "integrity", title: t("integrity_title"), description: t("integrity_description") },
                ].map((value, index) => (
                  <div key={index} className="flex w-full max-w-[300px] h-[150px] p-4 flex-col gap-[8px] justify-center items-start rounded-[16px] border hover:bg-gradient-to-bl from-[#462A12] via-[#3b1e0faf] to-[#462a1200] border-[#462a12]">
                    <span className="text-[18px] font-bold leading-[32.76px] text-[#fff] text-start">
                      {value.title}
                    </span>
                    <span className="text-[14px] font-medium leading-[25.48px] text-[#dbdbdb] text-start">
                      {value.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
                {[
                  { key: "social_responsibility", title: t("social_responsibility_title"), description: t("social_responsibility_description") },
                  { key: "sustainability", title: t("sustainability_title"), description: t("sustainability_description") },
                  { key: "community_empowerment", title: t("community_empowerment_title"), description: t("community_empowerment_description") },
                ].map((value, index) => (
                  <div key={index} className="flex w-full max-w-[300px] h-[150px] p-4 flex-col gap-[8px] justify-center items-start rounded-[16px] border hover:bg-gradient-to-bl from-[#462A12] via-[#3b1e0fb6] to-[#462a1200] border-[#462a12]">
                    <span className="text-[18px] font-bold leading-[32.76px] text-[#fff] text-start">
                      {value.title}
                    </span>
                    <span className="text-[14px] font-medium leading-[25.48px] text-[#dbdbdb] text-start">
                      {value.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
