import data from "@/data/poe-unique-test.json";


interface Item  {
  id: string;
  inventory_height: number;
  inventory_width: number;
  is_alternate_art: boolean;
  item_class: string;
  name: string;
  visual_identity: {
    dds_file: string;
    id: string;
  };

}

interface CardProps extends Item {
  itemNumber: string;
  id: string;
  name: string;
  item_class: string;
};


function Card({ itemNumber, id, name, item_class }: CardProps) {
//   const styles = genderStyles[gender as keyof typeof genderStyles] || genderStyles.default;

  return (
    <div className={`my-2  h-full flex flex-col overflow-hidden rounded-lg outline-2 justify-center`}>
      

      <div className="flex flex-col items-center px-2 py-2 gap-2">
        <h3 className="text-xl">{`${itemNumber} : ${id}`}</h3>
      </div>
    </div>
  );
}

export default function PoeGrid() {


    const itemList = Object.entries(data)

  return (
    <div className="bg-linear-to-b from-slate-950 via-transparent to-slate-950">
      <section className="max-w-7xl mx-auto min-h-70">
        
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-5">
           {itemList.slice(0,20).map(([itemNumber, item]) => (
            <li key={itemNumber}>
              <Card itemNumber={itemNumber} {...item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
