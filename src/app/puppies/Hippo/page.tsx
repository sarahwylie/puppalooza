import Image from 'next/image';

const hippos = [
    {
        "id": 1,
        "title": "Eyes on You",
        "pic": "AP1GczOPBzD00dh-oYGrNSDhrxXL0YLEsMHI-W8G3eqVX7Qv82fUtfhzHyZ9yFCHFiMzMwsfg9CW-hd9MrwIpgcEhk4plrgY072-HA_VKKzQRBh3I62hrQ=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 2,
        "title": "Blep",
        "pic": "AP1GczMa_7jScBZo7hgHIoI9rr02IF7QrU-HA2MBXifAPF32BX0K-uwqspdkoNb0sppQLMtitQJH3SVV8AxYhQYZK_bsFp5paLsmXoUu3eJeGU6qcTWNIA=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
        },
    {
        "id": 3,
        "title": "Nose-Picking",
        "pic": "AP1GczP9t8I4ErTvePms4PkyhNG5S7rE8ugcLP8IP-HlS4wTund8pRD92doNRSXZfIwgPPZRjqaltI2m9NFSnOtnZweSb85n-V5VHU2frkPFGn0nYtbEYw=w2400",
        "date": "16 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Some Cuddles",
        "pic": "AP1GczN09k8avEP1aW1pJVoSisZNg1wcwui0mSS9Ja7c53MjUA0QMEbOzrkZrX11z0wOARESX8e1HQ49M081WJ-T81rOcZF6Fw9dIcJwaUPO2fhw6ZUhBw=w2400",
        "date": "4 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 5,
        "title": "Sleepy Baby",
        "pic": "AP1GczNYuXeSRKFA2FaqZo9jRJE_HneIEXB0R8Ikt1UT6cFtJlsKWDeSiLCwtfcT3JNyN2uZzx_cDtjqcRwzbFFAWe-v6g6WUvmAXQVk8YoxFWDNM6qoIg=w2400",
        "date": "31 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 6,
        "title": "Softest Nose",
        "pic": "AP1GczODQZHG2Z845kN4HJyiYBskFvzksgOI7JLCd4VdA8Lfye29Mla2a0uwBZo2aFZJT8N44o06larSbZ7h7oS2T5i__0yiNDBrGKY7ggp2FMlebgOU1w=w2400",
        "date": "30 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 7,
        "title": "Piercing Eyes",
        "pic": "AP1GczOz-RUaXQCnAM3wIyXx7I37pUdfe7e40ANFYEr_T02HvcG0qYHLSJxPn0Z81pqI2q9loLkLJbw4jDmA4nM-kUt6x52mDawoUKfYiAmJdhO4OlFMeA=w2400",
        "date": "30 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 8,
        "title": "So cool she Dabs in her sleep",
        "pic": "AP1GczPSpDWDESaAxHRVLhA-cdkiStXHdjNfwsaIUFoxjKOAz-UNjFbcg7YHF4LRgkr3QwsLZS3wZXDfK-IRuYft2RFc7Z1EsrDAkYadNM27GebdX5X98g=w2400",
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
                                    src={`https://lh3.googleusercontent.com/pw/${hippo.pic}`}
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