const kathleens = [
    {
        "id": 1,
        "title": "Sleepy",
        "pic": "/puppalooza/kathleen/SleepyKathleen.jpg",
        "date": "7 August 2025"
    },
    {
        "id": 2,
        "title": "Yawns",
        "pic": "/puppalooza/kathleen/Kathleen2.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Thoughtful",
        "pic": "/puppalooza/kathleen/Kathleen4.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 4,
        "title": "With Uncle Rusty",
        "pic": "/puppalooza/kathleen/KathleenRusty.jpg",
        "date": "16 August 2025"
    },
    {
        "id": 5,
        "title": "Some Light Construction",
        "pic": "/puppalooza/kathleen/KathleenTheBuilder.jpg",
        "date": "16 August 2025"
    },
    {
        "id": 6,
        "title": "2.5 weeks old",
        "pic": "/puppalooza/kathleen/TinyKathleen.jpg",
        "date": "30 July 2025"
    },
    {
        "id": 7,
        "title": "Speckled Nose",
        "pic": "/puppalooza/kathleen/Speckled.jpg",
        "date": "17 July 2025"
    },
];
export default function Kathleen() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Kathleen
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Kathleen is a feisty pup with no fear. She loves cuddles, being the center of attention, and bossing around bigger dogs. When not taking control of a situation, Kathleen is usually playing hard. Her boss-babe-party-girl attitude, combined with the bikini top on her back, all combine to explain the origin of her name: her namesake and hero Kathleen Hanna.
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Kathleen loves having buddies, so she would do best in a home with other animals.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {kathleens.map((kathleen) => (
                        <div key={kathleen.id} className="rounded-xl p-2 m-2">
                            <span className="justify-center items-center">
                                <img
                                    src={kathleen.pic}
                                    alt={kathleen.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {kathleen.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {kathleen.date}
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