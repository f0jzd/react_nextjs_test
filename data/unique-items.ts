import data from "@/data/poe-unique-test.json";
import { slugify } from "@/lib/util";

interface UniqueItem {
  name: string;
  item_class: string;
  inventory_width: number;
  inventory_height: number;
  [key: string]: any;
}

const itemsArray = Object.values(data) as UniqueItem[];

export function getUniqueItemBySlug(slug: string) {
  const found = itemsArray.find((item) => slugify(item.name) === slug);
  return found;
}
