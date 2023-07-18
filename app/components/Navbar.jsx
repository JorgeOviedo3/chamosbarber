import Image from "next/image";
import logosmall from "@/public/logosmall.webp";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <header className="bg-gradient-to-b from-black to-black/50 backdrop-blur-md text-white shadow-lg fixed h-16 top-0 w-full z-[9999]">
      <div className="mx-auto h-full max-w-screen-xl px-4 sm:px-6 py-2 lg:px-8">
        <div className="flex h-full  items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="w-fit text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image
                src={logosmall}
                alt="chamos barber logo"
                width={250}
                height={250}
                className="h-[40px] md:h-[50px] w-fit"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="" href="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="" href="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-white hover:bg-black/10 duration-300 px-3 md:px-5 py-2.5 text-sm font-medium text-black shadow flex items-center gap-2"
                  href="/"
                >
                  <span>
                    <IoCall />
                  </span>
                  Call Us
                </a>
              </div>

              <GiHamburgerMenu className=" md:hidden h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
