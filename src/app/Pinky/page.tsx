const pinkys = [
    {
        "id": 1,
        "title": "Laughs",
        "pic": "1OPefXfLtj_ZBU8HjyABabDJQhjrbyHwn",
        "date": "16 August 2025"
    },
    {
        "id": 2,
        "title": "Heh",
        "pic": "1_rTKVrVfCG_9JgYww7hR0qyzq97OzMKP",
        "date": "16 August 2025"
    },
    {
        "id": 3,
        "title": "Anybody want to party?",
        "pic": "1JeKbCzHGMb7SSdOZvzJ8LnuywpAgEdIA",
        "date": "16 August 2025"
    },
    {
        "id": 4,
        "title": "Asleep on the scale",
        "pic": "1p9-4dW8iKP0dA_bpGp3U2Nc35XjJxUVZ",
        "date": "29 July 2025"
    },
    {
        "id": 5,
        "title": "Peeking",
        "pic": "1L3mE2lATzUTJSvV8_1T22eH_6jotlJ5X",
        "date": "30 July 2025"
    },
    {
        "id": 6,
        "title": "Hello World",
        "pic": "1TkdLzbOeufsunWJbYBn0Y1EzTo7AHfnW",
        "date": "30 July 2025"
    },
    {
        "id": 7,
        "title": "Kisses",
        "pic": "1YLe3-hzGXw4yGznGGJ2AcfU0QWpzQhXw",
        "date": "28 August 2025"
    },
    {
        "id": 8,
        "title": "Found a new chew toy",
        "pic": "1V8_9meVdGafVCjY-cgRV1XBSG0yk7BWo",
        "date": "28 August 2025"
    },
    {
        "id": 9,
        "title": "Pure love",
        "pic": "15Ch_da6ZHajK0DJ8wjRMDpiX9aYUX9tA",
        "date": "30 August 2025"
    },
    {
        "id": 10,
        "title": "Besties",
        "pic": "1CadkMc_Im6Kj248DQHHAgbELhmOL1022",
        "date": "30 August 2025"
    },
    {
        "id": 11,
        "title": "Posing for the camera",
        "pic": "1jPlhVtTUsmsNvaktoW4Abo_wtW16ZhI9",
        "date": "30 August 2025"
    },
    {
        "id": 12,
        "title": "Two peas in a pod",
        "pic": "1mfsOQiexvgau1mtXLKPEiXsWahrN_KW6",
        "date": "30 August 2025"
    },
];
export default function Pinky() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Pinky 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Pinky, née Lab Rat, was born fully white with a long body, a couple black paint splotches on her head, bright pink ears, and a bright pink nose. As she has grown, Pinky&apos;s ears and nose have caught up with her body, and now she looks like a stuffed animal.
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        You can often find Pinky staring at you intently while her siblings sleep. If this doesn&apos;t unsettle you, she is your girl.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {pinkys.map((pinky) => (
                        <div key={pinky.id} className="rounded-xl p-2 m-2">
                            <span>
                                <img
                                    src={`https://drive.google.com/thumbnail?id=${pinky.pic}`}
                                    alt={pinky.title}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {pinky.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {pinky.date}
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