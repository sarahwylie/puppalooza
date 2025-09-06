import Image from 'next/image';

const kathleens = [
        {
                "id": 1,
                "title": "Sleepy",
                "pic": "1qLGq0eUL7ZzEdzqSsTZPpUIfQ6KVJ7c0",
                "date": "7 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 2,
                "title": "Yawns",
                "pic": "1MCeVxGSqRyLVtXUep06K0smJ00XNZJa5",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 3,
                "title": "Thoughtful",
                "pic": "1mE4uj-TxmRahJaQFAT8ZNKrwTLasxoQE",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "With Uncle Rusty",
                "pic": "1qEBJjvu3pp-W6ccKCdG78p7_7-Vsp71J",
                "date": "16 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 5,
                "title": "Some Light Construction",
                "pic": "1VJpF0RMu16_AvGnkdv4ymGyfIutIGMfp",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 6,
                "title": "2.5 weeks old",
                "pic": "1biv9KYdimseqBnVYgxxlu9Y65XWxGbGL",
                "date": "30 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 7,
                "title": "Speckled Nose",
                "pic": "12WKaBwFzuoUWdW5H3qOLnftpRoyro4MB",
                "date": "17 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 8,
                "title": "Cutie Patootie",
                "pic": "1sH4S9IDd1NipTC29MLE7xwDRmoRiwUvs",
                "date": "26 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 9,
                "title": "Kisses with Rusty",
                "pic": "1Qgl99lgSu4T7JWCiHamkA6ZL3t1zljB3",
                "date": "28 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 10,
                "title": "Intense",
                "pic": "1WT_ZgT71WOh6--qTvAw8kzJQcLXqiN9D",
                "date": "31 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 11,
                "title": "So happy!",
                "pic": "1UGBF8Gsaad9oEs5uwda-NX7DA1h9B_N0",
                "date": "1 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 12,
                "title": "Curious",
                "pic": "1Ju7wFoGAL7ZDp4C1soIwlxPQaRu9B1v4",
                "date": "31 August 2025",
                "width": 300,
                "height": 400,
        },
];
export default function Kathleen() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                Kathleen
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Kathleen is a feisty pup with no fear. She loves cuddles, being the center of attention, and bossing around bigger dogs. When not taking control of a situation, Kathleen is usually playing hard. Her boss-babe-party-girl attitude, combined with the bikini top on her back, all combine to explain the origin of her name: her namesake and hero Kathleen Hanna.
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Kathleen loves having buddies, so she would do best in a home with other animals.
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {kathleens.map((kathleen) => (
                                                <div key={kathleen.id} className="rounded-xl p-2 m-2">
                                                        <span className="justify-center items-center">
                                                                <Image
                                                                        src={`https://drive.google.com/thumbnail?id=${kathleen.pic}`}
                                                                        alt={kathleen.title}
                                                                        width={kathleen.width}
                                                                        height={kathleen.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {kathleen.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {kathleen.date}
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