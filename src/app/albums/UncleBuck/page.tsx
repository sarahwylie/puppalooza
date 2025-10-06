import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'

const playtimeRusty = [
    {
        "id": 1,
        "title": "Piggy with Rusty Shackleford",
        "pic": "AP1GczPQN-R2hUN4urjC7MquuAj8SFTfUyhZKa_VA8-fxVXEFKliZh-PjqLDe_NjY4KEtizSJ9xRmPadc3y2NG4PD7Dj8OxWPXSA7z5cJOKtZXFLnBtlW7y285r4PmbeCvsKZuCmckGW8NvVKrYfxsNtjUI=w602-h803-s-no-gm?authuser=0",
        "date": "17 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 3,
        "title": "Tug of war with Uncle Rusty",
        "pic": "AP1GczNfjkGvzo8Kk4WgKETs2NSJu51W8eyhXM_fH-2QF8GtNlUCFWPbgIhFFOhprQGN1_svcN-65bqusgVTdELLJ-j5tSHxgRBfqk1ci-oYGmAeGzUnF55c8cEvolX4YWx6FFFFylEnRN512yxsn_EsiTY=w602-h803-s-no-gm?authuser=0",
        "date": "18 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 4,
        "title": "Invading the living room",
        "pic": "AP1GczNsYYxdUACVtddFqGUJPSbbutk6YEG9P6AEWMx9a7O-qsw3IlORCH0njM4PdMUKI8ciqm0zPbtEVclN_jGNSFhj4t--0pxpPWaDumlLNJQOzUOvPMXLWtkkgzwVpuMfZDuHGIUrxOA2t2nIMtAWsSI=w784-h803-s-no-gm?authuser=0",
        "date": "29 August 2025",
        "width": 400,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Destruction",
        "pic": "AP1GczMZlHhZGxUWKnPTTGnl20yhAdxKwpuNto-hAvKxAGSodYAbcLt_9_zb6ps2Yne708r4uKSyZkuSsqBIm34WVxrijIE2rnMTjMHXJzRcf_Ad7IYzF-DzA8mj9dxkNSbaWzxqZ6kDmOcYytbJIPRy9S8=w1071-h803-s-no-gm?authuser=0",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 6,
        "title": "Standoff",
        "pic": "AP1GczOFL8wTLCB8PfteXRJN6DOH79xWF0zU6tmLmUfKEJWfoGtqFJ5u0z9kht2mlSfDiyCHxJxzb-nZb682cmWoJlI4-2hf357kW-t5MCV7dP8p-2wZbDglWl0Chs-YsikBZiy35jLn6qSmxTwVKY_cg30=w602-h803-s-no-gm?authuser=0",
        "date": "17 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 7,
        "title": "Looking up to you",
        "pic": "AP1GczNBd7eMstZ0SQG-3V-3hM0soBa4BXvvw3McXlv3JEbFT-ALNiQduUMFgtQqWFVDPHGKiifxCkEpOABWRzDRRo-ocWdRB_4drr0teb1FivmExDWXux-EoWWs2eDLwKTqycnv3ZInlpThCFfykfqbxg0=w1071-h803-s-no-gm?authuser=0",
        "date": "17 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "What?",
        "pic": "AP1GczOcdna9dAHzFwJQHqO1LTCVhfIoJQqQD2cs-b7ZXqTLbBTD4msAogMaXre2nzA4dDPSz0C78OKt73AfpH5kuFGPzpJMcMw3xS0T_mJOlHuAKUps3-GCl21NeMEXyD34pUvcOde2VQ6jtf5fQR32ZlQ=w1024-h768-s-no-gm?authuser=0",
        "date": "28 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 9,
        "title": "Duck fight",
        "pic": "AP1GczMUtVnuoV16MtjUH189vGj33CHHbbHM_u317Z4eBcoC4DvCQIEKuOLMNjKP4DIWsj8TIN_e6qVRNrm13MeyhdD_ED38738Q0Ze7ll1HsjVxicQEILCv7MZp7Mi4spTYGKblVIYwJSb8-JGrV9Iky6o=w602-h803-s-no-gm?authuser=0",
        "date": "28 August 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 10,
        "title": "Eating heads",
        "pic": "AP1GczOmtNGzPx_WsrdmOm93vWOjZTjcaVHzASZOK-DPPLT9cfyXHWw9QxGTaKz2GRMqj5EuhfC9yOUqUA3K90EBgcb2363NItEngFScm2_O1tt-MrxP3CbBjsq_VJX6TdYuJHIaWR_Qn00r2b6BfAt6c08=w602-h803-s-no-gm?authuser=0",
        "date": "25 September 2025",
        "width": 300,
        "height": 400,
    }
];

const rustyVids = [
    {
        "title": "Playing with Uncle Rusty",
        "vid": "ytMe2jzE91Y",
        "date": "18 August 2025"
    },
    {
        "title": "World's most patient uncle",
        "vid": "QiXEZJJuONo",
        "date": "30 September 2025"
    }
];

export default function UncleBuck() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        Playtime with Rusty Shackleford
                    </h1>
                    <span>
                        Rusty came to live with us in January 2025, and he is just a huge puppy himself. He was estimated between 9-12 months old at the end of January, and he LOVES these puppies. Cuteness ensues.
                    </span>
                </header>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                    {playtimeRusty.map((playtimeRust) => (
                        <div key={playtimeRust.id} className="m-2">
                            <span>
                                <Image
                                    src={`https://lh3.googleusercontent.com/pw/${playtimeRust.pic}`}
                                    alt={playtimeRust.title}
                                    width={playtimeRust.width}
                                    height={playtimeRust.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {playtimeRust.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {playtimeRust.date}
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
                                    {rustyVids.map((rustyVid) => (
                                        <div key={rustyVid.title}>
                                                <YouTubeEmbed
                                                    videoid={rustyVid.vid}
                                                    width={400}
                                                    height={250}
                                                    playlabel="Play video"
                                                    params="playsinline=1&controls=0&mute=1"
                                                    style="border-radius:12px"
                                                />
                                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                {rustyVid.title}
                                            </p>
                                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                {rustyVid.date}
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
