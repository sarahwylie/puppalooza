import Link from 'next/link';
import Image from 'next/image';
import HoverImage from './components/hoverImage';
import Age from './components/age';
import { puppies } from './components/puppyLinks';
import { albums } from './components/albumLinks';

const headerLinks = [
  {
    href: "#puppies",
    section: "Puppies",
  },
  {
    href: "#mama",
    section: "Mama",
  },
  {
    href: "#albums",
    section: "Albums",
  },
];

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center text-center gap-9">

          <div className="flex justify-center items-center md:justify-end text-gray-900 dark:text-gray-100 w-full md:w-auto">
            <nav>
              <ul className="text-center list-none flex-col sm:flex-row">
                {headerLinks.map((link) => (
                  <li
                    key={link.section}
                    className="mx-4 p-2 md:p-4 sm:inline hover:rounded-full hover:bg-gray-900 hover:text-gray-100 hover:dark:text-gray-900 hover:dark:bg-gray-100 pt-2 md:pt-6"
                  >
                    <a href={link.href} className="sm:text-3xl text-2xl font-bold tracking-widest sm:tracking-normal">
                      {link.section}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            <span className="line-through">Adoptable</span> Puppies!
          </h1>
          <Age />
          <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczNIJ0ATEb4mwW6p_zeWQ5dBLfusAQRguor84h-PIQx01fEi21JUS-fPByxcoOdeBcPTMNppKBitF-OZvqrF4Ydrwq5i-eKUOX2DypK0FHi3M9PCIg=w2400"
              alt="Seven cute puppies"
              width={400}
              height={300}
              className="mx-2"
            />
          {/* <p className='max-w-xl'>This sweet baby is house-trained, leash-trained, and she knows Sit. Possum is a love bug who may be shy, but she is adventurous and loyal. She is unbearably cute, and she loves to play just as much as she loves to chill. She sleeps through the night in her bed, and she has fragments of a bunny stuffy (destroyed by a wild pack of pups) that she suckles as her emotional support animal.</p>
          <h2 className="text-3xl text-gray-900 dark:text-slate-300 font-bold" id="links">
            Interested?
          </h2>
          <ul className="text-center">
            <li className='mb-5'>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> see her on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong></li>
          </ul> */}

          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center px-10">
            Photos were last uploaded on: 14 January 2026
          </p>
          <div className="text-center w-full">
            <hr />
          </div>
        </header>

        <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">

          {/* PUPPIES */}
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="puppies">
            Meet the puppies:
          </h2>
          <br />
          <br />
          <div className="grid md:grid-cols-3 md:grid-rows-3 xs:grid-cols-1 gap-4 place-items-center">
            {puppies.map((puppy) => (
              <div key={puppy.name} className="border border-solid border-indigo-500 rounded-xl p-2 m-2">
                <div className="contents">
                  <Link href={`/puppies/${puppy.name}`}>
                    <span className="justify-center items-center">
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
{/* 
          <div className="text-center w-full">
            <hr />
          </div> */}

          {/* ADOPT */}
          {/* <h2 className="text-3xl text-gray-900 dark:text-slate-300 font-bold" id="links">
            Interested?
          </h2>
          <ul className="text-center">
            <li className='mb-5'>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> or view our pups on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong></li>
            <li><strong>Please share this site!</strong></li>
          </ul> */}
          {/* <div className="justify-center items-center flex flex-wrap">
            <Image
              src="https://drive.google.com/thumbnail?id=1MB8a4r22TILii27RHPSztq71--2Yin_y"
              alt="QR Code"
              width={800}
              height={800}
              className="rounded-xl w-2/3 h-auto xs:w-auto" />
          </div> */}

          <div className="text-center w-full">
            <hr />
          </div>

          {/* ALBUMS */}
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="albums">
            Cute puppy pics
          </h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
            {albums.map((album) => (
              <div key={album.id} className="rounded-xl p-2 m-2">
                <Link href={`/albums/${album.url}`}>
                  <span className="justify-center items-center">
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
            <div className="justify-center items-center flex flex-wrap">
            <Image
              src="https://drive.google.com/thumbnail?id=1MB8a4r22TILii27RHPSztq71--2Yin_y"
              alt="QR Code"
              width={800}
              height={800}
              className="rounded-xl w-2/3 h-auto xs:w-auto" />
          </div>
          </div>

          <div className="text-center w-full">
            <hr />
          </div>

          {/* WILLA */}
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="mama">
            Meet the mama:
          </h2>
          <div className="columns-md gap-4">
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">
                Willa
              </h3>
              <span>
                Willa is a beautiful and sweet dog with a very mild temperament. She was found in the neighborhood and came to live with us on May 28th, 2025 as a foster after the rescue helped us catch her. The vet estimated her age around 2.5 years, and her DNA results are pictured.
              </span>
              <br />
              <br />
              <span className="justify-center items-center flex flex-wrap row gap-4">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczPaTi5TS1nSp2tO8z_mwW1Ck57_-vZFd0QMYgXjjMti2m4dZe7jZUdht5vnxu2Ea1eg0eekOm1SJh-Z96DucCg3O-O4eW_suJmu4a_KsB_ulSNKaGsKhv29_-uf6XAXIpGVCMaumQhurS_JR84byJE=w603-h804-s-no-gm?authuser=0"
                  alt="Willa"
                  priority={true}
                  width={300}
                  height={400}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczOVgSEuae55soJqwERv2dfQ4eBUlzmaI8u6RBVLjXS84QDh4kL-mMQTWcDSioCvcDt_MLa5vZYgSnvjNNPU7ucdfM8E4BuoEbcoeJyV4vJolxhhMw=w2400"
                  alt="Willa"
                  width={400}
                  height={300}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczNjWV3ew61IAGnqSTqP6PFwt0qxOnq-pA4KqAukSvyKZqSqf-o3XfxLkWt1GKdV2yu9jDP-XFMVFR31cpeDBRWUmmi66ZDD0UzbqWapH1C2e7MpHA=w2400"
                  alt="Willa"
                  width={400}
                  height={300}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
              </span>
              <br />
              <span>
                We got quite the surprise when we discovered she was pregnant, and an even bigger surprise when she birthed TEN puppies! Nine of them survived, and they are unbearably cute, but they all need homes.
              </span>
              <span className="justify-center items-center flex">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczMjGhwd9j4ogaBXfxS0_LEd4W9kseMqCVfYXzFrGfJQAZrY6FXYf0jqvRCbbh5iui-5rvEHTodASmQPh0mDXRNj3_5cZcf_mLb8eK5juLUSHND3aA=w2400"
                  alt="Willa with her brand new puppies"
                  width={400}
                  height={300}
                  className="rounded-xl w-3/4 h-auto my-1"
                />
              </span>
            </div>
            <div className="justify-center items-center flex">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczM_qAXQCnSDX6oYvhMtl92dyqwI0EmeNWY94XCyupI0WfJ521aQlUsg0e5nwiRcVjsPdne0wh75gLMfqmrLELVvisrYk2ScvK0YfZF867K6z5B84BNf2OF-4urqoLT2XWAk_iZbkKRcjlVjR8w7O5U=w565-h804-s-no-gm?authuser=0"
                alt="Willa's DNA results"
                width={300}
                height={400}
                className="rounded-3xl w-5/6 h-auto my-1"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
