import Image from "next/image";

const whelpingPenDays = [
    {
        "id": 1,
        "title": "Naps",
        "pic": "/puppalooza/group/BabyDays/napPile.jpg",
        "date": "26 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Eyes and ears still closed",
        "pic": "/puppalooza/group/BabyDays/brandNew.jpg",
        "date": "16 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Nursing",
        "pic": "/puppalooza/group/BabyDays/nursing.jpg",
        "date": "15 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Snuggles and a Blep",
        "pic": "/puppalooza/group/BabyDays/SnugTongue.jpg",
        "date": "18 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Cleaning the Whelping Pen",
        "pic": "/puppalooza/group/BabyDays/Cleaning.jpg",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "The first big breakout from the whelping pen",
        "pic": "/puppalooza/group/BabyDays/breakout.jpg",
        "date": "4 August 2025",
        "width": 400,
        "height": 400,
    }
];

export default function BabyDays() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        The Whelping Pen Days (12 July - 4 August)
                    </h1>
                </header>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {whelpingPenDays.map((whelpingPenDay) => (
                        <div key={whelpingPenDay.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={whelpingPenDay.pic}
                                    alt={whelpingPenDay.title}
                                    width={whelpingPenDay.width}
                                    height={whelpingPenDay.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {whelpingPenDay.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {whelpingPenDay.date}
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
