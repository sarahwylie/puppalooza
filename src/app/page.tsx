import Image from "next/image";
// import WillaDNA from "/WillaDNA.png";
// import WillaWoo from "/WillaFace.jpg";
// import Preggers from "/Preggers.jpg";
// import Baby from "/BabyFace.jpg";
// import WillaPups from "/WillaPups.jpg";
// import Hippo from "/Hippo4.jpeg";
// import Kathleen from "/Kathleen1.jpeg";
// import Otter from "/Otter2.jpeg";
// import Piggy from "/Piggy5.jpeg";
// import Pinky from "/Pinky1.jpeg";
// import Possum from "/Possum5.jpeg";
// import Reptar from "/Reptar6.jpeg";
// import Splinter from "/Splinter1.jpeg";
// import Violet from "/Violet4.jpeg";

// Create Date objects representing the two dates
const birth: Date = new Date('2025-07-12');
const today = Date.now();

// Calculate the difference in 
// milliseconds between the two dates
const differenceInMs: number =
  Math.abs(today - birth.getTime());

// Define the number of milliseconds in a day
const millisecondsInDay: number = 1000 * 60 * 60 * 24;

// Calculate the difference in days by 
// dividing the difference in milliseconds by 
// milliseconds in a day
const howOldAreThePuppies: number =
  Math.floor(differenceInMs / millisecondsInDay);

const puppies = [
  {
    "name": "Hippo",
    "pic": "/Hippo4.jpeg"
  },
  {
    "name": "Kathleen",
    "pic": "/Kathleen1.jpeg"
  },
  {
    "name": "Otter",
    "pic": "/Otter2.jpeg"
  },
  {
    "name": "Piggy",
    "pic": "/Piggy5.jpeg"
  },
  {
    "name": "Pinky",
    "pic": "/Pinky1.jpeg"
  },
  {
    "name": "Possum",
    "pic": "/Possum5.jpeg"
  },
  {
    "name": "Reptar",
    "pic": "/Reptar6.jpeg"
  },
  {
    "name": "Splinter",
    "pic": "/Splinter1.jpeg"
  },
  {
    "name": "Violet",
    "pic": "/Violet4.jpeg"
  }
];

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Puppies!
          </h1>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            Today the puppies are {howOldAreThePuppies} days old!
          </p>
        </header>
        <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold">
            First meet the mama:
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
                  src="/public/WillaFace.jpg"
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                  width={700}
                  height={475}
                  // layout="responsive" // Enables responsive layout
                  sizes="(max-width: 700px) 100vw, 700px"
                />
                <Image
                  src="/Preggers.jpg"
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                  width={700}
                  height={475}
                  // layout="responsive" // Enables responsive layout
                  sizes="(max-width: 700px) 100vw, 700px"
                />
                <Image
                  src="/BabyFace.jpg"
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                  width={700}
                  height={475}
                  // layout="responsive" // Enables responsive layout
                  sizes="(max-width: 700px) 100vw, 700px"
                />
              </span>
              <br />
              <span>
                We got quite the surprise when we discovered she was pregnant, and an even bigger surprise when she birthed TEN puppies! Nine of them survived, and they are unbearably cute, but they all need homes.
              </span>
              <span className="justify-center items-center flex">
                <Image
                  src="/WillaPups.jpg"
                  alt="Willa with her brand new puppies"
                  className="rounded-xl w-3/4 h-auto"
                  width={700}
                  height={475}
                  // layout="responsive" // Enables responsive layout
                  sizes="(max-width: 700px) 100vw, 700px"
                />
              </span>
            </div>
            <div className="justify-center items-center flex">
              <Image
                src="/WillaDNA.png"
                alt="Willa's DNA results"
                className="rounded-4xl w-5/6 h-auto"
                width={700}
                height={475}
                // layout="responsive" // Enables responsive layout
                sizes="(max-width: 700px) 100vw, 700px"
              />
            </div>
          </div>
          <div className="text-center w-full">
            <hr />
          </div>
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold">
            Now meet the puppies:
          </h2>
          <br />
          <br />
          <div className="columns-3xs">
            {puppies.map((puppy) => (
              <div key={puppy.name} className="flow-root border-1 border-solid border-indigo-500 rounded-xl p-2 m-2">
                <span className="justify-center items-center">
                  <Image
                    src={puppy.pic}
                    alt={puppy.name}
                    className="rounded-xl"
                    width={700}
                    height={475}
                    // layout="responsive" // Enables responsive layout
                    // sizes="(max-width: 700px) 100vw, 700px"
                  />
                </span>
                <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold text-center">
                  {puppy.name}
                </h2>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div className="text-center w-full">
            <hr />
          </div>
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold">
            Next Steps:
          </h2>
          <ul className="text-center">
            <li>Please check out our <a href="https://www.amazon.com/hz/wishlist/ls/2ZHVZ6WIR1XP4?ref_=wl_share" className="text-sky-400"><strong>Amazon Wishlist</strong></a></li>
            <li>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> or view our pups on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
