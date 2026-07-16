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

  // const { page: pageString, limit, query } = await searchParams;

   const {page:pageString, limit, query} = await searchParams;
  
  // const pageString = params.page;
  // const limit = params.limit;
  // const query = params.query;
  const currentPage = pageString ? Number(pageString) : 1; //Current page of items?
  const currentLimit = limit ? Number(limit) : 20;//Items per page, how many items were requested or returned






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


