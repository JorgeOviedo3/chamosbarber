export const ScheduleTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 mb-11">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right text-center">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Days</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hours</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 text-center">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Sunday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">11:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Monday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">9:00AM - 8:00PM</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tuesday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">9:00AM - 8:00PM</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Wednesday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">9:00AM - 8:00PM</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Thursday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">9:00AM - 8:00PM</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Friday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">9:00AM - 8:00PM</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Saturday</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">9:00AM - 8:00PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
