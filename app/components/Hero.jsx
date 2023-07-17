import Image from "next/image";

export const Hero = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Welcome to Chamos Barber Shop <br/> <span className="font-thin text-gray-700 text-xl md:text-2xl">Elevating Men's Grooming</span>
          </h1>

          <p className="text-gray-500 mt-4">
            Experience the ultimate in men's grooming at Chamos Barber Shop. Our team of skilled barbers is dedicated to delivering exceptional haircuts, grooming, and styling services tailored specifically to you. Step into our world of timeless style and masculine elegance
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-black/80 focus:outline-none"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <Image
        alt="Hero image Chamos Barber Shop"
        src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] grayscale"
        width={919}
        height={549}
      />
    </section>
  );
};
