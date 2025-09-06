import Image from 'next/image';

const hippos = [
    {
        "id": 1,
        "title": "Eyes on You",
        "pic": "1i9rQ1o0bM5qLQBcSvDQypAdwTeHrHUj-",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 2,
        "title": "Blep",
        "pic": "1A6sYl0H4Lfstz5ni35WQS-2PBDvobWQY",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
        },
    {
        "id": 3,
        "title": "Nose-Picking",
        "pic": "1fNqHAIicsXzssWp5M1dV6zMvhBvW1M7X",
        "date": "16 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Some Cuddles",
        "pic": "1hltA_Sd-OGfvHXWvMiDOrn36BWH61t6d",
        "date": "4 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 5,
        "title": "Sleepy Baby",
        "pic": "1EmdloX-Hpb7l__obVIdrGQtBnvN0yXFy",
        "date": "31 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 6,
        "title": "Softest Nose",
        "pic": "16cHFwO0Zjq2jbnlQcjW6VuMv7_bXp4Xp",
        "date": "30 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 7,
        "title": "Piercing Eyes",
        "pic": "1VaJ2hMxUtw_bq0i-n-BJ2y8wzT3ajoUD",
        "date": "30 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 8,
        "title": "So cool she Dabs in her sleep",
        "pic": "1NtBKlpoJxLS6CDR-tiG_kx5O9EHVsfSv",
        "date": "29 August 2025",
        "width": 400,
        "height": 300,
    },
];
export default function Hippo() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        <span className="line-through">Hippo</span>  Eva
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Eva (formerly Hippo) has found her forever family!
                        {/* Hippo is always the first to greet humans and happy to snuggle hard. She loves playing, puppy-piles at naptime, and she happily jumps into trouble (or a flowerpot) before thinking through the consequences.  */}
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* Hippo is ready to work hard and play hard, so she is your girl if you embrace a mullett mentality. */}
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {hippos.map((hippo) => (
                        <div key={hippo.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={`https://drive.google.com/thumbnail?id=${hippo.pic}`}
                                    alt={hippo.title}
                                    width={hippo.width}
                                    height={hippo.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {hippo.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {hippo.date}
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