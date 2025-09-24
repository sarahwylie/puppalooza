import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'

const whelpingPenDays = [
    {
        "id": 1,
        "title": "Naps",
        "pic": "1hKiABG3binYNoIZbxay1wJX86hhiD08u",
        "date": "26 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Eyes and ears still closed",
        "pic": "1OS6k3zrghdeukXqZ6YzgqEnHI_ttCXPA",
        "date": "16 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Nursing",
        "pic": "1AQHiISVycwt5V8eP4nUx6kAdgntbrQc1",
        "date": "15 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Snuggles and a Blep",
        "pic": "13VwT6vIi0x159lvWfTZrXTZrUkASkD9U",
        "date": "18 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Cleaning the Whelping Pen",
        "pic": "1m8PWnr4k2q1vXPUi-Jvf1LPynm5AdwX9",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "The first big breakout from the whelping pen",
        "pic": "12ZbEaZIDeMIlFlq1km2JDstnAKocZiBw",
        "date": "4 August 2025",
        "width": 400,
        "height": 400,
    }
];

const babyVids = [
    {
        "title": "Piggy is just a flattened pancake",
        "vid": "bwUXneXiKzo",
        "date": "16 July 2025"
    },
    {
        "title": "Kathleen Sleep Dance",
        "vid": "XtAfd5kASHs",
        "date": "16 July 2025"
    }
];

export default function BabyDays() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        The Whelping Pen Days (12 July - 4 August)
                    </h1>
                </header>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {whelpingPenDays.map((whelpingPenDay) => (
                        <div key={whelpingPenDay.id} className="m-2">
                            <span>
                                <Image
                                    src={`https://drive.google.com/thumbnail?id=${whelpingPenDay.pic}`}
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
                <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-4">
                    Videos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-1">
                    {babyVids.map((babyVid) => (
                        <div key={babyVid.title}>
                                <YouTubeEmbed
                                    videoid={babyVid.vid}
                                    width={400}
                                    height={250}
                                    playlabel="Play video"
                                    params="playsinline=1&controls=0&mute=1"
                                    style="border-radius:12px"
                                />
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {babyVid.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {babyVid.date}
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
