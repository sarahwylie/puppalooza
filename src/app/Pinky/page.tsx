const pinkys = [
    {
        "id": 1,
        "title": "Laughs",
        "pic": "/puppalooza/pinky/Pinky2.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 2,
        "title": "Heh",
        "pic": "/puppalooza/pinky/Pinky3.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Anybody want to party?",
        "pic": "/puppalooza/pinky/Pinky4.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 4,
        "title": "Asleep on the scale",
        "pic": "/puppalooza/pinky/Scale.jpg",
        "date": "29 July 2025"
    },
    {
        "id": 5,
        "title": "Peeking",
        "pic": "/puppalooza/pinky/Peek.jpg",
        "date": "30 July 2025"
    },
    {
        "id": 6,
        "title": "Hello World",
        "pic": "/puppalooza/pinky/hello.jpg",
        "date": "30 July 2025"
    },
    // {
    //     "id": 7,
    //     "title": "Piercing Eyes",
    //     "pic": "/puppalooza/pinky/Piercing.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 8,
    //     "title": "One Day Old!",
    //     "pic": "/puppalooza/pinky/hippo.jpg",
    //     "date": "13 July 2025"
    // },
];
export default function Pinky() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Pinky 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Pinky, née Lab Rat, was born fully white with a long body, a couple black paint splotches on her head, bright pink ears, and a bright pink nose. As she has grown, Pinky&apos;s ears and nose have caught up with her body, and now she looks like a stuffed animal.
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        You can often find Pinky staring at you intently while her siblings sleep. If this doesn&apos;t unsettle you, she is your girl.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {pinkys.map((pinky) => (
                        <div key={pinky.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={pinky.pic}
                                    alt={pinky.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {pinky.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {pinky.date}
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