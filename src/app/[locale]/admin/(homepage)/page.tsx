import initTranslations from "@/app/i18n";
import UsersTable from "./_components/UsersTable";


const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t } = await initTranslations(locale, ["expo"]);

  return (
    <div className="p-6">
      <UsersTable />
    </div>
  );
};

export default Home;
