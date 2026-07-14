import { notFound } from "next/navigation";
import { getUniqueItemBySlug } from "@/data/unique-items";


export default async function UniqueItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const uniqueItem = getUniqueItemBySlug(slug);

  if(!uniqueItem){
    notFound();
  }


  return (
    <main>
      <h1>{uniqueItem.name}</h1>
      <h1>{uniqueItem.item_class}</h1>
      <h1>{`${uniqueItem.inventory_width}`} by {`${uniqueItem.inventory_height}`} </h1>
    </main>
  );
}
