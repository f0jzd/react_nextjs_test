import Image from "next/image";


export interface CardProps {
  id?: number;
  name?: string;
  gender?: string;
  status?: string;
  species?: string;
  createdAt?: string;
  image?: string | null;
}

export interface GenderStyling extends CardProps{
    className?: string;
}


export default function FuturamaCard({ image, name, gender, className }: GenderStyling) {

  return (
    <div className="h-full flex flex-col overflow-hidden rounded-lg  justify-between outline-gray-200 outline-2">
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
        <h3 className="">{name}</h3>

        <h4 className={`${className}`}>{gender}</h4>

        <a href="#" className="px-2 pb-2">
          Learn More?
        </a>
      </div>
    </div>
  );

}
