import ContactUs from "@/components/sections/ContactUs";
import Hero from "@/components/sections/Hero";
import PopularCar from "@/components/sections/PopularCar";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCar />
      <div className="mt-12">
        <button
          className="
      block mx-auto          /* ← kunci centering */
      flex items-center justify-center
      bg-[#D80032] text-white
      px-8 py-4
      cursor-pointer
    "
        >
          View Cars
        </button>
      </div>
      <ContactUs />
    </>
  );
}
