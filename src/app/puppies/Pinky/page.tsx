import Image from 'next/image';

const pinkys = [
    {
        "id": 1,
        "title": "Laughs",
        "pic": "AP1GczNe1KGcb8bdHXOPO40T5ic8duQb-bd-SrOVjyy21ARZDEcixxGfJSbkNSN_BqM1FzNtqAdXBQ1_Z-Ag85algj3CG4tpQvl6vonC8ZbzNY3-D7iLd0fek6EWjs5qxGqHlb0e7idoZd15TbryQksEafc=w602-h803-s-no-gm?authuser=0",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 2,
        "title": "Heh",
        "pic": "AP1GczNMO1WWw9gvNFx8szaw9j8Bzo18i5N--H9Q2SsuEYWs_YupaY5-5XUSDvtNnk3k-2j9LtflIGFlcUKBZ101rSD1mrHrl_MDt-GYPKSSvszJhrZZIcd2ruzc4S_k9IMJdgtvpgXfyokAASNbows9-II=w693-h803-s-no-gm?authuser=0",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Anybody want to party?",
        "pic": "AP1GczPU1D0mTF_wfxm41mv_TfEgzKXARuvQcNfcRPBXRP3qzeD4Xsyegw6f2ghBsPoEC62C_iiS-ta1Kk97WpiVzSE5j4SFs8FNX6zwmcnrK_49YQ96lF_W9NnurMGPWkmzXgGRxfkByCJ1XCGyg2m_kZg=w610-h803-s-no-gm?authuser=0",
        "date": "16 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Asleep on the scale",
        "pic": "AP1GczP-IO6r0swu4whog8xBF27tD4f_YILyfMcn3LbdNH70In2SnuFeyhBuzvXD9Ucdlag0jxihujUx9VhzEu2pRWIY2tYT6HoXBdIVWcPNk1AL4kGLcbMyDy1HgaGdc4XnVt-eTKH49K0S2MRYr4U2K34=w1071-h803-s-no-gm?authuser=0",
        "date": "29 July 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 5,
        "title": "Peeking",
        "pic": "AP1GczNLymTzBbQPQ_NJiWDgYXSYudgGqvrIE8RcwXClrw-F2c1WVgJhyAFMjCGllU5Xk-Yxob_rimonynRxEnf6uZv6xgJAEHYJeCQxUCwb8xgt9j_mJqLVgM7lyT4T1nRDa30GpkkMtlO7-hFttOPA648=w602-h803-s-no-gm?authuser=0",
        "date": "30 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Hello World",
        "pic": "AP1GczOeSg9N3tKbEUxzTHXs5zF7WPb1Bqf8u1wvgq9Q75tVfUY6dBz0jBkE-Jka79OZXzTiJ7D7KyxSuE2ia1l0X-GdCCWQyTyCq3kE1xFP3FGcn9L0ObWYaauE6sb3gz3uTAUAJP0HLF-d5Jlz2Fciglk=w602-h803-s-no-gm?authuser=0",
        "date": "30 July 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 7,
        "title": "Kisses",
        "pic": "AP1GczO8sdxyV7SvB5aiFIKBjAzuN4lqbIlkErtA-kKZNuHNDTf3T7CetxHWPQR0WYdgkwSGxvyeGLF1EAi8SWuh8kVEym-n9kPJ-oX0oZbSxLAtQrO50TlzX-ZVPZ8CY6NH-XiLmLWzutKKiXhRxQ4Tv7U=w1071-h803-s-no-gm?authuser=0",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Found a new chew toy",
        "pic": "AP1GczO5ciI4ABTNS72t6-BV34GAFGnozyVa2KVNqhRpTucOL1tGsmVM98NVSckrbkMYapxSk8KhFMc1leJh2kbeF4WYaaEAvLXb9-W_fRyRw3G-iacGVgH_1SlV1XJT01Jo8ys5ZhvpiUPdXJRnZrJ-Ers=w1071-h803-s-no-gm?authuser=0",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 9,
        "title": "Pure love",
        "pic": "AP1GczP8rlHgX0X6UoqjLzN8HmS5kM4CnkzOqO5yYgimUmN-rj0XMMlI5f1WQxxKL5HSxoJS3kohFaSIcDo6dFeuW_kdAw-YUPWFYeev96ObBm1CiLo9tdx_YuZ6tVvAiq5Uz-UH6_skCTxWsWprxSVY1O4=w521-h803-s-no-gm?authuser=0",
        "date": "30 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 10,
        "title": "Besties",
        "pic": "AP1GczNUU4IF3Gt-y2qxAKKCMTiDRdl-5HdffW5Hmm7lAFEk9hirrao5mcFViHYSLQkxwQDJ1iRLxVbe-RhR-BFs3SdHJKHNAAwr8pgk8GB9yvEmmAXPy0MT7l9J7lktSHMeqG7e5FK6hqpiw1Ly2dVLWQ0=w602-h803-s-no-gm?authuser=0",
        "date": "30 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 11,
        "title": "Posing for the camera",
        "pic": "AP1GczOF0qM8VTALyWp3ePVhxRVzEkN_nncJrjqUgQ06UL84RfTV03VuGyD8WR26Q2rBXt-Ag2aBbhJ0VY1TYh31bfCMfAheXNOT4tNVrMuUy-0Ow2mUB3zsRgD6cI1V0kQ_UIKiBcl3gykIWG8m7DYcyDU=w602-h803-s-no-gm?authuser=0",
        "date": "30 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 12,
        "title": "Two peas in a pod",
        "pic": "AP1GczMx06OP-rZRqYa37N_fx-fz6efmF7L5BcuYGICOtS0LsTM_cjbBpqmlRyrsnHfhpzHHxQXMpK-DI905rtRZa1yZFHkVQb6inrCcIU6BUjSm2Vv6CrfUKrAsE3ljxcjZVtI7C5cdOErtJeCxtgS-KDk=w602-h803-s-no-gm?authuser=0",
        "date": "30 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 13,
        "title": "Public appearances are exhausting",
        "pic": "AP1GczOW_PX0arGrJMQ5u5xXA4xEESkDa0PbQBiNQcmTCHhvAEcIPZYSSVfitxZxTY1OeCKzoWHByRFSi7I5QxPckedrtBIdQi4Z-2CgNtv3eot7Equnwa8jn05FlnPyrkUrUthoyy1scoIRZWMpZXVywaU=w602-h803-s-no-gm?authuser=0",
        "date": "12 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 14,
        "title": "A little morning coffee",
        "pic": "AP1GczPSVKhLl34z8OMe0zd4cPwbE_DiWCfwNONhU5WRr-mgJLM2oYK7FBPtD5LrujLjqN0JEQCMpplAZUb4CmTjIA6Z26-mCuKiXoqJFhxGIOogbnh-3xqgcCcUP0U3fsyqicyCFx1b1SPRsaNQh_IcmMs=w602-h803-s-no-gm?authuser=0",
        "date": "20 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 15,
        "title": "Such a cushy bed",
        "pic": "AP1GczPutLbm3OWIC6zmbVjbdlKcmmdD2ToRAopMPIM-nISh5ob1uirNi4tuuM3W-IzTpV0X197WZKjp8KuFbywLzsxo2WWnC-EPAYeMoQvfh9MDJE4PN8EMZvty5B9a9c7kap0mV-WuKnQ9JVu-zDTZD_0=w602-h803-s-no-gm?authuser=0",
        "date": "26 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 16,
        "title": "Officially her new bed",
        "pic": "AP1GczM-bLTEKApxWTnc5o9PfPY6CRGyQ6LxmpQmvfgPrNkxGmDY-y934qLZvSFRS-Urw3kpUXDZoBmBfQEJXW3T_20tzx6RXiNOnp58FZ7f7RYKNRcHDI85iB_ZeFamfuV7Qn_MbmKbsZX_V__qndZJmb4=w1071-h803-s-no-gm?authuser=0",
        "date": "27 September 2025",
        "width": 400,
        "height": 300,
    }
];
export default function Pinky() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        <span className="line-through">Pinky</span> Layla
                    </h1>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        Layla (formerly Pinky) has found her forever family!
                        {/*Pinky, née Lab Rat, was born fully white with a long body, a couple black paint splotches on her head, bright pink ears, and a bright pink nose. As she has grown, Pinky&apos;s ears and nose have caught up with her body, and now she looks like a stuffed animal.*/}
                    </p>
                    <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/*You can often find Pinky staring at you intently while her siblings sleep. If this doesn&apos;t unsettle you, she is your girl.*/}
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {pinkys.map((pinky) => (
                        <div key={pinky.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={`https://lh3.googleusercontent.com/pw/${pinky.pic}`}
                                    alt={pinky.title}
                                    width={pinky.width}
                                    height={pinky.height}
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