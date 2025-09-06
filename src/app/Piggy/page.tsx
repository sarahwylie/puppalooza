const piggys = [
    {
        "id": 1,
        "title": "Sits",
        "pic": "1FMAkDnBPBmzRz1kjqWj_eupIqykiEFiE",
        "date": "16 August 2025"
    },
    {
        "id": 2,
        "title": "Clean cutie",
        "pic": "1npYWGcRRDwVdzcz8GEIcRS9AI9oCNt7q",
        "date": "22 August 2025"
    },
    {
        "id": 3,
        "title": "Peanut butter bath",
        "pic": "1K2SkazH2nGMC7-0VVtLwRybiZoc2UNhy",
        "date": "22 August 2025"
    },
    {
        "id": 4,
        "title": "Bath 'stache",
        "pic": "1I3IRcl6DMSQlqIO0iezJwzd4adPOyca4",
        "date": "22 August 2025"
    },
    {
        "id": 5,
        "title": "Eats and Sleeps",
        "pic": "1acydR2yaCvoc3gwOOlvpEh2R7rOCnwnL",
        "date": "20 July 2025"
    },
    {
        "id": 6,
        "title": "One day old",
        "pic": "1S1WnBuwWuJzvdC8kuYuqUvxvFx3x7vv8",
        "date": "13 July 2025"
    },
    {
        "id": 7,
        "title": "Handsome Guy",
        "pic": "1vMCPbfoXKJZXPqVIqc6T-B54X1GOHVRg",
        "date": "31 July 2025"
    },
    {
        "id": 8,
        "title": "A tiny piglet",
        "pic": "1GIsOZhGDGKnkLv34iyqGznvH00N7wLRK",
        "date": "17 July 2025"
    },
    {
        "id": 9,
        "title": "Dirty work",
        "pic": "1sVrJQa4IRubq0idgl14hLotxXEoqGl25",
        "date": "16 August 2025"
    },
    {
        "id": 10,
        "title": "What?",
        "pic": "1vBhW-cI8i0o_rvBixSYVkBd_w0cxLKVg",
        "date": "16 August 2025"
    },
    {
        "id": 11,
        "title": "Curious Piggy",
        "pic": "17H1JDC23tOvwEqqNy9q7SYI9tpk6ddWV",
        "date": "16 August 2025"
    }
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
                                    src={`https://drive.google.com/thumbnail?id=${piggy.pic}`}
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