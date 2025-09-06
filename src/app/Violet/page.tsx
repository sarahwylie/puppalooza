const violets = [
    {
        "id": 1,
        "title": "Just starting to walk",
        "pic": "1MXeTy1AWvswV3iYd4Q45LjIJg7CrjBW6",
        "date": "31 July 2025"
    },
    {
        "id": 2,
        "title": "Violet is turning violet",
        "pic": "1wGdYas9IVNiHpI_Hz88BfLKwpyxhTyD4",
        "date": "17 July 2025"
    },
    {
        "id": 3,
        "title": "Tiny purple beak",
        "pic": "1QW3kQzFw1_ZC7dptDfnaE24jC69fbmY3",
        "date": "17 July 2025"
    },
    {
        "id": 4,
        "title": "Unbearably cute",
        "pic": "1ZWYKMZ65YhZI58CU64Fx9HqjfWO12mzq",
        "date": "16 August 2025"
    },
    {
        "id": 5,
        "title": "Strike a pose",
        "pic": "1pflAN4mJgcrqdo7_YOt0ElAgceovb1i7",
        "date": "16 August 2025"
    },
        {
        "id": 6,
        "title": "Dog Broken",
        "pic": "1i_WvWk3hXzhvDOapZFb5ccfi0pgF_DJf",
        "date": "31 August 2025"
    }
];
export default function Violet() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        <span className="line-through">Hippo</span>  Xena 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Xena (formerly Violet) has found her forever family!
                        {/* Violet&apos;s name comes from the color she developed on her beak and paws as the white started to fade from her coat. She was born nearly pure white, but at six weeks old she is nearly all black! */}
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* Violet is a crowd favorite - she is unbearably cute and has a very sweet, gentle personality. She is also very adventurous and loves to explore. Once she has conquered something, she has no fear, but she prefers to have friends help her through new experiences. */}
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {violets.map((violet) => (
                        <div key={violet.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={`https://drive.google.com/thumbnail?id=${violet.pic}`}
                                    alt={violet.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {violet.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {violet.date}
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