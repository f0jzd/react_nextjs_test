import NotFound from "@/app/character/[slug]/not-found";
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




export default function CharacterInformation(character : CardProps) {
 
    return (
    <main>
      <article className="flex flex-col justify-center items-center gap-4">
        
        <div className="relative max-w-3xl">
            {character.image && (
              <Image
                className="w-full h-full object-cover overflow-hidden"
                src={character.image}
                width={600}
                height={400}
                alt={character.name}
                sizes="100vw"
              />
            )}
        </div>

        <div className="flex flex-col items-center gap-3">
          <h2>{character.name}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Placeholder character description in case of existence</h2>
          <h2>JSON created at {character.createdAt}</h2>
        </div>
      </article>
    </main>
  );
}