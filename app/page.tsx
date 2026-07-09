import FuturamaGrid from "@/components/futuramagrid";
import Hero from "@/components/hero";




interface CardProps {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    createdAt: string;
    image: string | null;
}







export default function Home() {

  // const {page, pages, items:characters} = data;

  // <ul>
  //         {characters.map(({id, name, image}) => (
  //           <li key={id}>
  //             <h3>{name}</h3>
  //             {image && <img src={image} />}
  //             <a href="#">läs mer</a>
  //           </li>
  //         ))}
  //       </ul>

  return (
    <main>
      <Hero />
      <FuturamaGrid />
    </main>
  );
}
