import Image from 'next/image';

const possums = [
        {
                "id": 1,
                "title": "One day old",
                "pic": "1WJQ_pR5e8taer6uRacfn900tlBH6OVhW",
                "date": "13 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 2,
                "title": "Keeping an eye on you",
                "pic": "1u-oNKhuOjDrAggr9Smr2B_t9T4dEpZNp",
                "date": "31 July 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 3,
                "title": "Sleepy pup",
                "pic": "1vXCPdmavNdMx9qa-WtkiWy-pd932nDpV",
                "date": "30 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "Side-eye",
                "pic": "1Dm8bW3wBUhK9KomRt_S0tCUXHRrVq1Os",
                "date": "31 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 5,
                "title": "Soulful",
                "pic": "1RhLmHdnGC0IJu6-Et_BoH3N-zPMDZ3a1",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 6,
                "title": "Dirty beak",
                "pic": "19ZBTcKl1odj1WM5Fc0jiK077EGBAtD2r",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 7,
                "title": "Oh, didn't see you there",
                "pic": "1-gi3KsntImYkEUW1dLNh5huv26oc9gWi",
                "date": "16 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 8,
                "title": "Ready to please",
                "pic": "16gIFKeUrMwLm3Q7teTTGd4xNA39qdjCu",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 9,
                "title": "How can you resist?",
                "pic": "1sA3Rp73KgAvOGkcJrYNIwdBMv0Nqif4v",
                "date": "16 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 10,
                "title": "On the move",
                "pic": "1ht-EwR0p53flXRao-BP3s2mZETSfu64J",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 11,
                "title": "This is serious",
                "pic": "1Qu3KKLS6gbtvQw8cWEZAxOVf9UzwjKjp",
                "date": "30 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 12,
                "title": "Let's Play Ball",
                "pic": "1VDSTGfMVtzqLgByeYawlC0EpjBeciAIA",
                "date": "27 August 2025",
                "width": 400,
                "height": 300,
        }
];
export default function Possum() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                Possum
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Possum makes an immediate connection and gets excited to play or cuddle. She looks like a tiny husky, and her silver fur is stunning.
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Possum is up for anything, and she is happiest when she is with her people or her pups. How can you resist that mask?
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {possums.map((possum) => (
                                                <div key={possum.id} className="rounded-xl p-2 m-2">
                                                        <span>
                                                                <Image
                                                                        src={`https://drive.google.com/thumbnail?id=${possum.pic}`}
                                                                        alt={possum.title}
                                                                        width={possum.width}
                                                                        height={possum.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {possum.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {possum.date}
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