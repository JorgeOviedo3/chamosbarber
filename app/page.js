import { Hero } from "./components/Hero";
import { NewHero } from "./components/NewHero";
import { Services } from "./components/Services";
import GridStores from "./components/stores/GridStores";

export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <NewHero />
      <GridStores />
      <Services />
    </div>
  );
}
