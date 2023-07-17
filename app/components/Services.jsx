import { TbMoodKid } from "react-icons/tb";
import { GiMustache, GiHeartBottle } from "react-icons/gi";
import { ImScissors } from "react-icons/im";
import { BiSolidFace } from "react-icons/bi";
import { SlMustache } from "react-icons/sl";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="bg-black mb-[100px] py-[50px]">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="font-bold h2 text-gray-100">Our premier services for the modern man</h2>

            <p className="mt-4 text-gray-300">
              At Chamos Barber Shop, we offer a range of premier services tailored to meet the
              grooming needs of the modern man. Our skilled barbers are experts in precision
              haircuts, classic shaves, beard trims, and stylish men&apos;s grooming. Step into our
              shop and indulge in an unforgettable grooming experience designed exclusively for you.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-block rounded bg-gray-100 px-12 py-3 text-sm font-medium text-black transition hover:bg-gray-300 focus:outline-none"
            >
              See all services
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Link
              className="block rounded-xl border border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/services"
            >
              <span className="inline-block rounded-lg bg-gray-100 p-3">
                <BiSolidFace className="w-6 h-6" />
              </span>

              <h2 className="mt-2 font-bold text-gray-100">Regular Haircut</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                Classic cuts for men.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/services"
            >
              <span className="inline-block rounded-lg bg-gray-100 p-3">
                <TbMoodKid className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold text-gray-100">Kids Haircut</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                Expert styling for kids.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/services"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <GiMustache className="w-6 h-6" />
              </span>

              <h2 className="mt-2 font-bold text-gray-100">Senior Haircut</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300 text-gray-300">
                Tailored grooming for seniors.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/services"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <SlMustache className="w-6 h-6" />
              </span>

              <h2 className="mt-2 font-bold text-gray-100">Mustache</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                Precision grooming for your &apos;stache.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/services"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <ImScissors className="w-6 h-6" />
              </span>

              <h2 className="mt-2 font-bold text-gray-100">Scissor Haircut</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                Stylish scissor cuts for men.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/services"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <GiHeartBottle className="w-6 h-6" />
              </span>

              <h2 className="mt-2 font-bold text-gray-100">Skin Fade</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                Trendy fades for modern men.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
