"use client";

import { useState } from "react";

import data from "@/data/characters.json";
import Image from "next/image";
import FemaleCard from "./futurama-card-styling/futurama-female-card";
import MaleCard from "./futurama-card-styling/futurama-male-card";

interface CardProps {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt: string;
  image: string | null;

}

interface GenderStyling extends CardProps{
    className?: string;
}


interface PageBtnProps{
  onClick: () => void;
}

function NextPageBtn({onClick}: PageBtnProps) {
  return (
    <button
      className="bg-mist-600 py-3 px-3 rounded-xl transition hover:bg-emerald-900"
      onClick={onClick}>
      next
    </button>
  );
}

function PrevPageBtn({onClick}: PageBtnProps) {
  return (
    <button
      className="bg-mist-600 py-3 px-3 rounded-xl transition hover:bg-emerald-900"
      onClick={onClick}>
      previous
    </button>
  );
}



function Card({ image, name, gender, className }: GenderStyling) {
//   const styles = genderStyles[gender as keyof typeof genderStyles] || genderStyles.default;

  return (
    <div className={`h-full gap-3 flex flex-col overflow-hidden rounded-lg justify-between outline-2`}>
      <Image
        src={image ? image : "https://placehold.co/600x400"}
        alt=""
        width={600}
        height={400}
        unoptimized={image ? false : true}
        className="w-full h-full object-cover overflow-hidden max-h-52"
        loading="eager"
      />

      <div className="flex flex-col items-center px-2 py-2 gap-2">
        <h3 className="text-xl">{name}</h3>

        { <h4 className={`${className}`}>{gender}</h4> }

        <a href="#" className="px-2 py-2 bg-emerald-900 rounded-lg">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default function FuturamaGrid() {
  const { page, pages, items: characters } = data;

  const [from, setFrom] = useState(0);
  const pageSize = 10;

  const nextPageClick = () => {
    const pageSize = 10;

    if (from + pageSize < characters.length) {
      setFrom((prev) => prev + pageSize);
    }
  };
  const prevPageClick = () => {
    if (from > 0) {
      setFrom((prev) => prev - pageSize);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/0 to-slate-950 pointer-events-none" />
      <section className="relative max-w-7xl mx-auto ">
        <h2 className="mb-3 text-xl">Futurama things &amp; Crew</h2>
        <p className="mb-3">
          Here are some of the characters and other beings from the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Futurama"
            target="_blank"
            className="text-fuchsia-500 italic"
          >
            Futurama
          </a>{" "}
          universe.
        </p>
        {/* grid-cols-1 md:grid-cols-3 lg:grid-cols-4 */}
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
          {characters.slice(from, from + 10).map((char) => (
            <li key={char.id}>
              {/* {char.gender === "FEMALE" ? <FemaleCard image={char.image} name={char.name}/> :
              char.gender === "MALE" ? <MaleCard image={char.image} name={char.name}/> :
               */}
              <Card
                {...char}
                className={
                  char.gender === "MALE"
                    ? "text-blue-500"
                    : char.gender === "FEMALE"
                      ? "text-pink-500"
                      : "text-gray-500"
                }
              />
              {/* } */}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 py-5">
          <p className="">
            Showing from {from} to {from + 10}
          </p>
          <PrevPageBtn onClick={prevPageClick} />
          <NextPageBtn onClick={nextPageClick} />
        </div>
      </section>
    </div>
  );
}
