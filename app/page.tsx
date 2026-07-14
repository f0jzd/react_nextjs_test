import FuturamaGrid from "@/components/futuramagrid";
import Hero from "@/components/hero";
import PoeGrid from "@/components/poe-unique-grid";
import { getCharactersRestApi } from "@/data/characters";
import { getCharactersGraphQL } from "@/data/characters-graph";
import { headers } from "next/headers";



export default async function Home() {

  // const json = (await getCharactersRestApi());
  // console.log(json);

  // const json2 = getCharacterGraphQL();
  // console.log(json2)

///////////////////////////////////////////////////////////////////////



  return (
    <main>
      <Hero />
      <FuturamaGrid />
      <PoeGrid />
    </main>
  );
}
