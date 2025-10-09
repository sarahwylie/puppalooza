import Image from 'next/image';

const reptars = [
    {
        "id": 1,
        "title": "Gorgeous",
        "pic": "AP1GczO2pV29e34-9IDcTPIYddxCjuX0UootFGlnGQ2QFHGb-0VtQe9c2CJrigU3mKJvr5mLXURVm4qnrimi8YeB9e8HRS3W4KdfeOa2g12VWmUKVyatmQ=w2400",
        "date": "30 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Gets by with a little help from her friends",
        "pic": "AP1GczP2ohTmlbhKuaPOIrTkiNsm7c6F_-rUVKAGVSxPQvXy0DZcvC-y3k5TtbTFZgOKPLKAa-PEXczRxuQRhtVUeeoNz8Ztatp-gVweOJb3O87o7O0YTg=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Perfect little face",
        "pic": "AP1GczM4YYf0Q4EaS9BeNEdqELkdckzLJj0Rhsmo7Tj95hr0QhK0E1sPEx5wj9HrJF5u6sOwgrJnsjUlyINspnFbxZiGfqq6bYmi9jBZ0sVJz1ALTXOyEg=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Show stance",
        "pic": "AP1GczNrBSkgt6LmxCzKiwrJh32A5yNDOY8Qwux49yESE0mSkHTJNit2Z4Lh6dV0nA4ktiCJuNHsvuKSr8ScxB7a-C1Yj2SGWaYzW3YpT6NvsFVb1UhZNg=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Covergirl",
        "pic": "AP1GczOkXlEfigA6gV7I0zqBWpdsfy9Uyn-hnwXZB1y2KnCnkLRBrgWlbAwuxBrnWI5YpxkG6xnhKYg6SadNXmoB2zmQLUnbG7TAFjS_BERRHKgUn-nI9w=w2400",
        "date": "27 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Fierce",
        "pic": "AP1GczOHJCsmeinszMv4qIdiCzMdm9b9scOg676wMNGTdBV68qU0EeVWqEhYW3yU9q1nL5l4TXS73imKIlbsrqEi_gVLnjgtt4IitxA7ocnMUpHJE4k0tw=w2400",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 7,
        "title": "How dare you disturb naptime",
        "pic": "AP1GczM2lBNm3ak6rtZz-IrQobmpHiaGNGEMSejGXztitc2QrJHmNQHvZY2Do3FeOf3DZXlRatD5nhGxX5GSPGSQW48dzPPpYGG_NKjCxnfH8Y3JNtVCTQ=w2400",
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
                                    src={`https://lh3.googleusercontent.com/pw/${reptar.pic}`}
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