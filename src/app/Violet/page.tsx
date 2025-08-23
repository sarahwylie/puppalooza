const violets = [
    {
        "id": 1,
        "title": "Just starting to walk",
        "pic": "/puppalooza/violet/Violet.jpg",
        "date": "31 July 2025"
    },
    {
        "id": 2,
        "title": "Violet is turning violet",
        "pic": "/puppalooza/violet/VioletViolet.jpg",
        "date": "17 July 2025"
    },
    {
        "id": 3,
        "title": "Tiny purple beak",
        "pic": "/puppalooza/violet/tinyPurpleBeak.jpg",
        "date": "17 July 2025"
    },
    {
        "id": 4,
        "title": "Unbearably cute",
        "pic": "/puppalooza/violet/Violet3.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 5,
        "title": "Strike a pose",
        "pic": "/puppalooza/violet/Violet8.jpeg",
        "date": "16 August 2025"
    },
    // {
    //     "id": 6,
    //     "title": "Softest Nose",
    //     "pic": "/puppalooza/violet/SoftestNose.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 7,
    //     "title": "Piercing Eyes",
    //     "pic": "/puppalooza/violet/Piercing.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 8,
    //     "title": "One Day Old!",
    //     "pic": "/puppalooza/violet/hippo.jpg",
    //     "date": "13 July 2025"
    // },
];
export default function Violet() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Violet 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Violet's name comes from the color she developed on her beak and paws as the white started to fade from her coat. She was born nearly pure white, but at six weeks old she is nearly all black!
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Violet is a crowd favorite - she is unbearably cute and has a very sweet, gentle personality. She is also very adventurous and loves to explore. Once she has conquered something, she has no fear, but she prefers to have friends help her through new experiences.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {violets.map((violet) => (
                        <div key={violet.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={violet.pic}
                                    alt={violet.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {violet.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {violet.date}
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