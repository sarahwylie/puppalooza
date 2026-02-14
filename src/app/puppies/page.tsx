import HoverImage from "../components/hoverImage";
import Link from 'next/link';
import { puppies } from "../components/puppyLinks";

export default function Puppies() {
  return (
    <div className="w-full space-y-6 px-4 flex flex-col items-center">
      <div>
        <h1 className="text-2xl text-gray-900 dark:text-slate-300 font-bold mt-8">
          Meet some of the cutest puppies around...
        </h1>
      </div>
      <br />
      <br />
      <div className="flex flex-wrap gap-4 place-items-center justify-center items-center">
        {puppies.map((puppy) => (
          <div key={puppy.name} className="border border-solid border-indigo-500 rounded-xl p-2 m-2">
            <div className="contents">
              <Link href={`/puppies/${puppy.name}`}>
                <span className="flex justify-center items-center">
                  <HoverImage
                    defaultSrc={`https://lh3.googleusercontent.com/pw/${puppy.pic}`}
                    hoverSrc={`https://lh3.googleusercontent.com/pw/${puppy.babyPic}`}
                    altText={`${puppy.name} the puppy`}
                    width={puppy.width}
                    height={puppy.height}
                  />
                </span>
                <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold text-center mt-1">
                  {puppy.name}
                </h2>
              </Link>
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
