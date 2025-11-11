import Image from 'next/image';

const splinters = [
        {
                "id": 1,
                "title": "Superhero dreams",
                "pic": "AP1GczMORz2M1gasXVLEmVSsBC3giT3Qi3n-YZ94ssWlrPCqwDTm5kSQ3ARahWP_IjXbubG845NvlSEJReKxzc4f_wlhA9Qq1OmSEwZK_cta_Qu8YG0zGU-UK0h3CdSKXx0n2R5xPCU5JbEd68Hsms76FHY=w1071-h803-s-no-gm?authuser=0",
                "date": "23 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 2,
                "title": "Smiles",
                "pic": "AP1GczMG7FFaSH8TsNxJjQztacEo9ppXCL0cf3cR4kUP6vH7DImBWGAD7hCqcdJFzVY76_CLlNr-V1lVwhqZ0XO0l_T3HThpsc-OPnjer3csOmyZpVJdOKZuKtwc07m-LPaIYOvznRQA_GRSWQh3QJlr6AU=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 3,
                "title": "Laughs",
                "pic": "AP1GczMS-vB6LU0EHPrDNCJgO54xD6-rOL2ITlWTgjP2R7Oce8gPQehF3JL8hEAwOpx2_tPpybMhklB7hJlzoT69nZTZVtflOSe9ZlUc6ifYI7FFp2mafAMuJcb9E9xq5mnYrFo9jBVNa8AKm34z4jlB6OA=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "Very serious",
                "pic": "AP1GczP_vse-TyQOFVIJ4OY0sgxJEawZYQ3mTqqJSQloWBAnLqPGe-uVlTO6oXnJP6hy5wJxwwa3PR1it_CUkKjTE782_5ik6zRH2qTsQFQaaSf1vLrSc6LZsbqT6ZZuJR7kXZJ6lg_dQd_8ReNUNLvzCU0=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 5,
                "title": "Hot Dog",
                "pic": "AP1GczPIpCy6UjOJNnNbF5xpYQfra1SKEmfEHSqZ7-qRDXknVTgHgPSf2hze6pc0O0lZGjyKQMFSlAWkPNxirsRxCscu9LVB-hChQ8bFZZW6DBtGxsu4LV0LsuU6YQW_4XsA1KEIdLjOc9k9bFXwDreALMk=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 6,
                "title": "Wanna Play?",
                "pic": "AP1GczPrJyZGAk7A8LszmRW-9rIInyqXUgcaqrhDX7x4riT1EISEKZQAp2tARCsoajr7C-F9pavgNyVsU4jIuC_ReOPUBwRfjW056lJaLJkplOtDnCBbdihjYhfZkllNmhS4iGPo0RLdyg4SEQ6DnAIxLxk=w602-h803-s-no-gm?authuser=0",
                "date": "27 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 7,
                "title": "Considerations",
                "pic": "AP1GczNIvLousk3K0MC0BtFYFQXK9XJra7Pn2c2jpdPiXi4_K1NsfHmyqSlhjMaUIXM9KMZWP0AONLyN1m44be9Br4BWIXChM2RjoWqdNOP77x5qCF_ebd89gOkzWhWVY2JuZdpOltvonFOzCYKKBhZGVqU=w723-h803-s-no-gm?authuser=0",
                "date": "26 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 8,
                "title": "Just doing the Thriller dance",
                "pic": "AP1GczPYrVGPKGaCIaEx88lV08Wstm-X7KMstfweQiZ1GutZbhhnTG9kzTAxhdbnyeGW6-AkjHnv_Gnt_6YqPHSC4z1hzTc53nd1saW9kt9iCR7RZnpppquIY-nlTjmAK0lQ4EEWZkVgc86b-gBkbVtuR_8=w572-h803-s-no-gm?authuser=0",
                "date": "29 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 9,
                "title": "Partied too hard",
                "pic": "AP1GczO1sQBdjgJ8FBMVIbvTodEjXlUbMCmxjrOt9XpJrBxPfNGJN4FblulQHDvPDQkW7rDDyJESuaipILBu07z3omzGHLTl_020RSuF9w5ZAAOnh_BJkYk5cJEZA9aI-x8jZDFAGNWX1tjDh_ISkXV08ME=w602-h803-s-no-gm?authuser=0",
                "date": "4 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 10,
                "title": "Going out is hard for a pup!",
                "pic": "AP1GczM8tQeUzLMgbmxJl4hnAVDLjo1VwmJq2k7r_fACBklKn7aIoO4fn4RdFg_g5VvgL5TrGGXQatZq14xttg8EjlHsG1bNYX8SSWk8ESgbX1D8LusAbgZ1gTXIHXo7ZTFxfu-ZoqC4qwtY3ZRfxYmCAD4=w1579-h747-s-no-gm?authuser=0",
                "date": "5 September 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 11,
                "title": "Ready to play with the big dogs!",
                "pic": "AP1GczNg_vEsvorDgxMTo9kn5v3X6lrXoV8MnlqRsximkatwn4sheUAYYAYfIEPFLvcvMl9v1sLKjTyc2quedbPm0y_3X5UywblH2VTiuJTIr2OLS8GoJeG3xjq5tirX-uJfhc25U2ywVKJdfBZj87sFIZU=w652-h803-s-no-gm?authuser=0",
                "date": "13 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 12,
                "title": "Confident traveller",
                "pic": "AP1GczPKqJCVwSZQAOPKoJB2WHmykRRiCo5-veHMr8qJ-qaIYalqRbgTIYOVdTveM5g-UXRkyIvH8ZPiqWnUBypi6qmyNsjUldh9qnK0M4VNKbs5jjUGlzBSMrI0LZUAHoB5DiovV0bUO_bxHob1nBsFI1g=w675-h803-s-no-gm?authuser=0",
                "date": "18 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 13,
                "title": "Who, Me?",
                "pic": "AP1GczP-rNBlUyhfbQEJLSLuZ93ZsPOVWTTGnFn7c-MYpjW2QtqUigGLa_jblDRit04s6g4MGFUU4FmduBM6ft4KMeHM13svtnDB9VoRJnp-OaOLRZQSe5_932AeWygIDEgybvvBJ-hVD6qQc8bOPsWH_TY=w602-h803-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 14,
                "title": "Looking at you",
                "pic": "AP1GczM1s-MbQRE0KYSw_gg5fjtBFt1bFsNwv8EaIvvI6uctaCaIznNl5kmwM3jLg-Al6ZhJFPCKPyKb1qO1_h4JjaBYeYKDaq0B1l_d1rcLo5VymRqAn7F4NX8j65PE9Dgk_25k_5MBJDDQy5C5CSXn3tM=w602-h803-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 15,
                "title": "Such a soulful baby",
                "pic": "AP1GczNgC3KgjxCdzCfpjnXCrZabh1yEsltz1G9V8YPI2FgaWWc3DDs6M42xEHleEPVnyskdz5OiQTchY0V69DLXEWMYxEthM_cXXiOyr2BKuy24328tURh1I2TypokdF_-D13E_XYCMcTqCrmdRhyNChzI=w566-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400
        },
        {
                "id": 16,
                "title": "Too small for the carrier!",
                "pic": "AP1GczMOXkaaZPXm4C8EeEWjwLeFIcpDPefpEOW1Os9BjdDaTvngv_wIWzco5WuI8CFN7t68lvGhtkraHNxpoxhTSobzC9kL4vICV50sBPCuPmmWzQOwH8fr0LTmQ8CQ__hD_yhG-4jOE5l9mcQmV-TC6yE=w561-h803-s-no-gm?authuser=0",
                "date": "5 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 17,
                "title": "Busted",
                "pic": "AP1GczNpYiRYn0WhXwGxWYo9PH5F9i1aG4bT0WsNIz3voXICvkOwMSLFGVfdU8MEkaI-_xoauF3TWDNcb-36xsL40n-71zQDd5LLOqkBakzPid61qqBkDqCdbTNpgH-SevTK2HC2c2CF9J9HFHiL_IcXd90=w1071-h803-s-no-gm?authuser=0",
                "date": "18 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 18,
                "title": "Our second cat",
                "pic": "AP1GczPIbCEjB8HS3UMhP5yVXMfjR-1GHsBB522GZMjT6x5tPT2MHO7Pbs8yZhiWROnUsIdlmbq7D0MeTDAac-cwFd6mFug_xh9FDVQ8twJ539USaS5z6DJzAj4kwV0ALU2qj4WvcOzOAg2uBZKGPY9g5i0=w602-h803-s-no-gm?authuser=0",
                "date": "29 September 2025",
                "width": 300,
                "height": 400,
        }
];
export default function Splinter() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                <span className="line-through">Splinter</span> Willie Jack
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Willie Jack (formerly Splinter) has found her forever family!
                                                {/*Splinter has been going through a bit of an awkward growth phase, and her fuzzy coat has left her looking like the quintessential 90s bad kid. Don&apos;t let that fool you, though, as Splinter is contemplative and sweet.*/}
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                {/*Splinter is quickly becoming my favorite. With her soft and snuggly fur, inquisitive eyes, and a willingness to request belly rubs, she is the perfect companion for just about anything.*/}
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {splinters.map((splinter) => (
                                                <div key={splinter.id} className="rounded-xl p-2 m-2">
                                                        <span>
                                                                <Image
                                                                        src={`https://lh3.googleusercontent.com/pw/${splinter.pic}`}
                                                                        alt={splinter.title}
                                                                        width={splinter.width}
                                                                        height={splinter.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {splinter.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {splinter.date}
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