import data from "@/data/characters.json"
import { StringToNumber } from "@/lib/util";
import { notFound } from "next/navigation";
import { getCharactersById } from "@/data/characters";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idStr } = await params;

  const id = StringToNumber(idStr);

  if (!id) {
    return null;
  }

  const characters = getCharactersById(id);

  if (!characters) {
    return null;
  }

  return { title: characters.name };
}






export default async function CharacterPage(
  props: PageProps<"/character/[id]">,
) {

  // const idString = (await params).id;
  const { id: idString } = await props.params;

  // const idNr = Number(idString);
  const idNr = StringToNumber(idString);

  // //make a check for non valid id:s -> inte number gå hit etc
  // if (Number.isNaN(idNr)) {
  //   notFound();
  // }

  if (!idNr) {
    return notFound();
  }

  const chars = getCharactersById(idNr);

  if (!chars) {
    return (
      <h1>
        {/* inbyggd notfound */}
        {notFound()}
      </h1>
    );
  }

  return (
    <main>
      <h1>{chars.name}</h1>
      <h1>{chars.gender}</h1>
    </main>
  );
}

// export default async function CharacterPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   // const idString = (await params).id;
//   const { id: idString } = await params;

//     const idNr = Number(idString); 

//     //make a check for non valid id:s -> inte number gå hit etc
//     if(Number.isNaN(idNr)){
//         notFound();
//     }

//  const chars = data.items.find((character) => character.id === idNr);


//  if(!chars){
//     return <h1>

//         {/* inbyggd notfound */}
//         {notFound()}
//     </h1>
//  }

//   return (
//     <main>
//       <h1>{chars.name}</h1>
//       <h1>{chars.gender}</h1>
//     </main>
//   );
// }
