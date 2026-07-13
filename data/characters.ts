import data from "@/data/characters.json";


export function getCharactersById(idNr: number) {
  return data.items.find((character) => character.id === idNr);
}
