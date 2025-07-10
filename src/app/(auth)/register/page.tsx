import { Lato, Racing_Sans_One } from "next/font/google";
import Image from "next/image";

const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Register() {
  return (
    <main className="flex">
      <div
        className={`${racing.className} p-5 mx-5 flex flex-rows absolute top-10 text-2xl`}
      >
        <h1 className="text-black text-1xl">Renta</h1>
        <h1 className="text-[#D80032] text-1xl">.co</h1>
      </div>
      <div className="flex">
        <form className="z-50">
          <div className="bg-white shadow-lg p-10 w-[400px] mx-10 mt-28">
            <h1
              className={`${lato.className} text-2xl text-black font-bold mb-2 text-center`}
            >
              Create an Account
            </h1>
            <h2 className={`${lato.className} text-[#737373] mb-5 text-center`}>
              Its fast and easy to start renting a car
            </h2>
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image
                  src="/email.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image
                  src="/phone.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <input
                type="text"
                name="phone number"
                id="phone number"
                placeholder="Phone Number"
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image
                  src="/lock.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image
                  src="/lock.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <input
                type="password"
                name="confirm password"
                id="confirm password"
                placeholder="Confirm Password"
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mb-4 w-full py-2 bg-[#D80032] hover:bg-red-700 text-white cursor-pointer"
              >
                Sign Up
              </button>
              <p className="mb-2 text-center">Already have an account?</p>
              <a href="" className="text-[#D80032] mx-35">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Image
          src="/background.png"
          alt="background"
          layout="fill"
          objectFit="contain"
          className="object-right"
        ></Image>
      </div>
      <div className="absolute top-10 bottom-0 right-0 z-10">
        <Image
          src="/toyota.png"
          alt="mobil"
          width={680}
          height={0}
          objectFit="contain"
        ></Image>
      </div>
    </main>
  );
}
