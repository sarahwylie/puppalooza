import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'

const whelpingPenDays = [
    {
        "id": 1,
        "title": "Naps",
        "pic": "AP1GczNWg299fyzs3CFqJChHrp5EoPBkBSkfFUMOvGXZtRvHZGyefFWqW_3NyIP98uJrMalD6_oWYHQq1usVo48n7GuSBBTp43AR0WsSrrZzEsuOrf8YYFfAEjZnmfcFJciLkudxIjyVGI7tnX9SM5I1Kpc=w1071-h803-s-no-gm?authuser=0",
        "date": "26 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Eyes and ears still closed",
        "pic": "AP1GczMuNAXygrFfm3myKrqx10RBQhcfZcg952TXmhHXRpfHYrpPRFmF9PhBplPxxGmuSEuYOo5NJ9PiS51mDcAyLV9Y0wl_O_iWPabtyyRDXleNrmAf6eNS2q9sJGI_ghOlK1EESwUezR8Cpc8ePcLVy54=w602-h803-s-no-gm?authuser=0",
        "date": "16 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Nursing",
        "pic": "AP1GczPRtE0HCcOO3myt_m_2r-XRpaQxrPudATOZyukD5qHx7XSYRx0RbmG5a0i2cZFPD21MUJXTB7n543YmAqNxD7C30JjZf8eSNkOIVUEfREZy0FtdrUasSk6hqnHQwXCdj5P8rMpjnUo43_ul00rEpY0=w1071-h803-s-no-gm?authuser=0",
        "date": "15 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Snuggles and a Blep",
        "pic": "AP1GczNjVeFRqRnx4HHsF1Ezcq5iHkaq6nnse_xJSSUmdcRGUku6NbARIF9Gwl-qQaZ8y7L3_wHoFLK4YrtYQK91XEmUgNOv03UJWloq23rHZpTHom9g0T4Qb2_ckmSG-gPnZ65FB9LicU9lzAgsA-pB2kk=w602-h803-s-no-gm?authuser=0",
        "date": "18 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Cleaning the Whelping Pen",
        "pic": "AP1GczOH5hIfVnA4wwftv665HjrbAoxw44TSm1XQvwzZsqmkVxBy0s3IyIDHeSi_T6Q-dcvpD70GDQjAzKI9VEbZBMAf12avFyjMWi6XvThw06r6bGvnfeWOAu8RSYYDLcbqDMhNvm2XJF8ELGcm_4Lz48w=w602-h803-s-no-gm?authuser=0",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "The first big breakout from the whelping pen",
        "pic": "AP1GczPYmzOLV3obc3hXBB0z8sEaOo8XoWPfW0p4UkbfAHoWY9Sw2itTG4-XEZjGnxiITj5mYh_vFGvv6IhfqoGjhJ49LDjieW7lnBvzzvT3KQc5p8iWvUWqX5aP7EdNA0oVs7Kz7nUegepeT7uXm1mit1o=w779-h803-s-no-gm?authuser=0",
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
                                    src={`https://lh3.googleusercontent.com/pw/${whelpingPenDay.pic}`}
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
