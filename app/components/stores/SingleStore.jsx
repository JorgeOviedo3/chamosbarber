import { AiFillSchedule } from "react-icons/ai";
import { SiStylelint } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const SingleStore = ({ name, address, phone, barbers, image, id }) => {
  return (
    <Link
      href={`/locations/${id}`}
      className="block rounded-lg p-4 shadow-md hover:border-gray-300 hover:ring-1 hover:ring-gray-300 lg:hover:scale-105 duration-100
      md:scale-100"
    >
      <Image
        width={536}
        height={400}
        alt={name}
        src={image}
        className="h-64 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">{name}</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">{address}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaPhoneAlt className="w-4 h-4" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Phone</p>

              <p className="font-medium">{phone}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <AiFillSchedule className="w-4 h-4" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Schedule</p>

              <p className="font-medium">9:00am - 8:00pm</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <SiStylelint className="w-4 h-4" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Employees</p>

              <p className="font-medium">{barbers} Barbers</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
