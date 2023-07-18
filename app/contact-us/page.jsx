import BannerForPage from "../components/BannerForPage";
import { ContactForm } from "./components/ContactForm";
import Link from "next/link";
import { stores } from "../data/stores";
import { SingleStore } from "../components/stores/SingleStore";
import { BsFacebook, BsInstagram, BsMailbox2, BsTwitter } from "react-icons/bs";

const page = () => {
  return (
    <>
      <BannerForPage
        title={"Contact Chamos Barber"}
        image={
          "bg-[url(https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]"
        }
        paragraph={
          "Contact Chamos Barber to schedule an appointment, ask questions, or provide feedback. Our professional barbers are ready to give you the perfect haircut and grooming experience. Don't wait, book your appointment now!"
        }
      />

      <div className="max-w-screen-xl mb-10 mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between">
          <div className="w-full lg:w-4/6 lg:pr-10">
            <p className="font-bold text-2xl mb-2">Get in touch</p>
            <p className="mb-4 lg:mb-10 text-justify">
              Fill out the form below to get in touch with us. Please provide as much information as
              possible so that we can better assist you. We strive to respond to all inquiries
              within 24 hours. Thank you for choosing Chamos Barber!
            </p>
            <ContactForm />
            <p className="font-bold text-2xl mb-2">Contact us directly</p>
            <p className="mb-4 lg:mb-10 text-justify">Use this to contact us directly.</p>
            {stores.map((store) => (
              <div className="bg-gray-50 p-4 mb-4 rounded-md">
                <p>{store.name}</p>
                <p>{store.address}</p>
                <a href={`tel:${store.phone}`}>{store.phone}</a>
              </div>
            ))}
          </div>
          <div className=" flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg ">Our Networks</p>
              <div className="flex items-center justify-around">
                <Link
                  href="/"
                  className="bg-black text-white p-5 rounded-md hover:scale-105 duration-300 shadow-md"
                >
                  <BsFacebook className="h-10 w-10" />
                </Link>
                <Link
                  href="/"
                  className="bg-black text-white p-5 rounded-md hover:scale-105 duration-300 shadow-md"
                >
                  <BsInstagram className="h-10 w-10" />
                </Link>
                <Link
                  href="/"
                  className="bg-black text-white p-5 rounded-md hover:scale-105 duration-300 shadow-md"
                >
                  <BsTwitter className="h-10 w-10" />
                </Link>
                <Link
                  href="/"
                  className="bg-black text-white p-5 rounded-md hover:scale-105 duration-300 shadow-md"
                >
                  <BsMailbox2 className="h-10 w-10" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">Our Locations</p>
              {stores.map((store) => (
                <SingleStore key={store.name} {...store} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
