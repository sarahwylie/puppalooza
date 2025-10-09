import Image from 'next/image';

const otters = [
    {
        "id": 1,
        "title": "One day old",
        "pic": "AP1GczP5DvOFdJwKSd9nr7qgGJODHNRtlCIf_Wz-CcNezW7_i4er6As_XvGHmEuAuZUVUQa02R2ZzugaE3Kh6meXuYHh8ew-IxKczArZwzFX-MFsWMxX34T04PSXPPTB8hSKb3DuY_NjjmvDNLwaQiRFZUM=w635-h803-s-no-gm?authuser=0",
        "date": "13 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 2,
        "title": "Big guy",
        "pic": "AP1GczOjrhiAP_NkNy_IoJ8di2V1QfoOfUIRdt6T0gh_W5yBKHycwSDaRBbuejVwx_fxfqIUCqbq9YuBu_Flj1rxYrQT_AACvtBpfxyF2AKzzVtfRoBrbQ=w2400",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Tiny ball of Otter",
        "pic": "AP1GczN3bVN7cfgDCfdJs9WewS45y2jgnzu0x2BYAQOhpN5pJNTyR7nwl1wIkEX8X4iGGFgoQ0KhqG-moCGCeSgf9PlQt7Sskm158SmliwiWEvV4BskBbA=w2400",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Wrinkly Beak",
        "pic": "AP1GczOT_xWCDqaotTy7svl6wOZN8dg_d1nyXmlJRM0bvQaeKr0_KG7TUOeLERVBS2Ql_I_elftg99Qq8wiMuGFs1BXlAK_WPY13L7MPOsBysumxJOMoUw=w2400",
        "date": "17 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "So happy cuddling with his stuffy",
        "pic": "AP1GczPX3W_qLh7WF6JiGKSOA3Ol_k9MrhoPafUrqN6mlz9mjNwESj_Dz8g8-fmhWAxlo7I_jvhkMCPSVcQR6vuFa4271DnCpmSzew8LTKYoKJkYgxNNTvLn8wNA9k7HnoApPJXRDMhzD17VkCNVtcdiJjs=w602-h803-s-no-gm?authuser=0",
        "date": "29 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Straight into the camera",
        "pic": "AP1GczPKSIwgBgBFvmSIkqLW3rCDdhNS__4kdOhsh3pYDihFLaZ0D5z20bqztR1HcPJDKp2eGtuOGvSGx1ijsoa-TqVOac2x4R1RkkI0uyBX0P7sM468EA=w2400",
        "date": "27 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 7,
        "title": "Snuggling",
        "pic": "AP1GczOd1wI5qvRw73CvXqi2XsfvyJlm-jVnramkKDiIR17LjSs99Y3S2k0vMDfzYGrcnkRxRxpLKQPFhEtMTMovLtx23WJHVBwglT6XGO0pcZrUMFEGXNHtWrUeUMN_PF8bB2eBICgWZCcQGSRnM142iJ8=w1166-h803-s-no-gm?authuser=0",
        "date": "1 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Who me?",
        "pic": "AP1GczPzCf_zlq7VR1FinVg-hCSgh_JnbWgeLJV1ThdSg57N92908IVBHFsXNO0-zBrgcPh4RfUJYfqjVoW4Hehp3lkCwuoxjHlRxNXinM7XqHe7EYhagg=w2400",
        "date": "23 August 2025",
        "width": 400,
        "height": 300,
    },
];
export default function Otter() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Otter
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Otter has found his forever family!
                        {/* One of only two boys in the litter, Otter manages to hold his own with the girls. He is curious and playful, but just as open to cuddles and love. */}
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* This cutie has a Rottweiler look (maybe a Rottie dad?) and a big heart. His wrinkly beak is starting to stretch out, and his personality is just right for anyone looking for a playful, loving companion. */}
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {otters.map((otter) => (
                        <div key={otter.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={`https://lh3.googleusercontent.com/pw/${otter.pic}`}
                                    alt={otter.title}
                                    width={otter.width}
                                    height={otter.height}
                                    className="rounded-xl"
                                />

                                <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                    {otter.title}
                                </p>
                                <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                    {otter.date}
                                </p>
                            </span>
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
};