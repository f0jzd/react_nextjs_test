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


function Card({ image, name, gender, className }: GenderStyling) {
//   const styles = genderStyles[gender as keyof typeof genderStyles] || genderStyles.default;

  return (
    <div className={`h-full flex flex-col overflow-hidden rounded-lg justify-between outline-2`}>
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
        <h3 className="">{name}</h3>

        { <h4 className={`${className}`}>{gender}</h4> }

        <a href="#" className="px-2 pb-2">
          läs mer
        </a>
      </div>
    </div>
  );
}

export default function FuturamaGrid() {
  const { page, pages, items: characters } = data;

  return (
    <section className="max-w-7xl mx-auto">
      <h2>Futurama things &amp; Crew</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        minima.
      </p>
      {/* grid-cols-1 md:grid-cols-3 lg:grid-cols-4 */}
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
        {characters.map((char) => (
          <li key={char.id}>
            
            {/* {char.gender === "FEMALE" ? <FemaleCard image={char.image} name={char.name}/> : 
            char.gender === "MALE" ? <MaleCard image={char.image} name={char.name}/> : 
             */}
            <Card
            {...char}
            className={char.gender === "MALE" 
                ? "text-blue-500" :
            char.gender === "FEMALE" ?
                "text-pink-500"
                : "text-gray-500"
            }
            />
            {/* } */}
          </li>
        ))}
      </ul>
      Showing page {page} of {pages}
    </section>
  );
}
