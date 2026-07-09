import data from "@/data/characters.json"
import Image from "next/image";


interface CardProps {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    createdAt: string;
    image: string | null;
}

function Card({ name, image }: CardProps) {
  // const name = props.name; inte vanligt

  return (
    <div className="h-full flex flex-col overflow-hidden rounded-lg  justify-between">
      
      
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
        <a href="#" className="px-2 pb-2">
          läs mer
        </a>
      </div>
    </div>
  );

  // return (
  //   <div className="h-full overflow-hidden grid grid-rows-[200px_1fr_auto] ">
  //     <h3 className="px-2 py-2">{name}</h3>
  //     <Image
  //       src={image ? image : "https://placehold.co/600x400"}
  //       alt=""
  //       width={600}
  //       height={400}
  //       unoptimized={image ? false : true}
  //       className="w-full h-full object-cover order-first"
  //       loading="eager"
  //     />
  //     <a href="#" className="px-2 pb-2">läs mer</a>
  //   </div>
  // );
}

export default function FuturamaGrid(){

      const {page, pages, items:characters} = data;


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

            <li key={char.id} className="outline-amber-200 outline-1">
              <Card {...char}/>
              {/* {char.image && <img src={char.image} />} */}
              {/* <h3>{char.name}</h3> */}

              {/* <Image
                src={char.image ? char.image : "https://placehold.co/600x400"}
                alt=""
                width={600}
                height={400}
                className="w-full order-first"
                loading="eager"
              /> */}

              {/* <a href="#">läs mer</a> */}
            </li>
          ))}
        </ul>
        Showing page {page} of {pages}
      </section>
    )
}