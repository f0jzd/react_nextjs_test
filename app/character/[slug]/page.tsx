import { slugify, StringToNumber } from "@/lib/util";
import { notFound } from "next/navigation";
import { getCharactersById, getCharactersBySlug } from "@/data/characters";

import data from "@/data/characters.json"
import CharacterInformation from "@/components/character-page";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id: idStr } = await params;

//   const id = StringToNumber(idStr);

//   if (!id) {
//     return null;
//   }

//   const characters = getCharactersById(id);

//   if (!characters) {
//     return null;
//   }

//   return { title: characters.name };
// }


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = getCharactersBySlug(slug);

  if (!character) {
    return null;
  }

  return { title: character.name };
}


// export default async function CharacterPage(
//   props: PageProps<"/character/[slug]">,
//   //   params: Promise<{ id: string }>;
//   // }) {
// ) {


//   // const { slug: idString } = await props.params;

//   // const idNr = StringToNumber(idString);

//   // if (!idNr) {
//   //   return notFound();
//   // }

//   // const chars = getCharactersById(idNr);
//   const character = getCharactersBySlug(params.slug);

//   if (!character) {
//     return notFound();
//   }

//   return (
//     <main>
//       <h1>{character.name}</h1>
//       <h1>{character.gender}</h1>
//     </main>
//   );
// }

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = data.items.find((character) => slugify(character.name) === slug);

  if (!character) {
    notFound();
  }

  return (
    CharacterInformation(character)
  );
}

