import Image from "next/image";

const playtimeRusty = [
    {
        "id": 1,
        "title": "Piggy with Rusty Shackleford",
        "pic": "14lFPjJrxwPly8a_bjszSkyOkW9AhdJSZ",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    // {
    //     "id": 2,
    //     "title": "Piggy with Rusty Shackleford",
    //     "pic": "/puppalooza/group/UncleBuck/uncleBuck.jpg",
    //     "date": "16 August 2025"
    // },
    {
        "id": 3,
        "title": "Tug of war with Uncle Rusty",
        "pic": "1CByEg8HVe5w88tbIWfQsI15U0xft8W-O",
        "date": "18 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Invading the living room",
        "pic": "1QrmC9RiPi7XASnCwA9I38tR-i7bsHLkP",
        "date": "29 August 2025",
        "width": 400,
        "height": 400,
    },

    {
        "id": 5,
        "title": "Destruction",
        "pic": "1dQTR2j_PWeQyo29r5z_AknYhGt-S29VZ",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 6,
        "title": "Standoff",
        "pic": "1NDyP8MRjjMKvW-ZHMcyMDGM7ZdlrgpW9",
        "date": "21 August 2025",
        "width": 300,
        "height": 400,
    }
];

export default function UncleBuck() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        Playtime with Rusty Shackleford
                    </h1>
                    <span>
                        Rusty came to live with us in January 2025, and he is just a huge puppy himself. He was estimated between 9-12 months old at the end of January, and he LOVES these puppies. Cuteness ensues.
                    </span>
                </header>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {playtimeRusty.map((playtimeRust) => (
                        <div key={playtimeRust.id} className="m-2">
                            <span>
                                <Image
                                    src={`https://drive.google.com/thumbnail?id=${playtimeRust.pic}`}
                                    alt={playtimeRust.title}
                                    width={playtimeRust.width}
                                    height={playtimeRust.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {playtimeRust.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {playtimeRust.date}
                            </p>
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
};
