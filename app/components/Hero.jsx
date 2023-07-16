import Image from "next/image";
import { IoLocation } from "react-icons/io5";

export const Hero = () => {
  return (
    <section className="overflow-hidden flex flex-col-reverse sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="lg:ml-auto max-w-xl  xl:pl-8 text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="font-bold text-center md:text-left">
            <span className="text-4xl lg:text-5xl xl:text-6xl">Chamos Barber </span> <br></br>
            <span className="text-sm lg:text-[21px]">
              The hottest barber shop, Walk-Ins welcome.
            </span>
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>

          <div className="mt-4  md:mt-8">
            <a
              href="#"
              className="w-fit font-bold rounded bg-black px-12 py-3 text-sm text-white transition  hover:bg-black/90 duration-300 focus:outline-none focus:ring focus:ring-yellow-400 uppercase flex mx-auto md:mx-0 items-center gap-2"
            >
              <IoLocation />
              Our Locations
            </a>
          </div>
        </div>
      </div>

      <Image
        alt="Chamos Barber Hero Image"
        src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        width={1470}
        height={980}
        className="h-full w-full object-cover sm:self-end sm:rounded-ss-[30px] md:rounded-ss-[60px] "
      />
    </section>
  );
};
