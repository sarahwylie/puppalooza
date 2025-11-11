import Image from "next/image";

const finalFourPups = [
  {
    "id": 1,
    "title": "Puppy dog eyes",
    "pic": "AP1GczMutQRQ-HipLCYdX0r4tCObwn8wSLDUGlUq89G8uMratPVMfw2ZOZeQyVoJw4Pmgiqz_N666JQ-wl3LNSvdsIJ5ArDPEJhHPWT5tIK5BzXAF-qngSyTdWIuiWseV74Ceg0Z-22vH4MuhjmcnZ8Ltbo=w602-h803-s-no-gm?authuser=0",
    "date": "25 September 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 2,
    "title": "A new bedtime routine",
    "pic": "AP1GczN_lvAFfJ9xflb07TcLgr4RpPQQwDmfb-nvaR5HEcw04IfmqXEx6iG6ptbmfLv_43F4mj0mZPz0osPh_sL0crsvU-hZOkaJpyks_1yMmnwLClDwxg=w2400",
    "date": "25 September 2025",
    "width": 400,
    "height": 300,
  },
  {
    "id": 3,
    "title": "Worn out",
    "pic": "AP1GczNwyTyfHKusnnXvqIFHU_U6VW2TCH-fUrq7oHrOiQH3Li4DmpHDiiEMs5FC6jwb6Q1ccH2odSN13WBVTiZfI3JcxlSrUdhTp_B7imuamq-Je73yOE48rrLC0tP-62yZYHaWmXKTKZrPdhaoAP4akzM=w602-h803-s-no-gm?authuser=0",
    "date": "26 September 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 4,
    "title": "Our sister Xena is visiting!",
    "pic": "AP1GczPO5Wsjy55r9KGQZtJhDduoAVyk9AWEDI5SErUjJsT_TMXpD7EKUSVqeS2kKOeRLYzQgkWd42HEZzgkKlOes_3ziIMS3HqTKdUJvN7YvybwJ-fhBKMeUzotJbFf9gbPXjrOdmYji4Wf6sN4ihTUduw=w602-h803-s-no-gm?authuser=0",
    "date": "26 September 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 5,
    "title": "...she wore us out",
    "pic": "AP1GczOJlirOY1NFCXjqYFnjYuEFK9VazM2lqKPIrjzSfKvt9zj_-RY-NhmnxdvOC3Gbrl-parVtN96_KDkENTnDnrcGyVclUAYsLGpndedfQ5vyFxQj3P3URD-WB34xkUKj2_4y4Ibjhr33SXaqSPyU_Rs=w762-h803-s-no-gm?authuser=0",
    "date": "26 September 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 6,
    "title": "The Four",
    "pic": "AP1GczO-fScnEOdJ9HWApTyXn9uzJllGF2oBRrmhis3ZR2KwKifyxJrXHwauyzY1WbmT1gL7-NTAY6wkt6CMKikIIS0D4w5yQqifTFoaEpaPKvAY0p_LFEAk1SgksW9ZwbhPS51eg4s4FWsPZm513gOs0LE=w1024-h768-s-no-gm?authuser=0",
    "date": "26 September 2025",
    "width": 400,
    "height": 300,
  },
  {
    "id": 7,
    "title": "Party after dark",
    "pic": "AP1GczMf8DqlIqFLnw7oyAJNvGsKmgjcJ_9jC0cQGsxeEKimbL4zATztb15yWDJ8kDsDEu11gVp6fHzbfYKUVEej_Qf5BftYoz_qu2WmmiWbkEEVY_eCtfpdz3vlLfBYjzQUH3uJoK12ka45SJnwyNGcn0s=w1024-h768-s-no-gm?authuser=0",
    "date": "28 September 2025",
    "width": 400,
    "height": 300,
  },
  {
    "id": 8,
    "title": "Sleep pile",
    "pic": "AP1GczN34H40L-KJO4mtTFG4h54Yx5fVNR2ZjDFD8V6lzYOTwWXDOgtJgWbyr9a1JMPrNOmZ4OJC-_R9FM6A_HY-VSwktYUBmAYStcMv0Mh-yEdYwhdMcVaXTIDM4sB8nIDgV4dNmfMN6lpSnq86w84eFw8=w602-h803-s-no-gm?authuser=0",
    "date": "30 September 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 9,
    "title": "Sleeping or playing?",
    "pic": "AP1GczMLgMkefeGPJy0EvLFV9HQ3pvYqTB0Kyfk5ZBnrQC0yK6p1LJZ8rAV0OBI8Lb40PTptLrTzMU7vLmNXVCk-cJCWbj_CL73KWX2DKoFGUccrB92qfxJUUybRCKVonc3KSyEmhCaCxrgjplAmT96fwwg=w1071-h803-s-no-gm?authuser=0",
    "date": "2 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 10,
    "title": "Sleeping.",
    "pic": "AP1GczMerUROi3V7_a39-OqYar849pGJ-vH2mUlT2geAoBO37D9vX4MCguSDo5xbgl6JLT5VgxU76_ZdVvvs-aoNOBIDHY4XOwoNnMCE9zZ7-ZaRcPEJN_vCHdSsZLcC-A9poy5VejRnrJ4w8Q_FHcB31dE=w1071-h803-s-no-gm?authuser=0",
    "date": "2 October 2025",
    "width": 400,
    "height": 300
  },
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
    "title": "Nibbling on Pinky's head",
    "pic": "AP1GczMn3_CPQO31aFBSGoDJhJ5v-GvJOxx4hexoMRWu4fEo6bxK5XDFUr3bDHFOPpIsXQgB2fyVi2C9cVXCuEogYj8rF_zKH2SrhRLNWbx0a4Ja6I5ubyYzuhWYEE682YOYg4TTYMAlVK5JXAib8iLd25s=w1024-h768-s-no-gm?authuser=0",
    "date": "9 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 14,
    "title": "Twinsies",
    "pic": "AP1GczPhFFbOTOUf1UnD-t4gIJzMhLiUX2JRlm_ksXk7CeHEOMODh-obI4iI5v_47vpgkV-gT5QS4xmICkFeUj7Y8xwzEX-S-NaEqNp2ZSZtybkY3sifqy9c6LBwTIKWVjtgDwAVV5MTG_R73YXphAdgo74=w602-h803-s-no-gm?authuser=0",
    "date": "10 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 15,
    "title": "Nobody can see me",
    "pic": "AP1GczOIAeiDXsAozaKeaqx3hnDqcRCugQSOKGy5AgXOYs1nRxlnEnF3dNePCnm_IXAxmWFZwl-I_lET4irrYVwYYDXwA7JXatWnlCPX_ovcPqKijGYDT_mpw5Qwzq7Y56E7OSM6MC6B3xJRT4HHDGfO04Q=w1071-h803-s-no-gm?authuser=0",
    "date": "11 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 16,
    "title": "So dang cute",
    "pic": "AP1GczMA00Nr7CSp-nXo4ANPaDGSsggRg2zpPWySWTHNpdoPeNc9-inhhbxmti0sBEecL19NosnMGm7d3sncdggPlrUbqlvE6MTl_LC52Uyui1_hPY7q8mMjNraAqgQbHbkDhA7L511NKwHMrewN-lXxC2c=w602-h803-s-no-gm?authuser=0",
    "date": "12 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 17,
    "title": "Family Photo",
    "pic": "AP1GczPtn6B7Reqoh2NyGIUQ3aSHv8l93hveSGC99AVLKS0JB7ur6x9o9XCwV7dwN4FtBV2WC59kkBb7wloCeC3t55DhxRVjyu-3SSqtEuX1nEMVaxEkHqqOjj1KOShftxel0yem1h1cZVit4OQlkMi2Qlw=w1071-h803-s-no-gm?authuser=0",
    "date": "11 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 18,
    "title": "Screams",
    "pic": "AP1GczPVRgJVRn2rvZ4p9ZLiyq4K84MaIE09G4y0Af6SMyFqfLRIHowB7gaHDRT6mBlHXWzVbkQZuaq_kVfqDoQrqdkQdK0ClsL4uWc9sz1F10ICHsObd6ty_6h2G1fqFDcFMNj7z0IXSsuMq7SCd59oDOM=w1224-h918-s-no-gm?authuser=0",
    "date": "15 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 19,
    "title": "Making Up",
    "pic": "AP1GczM0ZtP1jNsRR1uso3eRq8gymCQNwyOkYINynEfJr0Wdff6lxdH8G11l1YrYOqfg5U4tiwWK8KSYs6lGjU5cMXVghoi4hKaxm1MQT_3LzMo6X-PSpBgmUJ7xGjiHeOQ3wihomVBAZclktV7gunlJz2E=w1224-h918-s-no-gm?authuser=0",
    "date": "15 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 20,
    "title": "Dirty Dogs",
    "pic": "AP1GczNDV9PGTVrSY-lSgZUe_NxBhus5XQzAkzPYQV_fKJtRdiBjGmL8P6_rAzBwLmzxRBSG6aaNb0_IW26n_So2t1XtamE_xXsao5s5yClQ4wwgPOM97ON9ckYwdZNz6ozETzOu0x2-vRHVzgA0I9BJFHE=w1224-h918-s-no-gm?authuser=0",
    "date": "18 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 21,
    "title": "Xena and Eva Visiting",
    "pic": "AP1GczO0vfzE4OLu4cZgS7BEGoxAw1Z7ZXZzpf2I4ERg193UKy_Gb_DTFitvSavzbGLwRWmXGQYPJOwmf9mi4HPQNF-UPaRGdel3v45oTKQ97G3gpPlCemmKBknjAxdQPE1dWfWB8FP41ZrDA3c5BBCZT-8=w1224-h918-s-no-gm?authuser=0",
    "date": "22 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 22,
    "title": "Just like the old days",
    "pic": "AP1GczMCBd5CMoUAYABBAp0qShgr10tt2evtLvmCePchzxdHGJFAZpg-M_H6MSG5l-oB4FdSCnW_FZccUT4IrmNXGqf_pGpF_LCdBeYzYzF0cEMxdTK_5e16KCvdvK5uJjUXL0Nsp8lDgdGF91Drm7KIMc8=w689-h918-s-no-gm?authuser=0",
    "date": "22 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 23,
    "title": "Possum Blep",
    "pic": "AP1GczPWSgONRURu60hPnCpQj70vu2QO05-Ea2HC25NZxP3XJhsbDbhQ6s63sueBuxMAvxZ5u0eG9_FYrYVoC8kdHRGBd0eMPrHq_HNkfgsQcXi1_fdY9Iv8jpGhvbWXWPWxx69CVDDuQyBz5E91V3yeReg=w1224-h918-s-no-gm?authuser=0",
    "date": "23 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 24,
    "title": "Cat Hunting",
    "pic": "AP1GczMYp9Me-FiFqr2J0pHo16fLM2-k_Pc237DT5bLghGTt31F8UoZ5TyWm8grjAA5teCCdAYlu8VHeDrOTsFnyfH61c7x-fwZCFzvF1cB5BMfEn6L-GVvQcwfWY_Qp_fw09zNCoYzVuJQaLjOeInyt7F4=w689-h918-s-no-gm?authuser=0",
    "date": "23 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 25,
    "title": "Splinter Belly",
    "pic": "AP1GczNYATZnQzKgOppu_YXB7SmmKf8CivLAP_afx0JFrrH_SDY6XqHNAacw7tFKx6BDVaueuG44xOOAcMw2JUeBJKruBWxjT1f9pFmOnJaW1Fi3A1H79MYFWHJKdgG7ipVry7koktv1oziK29ArfGT1NhE=w1224-h918-s-no-gm?authuser=0",
    "date": "24 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 26,
    "title": "Hugs",
    "pic": "AP1GczPWr-nmYQe6Ls0-nNXEXDvYmio_OIZL8y2FDnyK0oXDg8mtEqFtKG7ebYuJOZ1eg6QMgWnRHhAbbDP9y_6UHlgKaG4px3Ubf-H-59jgqS0GPPhOGrY8-qYJ-7dSwyasvr4_CkK8ld0Cq3uin-LwJAc=w1224-h918-s-no-gm?authuser=0",
    "date": "24 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 27,
    "title": "Naps",
    "pic": "AP1GczPX7mablCHJX28c_ZfhXK6auwUPbmSzhgRWeFQq486y4JPqB4L72a4k-kOPjHmd8oAupTz86QIuDKaO04TAhbEHcILwGiqZExmDUWFhv1b8JlfwSjLBtDru5fANa1MWx1MzJCvm885h9GIVlQztF7Y=w1224-h918-s-no-gm?authuser=0",
    "date": "25 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 28,
    "title": "Big Kid Harness",
    "pic": "AP1GczNrLVm-QETeIinuRBitRW8L1X248Ac-GVTZNJU-1UIYN-7LMnQEE-oO0hwpHu8q4dG1gpI5RmoyUxw_vCt67HOMsgSQYPz2BwDdO2IzoY4bnjTzYwUoaGH49kU13lMeWRcP6Qjf6GDzG9ED0HHZEKI=w556-h918-s-no-gm?authuser=0",
    "date": "25 October 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 29,
    "title": "So Sleepy",
    "pic": "AP1GczNKJLuYNLziS_6mSOufq99ieiuxIClhZx5qK298Dlnz3rDG_t-bHTDj-pUhjsZd8D5iHZWuEznTXYtx_PuWGle9mDBwpAeqjd_nmso9IvJ0GZItEx0EzEvL2Ej-YBJm7k9XAksh9gdAkVnlSx0-cOY=w1224-h918-s-no-gm?authuser=0",
    "date": "28 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 30,
    "title": "Naptime",
    "pic": "AP1GczMICKiaDDtGlPENMvwA0uPrRTNUt4fD_wnpjIR9_e-AcOSiZTZzuZaR6DOISF1PAsPtywGUo22cGgIS8uxPEBB920cgs_UiQrKe_v0U69XIMsSa6AIpBMVObJ0bjJSlVuUq5UDr0gBG8IK5C5Vw8m4=w1730-h918-s-no-gm?authuser=0",
    "date": "28 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 31,
    "title": "Mama's Peeking",
    "pic": "AP1GczP-apuPxmvr_0wVXktGHlbddp6JJIQCsipO5dNdhbttWij_STzDKCwYMAv2wSTwzukxUkVqm5upSyfx4AJB_kF7NbcqDy5AD5XnsoQ4WdqMvlz4qqv7I1xv9fTXyHNrw2KKIy9XxJFRbtii6piEZhI=w1357-h918-s-no-gm?authuser=0",
    "date": "28 October 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 32,
    "title": "Laundry helpers",
    "pic": "AP1GczOaYyvtI5e64ouTvJVHs8_C5hSAeiieGSwkGhN5iOP7S07K8MyytZzQTc1ZF2PuuHS6dSMblMV6hj7xyccavp1yj8LGALDID10pe0yMy10syJlrXllrsMRfsox_9v3L47L2XMTsnR-JVtRq9j9g93E=w1332-h1614-s-no-gm?authuser=0",
    "date": "30 October 2025",
   "width": 300,
    "height": 400
  }
];

export default function FinalFour() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center text-center gap-9 text-balance">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
            The Final Four
          </h1>
          <span>
            Kathleen | Pinky | Possum | Splinter
          </span>
        </header>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
          {finalFourPups.reverse().map((finalFourPup) => (
            <div key={finalFourPup.id} className="rounded-xl p-2 m-2">
              <span>
                <Image
                  src={`https://lh3.googleusercontent.com/pw/${finalFourPup.pic}`}
                  alt={finalFourPup.title}
                  width={finalFourPup.width}
                  height={finalFourPup.height}
                  className="rounded-xl"
                />
              </span>
              <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                {finalFourPup.title}
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                {finalFourPup.date}
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