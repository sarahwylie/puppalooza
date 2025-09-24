import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'

const playtimes = [
    {
        "id": 1,
        "title": "Feeding Frenzy",
        "pic": "AP1GczMhWLHVF-0T2G-kLiQs5GauG7jSx_HKUvXiAInJzZn3p10XJ7VszEaFkMfJpoSeYPEyG9bwjaey_C8-QIHPU90GCxzJeBhxf5G86sNlc6LMAJcwE6C8PiIOqvZisatRu_ZF4cgWCl_NYw27NTuUVxE=w945-h803-s-no-gm?authuser=0",
        "date": "14 August 2025",
        "width": 445,
        "height": 378,
    },
    {
        "id": 2,
        "title": "Crazed",
        "pic": "AP1GczNFRPG0HComLP7h8TlrXh3YGMuFzqOwjwwNbgd_RoUbOeWHuFXpt1KKHMInAwnOxiply3vHo_76hMeG6FUpMo_-HCj5LaeFkZP3amzSEdTnCiHqpMTUmVqgFtWooUnvXvmCgox3il7Mj4cAPK0LKDo=w1257-h803-s-no-gm?authuser=0", 
        "date": "1 September 2025",
        "width": 3848,
        "height": 2459,
    },
    {
        "id": 3,
        "title": "Primal Scream",
        "pic": "AP1GczMz4Nvs3Kbf3oFOQESJMjfwnMd0KwdDm_s5jtyxtPciraa2iIAGSrk0-LHTNMJLJdN0QiCxdUGEQOaliOVEuB04krbzuD_vwx7-LqkYx0ehsaUW4ECjYQG2oTSHisNhioPPwq1S-5e21u2_nmszFgo=w602-h803-s-no-gm?authuser=0",
        "date": "22 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Pinky Play",
        "pic": "AP1GczMzaDLsihj2JeKlQa1AI_93eidydA8qLmRyO70HMcTl5f0V6d6fgd2lOQcQ5NkLwZtKR7_FWE2-61MVbd8afFpbO-PqzkStlqv8v3lqO624GjCa5IzMtLFmYdmEC111DhU_fuHFGpCsrmuE1a-xH04=w1071-h803-s-no-gm?authuser=0", 
        "date": "28 August 2025",
        "width": 400,
        "height": 400,
    },
    {
        "id": 5,
        "title": "What? Just cuddling",
        "pic": "AP1GczMfqaMvavnaeFLZgTo909PxMg4OS0-jIdkJ6R-mXM7FVNG4fM_3Vayt4z6p03XytEQSy_ehMrPKJqaoAuSv33wqXvSEHf-Ouo3ImiNTMf2YjuHpyhBEr1b6zPx73t_AkHGI11XENTZmmJ07HZnT6go=w1024-h768-s-no-gm?authuser=0",
        "date": "9 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 6,
        "title": "So many fierce puppies",
        "pic": "AP1GczPawrTSccSqrd5-_vjPlun-dC_Tgy9-sE8z6iDA0SwrwKfwSZBevDp1g9L4rGgEck5v6dHoLJ3WAr6rOwl9WzHZpTE9sB63eQODLKNrODuswxFanaEHwkYFCTM5XfcjBL9vR51jXuHMoefrJWUI6B4=w1071-h803-s-no-gm?authuser=0", 
        "date": "15 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 7,
        "title": "Pause!",
        "pic": "AP1GczNBTC_ZEHpzkPB37fjSvfiMRZDbE2aGpRFAFprNMD6JqWEf2etkaf5AqS50HQM6_T-KBHq0DU6CDPT1PHoDzR2hbL2ChvTYayluDsNaw0q7KTiMIjrsG6C3AsmaMjjZ0pxm7c5G4eDkmaKA0w_RFQU=w1071-h803-s-no-gm?authuser=0",
        "date": "15 September 2025",
        "width": 400,
        "height": 300,
    }
];
const playVids = [
    {
        "title": "Can Just Barely Walk, But Plays Hard!",
        "vid": "U_DxeqlIa6A",
        "date": "31 July 2025"
    },
    {
        "title": "Silly Time",
        "vid": "MwfAphzYUVU",
        "date": "30 August 2025"
    },
    {
        "title": "Very First Kibble",
        "vid": "AtHytX83Bio",
        "date": "5 August 2025"
    },
    {
        "title": "Nom nom nom",
        "vid": "cEShrYOv440",
        "date": "24 August 2025"
    }
]

export default async function PlayTime() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        Play, sleep, play, eat, play, poop, play, repeat
                    </h1>
                </header>

                {/* <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center"> */}
                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">

                    {playtimes.map((playtime) => (
                        <div key={playtime.id} className="m-2">
                            <span>
                                <Image
                                    src={`https://lh3.googleusercontent.com/pw/${playtime.pic}`}
                                    alt={playtime.title}
                                    width={playtime.width}
                                    height={playtime.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {playtime.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {playtime.date}
                            </p>
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
                <h2 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-4">
                    Videos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-1">
                    {playVids.map((playVid) => (
                        <div key={playVid.title}>
                            <span>
                                <YouTubeEmbed
                                    videoid={playVid.vid}
                                    width={400}
                                    height={250}
                                    playlabel="Play video"
                                    params="playsinline=1&controls=0&mute=1"
                                    style="border-radius: 12px;"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {playVid.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {playVid.date}
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
