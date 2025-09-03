import Image from "next/image";

const playtimes = [
    {
        "id": 1,
        "title": "Feeding Frenzy",
        "pic": "/puppalooza/group/PlayTime/FeedingFrenzy.jpg",
        "date": "14 August 2025",
        "width": 500,
        "height": 400,
    },
    {
        "id": 2,
        "title": "Crazed",
        "pic": "/puppalooza/group/PlayTime/wildPups.jpeg",
        "date": "1 September 2025",
        "width": 420,
        "height": 270,
    },
    {
        "id": 3,
        "title": "Primal Scream",
        "pic": "/puppalooza/group/PlayTime/VioletSplinter.jpg",
        "date": "22 August 2025",
        "width": 300,
        "height": 400,
    }
];

export default function PlayTime() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Play, sleep, play, eat, play, poop, play, repeat
                    </h1>
                </header>

                {/* <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center"> */}
                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">

                    {playtimes.map((playtime) => (
                        <div key={playtime.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={playtime.pic}
                                    alt={playtime.title}
                                    width={playtime.width}
                                    height={playtime.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {playtime.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {playtime.date}
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
