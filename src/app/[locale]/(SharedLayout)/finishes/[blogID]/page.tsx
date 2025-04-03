import initTranslations from "@/app/i18n";
import Features from "@/components/Animations/features";

async function page({
  params: { locale, blogID },
}: {
  params: { locale: string; blogID: string };
}) {


  return (
<Features/>
  );
}

export default page;
