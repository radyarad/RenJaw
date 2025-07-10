import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lato, Racing_Sans_One } from "next/font/google";
import { useRouter } from "next/navigation";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <nav className="relative z-50 flex items-center justify-between px-5 py-2 bg-white">
      {/* Kiri: logo/brand */}
      <div className={`${racing.className} p-4 flex items-center text-2xl`}>
        <h1 className="text-black text-1xl">Renta</h1>
        <h1 className="text-[#D80032] text-1xl">.co</h1>
      </div>

      {/* Tengah: menu */}
      <ul
        className={`${lato.className} absolute left-1/2 -translate-x-1/2 flex space-x-1`}
      >
        <Link href="/">
          <li
            className={`mr-6 ${
              pathname === "/" ? "text-[#D80032]" : "text-black"
            } cursor-pointer`}
          >
            Home
          </li>
        </Link>
        <Link href="/cars">
          <li
            className={`mr-6 ${
              pathname === "/cars" ? "text-[#D80032]" : "text-black"
            } cursor-pointer`}
          >
            View Car
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`mr-6 ${
              pathname === "/about/profile" ? "text-[#D80032]" : "text-black"
            } cursor-pointer`}
          >
            Order
          </li>
        </Link>
      </ul>

      <div className={`${lato.className} flex right mr-5 gap-3`}>
        {status === "authenticated" ? (
          <div className="flex">
            <h4 className="text-white mr-3">{session?.user?.name}</h4>
            <button
              className="bg-white rounded-md px-2 text-black text-sm h-7 cursor-pointer"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            className="bg-white border border-[#D80032] px-4 text-red-600 text-sm h-7 cursor-pointer"
            onClick={() => handleLogin()}
          >
            login
          </button>
        )}
        <button
          className="bg-[#D80032] border border-[#D80032] px-2 text-white text-sm h-7 cursor-pointer"
          onClick={() => signIn()}
        >
          SignUp
        </button>
      </div>
    </nav>
  );
}
