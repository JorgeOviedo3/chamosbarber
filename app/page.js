import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import GridStores from "./components/stores/GridStores";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <GridStores />
      <Services />
    </div>
  );
}
