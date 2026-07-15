import FuturamaGrid from "@/components/futuramagrid";
import Hero from "@/components/hero";
import PoeGrid from "@/components/poe-unique-grid";
import Form from "next/form"
import { getCharactersRestApi } from "@/data/characters";
import { getCharactersGraphQL } from "@/data/characters-graph";
import { headers } from "next/headers";
import SearchForm from "@/components/search-form";



export default async function Home({
  searchParams,
}: {
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
  // searchParams: Promise<{ page: string }>;
}) {

  const { pageString, limit, query } = await searchParams;


  const currentPage = pageString ? Number(pageString) : 1; //Current page of items?
  const currentLimit = limit ? Number(limit) : 10;//Items per page


  console.log(pageString)



  // const json = (await getCharactersRestApi());
  // console.log(json);

  // const json2 = getCharacterGraphQL();
  // console.log(json2)

  ///////////////////////////////////////////////////////////////////////

  return (
    <main>
      <Hero />
      <SearchForm />
      <FuturamaGrid currentPage={currentPage} currentLimit={currentLimit} query={query} />
      {/* <PoeGrid /> */}
    </main>
  );
}


