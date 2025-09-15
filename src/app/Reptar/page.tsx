import Image from 'next/image';

const reptars = [
    {
        "id": 1,
        "title": "Gorgeous",
        "pic": "1abjlrxn3DPHgN_C2YneBApzmHXCIoxNi",
        "date": "30 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Gets by with a little help from her friends",
        "pic": "1-00jhRWumKJChAx0ylcK_JFeLcAfhy9c",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Perfect little face",
        "pic": "1f4RwZ7Vz0NiJNNGawglRW0BEQ7Sv1CRN",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Show stance",
        "pic": "1ERRLQiZfCZMHvUJ0d_tJAgKm4IZDd3VG",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Sleepy Baby",
        "pic": "1hg5ZUy7eMBEP62z0C7KL9QMBy6wamilf",
        "date": "27 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Fierce",
        "pic": "1p8wQE_a29PzdbqtRpi-317dkgN14XOHK",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 7,
        "title": "How dare you disturb naptime",
        "pic": "1FTjPQ8u3pjllNo4o2_Tb1ycnC8uWxPi2",
        "date": "30 August 2025",
        "width": 400,
        "height": 300,
    }
];
export default function Reptar() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Reptar 
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Reptar has found her forever family!
                        {/* Reptar is already breaking hearts everywhere. After a couple of meet and greets, she has been a popular pick for all! */}
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* Sweet, curious, colorful, and stunningly gorgeous, Reptar would make a perfect addition to any home. */}
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {reptars.map((reptar) => (
                        <div key={reptar.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={`https://drive.google.com/thumbnail?id=${reptar.pic}`}
                                    alt={reptar.title}
                                    width={reptar.width}
                                    height={reptar.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {reptar.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {reptar.date}
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