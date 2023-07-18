import Image from "next/image";
import Link from "next/link";

export const ContactCta = () => {
  return (
    <section>
      <div className="mx-auto my-20 lg:my-40 max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-black p-8 md:p-12 lg:px-16 lg:py-24 rounded-md">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Get the Perfect Haircut Contact Chamos Barber Today
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Ready for a fresh and stylish haircut? Contact Chamos Barber today to book an
                appointment with our skilled barbers. Experience top-notch grooming services that
                will leave you looking your best. Take the first step towards a new look and contact
                us now!
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/contact-us"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-black transition duration-300 font-bold text-lg hover:bg-transparent hover:text-white focus:outline-none"
                >
                  Contact us now
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="Chamos Barber 2"
              src="/stores/chamos-barbershop-2.webp"
              width={533}
              height={400}
              className="h-40 rounded-md w-full object-cover sm:h-56 md:h-full"
            />

            <Image
              alt="Chamos Barber 1"
              width={533}
              height={400}
              src="/stores/chamos-barbershop.webp"
              className="h-40 rounded-md w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
