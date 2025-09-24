import Image from 'next/image';

const otters = [
    {
        "id": 1,
        "title": "One day old",
        "pic": "1BdFKswpNaAWYua7cNFK6V9rbXgSh-P6x",
        "date": "13 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 2,
        "title": "Big guy",
        "pic": "1em4va0LDwU-qplpKsF_oGj76hdI_a5W4",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Tiny ball of Otter",
        "pic": "1y7TT2gJiNvDb0cKXPEaK8MDou4AfNmyV",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Wrinkly Beak",
        "pic": "1wRfezQ2Ea0FYwUU1Dch3GAg87OGyEH1R",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "So happy cuddling with his stuffy",
        "pic": "1JDUn85Lj0nSrxMzFlPAcaisyV-fpsGQI",
        "date": "29 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Straight into the camera",
        "pic": "1ZAZmTllvgWkSI7_7WXYMGv34UYyWRmSc",
        "date": "27 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 7,
        "title": "Snuggling",
        "pic": "1k5qPs161hFEbiIStO3zc2ndqk6nCJqLM",
        "date": "1 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Who me?",
        "pic": "10-Zi3pz8BVbGjA8vnkN0GYD7_Y9XrZD8",
        "date": "23 August 2025",
        "width": 400,
        "height": 300,
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
                        Otter has found his forever family!
                        {/* One of only two boys in the litter, Otter manages to hold his own with the girls. He is curious and playful, but just as open to cuddles and love. */}
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* This cutie has a Rottweiler look (maybe a Rottie dad?) and a big heart. His wrinkly beak is starting to stretch out, and his personality is just right for anyone looking for a playful, loving companion. */}
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {otters.map((otter) => (
                        <div key={otter.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={`https://drive.google.com/thumbnail?id=${otter.pic}`}
                                    alt={otter.title}
                                    width={otter.width}
                                    height={otter.height}
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