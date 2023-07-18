import BannerForPage from "@/app/components/BannerForPage";
import { SingleStore } from "@/app/components/stores/SingleStore";
import { stores } from "@/app/data/stores";

const page = ({ params }) => {
  const data = stores.find((store) => store.id === params.id);

  return (
    <>
      <BannerForPage title={data.name} />
      <div className="max-w-screen-xl mb-10 mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between">
          <div className="w-full lg:w-4/6 lg:pr-10">
            <p className="font-bold text-2xl mb-2">{data.name}</p>
            <p className="mb-4 lg:mb-10 text-justify">
              {data.address}, {data.phone}
            </p>
          </div>
          <div className=" flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className=" text-lg">Other Locations:</p>
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
