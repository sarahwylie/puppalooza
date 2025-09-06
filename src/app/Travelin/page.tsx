import Image from "next/image";

const pupburries = [
    {
        "id": 1,
        "title": "First vet visit",
        "pic": "13vKWmX76ZpcUurBLpOMxIVtXccMljAtK",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Locked and Loaded",
        "pic": "1PZHMJHLa1DdlxNFEIJ6jKpYWMMm52krW",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 3,
        "title": "Vetscursion",
        "pic": "1YYfvyt2Eoobmix77ttgGbvRc3P4TA_En",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Reptar's first trip to the park",
        "pic": "1IG0fa3ax_F8y2JyA8EK0H8LJZOXIdQ7c",
        "date": "2 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Reptar supervising playtime at the park",
        "pic": "1st7vjGlMlj809dC1WUmc39xyZ2yb4eYk",
        "date": "2 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Possum giving side-eye",
        "pic": "1bt9QUhNCXTDD7_Xv76r2X7_zh5yYjYSj",
        "date": "3 September 2025",
        "width": 400,
        "height": 350,
    },
    {
        "id": 7,
        "title": "Supervising playtime is exhausting",
        "pic": "1PuELK2hQxrTwyU8aWUOFkF03j18JVgyF",
        "date": "3 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Just keeping an eye on things",
        "pic": "1iM7klfFbM2VBxfWLEUkL33kU-6aSLbKF",
        "date": "4 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 9,
        "title": "Where are we going?",
        "pic": "1vBPeDSWHpW6ySkCJB-Kz5hQgMwVwlHQu",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 10,
        "title": "For real, where to?",
        "pic": "1UDrLL66Y1ZAM91gInAhANA7PCqUh5_mJ",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 11,
        "title": "Tired",
        "pic": "133jAat271Qmk71X2oj3TgQVzMZcX6JLK",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 12,
        "title": "Too tired",
        "pic": "1Zp6cy9ONo7RZ2XjlvNcbJnhbVJ8wdOh8",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 13,
        "title": "Three tired",
        "pic": "18GBHfOsOqPWK3qCAtIhYzq_9CEn4jikp",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 14,
        "title": "Too small for the carrier!",
        "pic": "1QVxrN9i0RXBJqD_BBuFSsZGhTaLoL-nF",
        "date": "5 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 15,
        "title": "So happy to be out!",
        "pic": "1nkpgJ8i3mko83ziiXq-F9NC9-hMLgFVY",
        "date": "5 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 16,
        "title": "Watching You",
        "pic": "12BpAwUOOt20B6hka0zh3bI_F0Tla2y2p",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 17,
        "title": "Game, Point, Match",
        "pic": "1d4lVHj3SDWMmuLmlRlg_c0oO8PWMwbhw",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 18,
        "title": "Chillin, just getting ready to bark",
        "pic": "10DfZciN98368nsU7pppbYpLC7HK9ie4b",
        "date": "6 September 2025",
        "width": 400,
        "height": 300,
    }
];

export default function Travelin() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        The Travelin&apos; Pupburries
                    </h1>
                    <span>
                        Our first big trip out of the house was to the vet for a checkup and first-round vaccinations.
                    </span>
                    <span>
                        Now that their first round of shots is complete, we are taking them on more adventures! No paws touch the ground outside our property, and they only meet dogs we already know (safety first!).
                    </span>
                </header>

                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">
                    {pupburries.map((pupburry) => (
                        <div key={pupburry.id} className="m-2">
                            <span>
                                <Image
                                    src={`https://drive.google.com/thumbnail?id=${pupburry.pic}`}
                                    alt={pupburry.title}
                                    width={pupburry.width}
                                    height={pupburry.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {pupburry.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {pupburry.date}
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
