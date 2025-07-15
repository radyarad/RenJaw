export default function Admin() {
  return (
    <main>
      <h1 className="px-15 mt-10 text-4xl font-medium">Admin Dashboard</h1>
      <p className="px-15 mt-4 text-2xl text-[#D80032] underline decoration-dashed-2">
        List Data
      </p>
      <div className="flex mt-5 mx-15 ">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                No
              </th>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                Name
              </th>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                Car
              </th>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                Location
              </th>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                Price
              </th>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                Status
              </th>
              <th className="p-3 font-bold uppercase bg-[#D80032] text-white border border-[#D80032] hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  No
                </span>
                1
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Name
                </span>
                Ricardo
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Car
                </span>
                Mercedes Benz
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Location
                </span>
                Bandung
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Price
                </span>
                <span className="flex flex-row justify-center">
                  <p>$132</p>
                  <p className="text-[#737373]">/day</p>
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="bg-[#D80032] text-white py-1 px-3">
                  Active
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>
                <span className="justify-center">
                  <button className="bg-[#D80032] px-3 py-0.5">
                    <a href="#" className="text-white">
                      Edit
                    </a>
                  </button>
                  <button className="bg-none border border-[#D80032] mx-3 px-3 py-0.25">
                    <a href="#" className="text-[#D80032]">
                      Delete
                    </a>
                  </button>
                </span>
              </td>
            </tr>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  No
                </span>
                2
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Name
                </span>
                Rido
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Car
                </span>
                Lexus CT200H
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Location
                </span>
                Jakarta
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Price
                </span>
                <span className="flex flex-row justify-center">
                  <p>$200</p>
                  <p className="text-[#737373]">/day</p>
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="bg-[#ECECEC] text-black py-1 px-3">
                  Returned
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>
                <span className="justify-center">
                  <button className="bg-[#D80032] px-3 py-0.5">
                    <a href="#" className="text-white">
                      Edit
                    </a>
                  </button>
                  <button className="bg-none border border-[#D80032] mx-3 px-3 py-0.25">
                    <a href="#" className="text-[#D80032]">
                      Delete
                    </a>
                  </button>
                </span>
              </td>
            </tr>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  No
                </span>
                3
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Name
                </span>
                Jimmy
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Car
                </span>
                Mercedes Benz
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Location
                </span>
                Bandung
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Price
                </span>
                <span className="flex flex-row justify-center">
                  <p>$132</p>
                  <p className="text-[#737373]">/day</p>
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="bg-[#ECECEC] text-black py-1 px-3">
                  Cancelled
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-[#D80032] text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>
                <span className="justify-center">
                  <button className="bg-[#D80032] px-3 py-0.5">
                    <a href="#" className="text-white">
                      Edit
                    </a>
                  </button>
                  <button className="bg-none border border-[#D80032] mx-3 px-3 py-0.25">
                    <a href="#" className="text-[#D80032]">
                      Delete
                    </a>
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
