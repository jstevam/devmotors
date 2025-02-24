import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get.data";
import { HomeProps } from './../utils/home.type';
import { Hero } from "@/components/hero"

export default async function Home() {

  const { object }: HomeProps = await getDataHome();
  console.log(object.title)
  return (
    <main>
      <Submenu />

      <Hero />
    </main>
  );
}
