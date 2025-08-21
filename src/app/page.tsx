import Link from 'next/link';

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
    "pic": "/puppalooza/hippo/Hippo4.jpeg"
  },
  {
    "name": "Kathleen",
    "pic": "/puppalooza/kathleen/Kathleen1.jpeg"
  },
  {
    "name": "Otter",
    "pic": "/puppalooza/otter/Otter2.jpeg"
  },
  {
    "name": "Piggy",
    "pic": "/puppalooza/piggy/Piggy5.jpeg"
  },
  {
    "name": "Pinky",
    "pic": "/puppalooza/pinky/Pinky1.jpeg"
  },
  {
    "name": "Possum",
    "pic": "/puppalooza/possum/Possum5.jpeg"
  },
  {
    "name": "Reptar",
    "pic": "/puppalooza/reptar/Reptar6.jpeg"
  },
  {
    "name": "Splinter",
    "pic": "/puppalooza/splinter/Splinter1.jpeg"
  },
  {
    "name": "Violet",
    "pic": "/puppalooza/violet/Violet4.jpeg"
  }
];

const groupShots = [
  {
    "id": 1,
    "title": "First vet visit",
    "pic": "/puppalooza/group/Vet1.jpg",
    "date": "20 August 2025"
  },
  {
    "id": 2,
    "title": "Vet visit August 20th",
    "pic": "/puppalooza/group/Vet2.jpg",
    "date": "20 August 2025"
  },
  {
    "id": 3,
    "title": "Vet visit August 20th",
    "pic": "/puppalooza/group/Vet3.jpg",
    "date": "20 August 2025"
  },
  {
    "id": 4,
    "title": "Piggy with Rusty Shackleford",
    "pic": "/puppalooza/group/RustyAndPiggy.jpg",
    "date": "16 August 2025"
  },
  {
    "id": 5,
    "title": "Splinter and Kathleen with Rusty Shackleford",
    "pic": "/puppalooza/group/SplinterKathleen.jpg",
    "date": "16 August 2025"
  },
  {
    "id": 6,
    "title": "Sleepy pile of puppies",
    "pic": "/puppalooza/group/SleepyPuppyPile.jpg",
    "date": "9 August 2025"
  },
  {
    "id": 7,
    "title": "Feeding Frenzy",
    "pic": "/puppalooza/group/FeedingFrenzy.jpg",
    "date": "14 August 2025"
  },
  {
    "id": 8,
    "title": "Kathleen and Otter",
    "pic": "/puppalooza/group/KathleenOtter.jpg",
    "date": "10 August 2025"
  },
  {
    "id": 9,
    "title": "A pile of sleepy puppies",
    "pic": "/puppalooza/group/Snoozefest.jpg",
    "date": "10 August 2025"
  },
  {
    "id": 10,
    "title": "Pinky and Reptar",
    "pic": "/puppalooza/group/PinkyReptar.jpg",
    "date": "4 August 2025"
  },
  {
    "id": 11,
    "title": "The first big breakout from the whelping pen",
    "pic": "/puppalooza/group/breakout.jpg",
    "date": "4 August 2025"
  },
  {
    "id": 12,
    "title": "Puppy Pile",
    "pic": "/puppalooza/group/Pile85.jpg",
    "date": "5 August 2025"
  },
  {
    "id": 13,
    "title": "Clockwise from top: Reptar, Violet, Possum, and Kathleen",
    "pic": "/puppalooza/group/Pile2.jpg",
    "date": "5 August 2025"
  },
  {
    "id": 14,
    "title": "Clockwise from top: Hippo, Pinky, Splinter, Piggy, and Otter",
    "pic": "/puppalooza/group/Pile3.jpg",
    "date": "5 August 2025"
  },
]

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Puppies!
          </h1>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            The puppies were born on 12 July 2025.
            <br />
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
                <img
                  src="/puppalooza/WillaFace.jpg"
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <img
                  src="/puppalooza/Preggers.jpg"
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <img
                  src="/puppalooza/BabyFace.jpg"
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
              </span>
              <br />
              <span>
                We got quite the surprise when we discovered she was pregnant, and an even bigger surprise when she birthed TEN puppies! Nine of them survived, and they are unbearably cute, but they all need homes.
              </span>
              <span className="justify-center items-center flex">
                <img
                  src="/puppalooza/WillaPups.jpg"
                  alt="Willa with her brand new puppies"
                  className="rounded-xl w-3/4 h-auto"
                />
              </span>
            </div>
            <div className="justify-center items-center flex">
              <img
                src="/puppalooza/WillaDNA.PNG"
                alt="Willa's DNA results"
                className="rounded-3xl w-5/6 h-auto"
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
                  <img
                    src={puppy.pic}
                    alt={puppy.name}
                    className="rounded-xl"
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
            <li>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> or view our pups on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong> (please note the pups may not be live yet!)</li>
            <li>Share the QR Code for this site!</li>
          </ul>
          <div className="justify-center items-center flex flex-wrap">
            <img src="/puppalooza/frame.png"
              alt="QR Code"
              className="rounded-xl w-1/4 h-auto xs:w-auto" />
          </div>
          <div className="text-center w-full">
            <hr />
          </div>
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold">
            Some group photos:
          </h2>
          <div className="columns-3xs">
            {groupShots.map((groupShot) => (
              <div key={groupShot.id} className="flow-root rounded-xl p-2 m-2">
                <span className="justify-center items-center">
                  <img
                    src={groupShot.pic}
                    alt={groupShot.title}
                    className="rounded-xl"
                  />
                </span>
                <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold text-center">
                  {groupShot.title}
                </h2>
                <h3 className="text-2xl text-gray-900 dark:text-gray-100 text-center">
                  {groupShot.date}
                </h3>
                <br />
                <br />
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
