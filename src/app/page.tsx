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
    "pic": "/puppalooza/piggy/Bath.jpg"
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

const albums = [
  {
    "id": 1,
    "title": "Phase One: The Whelping Pen Days",
    "pic": "/puppalooza/group/BabyDays/SnugTongue.jpg",
    "url": "BabyDays"
  },
  {
    "id": 2,
    "title": "Playtime with Uncle Rusty Shackleford",
    "pic": "/puppalooza/group/UncleBuck/uncleBuck.jpeg",
    "date": "28 August 2025",
    "url": "UncleBuck"
  },
  {
    "id": 3,
    "title": "Sleepy Time",
    "pic": "/puppalooza/group/SleepyTime/Snoozefest.jpg",
    "date": "10 August 2025",
    "url": "SleepyTime"
  },
  {
    "id": 4,
    "title": "Puppies Gone Wild!",
    "pic": "/puppalooza/group/PlayTime/VioletSplinter.jpg",
    "date": "22 August 2025",
    "url": "PlayTime"
  },
  {
    "id": 5,
    "title": "First excursion",
    "pic": "/puppalooza/group/Vet/Vet1.jpg",
    "date": "20 August 2025",
    "url": "Vet"    
  }
]

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Adoptable Puppies!
          </h1>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            The puppies were born on 12 July 2025.
            <br />
            Today the puppies are {howOldAreThePuppies} days old!
          </p>
          <div className="text-center w-full">
            <hr />
          </div>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center px-10 mb-4">
            Please note that we are working to get as many pictures and videos uploaded as possible, but it will take some time. Meanwhile, please help support us in making sure these super pups thrive by checking out our <a href="https://www.amazon.com/hz/wishlist/ls/2ZHVZ6WIR1XP4?ref_=wl_share" className="text-sky-400"><strong>Amazon Wishlist</strong></a>! You can also visit <a href="/puppalooza#links" className="text-sky-400"><strong>the links below</strong></a> to find more information and a QR Code to more easily share this site (*who doesn&apos;t like seeing adorable puppies?*).
          </p>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center px-10">
            Photos were last uploaded on: 1 September 2025
          </p>
          <div className="text-center w-full">
            <hr />
          </div>
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
          <div className="grid md:grid-cols-3 md:grid-rows-3 xs:grid-cols-1 gap-4 place-items-center">
            {puppies.map((puppy) => (
              <div key={puppy.name} className="border-1 border-solid border-indigo-500 rounded-xl p-2 m-2">
                <div className="contents">
                  <Link href={`/${puppy.name}`}>
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
                  </Link>
                </div>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div className="text-center w-full">
            <hr />
          </div>
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="links">
            Next Steps:
          </h2>
          <ul className="text-center">
            <li>Please check out our <a href="https://www.amazon.com/hz/wishlist/ls/2ZHVZ6WIR1XP4?ref_=wl_share" className="text-sky-400"><strong>Amazon Wishlist</strong></a></li>
            <li>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> or view our pups on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong> (please note the pups may not be live yet!)</li>
            <li><strong>Share this site!</strong></li>
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
            Check out some albums of cute puppy pics:
          </h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
            {albums.map((album) => (
              <div key={album.id} className="rounded-xl p-2 m-2">
                <Link href={`/${album.url}`}>
                  <span className="justify-center items-center">
                    <img
                      src={album.pic}
                      alt={album.title}
                      className="rounded-xl"
                    />
                  </span>
                  <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                    {album.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
