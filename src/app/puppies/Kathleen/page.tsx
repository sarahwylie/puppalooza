import Image from 'next/image';

const kathleens = [
        {
                "id": 1,
                "title": "Sleepy",
                "pic": "AP1GczOMiicMXpDEw-eIS9ciDoNLuz2JpywMWZWjWMcYWZ-bOqC-J6odhmNUls1JF1vFj7enRtlx3EEXoUxzTtyAQ4jeAQLaIbInhFFvEoCOHdQj8oJhjNGuq9tLUBA-nBSxzNAiNfbjDaau_wKkMrQTzQo=w602-h803-s-no-gm?authuser=0",
                "date": "7 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 2,
                "title": "Yawns",
                "pic": "AP1GczPGCMJ3lKIka0dtKS023QZdsaEdJ_YxubQuBKRPncCL2bjEmiFkJPDyRorlPXRN8dzinItG6hoUB1YAvn4CzbYmk3KrUPCg6QX3oeFHWwKxuVCtX1k3kVLnVHc_Yf-IB1rGbzn3iQJw7O4PPHIbMkw=w814-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 3,
                "title": "Thoughtful",
                "pic": "AP1GczOADOEwVszl0WHjl21Ou0f5bptL7iZwNKxO7Z5DscBGGH3UKEfpsu-27v6YCXFKNTygV-8NZ3aRkAqUvPQBdoYBYpAz3Ru7C2j_jbOx-Rh_M6v8qTCUMVk1Vh4kKsMBzDcsaKoJYcx_l9WQq6Q-W3I=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "With Uncle Rusty",
                "pic": "AP1GczO-Gqx0zbaf0QAAFMuBeLEqbkXY3Q1H_Lw1L_XRnjFfsXS04gFPnrrAQvQVkfpuFZKilY8Bm7A7tohdiRipv44OC-VRbmkQSwOlly5jknkUAUyN6bgwW9O_N55XOVnYFeTPItebCUZgajWP0-7suhY=w1071-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 5,
                "title": "Some Light Construction",
                "pic": "AP1GczMANWPkTd0gtq0o6xrbjCjjmPS-7vUzx6Ahlply19sRWeGuPv9nBQHJzoTSZ572ajlcH3I4j5vdJLKclzCb25vJTCMiWd8xot56S6yQc72uWBLTqYFjwgDIU_HYOQh_I5rUX09hMrYcbJZ-XxDcE_s=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 6,
                "title": "2.5 weeks old",
                "pic": "AP1GczP84ZKY2iYTeBW3hnUTnoc7kBAFO0UkfDDttaCW-gCe-NcVmKCFgKk4SNniab59PJoiYK0cOxNVSzoR6vhVxp78PhQ7oL9dDKP7Akc3YI3ArNM8M9VmWtRFUKIaJ_MnKYsZYEDx1rnw5c7Cikrth5c=w602-h803-s-no-gm?authuser=0",
                "date": "30 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 7,
                "title": "Speckled Nose",
                "pic": "AP1GczMEqAC_G0cmTOO4Yl7dI1noN7YdQ0s6N5aT4BJFVaCQHjtmfYWBRWUel_F8oSSc48RGecVnryc0BNePi1U8ZCpZG4g_puaAywzOWZdU_xWnpzgAMTid6aRIHW1uib5msfmuQZny1jLWa2nsA9HS6cw=w602-h803-s-no-gm?authuser=0",
                "date": "17 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 8,
                "title": "Cutie Patootie",
                "pic": "AP1GczPNsk0vJCCB4GGwcm8oE9owM4a-jKxEUUF3btTgi9UuqOiajTbiI3GEWNUf7eSMxb0DiocZS0SPj0dHmgJaGY0d7FEIO13qCKRDq_gWwEmLDN1w8q9eFYCOHmnn3XzgwSeWU9XsQhL-je6D9F9bVrA=w1071-h803-s-no-gm?authuser=0",
                "date": "26 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 9,
                "title": "Kisses with Rusty",
                "pic": "AP1GczMXSNCEtS-nt-1afx3hHntWtRHBgUHAShj0wPyn6sa0RTXcmLTJOYaqGl2g7HqUNDbKQ8So1pGQYnzNSObYkRHWcTBc9S4vZprt0kLaDo1crnFV3_i-jSKTHotHuKb4Zigmpx5YE5oBvQcg11s9D-8=w602-h803-s-no-gm?authuser=0",
                "date": "28 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 10,
                "title": "Intense",
                "pic": "AP1GczOc83LpuMXThuDJsNG2MJHqQQA9ShK6kIzoHlG9mJ2iFE2KaORcUsCF417uI0rzLfilfeVkfb1JAVrmmakRvMTgDtpXQQlRpg9HImbXUBisKC-fELK_6gFxrnK-WbZXgc4xKJclftaRttn3vFYFosU=w602-h803-s-no-gm?authuser=0",
                "date": "31 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 11,
                "title": "So happy!",
                "pic": "AP1GczPKSUrYCRJuf4FyexECRARhjVVwp-Xg0QpzpWLs3A45m3fGLqjWEMIafePcbxnvoEJ3frNSKaj2QCa9S71BZGyExsUZHSDH5KGK96MtyZXrIEUBTV_1FjLMwBclGmUUDQOmpxwVzgVsYFUmQt8MO5U=w602-h803-s-no-gm?authuser=0",
                "date": "1 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 12,
                "title": "Curious",
                "pic": "AP1GczNNlHcsHe5_QemzMSIJwQZaeKq1zBV219VbtbAW_O62spsYk2oOh9RYLRR-yx_Xx-_6KgEGyw94j-Z5YbwgwSrweNpAT4RQgdiZBN1i3yA3Ngocyw8cWddHO8OTEE30ZeBfrMcsseyWdrfB-WHtE2w=w602-h803-s-no-gm?authuser=0",
                "date": "31 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 13,
                "title": "Happy Frog",
                "pic": "AP1GczO1_1FXORHGAVl9eiCTcp_I79uYft04W85KD6ssI_4WvRvHbq7uDeE06WZCa3Kh6SjQEaiBhGwofIq3oubcDghyOSMTJEGEiBDSKnguT9Zp11Nc02fklzHJBvN-asKiQFUZ5ACfpS9mCkK1WRUvAmE=w602-h803-s-no-gm?authuser=0",
                "date": "5 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 14,
                "title": "How can you resist this face?",
                "pic": "AP1GczOCJ1gdggY9tzpOLChWH6tg7-gwPp8dIfwMmhBI_Uq8my2e6CbIyhgtEPDZrfwZjU5zaWW1plfO26IixYiybhqILrsP2Im1wI2yidgvMDxs5h6bogVuoGGBwMHcjs8KpowdFhXUcG1UzPxNq_p9iag=w1071-h803-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 15,
                "title": "Wait, did you say treats?!",
                "pic": "AP1GczOCJ1gdggY9tzpOLChWH6tg7-gwPp8dIfwMmhBI_Uq8my2e6CbIyhgtEPDZrfwZjU5zaWW1plfO26IixYiybhqILrsP2Im1wI2yidgvMDxs5h6bogVuoGGBwMHcjs8KpowdFhXUcG1UzPxNq_p9iag=w1071-h803-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 16,
                "title": "Ready to play!",
                "pic": "AP1GczMOuCjyaeRY3Xr-eKYQFEi07iWIk45_Wy-WgVCDHVt_cNEFlIIXxuR7vb-fNrBRKuK85oW4cx18jKfZrAW1BpfOWQZv3Xqjlb0xjn1darYog6u6ie_s_M-E0cI7o897MEjcKqFZjnDeC-e9r9fw5fg=w602-h803-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 300,
                "height": 400,
        }
];
export default function Kathleen() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                Kathleen
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Kathleen is a feisty pup with no fear. She loves cuddles, being the center of attention, and bossing around bigger dogs. When not taking control of a situation, Kathleen is usually playing hard. Her boss-babe-party-girl attitude, combined with the bikini top on her back, all combine to explain the origin of her name: her namesake and hero Kathleen Hanna.
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Kathleen loves having buddies, so she would do best in a home with other animals.
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {kathleens.map((kathleen) => (
                                                <div key={kathleen.id} className="rounded-xl p-2 m-2">
                                                        <span className="justify-center items-center">
                                                                <Image
                                                                        src={`https://lh3.googleusercontent.com/pw/${kathleen.pic}`}
                                                                        alt={kathleen.title}
                                                                        width={kathleen.width}
                                                                        height={kathleen.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {kathleen.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {kathleen.date}
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