import Image from 'next/image';

const splinters = [
        {
                "id": 1,
                "title": "Big Stretch",
                "pic": "1R4cDFn49vAG_npNugtZ-cYRj7fCj9Ik9",
                "date": "23 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 2,
                "title": "Smiley guy",
                "pic": "1LMje0COjny87QxYOIC8NY7N4Gg3kVmZH",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 3,
                "title": "Laughs",
                "pic": "141SU1mCzjTbScqnoyZyNKb5oWf7n4XIb",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "Very serious",
                "pic": "1aoPVnhWljSuZBWvTMiiFubRvl19Z_Wtv",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 5,
                "title": "Hot Dog",
                "pic": "1ynGp1ydZu5IgMVWVDrzU318dJqejNkmY",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        // {
        //         "id": 6,
        //         "title": "Superhero Dreams",
        //         "pic": "1WkULgs94ylnx9ZGUG3_Abot8XapLlYNn",
        //         "date": "23 August 2025",
        //         "width": 400,
        //         "height": 300,
        // },
        {
                "id": 7,
                "title": "Wanna Play?",
                "pic": "1VpH7KGziM9POLKBLXAtrEDeA5XC2Jx3y",
                "date": "27 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 8,
                "title": "Who, Me?",
                "pic": "17feH-FhqwImznqwFFKZR593jSjmIa5Yh",
                "date": "26 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 9,
                "title": "Just doing the Thriller dance",
                "pic": "1eKGA9AEmyZWv4UX1LxVCzb_oLUwUj_un",
                "date": "29 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 10,
                "title": "Partied too hard",
                "pic": "1yN2WjyTbi9aNOKXP8hAXj_k7hKRQabvz",
                "date": "4 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 11,
                "title": "Going out is hard for a pup!",
                "pic": "1pykknZmnOfzVuVSL0L5nbTeog7SZLELn",
                "date": "5 September 2025",
                "width": 400,
                "height": 300,
        }
];
export default function Splinter() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                Splinter
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Splinter has been going through a bit of an awkward growth phase, and her fuzzy coat has left her looking like the quintessential 90s bad kid. Don&apos;t let that fool you, though, as Splinter is contemplative and sweet.
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Splinter is quickly becoming my favorite. With her soft and snuggly fur, inquisitive eyes, and a willingness to request belly rubs, she is the perfect companion for just about anything.
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {splinters.map((splinter) => (
                                                <div key={splinter.id} className="rounded-xl p-2 m-2">
                                                        <span>
                                                                <Image
                                                                        src={`https://drive.google.com/thumbnail?id=${splinter.pic}`}
                                                                        alt={splinter.title}
                                                                        width={splinter.width}
                                                                        height={splinter.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {splinter.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {splinter.date}
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