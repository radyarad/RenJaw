import { LuPhone, LuMail, LuClock4 } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { LiaTwitterSquare } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="p-[55px] mt-[200px] grid grid-cols-2 gap-x-[100px]">
      {/* Text Contact Us */}
      <div>
        {/* judul */}
        <div>
          <h2 className="uppercase text-[#D80032] text-xl font-bold">
            GET IN TOUCH
          </h2>
          <h1 className="mt-[24px] text-4xl font-medium leading-tight text-black">
            Contact Us
          </h1>
          <p className="mt-[24px] text-sm text-[#737373]">
            if you need consultation with us, you can write a message or call
            us, we <br /> will respond as quickly as possible
          </p>
        </div>
        {/* isi */}
        <div className="mt-[50px]">
          <div className="flex gap-7">
            <LuMail className="text-[#D80032] text-2xl" />
            <p className="text-[#737373]">renta@gmail.com</p>
          </div>
          <div className="flex gap-7 mt-[30px]">
            <LuPhone className="text-[#D80032] text-2xl" />
            <p className="text-[#737373]">+62 8221 1222 0001</p>
          </div>
          <div className="flex gap-7 mt-[30px]">
            <LuClock4 className="text-[#D80032] text-2xl" />
            <p className="text-[#737373]">Everyday: 08.00-21.00</p>
          </div>
          <div className="flex gap-7 mt-[30px]">
            <HiOutlineLocationMarker className="text-[#D80032] text-2xl" />
            <p className="text-[#737373]">
              Jl. Swadarma No.26 Bandung Kidul, Kota Bandung, Jawa Barat 40266
            </p>
          </div>
        </div>
        {/* icon bawah */}
        <div className="flex gap-3 mt-[70px]">
          <CiLinkedin
            className="text-[#D80032] w-8 h-8 hover:text-white hover:bg-[#D80032] cursor-pointer 
          rounded-md text-[14px]"
          />
          <LiaTwitterSquare
            className="text-[#D80032] w-8 h-8 hover:text-white hover:bg-[#D80032] cursor-pointer 
          rounded-md text-[14px]"
          />
          <RiFacebookBoxLine
            className="text-[#D80032] w-8 h-8 hover:text-white hover:bg-[#D80032] cursor-pointer 
          rounded-md text-[14px]"
          />
          <FaSquareInstagram
            className="text-white bg-[#D80032] w-6 h-6 hover:text-[#D80032] hover:bg-white cursor-pointer 
          rounded-md mt-[4px] text-[14px]"
          />
        </div>
      </div>
      {/* Foto+Button */}
      <div>
        <Image
          src="/LocUs.svg"
          alt="contact"
          width={700}
          height={700}
          className="block object-contain"
        />
        <button className="mt-[50px] flex items-center justify-center bg-[#D80032] text-white px-8 py-4 cursor-pointer">
          Office Center Map
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
