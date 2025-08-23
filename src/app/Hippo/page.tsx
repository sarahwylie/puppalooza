const hippos = [
    {
        "id": 1,
        "title": "Eyes on You",
        "pic": "/puppalooza/hippo/Hippo1.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 2,
        "title": "Blep",
        "pic": "/puppalooza/hippo/Hippo3.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Nose-Picking",
        "pic": "/puppalooza/hippo/Hippo6.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 4,
        "title": "Some Cuddles",
        "pic": "/puppalooza/hippo/cuddleHip.jpg",
        "date": "4 August 2025"
    },
    {
        "id": 5,
        "title": "Sleepy Baby",
        "pic": "/puppalooza/hippo/TinyHippo.jpg",
        "date": "31 July 2025"
    },
    {
        "id": 6,
        "title": "Softest Nose",
        "pic": "/puppalooza/hippo/SoftestNose.jpg",
        "date": "30 July 2025"
    },
    {
        "id": 7,
        "title": "Piercing Eyes",
        "pic": "/puppalooza/hippo/Piercing.jpg",
        "date": "30 July 2025"
    },
    // {
    //     "id": 8,
    //     "title": "One Day Old!",
    //     "pic": "/puppalooza/hippo/hippo.jpg",
    //     "date": "13 July 2025"
    // },
];
export default function Hippo() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Hippo 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Hippo is always the first to greet humans and happy to snuggle hard. She loves playing, puppy-piles at naptime, and she happily jumps into trouble (or a flowerpot) before thinking through the consequences. 
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Hippo is ready to work hard and play hard, so she is your girl if you embrace a mullett mentality.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {hippos.map((hippo) => (
                        <div key={hippo.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={hippo.pic}
                                    alt={hippo.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {hippo.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {hippo.date}
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