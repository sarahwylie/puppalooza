const piggys = [
    {
        "id": 1,
        "title": "Post-bath",
        "pic": "/puppalooza/piggy/Bath.jpg",
        "date": "22 August 2025"
    },
    {
        "id": 2,
        "title": "Clean cutie",
        "pic": "/puppalooza/piggy/Clean.jpg",
        "date": "22 August 2025"
    },
    {
        "id": 3,
        "title": "Peanut butter bath",
        "pic": "/puppalooza/piggy/Peanut.jpg",
        "date": "22 August 2025"
    },
    {
        "id": 4,
        "title": "Bath 'stache",
        "pic": "/puppalooza/piggy/Stache.jpg",
        "date": "22 August 2025"
    },
    {
        "id": 5,
        "title": "Eats and Sleeps",
        "pic": "/puppalooza/piggy/PiggySnoozing.jpg",
        "date": "20 July 2025"
    },
    {
        "id": 6,
        "title": "One day old",
        "pic": "/puppalooza/piggy/WeePig.jpg",
        "date": "13 July 2025"
    },
    {
        "id": 7,
        "title": "Handsome Guy",
        "pic": "/puppalooza/piggy/TinyPig.jpg",
        "date": "31 July 2025"
    },
    {
        "id": 8,
        "title": "A tiny piglet",
        "pic": "/puppalooza/piggy/Piglet.jpg",
        "date": "17 July 2025"
    },
    {
        "id": 9,
        "title": "Dirty work",
        "pic": "/puppalooza/piggy/Piggy1.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 10,
        "title": "What?",
        "pic": "/puppalooza/piggy/Piggy3.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 11,
        "title": "Curious Piggy",
        "pic": "/puppalooza/piggy/Piggy4.jpeg",
        "date": "16 August 2025"
    },
    // {
    //     "id": 12,
    //     "title": "A tiny piglet",
    //     "pic": "/puppalooza/piggy/Piglet.jpg",
    //     "date": "17 July 2025"
    // },
];
export default function Piggy() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Piggy 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Piggy&apos;s eyes give away his chill attitude. Piggy is just happy to be here. 
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        No matter the craziness happening around him, Piggy can nap or hang. He is happy to go with the flow in any situation, making him the ideal companion for any household.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {piggys.map((piggy) => (
                        <div key={piggy.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={piggy.pic}
                                    alt={piggy.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {piggy.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {piggy.date}
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