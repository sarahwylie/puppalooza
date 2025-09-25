import Image from "next/image";

const pupburries = [
    {
        "id": 1,
        "title": "First vet visit",
        "pic": "AP1GczOGt-T_O6jA5wM5EqlG-lUH6Or6RMxfA5deX4JoZZ4g6jfCzPuUq1DCA8ddVnmBO_QrE-gERZsuJUm6kmHFsA6sIpcuTBqvDOgJ5oz-j5i1SdswUad4TGe8zaFDiFexe23EhGwgorMoKCxLiM6Vb-4=w1071-h803-s-no-gm?authuser=0",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Locked and Loaded",
        "pic": "AP1GczMOtGHnZK5Q7dSgdpAr0SjvP42fn_Dim4Z0Z_bLoVg2BMrs3EUchBVCLC4jIajIJ05c4weF8ph5SvpYuTue5GWGrNeCYhbAJ2Iq3zmZiJhPIQUN-YtDTQfZZl97y5kCY6B4tdEw4soT4FkMFf-yvdI=w1071-h803-s-no-gm?authuser=0",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 3,
        "title": "Vetscursion",
        "pic": "AP1GczOpAKrlcNif28ndFqADK9L6yoX07Jk-ii7xq8f3y2ChyFFMaaaDiSd1CB13p3hMzrg7hbgYpYP06Unelph4ZcGJQHfYWmRynh3zY856DRIma2T0BXJGtEvf-uwfg0Twqs_A6wdTCGJNTuizVaa1kPE=w1071-h803-s-no-gm?authuser=0",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Reptar's first trip to the park",
        "pic": "AP1GczOIR9Flk6KZvMLsx2AJ06OBEvNINIzQfRhhR9nvvBBNhd_FJI9yX9UF6lHw7D4Pi7ebkexEdRkxESQQr7T2pIA3rUyH_8q1AQ7tRY_O2HxD2d2EE22jngulZZWHT2AgXV0puKtgbdOEV3wdQOCxE6A=w602-h803-s-no-gm?authuser=0",
        "date": "2 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Reptar supervising playtime at the park",
        "pic": "AP1GczNVm5KeJRGX4_hUzzGLxTfIQnx-jqzpbOeE5mJM-IL9-lfpSCrgU2GwecIgBta0gQWJiVw2N12Rularruu-Tcn--CqrSbBhrp-LZkrJNff_kLS6wUKtymEHZQo05aj7tNJYr6s0JAjk0wBbXEg66_o=w602-h803-s-no-gm?authuser=0",
        "date": "2 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Possum giving side-eye",
        "pic": "AP1GczOTLrmjXebSBwoyhWlWnUBpJCwNJrTDQdaQBkp8ZfdX-S6DJFAP2BygJeay8z1nBs0OpQ1iAfJQXdO5y-PMC7EGweqcBzjemkxq_os3NasfxQU03hBR9fEPHFHiQAfA_AhuiquP_N9HxGc5UkQHMNI=w743-h803-s-no-gm?authuser=0",
        "date": "3 September 2025",
        "width": 400,
        "height": 350,
    },
    {
        "id": 7,
        "title": "Supervising playtime is exhausting",
        "pic": "AP1GczNck8SdZrR29mqN0u1gOJCUbdsp_Fl4Yv5DkccRL0LO0yAHmDWmUNjp9MyBcgUevehm-G0h4Jktc5e5n6TNzMpp9KmEOSmSiXGIGNTTE_li6IxFZJYWsmT0INKkJ-vzdbXE-DplKCCiqbVvc3GdYOw=w1208-h803-s-no-gm?authuser=0",
        "date": "3 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Just keeping an eye on things",
        "pic": "AP1GczMGjA_-Msj-RS6SPZN3OTEQXbc4nftxoQNa-CBy-VGwjteOd-t-Ujkfw5mKD-PbdnoRqm9dsYX6nSXfByM4XL0aPlhmx1X4_B-lxbktofKWmWH09231nmoLeSkPWNn9qN-jY50bFKrHE9V-mFZ8oyM=w620-h803-s-no-gm?authuser=0",
        "date": "4 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 9,
        "title": "Where are we going?",
        "pic": "AP1GczNIpJ-W12_myTVYh8K12v-N2DH3QX2I9VDGq6dZn95wM7rQDG6mFSIAFJdsAGICGS9EOfMMHgbyjeAZnpT1H8o85XpPV7v-kzOZR51U3vKaz2FuU5y6GyEziqpJns2bgSDtgyqJJ03qNMtUULhyCW0=w1071-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 10,
        "title": "For real, where to?",
        "pic": "AP1GczM_AsiLlYKxIcDfEz2Hyy9feSPnpUBlxjfItWnLmQlTyIiU34FHqNuwArEEzKzKajz_echTSCyoPT9uOKV6put-fwu9kPtz2qde7Nzm4c0EfD-Yyhvo4TEa1tyFGDylrQYMem3QwnSYkv-8oT9JtYw=w1071-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 11,
        "title": "Tired",
        "pic": "AP1GczP0mfN5DkH452v2i-bcO357aTn8r0JaM5p36gHsCu76fykfoejW5bHqTjePlG5vYl3sZV9q5ZUWbrwiF_7DkAbOAefzf-AIwUDXaRDrtJrhUO8-VX6XkToDbVhDZx930Y-91ilTgsNBuEu-zMExjQo=w1071-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 12,
        "title": "Too tired",
        "pic": "AP1GczO_v6yxioImh8UxgCnWNYidegSg07M_7xE4KofPRk-liXuB7mbpSibR2gCPgT4b__h6sPcPGXkyh5IJDcYg5EPUvFuXoYw75PVjbq-ahAz9bKMffWliYLBXfTZ8hhEChXKweiQgfNU8jyNnHWK_SD0=w1071-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 13,
        "title": "Three tired",
        "pic": "AP1GczOrkC3l1tmzXcwe_FHgjimqVw8_ulDR2fS7zI5aW5A4tubP-07DFjRwRtm6hi8fq-C7SZJAml2v4IZzMk4-NipcHCH2MLbbDXtNwuPOklOp5wWllxGAIzLodHuIpxkYaN5CyMjdBcyAovHqUvptvJM=w1071-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 14,
        "title": "Too small for the carrier!",
        "pic": "AP1GczMOXkaaZPXm4C8EeEWjwLeFIcpDPefpEOW1Os9BjdDaTvngv_wIWzco5WuI8CFN7t68lvGhtkraHNxpoxhTSobzC9kL4vICV50sBPCuPmmWzQOwH8fr0LTmQ8CQ__hD_yhG-4jOE5l9mcQmV-TC6yE=w561-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 15,
        "title": "So happy to be out!",
        "pic": "AP1GczOiXdRXPYeZza_jIecjXFgjDD6t_tT20SD-jPqTfpNJXJdOvfXFT6Gb8ckHfRUTIEAZazj_yPaJvPYrJxQIgBBu5EeAyJxHCaHJqCoZqTaow9mkhxZCyFpj_jemYC_3U3DofMw6S3RRiC2Jan_7cF8=w658-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 16,
        "title": "Watching You",
        "pic": "AP1GczPWsVm1W5Xe87dqGvG75I6MyvijtaIJqxKPn7GN0TvoW5w5SygCinSqdFigSmUzfva1NWi0MD2P-VbUDCLA0HhOrqYA3tMDkbi6F21TGKnEjv9R1SAQW4GBDZ7mePZOpqOLPDzHWsGXN-00GWLrgnA=w1071-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 17,
        "title": "Game, Point, Match",
        "pic": "AP1GczMEgrH087D6dyZSo2tHVvBM08jhXdmI8WJAmPIjMzc8ZhFOz4BbybmMNpEC8tdq2AdQoKQWhiXRma_iDMmpGM19z4VOmKnXRCgYfadQYXkAKJeHoJhxXZrdzayuUoNTECX9hcJ5fG7uWVntSoIeles=w887-h803-s-no-gm?authuser=0",
        "date": "5 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 18,
        "title": "Chillin, just getting ready to bark",
        "pic": "AP1GczMPoTYgevfJLu1O5_nfb0ehJrvoYQ6eayOI9kmINVIuTHyCrdipgl3dMO7R5h40EMXKEHkf5GrE4Fcm24r_NiGCTiHPaJU3Ovac4RCW0mRwbZmHcMUEzLKMKSQcTKAkRVfikIO1CppJ_6hFmID0nQM=w1023-h803-s-no-gm?authuser=0",
        "date": "6 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 19,
        "title": "Piggy at the Park",
        "pic": "AP1GczPE_OhzGdVh8yY-2YzPftLE5rLsbGETpHT5bXlpRgPakGC9FQ_WKQVr69qaxS4wY6btyGqz6RtdV4H63MNrooFZlz77DoodRX9WLEzU55_ZR_i0MPNf-rRnYedqeMA49Qpc4CX9dwmVoVZ7DblXBtU=w561-h803-s-no-gm?authuser=0",
        "date": "8 September 2025", 
        "width": 300,
        "height": 400,
    },
    {
        "id": 20,
        "title": "Piggy just wants to play",
        "pic": "AP1GczPQQbzIVW_qE2BsHhRLPpAoqWxOnfF3nI1a-vOvTgNiYQfnCyYTxBUOy_dLDizrMi30rWwoBdk7hzDr_zet_5FKggqono7_-eABTGzt0iQt0uZddmDvATZScAI4Sba07CA1_Igg0bXgoLKM2hxeo9E=w602-h803-s-no-gm?authuser=0", 
        "date": "8 September 2025",
        "width": 300,
        "height": 400,
    }
];

export default function Travelin() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        The Travelin&apos; Pupburries
                    </h1>
                    <span>
                        Our first big trip out of the house was to the vet for a checkup and first-round vaccinations.
                    </span>
                    <span>
                        Now that their first round of shots is complete, we are taking them on more adventures! No paws touch the ground outside our property, and they only meet dogs we already know (safety first!).
                    </span>
                </header>

                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">
                    {pupburries.map((pupburry) => (
                        <div key={pupburry.id} className="m-2">
                            <span>
                                <Image
                                    src={`https://lh3.googleusercontent.com/pw/${pupburry.pic}`}
                                    alt={pupburry.title}
                                    width={pupburry.width}
                                    height={pupburry.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {pupburry.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {pupburry.date}
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
