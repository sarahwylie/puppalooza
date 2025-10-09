import Image from 'next/image';

const violets = [
    {
        "id": 1,
        "title": "Just starting to walk",
        "pic": "AP1GczNzzmZ-R_MGx0zCTSils_TFtY_ctKTzDk-FmDUcl5lt3eRmF_bMIdp2FXDVeAHh48OXr5U1YG6r2ZSR3vJ9Ne1va9l5qSVaFkPuVTqVj2AA5FH3gA=w2400",
        "date": "31 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Violet is turning violet",
        "pic": "AP1GczMRm5RC7j3ulTnIeRrOuzQPSNtxB7NN9ki3Kw56tcZOoMgUFAgVg5OseTpRPLeYK-YHn-LiFdyiSd2HqXDDWb_R1WBuu7oRh1R0hNjFAUMxT68YtQ=w2400",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Tiny purple beak",
        "pic": "AP1GczPETwN8zOcvprlYsqpEYUtZ1vy5dYz5-hN9FbcfMcNeifFidU6hYZaBsDxBqRGpNXYI5VV_rnL6PLABmiuOmbuk-0asS2EW48HcyQ9agxslA-843A=w2400",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Unbearably cute",
        "pic": "AP1GczM7GJNqUViPKenbGyVim5WUH-Pdo8RD-QbUGYGM45Vt1GFTtbE0Ug6QuqRhZwqKc_BH9SyAIWsGLfENm3eTkYQEcBIg8CF_kK0SZETQgS4A-4s23w=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Strike a pose",
        "pic": "AP1GczOVlXd9PuZwwFEKGxUF9nrx1DlIM3NjMNhrq_lSQ6wM3BXM59DNF5D-N5nNPGugfs2tLIzgjvdwE0p1hROicdUR7Nu5CdXvu2fMmoiRuca-NhvDwg=w2400",
        "date": "16 August 2025",
        "width": 400,
        "height": 300,
    },
        {
        "id": 6,
        "title": "Dog Broken",
        "pic": "AP1GczNwS0R2L8v8QNJhADJx5eyZ7X-lHkZYQ7evCHXdGm6wKLhtMJFbSmH-JVVLRvsw3gs4cI5cix4h1kvfqLiB3c45Yf8XH1QjwXMN8O5rqIvoH1JFgg=w2400",
        "date": "31 August 2025",
        "width": 400,
        "height": 300,
    }
];
export default function Violet() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        <span className="line-through">Violet</span>  Xena 
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
                                <Image
                                    src={`https://lh3.googleusercontent.com/pw/${violet.pic}`}
                                    alt={violet.title}
                                    width={violet.width}
                                    height={violet.height}
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