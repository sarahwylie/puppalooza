const otters = [
    {
        "id": 1,
        "title": "One day old",
        "pic": "/puppalooza/otter/otts.jpg",
        "date": "13 July 2025"
    },
    {
        "id": 2,
        "title": "Big guy",
        "pic": "/puppalooza/otter/Otter1.jpeg",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Tiny ball of Otter",
        "pic": "/puppalooza/otter/lilbit.jpg",
        "date": "17 July 2025"
    },
    {
        "id": 4,
        "title": "Wrinkly Beak",
        "pic": "/puppalooza/otter/wrinkle.jpg",
        "date": "17 July 2025"
    },
    {
        "id": 5,
        "title": "So happy cuddling with his stuffy",
        "pic": "/puppalooza/otter/happyOtt.jpeg",
        "date": "29 August 2025"
    },
    {
        "id": 6,
        "title": "Straight into the camera",
        "pic": "/puppalooza/otter/OtterBeak.jpeg",
        "date": "27 August 2025"
    },
    {
        "id": 7,
        "title": "Snuggling",
        "pic": "/puppalooza/otter/OtterSnugs.jpeg",
        "date": "1 September 2025"
    },
    {
        "id": 8,
        "title": "Who me?",
        "pic": "/puppalooza/otter/Otts.jpeg",
        "date": "23 August 2025"
    },
];
export default function Otter() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Otter 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        One of only two boys in the litter, Otter manages to hold his own with the girls. He is curious and playful, but just as open to cuddles and love.
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        This cutie has a Rottweiler look (maybe a Rottie dad?) and a big heart. His wrinkly beak is starting to stretch out, and his personality is just right for anyone looking for a playful, loving companion.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {otters.map((otter) => (
                        <div key={otter.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={otter.pic}
                                    alt={otter.title}
                                    className="rounded-xl"
                                />
                            
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {otter.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {otter.date}
                            </p>
                            </span>
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
};