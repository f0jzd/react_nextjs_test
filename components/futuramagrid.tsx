import Link from "next/link";
import { slugify } from "@/lib/util";
import jeffJpg from "@/public/jeff.png";
import Image from "next/image";
import { getCharactersRestApi } from "@/data/characters";
import { ReactNode } from "react";

interface CardProps {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt?: string;
  image: string | null;
}

interface GenderStyling extends CardProps {
  className?: string;
}

interface PageBtnProps {
  onClick: () => void;
}

function NextPageBtn({ onClick }: PageBtnProps) {
  return (
    <button
      className="bg-mist-600 py-3 px-3 rounded-xl transition hover:bg-emerald-900"
      onClick={onClick}
    >
      next
    </button>
  );
}

function PrevPageBtn({ onClick }: PageBtnProps) {
  return (
    <button
      className="bg-mist-600 py-3 px-3 rounded-xl transition hover:bg-emerald-900"
      onClick={onClick}
    >
      previous
    </button>
  );
}

function Card({ id, image, name, gender, className }: GenderStyling) {
  //   const styles = genderStyles[gender as keyof typeof genderStyles] || genderStyles.default;

  return (
    <div
      className={`h-full gap-3 flex flex-col overflow-hidden rounded-lg justify-between outline-2`}
    >
      <Image
        src={image ? image : "https://placehold.co/600x400"}
        alt=""
        width={600}
        height={400}
        unoptimized={image ? false : true}
        className="w-full h-full object-cover overflow-hidden max-h-52"
        loading="eager"
      />

      <div className="flex flex-col items-center px-2 py-2 gap-2">
        <h3 className="text-xl">{name}</h3>

        <h4 className={`${className}`}>{gender}</h4>

        <Link
          href={`/character/${slugify(name)}`}
          className="px-2 py-2 bg-emerald-900 rounded-lg"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default async function FuturamaGrid({
  currentPage,
  currentLimit,
  query,
}: {
  currentPage: number;
  currentLimit: number;
  query?: string;
}) {

  const newCharactersREST = await getCharactersRestApi(
    currentPage,
    currentLimit,
    query,
  );

  const { items, page, pages } = newCharactersREST;
  console.log(pages);

  const visiblePages = 11;
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));

  let endPage = Math.min(pages, startPage + visiblePages - 1);

  // Adjust start if we're near the end
  startPage = Math.max(1, endPage - visiblePages + 1);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/0 to-slate-950 pointer-events-none" />
      <section className="relative max-w-7xl mx-auto ">
        <h2 className="mb-3 text-xl">Futurama things &amp; Crew</h2>
        <p className="mb-3">
          Here are some of the characters and other beings from the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Futurama"
            target="_blank"
            className="text-fuchsia-500 italic"
          >
            Futurama
          </a>{" "}
          universe.
        </p>

        {query === "" ? (
          <p></p>
        ) : (
          <p className="mx-auto w-fit py-4">{`Showing Results of "${query}"`}</p>
        )}

        {newCharactersREST.items.length === 0 ? (

          
          
          <div className="flex flex-col pb-4 gap-4 ">
            <p className="mx-auto w-fit text-2xl">
              Found no items matching {`"${query}"`}
            </p>
            <Image
              src={jeffJpg}
              alt=""
              width={410}
              height={386}
              className="w-1/3 h-auto object-cover overflow-hidden max-h-400 rounded-2xl mx-auto"
              loading="eager"
            />
          </div>
        ) : (
          <div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
              {newCharactersREST.items.map((char) => (
                <li key={char.id}>
                  <Card
                    {...char}
                    className={
                      char.gender === "MALE"
                        ? "text-blue-500"
                        : char.gender === "FEMALE"
                          ? "text-pink-500"
                          : "text-gray-500"
                    }
                  />
                  {/* } */}
                </li>
              ))}
            </ul>
            <div className="py-4 flex-col text-xl flex justify-evenly items-center">
              <Pagination currentPage={currentPage}></Pagination>

              <div className="flex gap-4 items-center">
                {[...Array(endPage - startPage + 1)].map((_, i) => {
                  //const pageNr = i + 1;
                  const page = startPage + i;
                  return(
                
                    <PageNumber
                    key={page}
                    query={{ page }}
                    currentPage={currentPage === page}
                    >
                      {page}
                    </PageNumber>
                   );
                })}
              </div>

              {pages > 1 && (
                <p>
                  {`Page ${currentPage}`} of {newCharactersREST.pages}
                </p>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function Pagination({
  currentPage,
  page,
  pages,
}: {
  currentPage: number;
  page?: number;
  pages?: number;
}) {
  return (
    <nav className="flex gap-4">
      <Link
        href={{
          pathname: "/",
          query: { page: currentPage - 1 },
        }}
      >
        <span className="material-symbols text-gray-400 hover:text-white transition">
          arrow_back_ios
        </span>
      </Link>
      <Link
        href={{
          pathname: "/",
          query: { page: currentPage + 1 },
        }}
      >
        <span className="material-symbols text-gray-400 hover:text-white transition">
          arrow_forward_ios
        </span>
      </Link>
    </nav>
  );
}

export function PageNumber({ query, currentPage, children, } : { query: { [key: string]: number }; currentPage?: boolean; children: ReactNode; }) {
  return (
    <Link
      className={`${currentPage && "bg-neutral-500 px-2 rounded-full"}`}
      href={{
        pathname: "/",
        query:  query ,
      }}
    >
      {children}
    </Link>
  );
}