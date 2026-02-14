import Image from 'next/image';
import Link from 'next/link';
import { albums } from '../components/albumLinks';

export default function Albums() {
  return (
        <div className="w-full space-y-6 px-4 flex flex-col items-center">
          <div>
          <h1 className="text-2xl text-gray-900 dark:text-slate-300 font-bold mt-8">
            Check out some cute puppies!
          </h1>
          </div>
          <br />
          <br />
          <div className="flex flex-wrap gap-4 place-items-center justify-center items-center">
            {albums.map((album) => (
              <div key={album.id} className="rounded-xl p-2 m-2">
                <Link href={`/albums/${album.url}`}>
                  <span className="flex justify-center items-center">
                    <Image
                      src={`https://lh3.googleusercontent.com/pw/${album.pic}`}
                      alt={album.alt}
                      width={album.width}
                      height={album.height}
                      className="rounded-xl border-r-4 border-b-4 border-double border-indigo-500 hover:shadow-md dark:hover:shadow-white mb-1"
                    />
                  </span>
                  <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center mt-2">
                    {album.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
</div>
      );
}
