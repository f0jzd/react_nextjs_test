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

// export async function getCharactersRestApi(page?: number, limit?: number): Promise<CharacterResponse>  {
 
//   try {
//   const fetchspecificData = await fetch(
//     "https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=5",
//   );
 
//   //const fetchdata = await fetch("https://futuramaapi.com/api/random/character");
//   //redirect("sidan som ska redirectas till") / redirect("/?message='Server Error'&status=404")



//   //const futuramaJSON = await fetchdata.json();

//   //  if (!fetchspecificData.ok) {
//   //   throw new Error("Failed to fetch characters");
//   // }
  
//   const jsonData = await fetchspecificData.json();

//   // if(!fetchspecificData.ok){
//   //   throw new Error(`Error in response from fetch: ${fetchspecificData.status}`)  // hela throw delen räcker långt
//   //   //return {message "there is an issue with the server request"}
//   // }

//   return jsonData;
    
//   } 
//   catch (error) { //Kolla vad erroret är för att justera vad som händer efter den throwar
//     // // if(error instanceof Error){
//     // //   console.log(`Error: ${error}`)
//     // // }
//     // if (error instanceof Error) {
      
//     //   console.warn(error.message)
//     // }
//     // throw error;

//     throw new Error("Failed to fetech....", {cause: error})
//   }

//   //Farligt, kan returna trasig information
// }

export async function getCharactersRestApi(
  page = 1,
  limit = 8,
  query =""
): Promise<CharacterResponse> {

  const apiQuery = query !== "" ? `&query=${query}` : "";

  const fetchspecificData = await fetch(
    `https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc${apiQuery}&page=${page}&size=${limit}`,
  );

  const jsonData = await fetchspecificData.json();

  if (!fetchspecificData.ok) {
    throw new Error(
      `Error in response from fetch: ${fetchspecificData.status}`,
    ); // hela throw delen räcker långt
    //return {message "there is an issue with the server request"}
  }

  return jsonData;
}

