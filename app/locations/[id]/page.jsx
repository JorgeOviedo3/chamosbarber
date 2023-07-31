import BannerForPage from "@/app/components/BannerForPage";
import { SingleStore } from "@/app/components/stores/SingleStore";
import { stores } from "@/app/data/stores";
import { FaPhoneAlt } from "react-icons/fa";
import { ScheduleTable } from "./components/ScheduleTable";
import { BsCalendarDay } from "react-icons/bs";
import Image from "next/image";

export const generateMetadata = ({ params }) => {
  const store = stores.find((store) => store.id === params.id);

  return {
    title: `${store.name} - Store`,
    openGraph: {
      title: store.name,
      description: store.address,
      url: `https://www.chamosbarbershop.com/locations/${store.id}`,
      siteName: "Chamos Barber Shop",
      images: [
        {
          url: `${store.image}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    keywords: [
      "Barber Shop",
      "Men's barber shop",
      `${store.name}`,
      "Men's haircut",
      "Professional barber",
      "Shaving and beard grooming",
      `${store.address}`,
    ],
  };
};

const page = ({ params }) => {
  const data = stores.find((store) => store.id === params.id);

  return (
    <>
      <BannerForPage title={data.name} image="bg-[url(/stores/banner-stores.webp)]" />
      <div className="max-w-screen-xl mb-10 mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between">
          <div className="w-full lg:w-4/6 lg:pr-10">
            <p className="font-bold text-2xl mb-4">{data.name}</p>
            <Image
              className="w-full rounded-md shadow-lg"
              src={data.image}
              alt={data.name}
              width={640}
              height={427}
            />
            <div className="flex mt-11 flex-col md:flex-row justify-around items-center ">
              <a
                href={`tel:${data.phone}`}
                target="__blank"
                className="flex min-w-[230px] text-center items-center gap-2 rounded bg-black px-16 py-3 text-sm font-medium text-white transition hover:bg-black/80 focus:outline-none uppercase"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Call Us!
              </a>
              - OR -
              <a
                href={data.booksy}
                target="__blank"
                className="flex min-w-[230px] text-center items-center gap-2 rounded bg-black px-16 py-3 text-sm font-medium text-white transition hover:bg-black/80 focus:outline-none uppercase"
              >
                <BsCalendarDay className="w-4 h-4" />
                Book now!
              </a>
            </div>
            <p className="mt-11 mb-2">Schedule</p>
            <ScheduleTable />
            <div className="mb-11">
              <p>Address</p>
              <p className="mb-2">{data.address}</p>
              {data.gmaps}
            </div>
          </div>
          <div className=" flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className=" text-lg">Other locations</p>
              {stores
                .filter((store) => store.id != params.id)
                .map((store) => (
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
