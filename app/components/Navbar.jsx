"use client";
import Image from "next/image";
import logosmall from "@/public/logosmall.webp";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";

const routes = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/services",
    name: "Services",
  },
  {
    href: "/contact-us",
    name: "Contact us",
  },
];

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg fixed top-0 w-full  z-[9999]">
      <div className="mx-auto h-full max-w-screen-xl px-4 sm:px-6 py-3 md:py-5 lg:px-8">
        <div className="flex h-full  items-center justify-between">
          <div className="mr-auto">
            <Link className="max-w-[40px] text-teal-600" href="/">
              <Image
                src={logosmall}
                alt="chamos barber logo"
                width={250}
                height={250}
                className="h-[50px] w-[40px]"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {routes.map((route) => (
                  <li key={`li-${route.name}`}>
                    <Link className="" href={route.href}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex">
                <a
                  className="flex rounded-md bg-white duration-300 px-3 md:px-5 py-2.5 text-sm font-medium text-black shadow items-center gap-2"
                  href="/"
                >
                  <span>
                    <IoCall />
                  </span>
                  Call Now
                </a>
              </div>
              <div
                onClick={() => setMobileMenu(!mobileMenu)}
                className="hover:bg-white/10 cursor-pointer p-2 duration-300 rounded-full"
              >
                {mobileMenu ? (
                  <CgClose className="md:hidden h-7 w-7 text-white" />
                ) : (
                  <CgMenu className="md:hidden h-7 w-7 text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
        {mobileMenu && (
          <div className="flex md:hidden h-[calc(100vh-74px)] mt-10 items-center flex-col gap-5 bg-black">
            {routes.map((route) => (
              <Link href={route.href} key={route.name}>
                {route.name}
              </Link>
            ))}
            <a
              className="flex w-fit rounded-md bg-white duration-300 px-3 py-2.5 text-sm font-medium text-black shadow items-center gap-2"
              href="/"
            >
              <span>
                <IoCall />
              </span>
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
