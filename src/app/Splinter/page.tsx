const splinters = [
    {
        "id": 1,
        "title": "Big Stretch",
        "pic": "/puppalooza/splinter/stretch.jpg",
        "date": "23 August 2025"
    },
    {
        "id": 2,
        "title": "Smiley guy",
        "pic": "/puppalooza/splinter/Splinter2.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Laughs",
        "pic": "/puppalooza/splinter/Splinter3.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 4,
        "title": "Very serious",
        "pic": "/puppalooza/splinter/Splinter4.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 5,
        "title": "Hot Dog",
        "pic": "/puppalooza/splinter/Splinter5.jpeg",
        "date": "16 August 2025"
    },
    // {
    //     "id": 6,
    //     "title": "Softest Nose",
    //     "pic": "/puppalooza/splinter/SoftestNose.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 7,
    //     "title": "Piercing Eyes",
    //     "pic": "/puppalooza/splinter/Piercing.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 8,
    //     "title": "One Day Old!",
    //     "pic": "/puppalooza/splinter/hippo.jpg",
    //     "date": "13 July 2025"
    // },
];
export default function Splinter() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Splinter 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Splinter has been going through a bit of an awkward growth phase, and her fuzzy coat has left her looking like the quintessential 90s bad kid. Don't let that fool you, though, as Splinter is contemplative and sweet.
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Splinter is soft and snuggly, the perfect companion for just about anything.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {splinters.map((splinter) => (
                        <div key={splinter.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={splinter.pic}
                                    alt={splinter.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {splinter.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {splinter.date}
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