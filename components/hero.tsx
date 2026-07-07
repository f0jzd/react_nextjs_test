'use client'

import Image from "next/image";

import { useState } from "react";




interface buttonProps{
    link: string;
    children: React.ReactNode;
    className?: string;
}



function TestButton() {

    const [color, setColor] = useState("bg-blue-600");

    const colors = [
    "bg-red-600",
    "bg-green-600",
    "bg-blue-600",
    "bg-purple-600",
    "bg-yellow-600",
  ];

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    
    
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-white font-medium transition hover:bg-blue-700 ${color}`}
    >
      DOes Nothing
    </button>
  );
}

function Button({ link,children,className}:buttonProps) {
    const defaultName = "bg-orange-500 hover:bg-amber-700 hover:animate-pulse rotate";
  return (
    <a
      href={link}
      className={`p-3 rounded-xl py-4 px-4 ${className ? className : defaultName}`}
    >
      {children}
    </a>
  );
}

function TestingFunctions(){
    console.log("AJSDLKAJDLSAJ")
}

function multiply(x:number,y:number): number{ /*Kan strunta i return type om man vill*/
    return x*y

    // {multiply(3,4)}  <- för att anropa i react 

}

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] font-roboto">
      <Image
        className="w-full h-auto object-cover opacity-30"
        src="/deer.avif"
        fill
        alt=""
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-slate-950" />

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <header className="max-w-3xl">
          <h1 className="relative font-extrabold text-6xl text-balance mb-6 leading-none text-amber-300">
            Wildlife Photography
          </h1>
          <p className="font-atomicage text-lg text-pretty mb-10">
            Want to learn the different ways of capturing the{" "}
            <span className="text-yellow-500">majestic wildlife</span>? In this
            program we will teach our students the best way to traverse the
            wilds to capture the aesthetics of different wildlife without
            disturbing the natural peace.
          </p>
        </header>
        <div className="flex gap-4">
          <Button link="" className="">
            Join Now!
          </Button>
          <Button link="" className="bg-red-900 hover:bg-amber-700 hover:animate-pulse">
            Learn More
          </Button>

          <Button link="/about" className="p-3 bg-amber-400 rounded-xl py-4 px-4 hover:bg-amber-700 hover:animate-pulse">Adsbout</Button>
          <Button link="/about">Adsbout</Button>

        <TestButton></TestButton>

        </div>
      </div>
    </section>
  );
}
