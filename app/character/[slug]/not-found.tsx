import Link from 'next/link'
import Image from 'next/image';
import jeffJpg from "@/public/jeff.png"
 
export default function NotFound() {
  return (
    <div className="w-max m-auto flex flex-col gap-4 items-center">
      <h2 className='text-2xl'>Not Found</h2>
      <p>That character does not exist.</p>

      <Image
        src={jeffJpg}
        alt=""
        width={410}
        height={386}
        className="w-full h-full object-cover overflow-hidden max-h-400 rounded-2xl"
        loading="eager"
      />

      <Link href="/" className="flex items-center gap-2 px-4 py-3 outline-1 rounded-xl hover:bg-amber-900">
        <span className="material-symbols">arrow_back</span>Return Home?
      </Link>
    </div>
  );
}