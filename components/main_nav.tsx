"use client";

import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AuthContext";

export default function MainNav() {
  const { isLoggedIn: isLoggedIn } = useApp();

  const links = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/learn", label: "Learn" },

    {
      href: isLoggedIn ? "/profile" : "/login",
      label: isLoggedIn ? "Profile" : "Log in",
    },
  ];
  return (
    <header>
      <nav className="group sticky z-10 top-0 flex justify-between w-full items-center">
        <Link href={"/"}>
          <div className="flex items-center text-3xl gap-3 px-3 transition">
            <Image
              src="/dog.webp"
              alt=""
              width={112}
              height={112}
              className="w-1/3 h-auto"
            />
            <span className="text-gray-400 group-hover:text-white  transition ease-linear duration-100">
              W-L-P
            </span>
          </div>
        </Link>

        <nav className="flex flex-wrap justify-center gap-4 text-xl px-3 items-center">
          {/* <div className="flex items-center">
                        <label htmlFor="searchfield"><span className="material-symbols block mx-3 my-2 ">search</span></label>
                        <input type="text" placeholder="Testing" name="searchfield" className="border-2 rounded-sm"/>
                    </div> */}

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-gray-400 hover:text-white transition ease-linear duration-100"
            >
              {link.label}
            </Link>
          ))}

          {/* <Link href="/learn" className="px-3 py-2 text-gray-400 hover:text-white transition ease-linear duration-100">Learn More</Link>
                    <Link href="/about" className="px-3 py-2 text-gray-400 hover:text-white transition ease-linear duration-100">About</Link>
                    <Link href="/contact" className="px-3 py-2 text-gray-400 hover:text-white transition ease-linear duration-100">Contact</Link> */}
        </nav>
      </nav>
    </header>
  );
}
