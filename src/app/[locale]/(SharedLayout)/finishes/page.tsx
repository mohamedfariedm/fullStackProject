import initTranslations from "@/app/i18n";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Blogs } from "../(homepage)/_components";

type props = {
  params: { locale: string };
  searchParams: {
    page: string | undefined;
    tag: string | undefined;
    sort: string | undefined;
  };
};

interface ArticleData {
  title: string;
  description: string;
  url: string;
}


async function page({ params: { locale } }: props) {
  const { t } = await initTranslations(locale, ["blog"]);
const data : ArticleData[]=[
  {
    title: t("articles.list.0.title"),
    description: t("articles.list.0.description"),
    url: "/assets/images/articles/3.svg",
  },
  {
    title: t("articles.list.1.title"),
    description: t("articles.list.1.description"),
    url: "/assets/images/articles/2.svg",
  },
  {
    title: t("articles.list.2.title"),
    description: t("articles.list.2.description"),
    url: "/assets/images/articles/1.svg",
  },
  {
    title: t("articles.list.1.title"),
    description: t("articles.list.1.description"),
    url: "/assets/images/articles/2.svg",
  },
  {
    title: t("articles.list.2.title"),
    description: t("articles.list.2.description"),
    url: "/assets/images/articles/1.svg",
  },
  {
    title: t("articles.list.0.title"),
    description: t("articles.list.0.description"),
    url: "/assets/images/articles/3.svg",
  },
  {
    title: t("articles.list.2.title"),
    description: t("articles.list.2.description"),
    url: "/assets/images/articles/1.svg",
  },
  {
    title: t("articles.list.1.title"),
    description: t("articles.list.1.description"),
    url: "/assets/images/articles/2.svg",
  },
  {
    title: t("articles.list.2.title"),
    description: t("articles.list.2.description"),
    url: "/assets/images/articles/1.svg",
  },
]
  return (
    <>
      <BreadCrumbComponent t={t} name={t("name")} title={t("title")} description={t("description")} />
      <div className="main-container flex w-full xl:w-[1440px] pt-[96px] pr-0 pb-[96px] pl-0 flex-col gap-[32px] justify-center items-center flex-nowrap relative mx-auto my-0">
     <Blogs data={data} t={t} />
    </div>
    </>
  );
}

export default page;
