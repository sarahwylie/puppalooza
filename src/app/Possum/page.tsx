const possums = [
    {
        "id": 1,
        "title": "One day old",
        "pic": "/puppalooza/possum/NewPoss.jpeg",
        "date": "13 July 2025"
    },
    {
        "id": 2,
        "title": "Keeping an eye on you",
        "pic": "/puppalooza/possum/Peeking.jpg",
        "date": "31 July 2025"
    },
    {
        "id": 3,
        "title": "Sleepy pup",
        "pic": "/puppalooza/possum/SleepyEyes.jpg",
        "date": "30 July 2025"
    },
    {
        "id": 4,
        "title": "Side-eye",
        "pic": "/puppalooza/possum/Walking.jpg",
        "date": "31 July 2025"
    },
    {
        "id": 5,
        "title": "Soulful",
        "pic": "/puppalooza/possum/Possum3.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 6,
        "title": "Dirty beak",
        "pic": "/puppalooza/possum/Possum4.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 7,
        "title": "Oh, didn't see you there",
        "pic": "/puppalooza/possum/Possum9.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 8,
        "title": "Ready to please",
        "pic": "/puppalooza/possum/Possum6.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 9,
        "title": "How can you resist?",
        "pic": "/puppalooza/possum/Possum10.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 10,
        "title": "On the move",
        "pic": "/puppalooza/possum/Possum11.jpeg",
        "date": "16 August 2025"
    },
];
export default function Possum() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Possum 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Possum makes an immediate connection and gets excited to play or cuddle. She looks like a tiny husky, and her silver fur is stunning.
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Possum is up for anything, and she is happiest when she is with her people or her pups. How can you resist that mask?
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {possums.map((possum) => (
                        <div key={possum.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={possum.pic}
                                    alt={possum.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {possum.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {possum.date}
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