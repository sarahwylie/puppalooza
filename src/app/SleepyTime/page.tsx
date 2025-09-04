import Image from "next/image";

const sleepyPuppies = [
    {
        "id": 1,
        "title": "Sleepy pile of puppies",
        "pic": "/puppalooza/group/SleepyTime/SleepyPuppyPile.jpg",
        "date": "9 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Puppy Pile",
        "pic": "/puppalooza/group/SleepyTime/Pile85.jpg",
        "date": "5 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Clockwise from top: Reptar, Violet, Possum, and Kathleen",
        "pic": "/puppalooza/group/SleepyTime/Pile2.jpg",
        "date": "5 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Clockwise from top: Hippo, Pinky, Splinter, Piggy, and Otter",
        "pic": "/puppalooza/group/SleepyTime/Pile3.jpg",
        "date": "5 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Nighttime snacks",
        "pic": "/puppalooza/group/SleepyTime/nom.jpg",
        "date": "23 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 6,
        "title": "Kathleen and Otter",
        "pic": "/puppalooza/group/SleepyTime/KathleenOtter.jpg",
        "date": "10 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 7,
        "title": "Pinky and Reptar",
        "pic": "/puppalooza/group/SleepyTime/PinkyReptar.jpg",
        "date": "4 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Violet and Possum",
        "pic": "/puppalooza/group/SleepyTime/VioletPossum.jpeg",
        "date": "30 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 9,
        "title": "Possum and Splinter",
        "pic": "/puppalooza/group/SleepyTime/sleepy.jpeg",
        "date": "31 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 10,
        "title": "Possum and Otter",
        "pic": "/puppalooza/group/SleepyTime/napTime.jpeg",
        "date": "31 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 11,
        "title": "Possum and Kathleen",
        "pic": "/puppalooza/group/SleepyTime/KathPoss.jpeg",
        "date": "29 August 2025",
        "width": 300,
        "height": 200,
    },
    {
        "id": 12,
        "title": "Hippo and Violet",
        "pic": "/puppalooza/group/SleepyTime/EvaXena.jpeg",
        "date": "26 August 2025",
        "width": 300,
        "height": 400,
    }
];

export default function SleepyTime() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        Sleepy Time
                    </h1>
                    <span>
                        Play hard, sleep hard.
                    </span>
                </header>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {sleepyPuppies.map((sleepyPuppy) => (
                        <div key={sleepyPuppy.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={sleepyPuppy.pic}
                                    alt={sleepyPuppy.title}
                                    width={sleepyPuppy.width}
                                    height={sleepyPuppy.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {sleepyPuppy.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {sleepyPuppy.date}
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
