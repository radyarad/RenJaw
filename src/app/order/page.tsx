import Image from "next/image";

export default function order() {
  return (
    <main>
      <h1 className="text-4xl font-medium px-15">My Order</h1>
      <h2 className="px-15 mt-2 text-2xl text-[#D80032] underline decoration-dashed-2">
        Order History
      </h2>
      <div className="flex flex-row px-15 mt-5">
        <form>
          <div className="flex flex-row bg-[#F2F2F2] w-[404px] h-[279px]">
            <div className="relative top-[2%] inset-x-0 left-50 transform -translate-x-1/2 flex item-center">
              <Image
                src="/mercedes.svg"
                alt="icon"
                width={700}
                height={200}
                className="object-contain scale-85"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col">
          <div>
            <h1 className="px-10 text-4xl font-bold">Mercedes Benz</h1>
            <div className="flex flex-row items-baseline px-10 mt-3">
              <p className="text-4xl font-bold">$264</p>
              <p className="text-1xl text-[#737373]">/2Days</p>
            </div>
            <div className="flex flex-row gap-38 px-10 mt-3">
              <p className="text-xl">Start</p>
              <p className="text-xl">End</p>
            </div>
            <div className=" flex flex-row px-10 gap-10">
              <input
                type="date"
                name="date"
                id="date"
                className="px-2 py-1 mt-3 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
              <input
                type="date"
                name="date"
                id="date"
                className="px-2 py-1 mt-3 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>
            <h1 className="px-10 mt-3 font-medium text-2xl">Status</h1>
            <div className="flex flex-row gap-5 px-10">
              <div>
                <div className="bg-[#D80032] border-2 border-[#D80032] px-2 py-2 mt-3 w-23 text-center justify-center items-center">
                  <p className="text-white">Active</p>
                </div>
              </div>
              <div>
                <div className="border-2 border-[#D80032] px-2 py-2 mt-3 w-23 text-center justify-center items-center">
                  <p className="text-[#D80032]">Cancelled</p>
                </div>
              </div>
              <div>
                <div className="border-2 border-[#D80032] px-2 py-2 mt-3 w-23 text-center justify-center items-center">
                  <p className="text-[#D80032]">Returned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
