import Image from "next/image";

const sleepyPuppies = [
        {
                "id": 1,
                "title": "Sleepy pile of puppies",
                "pic": "AP1GczOR3PMSEAIWLjjNbFq8AaM6Si72RAqM55spfcbLWb8YJddg0wC4KlPQUrAPVV6-hNjLwEbhteaDRCaZttOPPBTyWcevaq0EN04ibJGiUUzDJJ85tEc3zDtnIveo6Mu9oyOWQ5q640h37IorKfRGxDI=w1071-h803-s-no-gm?authuser=0",
                "date": "9 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 2,
                "title": "Puppy Pile",
                "pic": "AP1GczNCED5S0isojyu6P6_9GwV_pqi5FutzbDm6Iw50NRBuRmUiY5Sh7eqfE9zUtx41O0_kZcFF63i_W0n6ztM9QQ9tlKeNdUuXvt56tleF41YeZAvjIVQOk_1elg0mkYix8noVn7cD87aSUHco5YyrCD4=w602-h803-s-no-gm?authuser=0",
                "date": "5 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 3,
                "title": "Clockwise from top: Reptar, Violet, Possum, and Kathleen",
                "pic": "AP1GczMOWYeifYF7KSeVPsrorkuW_XKmLPVWpYNNgbXlaxwBik33vppsF7EJpNg06V0r9qPuzq8ZiWeoPbwPaOavMgjyGD8mPKQdWmZtRdw056R5ORGwXCU66QUlgZw8dHPY5xFuEp2mLU13cqUE_nO6mMM=w602-h803-s-no-gm?authuser=0",
                "date": "5 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "Clockwise from top: Hippo, Pinky, Splinter, Piggy, and Otter",
                "pic": "AP1GczP_8xpl8aeVn2R51GL829SUgZ5_EWpQmLVAFMikXsBXWelqCSwgzAknUEqJTwF57zdmAL0Gu7WMU8Ua24klleBugVdn3K4hP2qN4Xkc9hi068gEF5tqlL-XBsgK6pig29t6ZmcHQ1LVMVkA48_-dgw=w602-h803-s-no-gm?authuser=0",
                "date": "5 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 5,
                "title": "Nighttime snacks",
                "pic": "AP1GczMWPHUI-mrUB9K9rDKlAlJOGFbbzuh6iHlXzbDp6dKdzS1NgtZXEmp9UxCZrbt-k-ujmLLem6in3_js3egUYJnTns4SYdcDNGYqtYEMWqAqPOTsbaVAffc3aFIK_JG3upysExirn7_Jq5e2ruWNJ3g=w1071-h803-s-no-gm?authuser=0",
                "date": "23 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 6,
                "title": "Kathleen and Otter",
                "pic": "AP1GczMn1ij5xhG9oBAzu7A0AddQ0NMCrCGMj1Zy0IK2mmBJaL3UKalrJIRJAw0H7Adf4NRuXokYNdoH7M1KSrstyAwacuhu1--QMnJ0SzCG-jp3lFCVUu9oi6CT7w2GP6a4eKkk43kMcdmsxacn78r2hUc=w1071-h803-s-no-gm?authuser=0",
                "date": "10 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 7,
                "title": "Pinky and Reptar",
                "pic": "AP1GczNcF1tbWJdpba-mcColKU6kySijlvmIR2GXeErkBqbzTshFc50uXxVF2uPVUVy9DkKsC_YVJLrnI0s0Oq7Mevh7P57XdIpTGcQXwKtbA--NFeLjQT9mYjdhhhHweA_qRs4Tb_g1Hv_lh9njUuIS5Zc=w1071-h803-s-no-gm?authuser=0",
                "date": "4 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 8,
                "title": "Violet and Possum",
                "pic": "AP1GczPfX3N3d9T-6eErpEkcm5qmraNZczu04qv3fZnOj8RqH6a1oJYLJOJysXBnkHNRQw4_zH6vgfiSD-rWypaJ37OcdwjBWlwzTp-6n6OeTU28SxFK-ybJAGm28Ynfo5--Tpuy98nno42RnBmwxwdckZQ=w1071-h803-s-no-gm?authuser=0",
                "date": "30 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 9,
                "title": "Possum and Splinter",
                "pic": "AP1GczP4xySy7iynDUIx5eV3CvWDx5vNAlXCqqOJuPbM6106eUCpKyo5lWiKjm3Vuh3Z9dg7cEojCWDANRSb8LrkfWF5tUb8CMsA-gMaHFIdQHMNCNJnbHjIoFrlWjo2wYxWwd9jTXL1w9_hyCUxVJADmnw=w1071-h803-s-no-gm?authuser=0",
                "date": "31 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 10,
                "title": "Possum and Otter",
                "pic": "AP1GczPBdsFx-2-1wpLTHXujo2vC5s_0eu5k-RTc20pa6lilp1xwvOYjiiRbY7RRz-VtfxxAU1zVGB46gN1070evynA3O39AflIbg0NeNIYn1mVqSvEMQo89xASPWl0_LOeRxT1A0M1UyAumnkMxQ_3sJSU=w1071-h803-s-no-gm?authuser=0",
                "date": "31 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 11,
                "title": "Possum and Kathleen",
                "pic": "AP1GczN75c_xbfIskS0RMvJYY_lXLBCm0sT3dPj2kxUpX5R9yXb6xtsLxUSofPyIDHJiA8b1W2T6Zsbx6uWWrE8FhqCNHWeux9PeX0w1WU8zf2Hfx_jKriU3W7WHazCBX7UcBPyQiQ3UwAEHtG1NxQDcoOY=w1071-h803-s-no-gm?authuser=0",
                "date": "29 August 2025",
                "width": 300,
                "height": 200,
        },
        {
                "id": 12,
                "title": "Hippo and Violet",
                "pic": "AP1GczMF_iUZGyELK25n-nchw-KbZA0mCDh-0qH8NNgcPJADpiiPbz4HsJf_9-uETtBV0c6umVH0qPWhP5_Vxfo1fmiF-0x4fgMXzMFWx1B0GT1uP0WJcwVIrf9XJ6pdN4XT-vqkkqItvD9dTyYuLzqm4F0=w602-h803-s-no-gm?authuser=0",
                "date": "26 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 13,
                "title": "Kathleen suckling in her sleep",
                "pic": "AP1GczPQbI8nxj8HjfgpBwFRqqMD3jZOklTf8-ddAvcaqhwSc0w3I4cLjuJP0JSosybUZYKKHdtweD75iH7Y5IU42Sq3_b0IEAdqbqNDanONGIydtxlatVXNIHAGr7dQxuHamqsQldswyTqmgnJU6pYPW_o=w602-h803-s-no-gm?authuser=0",
                "date": "7 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 14,
                "title": "Dreams of Ferocity",
                "pic": "AP1GczNwmmzp3jTQqxhMyPP-yAPHMQsBIjfSNAoWD0XKtg0Jsh6hdXMBp6iSlu6sjmDkhCmFyqmyv0l54c3HXxOSsq_afS4F3c0rDg23kXQ-PL86F6JZDMwKNod_IAJB1Uwkr9ob1thFBYUcV9TI6oCzApc=w602-h803-s-no-gm?authuser=0",
                "date": "10 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 15,
                "title": "Twinning",
                "pic": "AP1GczNbyLbTKB7PrxYCqHgCndW1rT6bHcke-qdRwDYvbplSlU-mI3iuEhmPTU66hN0vg40qYVYnWDsRnW17ZMsQrx_MFD4y3rYUjmvAETP-vPc1roHigCqOYB2ke2ValQj7YtVuEZw8T0Wrl24Wln22Dpg=w602-h803-s-no-gm?authuser=0",
                "date": "9 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 16,
                "title": "So many sleepy bellies",
                "pic": "AP1GczNdcJ03MFSiQKXmDGmFMGJVSgM7OJnElYeYEpgnqkoE9DOK9dI38LvbZfqex8O-YXojbNO-8tA8Pq3gxn1TwnhvHwEmbYGCpIMG0Ss6OM97kUyVsG5Q8BJsInS4yelQp0-ETXw-haAWrShQNvBiE1E=w1024-h768-s-no-gm?authuser=0",
                "date": "9 September 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 17,
                "title": "Piggy is sleep-running",
                "pic": "AP1GczNTh97-QxH_-uPHcoLTyt9r9bXO8rpxMis64aeu6pdv91_a_T9bEIL-Y9ZaGVmR4hB85BKuDsOqgucub7bx7gukxT-sJ4CN0ELeBuWKlnxRgrX37WfUI9VFE1cS3H7aQ8ipEokIdz4MVAchW03y04s=w602-h803-s-no-gm?authuser=0",
                "date": "10 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 18,
                "title": "Piggy fell over",
                "pic": "AP1GczOsC7tu2eF0SBsnrTEq2xGN-l15OpKb5YBoPP9JnNCENdM51U1exIwbddG_XhdE2cKPRq-OCiA3yGy58zDGbsBDK44E-WZ07j3fC8NuuAiB-3aFoTfC6qLwIr0s78iYTaxCmwYNx2sQwY-iDo491n0=w602-h803-s-no-gm?authuser=0",
                "date": "10 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 19,
                "title": "Spoons",
                "pic": "AP1GczMRCD9SrR1OK8_ZQPOaBH778VhKD5h7x0Lcd3vtEaOwDmFpWVbVwDJV0BQ_OLl1-euGDftVYUHopyaGHx_ZoJhMWyrG9ALPXHqCYjf0d9VFCxqs8VDj-6lNAv2iQ1PrsmH2ForchbopeAebLhUvi2o=w1024-h768-s-no-gm?authuser=0",
                "date": "13 September 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 20,
                "title": "Cuddle wheel",
                "pic": "AP1GczPrwsv57UhStj3yIsrVaR23PFt8E6NgXp_Qhqp0zETGTgBCkY4DnQCcl2a0-KpIMDkjBFmdJkmYshjc4t3tkvYZLstjrbghSxH1_hseUlctAGx64_zPtkGHRTNTEIVMh9RT-YOj8JbzG6oaQOCm_H4=w602-h803-s-no-gm?authuser=0",
                "date": "25 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 21,
                "title": "Lazy days",
                "pic": "AP1GczOATz8QWi4WxtWq18JhwQgJQMt0nZjkQkwHZYJ_lqWFbYeKM5Vb_EuJ7FrG6RgXFNGz31zcxD-432qXSj7vxmCXI5x9TUBi_h4xb9zuVuyoYQ1PVO0OihszLCnfm7YijyWpReYvI71TxObHtPw39sk=w602-h803-s-no-gm?authuser=0",
                "date": "21 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 22,
                "title": "Yin Yang",
                "pic": "AP1GczOHlEplaIDPw44VgLd8CYYfC5S8I8A7jB66PABu8NDIA_1yRoHec3U9KEgOWT4MEQSpfnoABNwKyYLWk9aVON6XLc0cSNYgWCVuy0ViIkkr5RIHEiDyyLygPgAf38sw88o2DtXjLsdRYQYpcn838nE=w602-h803-s-no-gm?authuser=0",
                "date": "20 September 2025",
                "width": 300,
                "height": 400,
        }
];

export default function SleepyTime() {
        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center text-center gap-9 text-balance">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                                                Sleepy Time
                                        </h1>
                                        <span>
                                                Play hard, sleep hard.
                                        </span>
                                </header>

                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {sleepyPuppies.map((sleepyPuppy) => (
                                                <div key={sleepyPuppy.id} className="rounded-xl p-2 m-2">
                                                        <span>
                                                                <Image
                                                                        src={`https://lh3.googleusercontent.com/pw/${sleepyPuppy.pic}`}
                                                                        alt={sleepyPuppy.title}
                                                                        width={sleepyPuppy.width}
                                                                        height={sleepyPuppy.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {sleepyPuppy.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {sleepyPuppy.date}
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
