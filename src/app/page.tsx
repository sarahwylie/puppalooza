import Link from 'next/link';
import Image from 'next/image';

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

// Main page puppy pics
const puppies = [
  {
    "name": "Hippo",
    "pic": "1yy1xQCaOocSIM73WIHx7KhONdgC8t2Pq",
    "width": 300,
    "height": 400
  },
  {
    "name": "Kathleen",
    "pic": "1VJpF0RMu16_AvGnkdv4ymGyfIutIGMfp",
    "width": 300,
    "height": 400
  },
  {
    "name": "Otter",
    "pic": "1HkIr3VqsVRi6DYQpgrvI8JMXF-2i92DN",
    "width": 300,
    "height": 400
  },
  {
    "name": "Piggy",
    "pic": "1SsLeDrp27U_ay-toydHA_WM_iWowpkLC",
    "width": 300,
    "height": 400
  },
  {
    "name": "Pinky",
    "pic": "1I7KsTeLyJqb7bY-p_zsWdawi83GjKFbV",
    "width": 300,
    "height": 400
  },
  {
    "name": "Possum",
    "pic": "1ewS83rnixCE2A6FagAnWtmAbLBei09pq",
    "width": 300,
    "height": 400
  },
  {
    "name": "Reptar",
    "pic": "1PPNKxwSoeTWd220M7aKs-1yuU0l6NQRM",
    "width": 400,
    "height": 450
  },
  {
    "name": "Splinter",
    "pic": "1NV1Cw5unNmbcodb3UbzD4DZybl2dA2si",
    "width": 300,
    "height": 400
  },
  {
    "name": "Violet",
    "pic": "1eKKT21ws9NQGidEMirmi3GDX5IfMWlCn",
    "width": 500,
    "height": 400
  }
];

const albums = [
  {
    "id": 1,
    "title": "Phase One: The Whelping Pen Days",
    "pic": "1m8PWnr4k2q1vXPUi-Jvf1LPynm5AdwX9",
    "url": "BabyDays",
    "width": 300,
    "height": 400,
    "alt": "Newborn snuggle pups"
  },
  {
    "id": 2,
    "title": "Playtime with Uncle Rusty Shackleford",
    "pic": "1U-yIQZRPtH3ZF5nuk5vctaG8NrnQuhpk",
    "date": "28 August 2025",
    "url": "UncleBuck",
    "width": 400,
    "height": 400,
    "alt": "Tug of War with Uncle Rusty"
  },
  {
    "id": 3,
    "title": "Sleepy Time",
    "pic": "1zJWOVvisuUYJTN8QdtNjPv6_p4673qTH",
    "date": "10 August 2025",
    "url": "SleepyTime",
    "width": 480,
    "height": 270,
    "alt": "Six puppies sleeping"
  },
  {
    "id": 4,
    "title": "Puppies on the Move",
    "pic": "13vKWmX76ZpcUurBLpOMxIVtXccMljAtK",
    "date": "20 August 2025",
    "url": "Travelin",
    "width": 400,
    "height": 300,
    "alt": "Puppies in a crate"
  },
  {
    "id": 5,
    "title": "Puppies Gone Wild!",
    "pic": "1-J5FgUw4xvUvxcwDYMABXobbIQtJLLDj", 
    "date": "22 August 2025",
    "url": "PlayTime",
    "width": 300,
    "height": 400,
    "alt": "Newborn puppies mouthing at each other"
  },
]

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center text-center gap-9">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Adoptable Puppies!
          </h1>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            The puppies were born on 12 July 2025.
            <br />
            Today the puppies are {howOldAreThePuppies} days old!
          </p>
          <Image
            src="https://drive.google.com/thumbnail?id=1YenvndIm0tVax9lXXvBFICx4gvIaYmcJ"
            alt="Seven cute puppies"
            width={400}
            height={300}
            className="mx-2"
          />
          <div className="text-center w-full">
            <hr />
          </div>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center px-10 mb-4">
            Please note that we are working to get as many pictures and videos uploaded as possible, but it will take some time. Meanwhile, please help support us in making sure these super pups thrive by checking out our <a href="https://www.amazon.com/hz/wishlist/ls/2ZHVZ6WIR1XP4?ref_=wl_share" className="text-sky-400"><strong>Amazon Wishlist</strong></a>! You can also visit <a href="/puppalooza#links" className="text-sky-400"><strong>the links below</strong></a> to find more information and a QR Code to more easily share this site (*who doesn&apos;t like seeing adorable puppies?*).
          </p>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center px-10">
            Photos were last uploaded on: 15 September 2025
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
                <Image
                  src="https://drive.google.com/thumbnail?id=1WjLfvL48zhNmD3ostkkbP7zlUxEs3XLY"
                  alt="Willa"
                  priority={true}
                  width={300}
                  height={400}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <Image
                  src="https://drive.google.com/thumbnail?id=1_KpQo2I2meNPwGg2IxaSwBJJnDkLIzXR"
                  alt="Willa"
                  width={400}
                  height={300}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <Image
                  src="https://drive.google.com/thumbnail?id=1I80iFBf5weLeczpJPacrkWOeYXA3sptt"
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
                  src="https://drive.google.com/thumbnail?id=18Fya8aB4EvAjgp53siFhNzldkBT2wGkD"
                  alt="Willa with her brand new puppies"
                  width={400}
                  height={300}
                  className="rounded-xl w-3/4 h-auto my-1"
                />
              </span>
            </div>
            <div className="justify-center items-center flex">
              <Image
                src="/puppalooza/WillaDNA.PNG"
                alt="Willa's DNA results"
                width={300}
                height={400}
                className="rounded-3xl w-5/6 h-auto my-1"
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
                      <Image
                        src={`https://drive.google.com/thumbnail?id=${puppy.pic}`}
                        alt={`${puppy.name} the puppy`}
                        width={puppy.width}
                        height={puppy.height}
                        className="rounded-xl hover:shadow-md hover:ring-2 dark:hover:shadow-white"
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
            <Image
              src="https://drive.google.com/thumbnail?id=1MB8a4r22TILii27RHPSztq71--2Yin_y" 
              alt="QR Code"
              width={400}
              height={400}
              className="rounded-xl w-1/3 h-auto xs:w-auto" />
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
                    <Image
                      src={`https://drive.google.com/thumbnail?id=${album.pic}`}
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
      </div>
    </main>
  );
}
