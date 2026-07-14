import data from "@/data/characters.json";
import { slugify } from "@/lib/util";


interface CharacterType {
  id: 0;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt: string;
  image: string;
}

interface CharacterResponse{
  items: CharacterType[]
}




export function getCharactersById(idNr: number) {
  return data.items.find((character) => character.id === idNr);
}

export function getCharactersBySlug(slug: string) {
  return data.items.find((character) => slugify(character.name) === slug);
}

export async function getCharactersRestApi(page?: number, limit?: number): Promise<CharacterResponse> {
  //const fetchdata = await fetch("https://futuramaapi.com/api/random/character");

  const fetchspecificData = await fetch(
    "https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=5",
  );


  //const futuramaJSON = await fetchdata.json();

  //  if (!fetchspecificData.ok) {
  //   throw new Error("Failed to fetch characters");
  // }
  
  const jsonData = await fetchspecificData.json();

  //Farligt, kan returna trasig information
  return jsonData;
}

