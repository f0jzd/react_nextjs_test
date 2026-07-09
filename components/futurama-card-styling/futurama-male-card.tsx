import Image from "next/image";
import FuturamaCard, { CardProps, GenderStyling } from "./futurama-card";




// export default function MaleCard({ image, name, gender }: CardProps) {
//   // const name = props.name; inte vanligt

//   return (
//     <div className="h-full flex flex-col overflow-hidden rounded-lg  justify-between outline-blue-200 outline-2">
//       <Image
//         src={image ? image : "https://placehold.co/600x400"}
//         alt=""
//         width={600}
//         height={400}
//         unoptimized={image ? false : true}
//         className="w-full h-full object-cover overflow-hidden max-h-52"
//         loading="eager"
//       />

//       <div className="flex flex-col items-center px-2 py-2 gap-2">
//         <h3 className="">{name}</h3>

//         <h4 className={"text-blue-500"}>{gender}</h4>

//         <a href="#" className="px-2 pb-2">
//           läs mer
//         </a>
//       </div>
//     </div>
//   );
// }


export default function MaleCard( {image, name}: CardProps) {

  return (
      <FuturamaCard image={image} name={name} gender="MALE" className={"text-blue-500"}/>
  )
}
