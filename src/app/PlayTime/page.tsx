import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'

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
const playVids = [
    {
        "title": "Can Just Barely Walk, But Plays Hard!",
        "vid": "U_DxeqlIa6A",
        "date": "31 July 2025"
    },
    {
        "title": "Silly Time",
        "vid": "MwfAphzYUVU",
        "date": "30 August 2025"
    },
    {
        "title": "Very First Kibble",
        "vid": "AtHytX83Bio",
        "date": "5 August 2025"
    },
    {
        "title": "Nom nom nom",
        "vid": "cEShrYOv440",
        "date": "24 August 2025"
    }
]

export default async function PlayTime() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        Play, sleep, play, eat, play, poop, play, repeat
                    </h1>
                </header>

                {/* <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center"> */}
                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">

                    {playtimes.map((playtime) => (
                        <div key={playtime.id} className="m-2">
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
                <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-4">
                    Videos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-1">
                    {playVids.map((playVid) => (
                        <div key={playVid.title}>
                            <span>
                                <YouTubeEmbed
                                    videoid={playVid.vid}
                                    width={400}
                                    height={250}
                                    playlabel="Play video"
                                    params="playsinline=1&controls=0&mute=1"
                                    style="border-radius: 12px;"
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
                </div>
            </div>
        </main>
    )
};
