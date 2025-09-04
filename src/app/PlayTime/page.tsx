import Image from "next/image";

const playtimes = [
    {
        "id": 1,
        "title": "Feeding Frenzy",
        "pic": "/puppalooza/group/PlayTime/FeedingFrenzy.jpg",
        "date": "14 August 2025",
        "width": 445,
        "height": 378,
    },
    {
        "id": 2,
        "title": "Crazed",
        "pic": "/puppalooza/group/PlayTime/wildPups.jpeg",
        "date": "1 September 2025",
        "width": 3848,
        "height": 2459,
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
// const playVids = [
//     {
//         "title": "Can Just Barely Walk, But Plays Hard!",
//         "vid": "/puppalooza/group/PlayTime/TooLittleToPlay.mov",
//         "date": "31 July 2025",
//         "width": 400,
//         "height": 300,
//     },
//     {
//         "title": "Silly Time",
//         "vid": "/puppalooza/group/PlayTime/UltimateWrestling.mov",
//         "date": "30 August 2025",
//         "width": 300,
//         "height": 400,
//     },
//     {
//         "title": "Very First Kibble",
//         "vid": "/puppalooza/group/PlayTime/FirstKibble.mov",
//         "date": "5 August 2025",
//         "width": 400,
//         "height": 300,
//     },
//     {
//         "title": "Nom nom nom",
//         "vid": "https://youtu.be/cEShrYOv440",
//         "date": "24 August 2025",
//         "width": 400,
//         "height": 300,
//     }
// ]

export default function PlayTime() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-4">
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
                {/* <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                    Videos
                </h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {playVids.map((playVid) => (
                        <div key={playVid.title} className="rounded-xl p-2 m-2">
                            <span>
                                <iframe
                                    src={playVid.vid}
                                    controls 
                                    playsInline
                                    width={playVid.width}
                                    height={playVid.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {playVid.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {playVid.date}
                            </p>
                            <br />
                            <br />
                        </div>
                    ))}
                </div> */}
            </div>
        </main>
    )
};
