import { services } from "../../data/services";
import { SingleServiceCard } from "./SingleServiceCard";

export const GridServices = () => {
  return (
    <section className="mb-[100px] py-[50px]">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <p className="mb-4 text-xl">Haircuts</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mb-8">
          {services.haircuts.map((service) => (
            <SingleServiceCard key={service.title} {...service} />
          ))}
        </div>
        <p className="mb-4 text-xl">Combos</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mb-8">
          {services.combos.map((service) => (
            <SingleServiceCard key={service.title} {...service} />
          ))}
        </div>
        <p className="mb-4 text-xl">Beard</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mb-8">
          {services.beard.map((service) => (
            <SingleServiceCard key={service.title} {...service} />
          ))}
        </div>
        <p className="mb-4 text-xl">Misc</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {services.misc.map((service) => (
            <SingleServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
