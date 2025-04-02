import initTranslations from "@/app/i18n";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

type props = {
  params: { locale: string };
  searchParams: {
    page: string | undefined;
    tag: string | undefined;
    sort: string | undefined;
  };
};

async function page({ params: { locale } }: props) {
  const { t } = await initTranslations(locale, ["products"]);

  return (
    <>
      <BreadCrumbComponent t={t} name={t("name")} title={t("title")} description={t("description")} />

      {/* Section 1 */}
      <div className="main-container w-full max-w-[1440px] relative mx-auto px-4">
        <div className="flex flex-wrap relative z-10 lg:flex-nowrap w-full items-center justify-center gap-8 lg:gap-[150px] py-[96px]">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-start max-w-[550px]">
            <span className="text-[20px] font-bold text-white leading-[36px]">
              {t("colombian_coffee_title")}
            </span>
            <div className="flex flex-col gap-6">
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb]">
                {t("colombian_coffee_description")}
              </span>
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb]">
                {t("colombian_coffee_description")}
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            style={{ backgroundImage: `url(/assets/images/products/1.svg)` }}
            className="w-full max-w-[420px] h-[320px] bg-contain sm:bg-cover  bg-no-repeat"
          />
        </div>

        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(/assets/images/products/cupCoffe.svg)` }}
          className="w-full h-full xl:h-[432px] bg-cover bg-no-repeat absolute ltr:rotate-y-180 top-[27.64%] end-0 z-0"
        />
      </div>

      {/* Section 2 */}
      <div className="main-container w-full max-w-[1440px] relative mx-auto px-4">
        <div className="flex relative z-10 flex-wrap-reverse lg:flex-nowrap w-full items-center justify-center gap-8 lg:gap-[150px] py-[96px]">
          {/* Image */}
          <div
            style={{ backgroundImage: `url(/assets/images/products/1.svg)` }}
            className="w-full max-w-[420px] h-[320px] bg-contain sm:bg-cover bg-no-repeat"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-6 text-start max-w-[550px]">
            <span className="text-[20px] font-bold text-white leading-[36px]">
              {t("colombian_coffee_title")}
            </span>
            <div className="flex flex-col gap-6">
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb]">
                {t("colombian_coffee_description")}
              </span>
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb]">
                {t("colombian_coffee_description")}
              </span>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(/assets/images/products/Vector.svg)` }}
          className="w-full h-[704px] bg-cover bg-no-repeat absolute top-[-30px] ltr:rotate-y-180 end-0 z-[1]"
        />
      </div>

      {/* Section 3 */}
      <div className="main-container w-full max-w-[1440px] relative z-10 mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap w-full items-center justify-center gap-8 lg:gap-[150px] py-[96px]">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-start max-w-[550px]">
            <span className="text-[20px] font-bold text-white leading-[36px]">
              {t("colombian_coffee_title")}
            </span>
            <div className="flex flex-col gap-6">
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb]">
                {t("colombian_coffee_description")}
              </span>
              <span className="text-[16px] font-medium leading-[29.12px] text-[#dbdbdb]">
                {t("colombian_coffee_description")}
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            style={{ backgroundImage: `url(/assets/images/products/1.svg)` }}
            className="w-full max-w-[420px] h-[320px] bg-contain sm:bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </>
  );
}

export default page;
