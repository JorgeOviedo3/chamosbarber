import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const NewHero = () => {
  return (
    <section className="bg-[url(/hero.webp)] bg-cover  text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          {/* <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Welcome to Chamos Barber
            <span className="sm:block"> Elevating Men&apos;s Grooming. </span>
          </h1> */}
          <Image src="/logohero.webp" width={727} height={268} />

          {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Experience the ultimate in men&apos;s grooming at Chamos Barber Shop. Our team of
            skilled barbers is dedicated to delivering exceptional haircuts, grooming, and styling
            services tailored specifically to you.
          </p> */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#locations"
              className="flex border bg-black border-white text-white gap-3 font-bold items-center w-fit mt-8 rounded px-12 py-3 text-lg transition focus:outline-none  hover:bg-white hover:text-black duration-300"
            >
              Explore our locations
              <FaArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact-us"
              className="flex bg-white text-black gap-3 font-bold items-center w-fit mt-8 rounded px-12 py-3 text-lg transition focus:outline-none  hover:bg-black hover:text-white duration-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
