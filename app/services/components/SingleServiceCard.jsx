import { AiOutlineDollar } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

export const SingleServiceCard = ({ title, description, duration, icon, price }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-300 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring min-h-[250px] duration-300">
      <div>
        <span className="inline-block rounded-lg bg-gray-100 p-3">{icon}</span>

        <h2 className="mt-2 font-bold text-gray-900">{title}</h2>

        <p className="mt-1 text-sm text-gray-700">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="flex w-fit items-center gap-x-2 justify-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-yellow-700">
          <BsStopwatch className="w-5 h-5" />
          <p className="whitespace-nowrap text-sm">{duration}</p>
        </span>
        <span className="flex w-fit items-center gap-x-2 justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
          <AiOutlineDollar className="w-5 h-5" />
          <p className="whitespace-nowrap text-sm">{price}$</p>
        </span>
      </div>
    </div>
  );
};
