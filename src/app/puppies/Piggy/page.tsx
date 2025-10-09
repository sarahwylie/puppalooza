import Image from 'next/image';

const piggys = [
        {
                "id": 1,
                "title": "Sits",
                "pic": "AP1GczMecnlGy27FICE6fq4psD-hjS9Qf8HyUVvLyvmjr-aDT7_WbVKxhML4UypNRD8Q_07ec06gwrAKE1DoR_pTIU2HwxkgsjDJggMDaJFYqkxzPPLD6g=w2400",
                "date": "16 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 2,
                "title": "Clean cutie",
                "pic": "AP1GczOrL-d4wSAUeOxui9OcW6EtBu5BYgpz2cgd57XHsQrHQGor_WoOk_k4SNgm1UvvMUxcqITdNHDajjHy92W78CAvuSrftGCKNYjZ352BMrNvPJhbsQ=w2400",
                "date": "22 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 3,
                "title": "Peanut butter bath",
                "pic": "AP1GczMf8sY5BQQYDqhOk0SiHA_EpUq1czyC_2Bhv2jTDHDgF4ZquKs51FKgJBg2A8vjbDrdZejrpZbRXmHbidBmcNU0BMUW6yy-2XEYLc9LcK9pn-_RIQ=w2400",
                "date": "22 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "Bath 'stache",
                "pic": "AP1GczOIeu7uIc1ZUGi54YOjJmMU2f0q6-oMMEgXNQRo-TYuSAnP6hvxWJUAHPh4W5xH6xB-4tkLWM3J_QENb1_mffikDAyJJ-lKQ3Y-9rGEj9dFBQJsIw=w2400",
                "date": "22 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 5,
                "title": "Eats and Sleeps",
                "pic": "AP1GczPcpibqpUcwzDc_jFDwFQL3uC8CudHkbqUfqEbXpYMrW3J6HRg_J2TV-cTy_p913z0IK2u5saql2lWyejpQPDd00bhIBgSE103VjQNBtfEDyOp9zQ=w2400",
                "date": "20 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 6,
                "title": "One day old",
                "pic": "AP1GczPfIgZQqfKl6dU0E86YJu4kAl_Fob2j20DE1D46DQUzt7s-NBoCybkUeVSJhvA2NjWHFIyqgrb6P3cvxxTQz4fgI0ZupQ3YhwS3bTThlSZZ99thfQ=w2400",
                "date": "13 July 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 7,
                "title": "Handsome Guy",
                "pic": "AP1GczMZsmSlEknWS4bvlqtNEkADgHpw2pDWptx7nS_tkfB2mkcYJdAdepZXYYIcYOF3ReHAYsnC7bQ-efCvVOrxgoADImYl_DQttUQTHyJCWOyJ2Xul4g=w2400",
                "date": "31 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 8,
                "title": "A tiny piglet",
                "pic": "AP1GczPcVf6S5rh8ZrrDz7wjrU_QmcpwXpzdOGM2Im4sr88LfLt8jTYsaR5Ni1Rp5zNLIiKky7_-00nvnYJkKJZinyFsqhU2Pfkkzehuh42F54Y-DApmmw=w2400",
                "date": "17 July 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 9,
                "title": "Dirty work",
                "pic": "AP1GczP6nh8iVa3p4BG1Y5sV4OuEOh1QUYMI611WA199m8duWcZjqmDIevvP6V1BxxM5Wzui8lycBJA90CPkSjnEBtakRAs-JM0AYJpxKsqlc398U8SqmA=w2400",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 10,
                "title": "What?",
                "pic": "AP1GczOEAYl34ytThth2uHFQMbKFKLNNmLkZXnJLZmIpRjQBqK69JFEIqkfHPru5f0MIe2U5L9c9OM5MMtt6PXa0nClU0PCbYtq-CgL7ka-9D2SP6NF6uA=w2400",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 11,
                "title": "Curious Piggy",
                "pic": "AP1GczOEAYl34ytThth2uHFQMbKFKLNNmLkZXnJLZmIpRjQBqK69JFEIqkfHPru5f0MIe2U5L9c9OM5MMtt6PXa0nClU0PCbYtq-CgL7ka-9D2SP6NF6uA=w2400",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        }
];
export default function Piggy() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                Piggy
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Piggy has found his forever family!
                                                {/* Piggy&apos;s eyes give away his chill attitude. Piggy is just happy to be here. */}
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                {/* No matter the craziness happening around him, Piggy can nap or hang. He is happy to go with the flow in any situation, making him the ideal companion for any household. */}
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {piggys.map((piggy) => (
                                                <div key={piggy.id} className="rounded-xl p-2 m-2">
                                                        <span>
                                                                <Image
                                                                        src={`https://lh3.googleusercontent.com/pw/${piggy.pic}`}
                                                                        alt={piggy.title}
                                                                        width={piggy.width}
                                                                        height={piggy.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {piggy.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {piggy.date}
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