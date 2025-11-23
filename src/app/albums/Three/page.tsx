import Image from "next/image";

const lastThreePups = [
  // {
  //   "id": 1,
  //   "title": "Puppy dog eyes",
  //   "pic": "AP1GczMutQRQ-HipLCYdX0r4tCObwn8wSLDUGlUq89G8uMratPVMfw2ZOZeQyVoJw4Pmgiqz_N666JQ-wl3LNSvdsIJ5ArDPEJhHPWT5tIK5BzXAF-qngSyTdWIuiWseV74Ceg0Z-22vH4MuhjmcnZ8Ltbo=w602-h803-s-no-gm?authuser=0",
  //   "date": "25 September 2025",
  //   "width": 300,
  //   "height": 400,
  // },
  // {
  //   "id": 2,
  //   "title": "A new bedtime routine",
  //   "pic": "AP1GczN_lvAFfJ9xflb07TcLgr4RpPQQwDmfb-nvaR5HEcw04IfmqXEx6iG6ptbmfLv_43F4mj0mZPz0osPh_sL0crsvU-hZOkaJpyks_1yMmnwLClDwxg=w2400",
  //   "date": "25 September 2025",
  //   "width": 400,
  //   "height": 300,
  // },
  // {
  //   "id": 3,
  //   "title": "Worn out",
  //   "pic": "AP1GczNwyTyfHKusnnXvqIFHU_U6VW2TCH-fUrq7oHrOiQH3Li4DmpHDiiEMs5FC6jwb6Q1ccH2odSN13WBVTiZfI3JcxlSrUdhTp_B7imuamq-Je73yOE48rrLC0tP-62yZYHaWmXKTKZrPdhaoAP4akzM=w602-h803-s-no-gm?authuser=0",
  //   "date": "26 September 2025",
  //   "width": 300,
  //   "height": 400,
  // },
  // {
  //   "id": 4,
  //   "title": "Our sister Xena is visiting!",
  //   "pic": "AP1GczPO5Wsjy55r9KGQZtJhDduoAVyk9AWEDI5SErUjJsT_TMXpD7EKUSVqeS2kKOeRLYzQgkWd42HEZzgkKlOes_3ziIMS3HqTKdUJvN7YvybwJ-fhBKMeUzotJbFf9gbPXjrOdmYji4Wf6sN4ihTUduw=w602-h803-s-no-gm?authuser=0",
  //   "date": "26 September 2025",
  //   "width": 300,
  //   "height": 400,
  // },
  // {
  //   "id": 5,
  //   "title": "...she wore us out",
  //   "pic": "AP1GczOJlirOY1NFCXjqYFnjYuEFK9VazM2lqKPIrjzSfKvt9zj_-RY-NhmnxdvOC3Gbrl-parVtN96_KDkENTnDnrcGyVclUAYsLGpndedfQ5vyFxQj3P3URD-WB34xkUKj2_4y4Ibjhr33SXaqSPyU_Rs=w762-h803-s-no-gm?authuser=0",
  //   "date": "26 September 2025",
  //   "width": 300,
  //   "height": 400,
  // },
  // {
  //   "id": 6,
  //   "title": "The Four",
  //   "pic": "AP1GczO-fScnEOdJ9HWApTyXn9uzJllGF2oBRrmhis3ZR2KwKifyxJrXHwauyzY1WbmT1gL7-NTAY6wkt6CMKikIIS0D4w5yQqifTFoaEpaPKvAY0p_LFEAk1SgksW9ZwbhPS51eg4s4FWsPZm513gOs0LE=w1024-h768-s-no-gm?authuser=0",
  //   "date": "26 September 2025",
  //   "width": 400,
  //   "height": 300,
  // },
  {
    "id": 7,
    "title": "Party after dark",
    "pic": "AP1GczMf8DqlIqFLnw7oyAJNvGsKmgjcJ_9jC0cQGsxeEKimbL4zATztb15yWDJ8kDsDEu11gVp6fHzbfYKUVEej_Qf5BftYoz_qu2WmmiWbkEEVY_eCtfpdz3vlLfBYjzQUH3uJoK12ka45SJnwyNGcn0s=w1024-h768-s-no-gm?authuser=0",
    "date": "28 September 2025",
    "width": 400,
    "height": 300,
  },
  // {
  //   "id": 8,
  //   "title": "Sleep pile",
  //   "pic": "AP1GczN34H40L-KJO4mtTFG4h54Yx5fVNR2ZjDFD8V6lzYOTwWXDOgtJgWbyr9a1JMPrNOmZ4OJC-_R9FM6A_HY-VSwktYUBmAYStcMv0Mh-yEdYwhdMcVaXTIDM4sB8nIDgV4dNmfMN6lpSnq86w84eFw8=w602-h803-s-no-gm?authuser=0",
  //   "date": "30 September 2025",
  //   "width": 300,
  //   "height": 400
  // },
  // {
  //   "id": 9,
  //   "title": "Sleeping or playing?",
  //   "pic": "AP1GczMLgMkefeGPJy0EvLFV9HQ3pvYqTB0Kyfk5ZBnrQC0yK6p1LJZ8rAV0OBI8Lb40PTptLrTzMU7vLmNXVCk-cJCWbj_CL73KWX2DKoFGUccrB92qfxJUUybRCKVonc3KSyEmhCaCxrgjplAmT96fwwg=w1071-h803-s-no-gm?authuser=0",
  //   "date": "2 October 2025",
  //   "width": 400,
  //   "height": 300
  // },
  // {
  //   "id": 10,
  //   "title": "Sleeping.",
  //   "pic": "AP1GczMerUROi3V7_a39-OqYar849pGJ-vH2mUlT2geAoBO37D9vX4MCguSDo5xbgl6JLT5VgxU76_ZdVvvs-aoNOBIDHY4XOwoNnMCE9zZ7-ZaRcPEJN_vCHdSsZLcC-A9poy5VejRnrJ4w8Q_FHcB31dE=w1071-h803-s-no-gm?authuser=0",
  //   "date": "2 October 2025",
  //   "width": 400,
  //   "height": 300
  // },
  {
    "id": 11,
    "title": "Resting in our bed",
    "pic": "AP1GczNO2r6rDq4d6mXDfwQuRg5yogIr7RAhhBK-zib-tEHAaou5izwtWnkAtt49ISVW3clG78I0dz0-XWTPnk9aYFYkbf5nWtQKLGfzLOHXolFiV94os2iSPxIKdciWksydgq0-ApHnUBS7DNjCqscLM2c=w602-h803-s-no-gm?authuser=0",
    "date": "3 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 12,
    "title": "Pinkalicious",
    "pic": "AP1GczOItCZ5CKZSHo8XBRRzATp6k8VYMfIHRb7u3EqGHm8DZnJrEsIzIHcs1gLgXMEvISEudhnPvX7JMB4sMKWn9ogQBgVtAKwehiccfyix_B_mlDuDlsYA-iDYzB8safcevNOVIDlr1ftosU04om2_vGI=w602-h803-s-no-gm?authuser=0",
    "date": "11 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 13,
    "title": "Snugs",
    "pic": "AP1GczOXXK8e5LS_0qRAmF0-ejU2-bkCwcC6jjaqkFQQkHnwuRDBd1cT2V_NKr8DDSr1mjf1wcFMOsfjdbKWvA--kWcB97UUAX7qDN3F-7cY0ZMZAKL-r2YrpjZJnIGK68YBiNmkTDG6HkhSQZ8Pu3ZdLno=w2330-h1748-s-no-gm?authuser=0",
    "date": "13 November 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 14,
    "title": "Super Pink",
    "pic": "AP1GczOgG-abxCMFU5MGcs74vpL3bXbS991qo80EpHDCiB5Nxdh_bWlXdtkwPGDXh3nVo0jBR2Pd4OMY1LzqPFu5Qea9vKl2RVZ8tx71wh9gLOk2QvRjckxRzyna2paiWrjmYtcrP2kLRYDwBQgwLD_Jy08=w2330-h1748-s-no-gm?authuser=0",
    "date": "14 November 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 15,
    "title": "The Trio",
    "pic": "AP1GczOu8lsWIxVIKTF5jAFTYdqwb8r4zk3SsxHj5_LQIjjpgIiJqtAKakAkfhbqgLIs4CCtTttA35E5g8j5W9X-o6GGgd-zNfgVTwm_yNGp9BfFpIa18jJDUDq413jAFtlSC80wWLBWtYk9lXTOUApCLPE=w2330-h1748-s-no-gm?authuser=0",
    "date": "15 November 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 16,
    "title": "Savage beasts",
    "pic": "AP1GczNsg8Kpw6MNJ5qnQRkzUcCL-tqRm7o_70LjgrWjLHqvhIT7Qambaf-Rak5MyxSBYuZ0v95wn7cQDlYam84CLuIqnpYo0tmmaNMyNH_bO0jYSxQ40_jz6cMw-XoBspEBVANQe0Z9Y9Aq_mqFIvToKrs=w1312-h1748-s-no-gm?authuser=0",
    "date": "18 November 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 17,
    "title": "Dog bed cleaning day",
    "pic": "AP1GczN_PylMb6jRRfo0K5GkHejs9BGuTlFG9is0GmA1cHeYdzQ-PaQPrTaalbgi8Pdca9bDqwJTeqCwXqW-8PYYKQbWFYvEiHL9vj_GfTjyRgIaKA5bBvfZKYt0Du6zuVwJDY4XBUp3YfuoFS3AVKKfr98=w2330-h1748-s-no-gm?authuser=0",
    "date": "22 November 2025",
    "width": 400,
    "height": 300
  }
];

export default function Trio() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center text-center gap-9 text-balance">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
            The Last Three
          </h1>
          <span>
            Kathleen | Pinky | Possum 
          </span>
        </header>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
          {lastThreePups.reverse().map((lastThreePup) => (
            <div key={lastThreePup.id} className="rounded-xl p-2 m-2">
              <span>
                <Image
                  src={`https://lh3.googleusercontent.com/pw/${lastThreePup.pic}`}
                  alt={lastThreePup.title}
                  width={lastThreePup.width}
                  height={lastThreePup.height}
                  className="rounded-xl"
                />
              </span>
              <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                {lastThreePup.title}
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                {lastThreePup.date}
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