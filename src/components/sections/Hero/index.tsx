"use client"; // hanya jika di dalamnya ada event/animasi 100 % client‑side
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Gambar dekoratif */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <div className="relative inline-block w-fit overflow-visible">
          <Image
            src="/image1.png"
            alt="Background"
            width={550}
            height={0}
            className="block"
            priority
          />
          <Image
            src="/toyota.png"
            alt="Overlay"
            fill
            priority
            className="absolute inset-0 z-20 object-contain scale-175 -translate-x-51 translate-y-20"
          />
        </div>
      </div>

      {/* Teks + tombol */}
      <div className="relative px-8 py-32">
        <div className="max-w-xl ml-[3%] mt-[5%]">
          <h1 className="text-6xl font-bold text-[#D80032] leading-tight mb-10">
            Easy and fast way
            <br />
            to rent your car
          </h1>

          <div className="mt-[29%]">
            <button className="bg-[#D80032] border border-[#D80032] px-9 py-2 text-white text-lg font-semibold mr-5 cursor-pointer">
              Get in Touch
            </button>
            <button className="bg-white border border-[#D80032] px-9 py-2 text-[#D80032] text-lg font-semibold cursor-pointer">
              View cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
