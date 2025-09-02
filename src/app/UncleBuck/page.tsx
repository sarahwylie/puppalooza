const playtimeRusty = [
    {
        "id": 1,
        "title": "Piggy with Rusty Shackleford",
        "pic": "/puppalooza/group/UncleBuck/RustyAndPiggy.jpg",
        "date": "16 August 2025"
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
        "pic": "/puppalooza/group/UncleBuck/RustyHippo.jpg",
        "date": "18 August 2025"
    },
    {
        "id": 4,
        "title": "Invading the living room",
        "pic": "/puppalooza/group/UncleBuck/playRust.jpeg",
        "date": "29 August 2025"
    },

    {
        "id": 5,
        "title": "Destruction",
        "pic": "/puppalooza/group/UncleBuck/RustyPlay.jpeg",
        "date": "28 August 2025"
    },
    {
        "id": 6,
        "title": "Standoff",
        "pic": "/puppalooza/group/UncleBuck/SplinterKathleen.jpg",
        "date": "21 August 2025"
    }
];

export default function UncleBuck() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Playtime with Rusty Shackleford
                    </h1>
                    <span>
                        Rusty came to live with us in January 2025, and he is just a huge puppy himself. He was estimated between 9-12 months old at the end of January, and he LOVES these puppies. Cuteness ensues.
                    </span>
                </header>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {playtimeRusty.map((playtimeRust) => (
                        <div key={playtimeRust.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={playtimeRust.pic}
                                    alt={playtimeRust.title}
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
