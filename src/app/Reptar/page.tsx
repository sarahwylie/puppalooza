const reptars = [
    {
        "id": 1,
        "title": "Gorgeous",
        "pic": "/puppalooza/reptar/gorgeous.jpg",
        "date": "30 July 2025"
    },
    {
        "id": 2,
        "title": "Gets by with a little help from her friends",
        "pic": "/puppalooza/reptar/Reptar1.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Perfect little face",
        "pic": "/puppalooza/reptar/Reptar2.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 4,
        "title": "Show stance",
        "pic": "/puppalooza/reptar/Reptar4.jpeg",
        "date": "16 August 2025"
    },
    // {
    //     "id": 5,
    //     "title": "Sleepy Baby",
    //     "pic": "/puppalooza/reptar/TinyHippo.jpg",
    //     "date": "31 July 2025"
    // },
    // {
    //     "id": 6,
    //     "title": "Softest Nose",
    //     "pic": "/puppalooza/reptar/SoftestNose.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 7,
    //     "title": "Piercing Eyes",
    //     "pic": "/puppalooza/reptar/Piercing.jpg",
    //     "date": "30 July 2025"
    // },
    // {
    //     "id": 8,
    //     "title": "One Day Old!",
    //     "pic": "/puppalooza/reptar/hippo.jpg",
    //     "date": "13 July 2025"
    // },
];
export default function Reptar() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Reptar 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Reptar is already breaking hearts everywhere. After a couple of meet and greets, she has been a popular pick for all!
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Sweet, curious, colorful, and stunningly gorgeous, Reptar would make a perfect addition to any home.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {reptars.map((reptar) => (
                        <div key={reptar.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={reptar.pic}
                                    alt={reptar.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {reptar.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {reptar.date}
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