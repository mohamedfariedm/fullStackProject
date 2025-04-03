import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import {
  AboutApp,
  Warehouse,
  Blogs,
  Calculate,
  Flooring,
  Faq,
  Hero,
  Numbers,
  OurStory,
  Products,
  Skill,
  Testimonials,
  Values,
} from "./_components";
import { Features } from "@/components/Shared";
import CofeTrip from "./_components/CofeTrip";
import { supabase } from "@/lib/supabaseClient";

const getUsers = async () => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);
  const users = await getUsers(); // Fetch users
  console.log("usersArray",users);
  
  return (<>
  
<Hero t={t} />
<AboutApp t={t} />
<Warehouse t={t} />
<Skill t={t} />
<Flooring t={t} />
<Testimonials t={t} />
<Numbers />
  </>
  );
};

export default Home;
