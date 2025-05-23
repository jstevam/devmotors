import Submenu from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get.data";
import { HomeProps } from './../utils/home.type';
import { MenuProps } from "@/utils/menu.types";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import { Layout } from "@/components/layout";
import { Footer } from "@/components/home/footer";


export default async function Home() {

  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  //console.log(menu);

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={
          <Phone size={20} color="#fff" />
        }
      />
      <Layout>
        <Services object={object} />
        <Footer object={object} />
      </Layout>


    </main>
  );
}
