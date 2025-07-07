import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-[15%] right-0">
        <div className="relative w-fit inline-block overflow-visible">
          {/* Gambar dasar – bisa Anda perkecil sesuka hati */}
          <Image
            src="/image1.png"
            alt="Background"
            width={550} // ubah ukuran semau Anda
            height={0}
            className="block"
            priority
          />

          {/* Gambar overlay – menutupi penuh gambar dasar */}
          <Image
            src="/toyota.png"
            alt="Overlay"
            fill // tetap menempel penuh ke parent
            priority
            className="absolute inset-0 z-20 object-contain
             scale-175
             -translate-x-51
             translate-y-20
             "
          />
        </div>
      </div>

      {/* =========  TEKS  ========= */}
      <h1
        className="absolute top-[45%] left-30
                 text-6xl font-bold text-red-600 leading-tight"
      >
        Easy and fast way
        <br />
        to rent your car
      </h1>
    </main>
  );
}
