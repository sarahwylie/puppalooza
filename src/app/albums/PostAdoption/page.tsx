import Image from "next/image";

const postAdoption = [
  {
    "id": 1,
    "title": "Christmas with Mom",
    "pic": "AP1GczN43ZKjADukJqEgHDSSPhE4h_M2XI-iLiXR5JQqWf6Fx-6N2-kErxMvxa6_52bgA4IDh0Qu1eVummZIhrV3q0uGcEXu7RChGr1oadkLxykcsPzktd9UoRvukexAqCDe27O5rsfvS9GMmCcbt7EUkwU=w639-h896-s-no-gm?authuser=0",
    "date": "14 December 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 2,
    "title": "Possum and Carl (formerly Piggy)",
    "pic": "AP1GczO6cuk7Rxq9E4M8VcptOy_7qk1suZQrI5XDA_MXuwho0Wy-BxW55asW-QqKTekpYtHwsCFhHyT2ykao6EpSFT8GZ2rCj2BHdXiKYOD_TOALJ0933_oQR96XMhl0D1hpvzwGr2xPT-fMKZCPD9WBG0g=w1024-h768-s-no-gm?authuser=0",
    "date": "14 December 2025",
    "width": 400,
    "height": 300,
  },
  {
    "id": 3,
    "title": "Xena and Poss all worn out",
    "pic": "AP1GczOXhK6JbdkUWYm5hkuOyXMEtikjRLtflW_7jb2JjpDwZstEOspIxGS6ZJsWtfI2A8u4EmTzompleOuRwLvXPjophx8Od_zTdJnC-Vgxd9AG7fUOHUDvoh6-4uUhVVXixCFPqFn9cPzdfUwSHZwX4oA=w1195-h896-s-no-gm?authuser=0",
    "date": "15 December 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 4,
    "title": "Willie Jack",
    "pic": "AP1GczNhGPNBhWKDCONL0mxqY_s31vM1j-nEWm_R3x24ayvGSZZTaWltdrbK89O23IgQo4KSgvqWmqa2A00ui0Y0_YTlRWOKH142o3gF_z5y5MkO-1OkzGc0plv8DzsWhdLkNQVU9ykk0EMyPyyOsevV0WE=w672-h896-s-no-gm?authuser=0",
    "date": "16 December 2025",
    "width": 300,
    "height": 400,
  },
  {
    "id": 5,
    "title": "Those ears!",
    "pic": "AP1GczNT9L0ts1Phc5kLw8cZS-2WGQ8TXuWmryp4jVnNj1sQ9DPi_AgSrsRqfZfs33hmm_RrYRr4GXxhDaxpo7LcMJkBYraPbEy_ul43pvKJvTlZkk4tec7fVP0mmXJ1TDzPDRtqmbgfSId-LOMNBNl3rNU=w944-h896-s-no-gm?authuser=0",
    "date": "16 December 2025",
    "width": 400,
    "height": 400,
  },
  {
    "id": 6,
    "title": "Twinsies",
    "pic": "AP1GczMY98LYDwrs7vMmrpL3bhA9CBJssfAKi-t3T55CigOfwQi23Cn1phgHYOfPuZ_YOFdmkWuJzGnUSzx8F6JbHxklyUuxLBwSFMykaa3tmDuxUnAB62oKjzuJdvSHDjOAz0WzX3e2YlhXpSDXgpeuTuk=w1024-h768-s-no-gm?authuser=0",
    "date": "17 December 2025",
    "width": 400,
    "height": 300,
  },
  {
    "id": 7,
    "title": "Three pups in a row",
    "pic": "AP1GczPPUk3R0I6GU9zCmiPZ9a_KQf0p_6tfoMAwxMl1E1O2Hx3plpjqV8u9ZbZm-wEqSoAy6nEwri3uDR1KznyDtbe6DXUczdh9rcBKq2Jc_lZmCeQ7dZMvjWmAVu_YHxNrlHajU4-Ccjgrva6KMbeRgvU=w1320-h768-s-no-gm?authuser=0",
    "date": "19 December 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 8,
    "title": "Sleepy Poss",
    "pic": "AP1GczNHYclSwglstM_kQq_hD1WtaBlOaxPbkVLJYvAIszYOzzwKTiOW6NtxWR_w_B96-A_fUx_Bup-e1HxgLijOEXasiPrXcu0NCN3j5oF9EkYT-QCqOszySlnBzIwLuls-0b3ek5yeUUcm1PvMh27mjzg=w1024-h768-s-no-gm?authuser=0",
    "date": "19 December 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 9,
    "title": "Rocky and her new big brother!",
    "pic": "AP1GczOVHXz0I54igoPbEY9Lb29C8cRzJl0O-wYEMPItwCDTMalriBJENf-rPcoFpIETpEmj4JRsmVEncdX4y5SD7S2d_eWPtJOqmVoR46eiGBd0FdIcCk4eabNew8d8pMgKMBmYLpUWjqw_3VVotROnpOQ=w672-h896-s-no-gm?authuser=0",
    "date": "26 December 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 10,
    "title": "Rocky and her brother out and about",
    "pic": "AP1GczPTMBdFDdYy7CLObgNLn3QD8zbgns1TPTcKz4s2MvP5bClnEMpjeU541lQAo-8cTaevNSHU8DkmCO8s5D6Gdf7YmNCtXJnyJY6bLvrfIvIQ9v1NMj4V1bsw5G7uvRtGmUonEuVRFpmb3tVycqVeq3k=w672-h896-s-no-gm?authuser=0",
    "date": "31 December 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 11,
    "title": "Adventure hounds",
    "pic": "AP1GczPa6xscbyxe9OKAp9Xcs39IOGmawJfEstOZLXZ4TCDbJPNdiuQA8RKxnjtOSmqhQ6BzWtqMDrhkoTIEUp_9CY4mJDbHXEjRG_Zg1IIx4TnLvGoG73jN0xJ-hMKyNuGGnME1_78i4-9czToINZCMdfA=w672-h896-s-no-gm?authuser=0",
    "date": "27 December 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 12,
    "title": "Sleepy snuggle time",
    "pic": "AP1GczOoFJ5U8Pp_NFuFo9HGWOC4L2C8N_mGcamjQdggBo9jAJH_seJFahhaX-ye7ptkBQmlRYB88yIsBrZZER2HGTU32_RBrwcbF6Ufoos-FKOcU1EDGT-Lot154mMeIgw6jk15rZ6SMzKoQAJdWHMWY_k=w1024-h768-s-no-gm?authuser=0",
    "date": "30 December 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 13,
    "title": "Entwined snuggle bugs",
    "pic": "AP1GczMx5DYoyc5GRlmIExtksTRwz83FFUeWsw4z-ejyG3mvc980i5DU1IEOtcPxZ3C1MIkkT65Cu1yMHQvT5wwzLZag11UBm6wGxUKb5HBPK-g62tLdKJOKoamzjLopvopgjmZX7qgQV7cScCYq_mk_eYQ=w1024-h768-s-no-gm?authuser=0",
    "date": "30 December 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 14,
    "title": "Turning out just like Uncle Buck",
    "pic": "AP1GczMrmw_hmFQmsmCL3GALEuDblyD7Cwyg_MmIZ69jyrV3wI4e8E6apiZyUacPFb1-IEGSeR62VStzXREtmI5FsSu0hOs5bNhB1KvYJIauRRItfyS5odjL4xHi4ieFy84P2tgso2dA0VNb8pxULDI9bwM=w1024-h768-s-no-gm?authuser=0",
    "date": "31 December 2025",
    "width": 400,
    "height": 300
  },

  {
    "id": 15,
    "title": "Three sisters",
    "pic": "AP1GczNi-BVqbQJpTg8hncDYJmuLjciZpRd0bpH7VHoQdYHT638DNWCbVljm_6r5RMdyKwyxE2atkpKZIJDtDevL-sP1TeYWVUgydDk-fFOxU3TvtXpF1oqBqhiZJVGtghr64FupP_voqaRtDeklD1UVN7I=w672-h896-s-no-gm?authuser=0",
    "date": "31 December 2025",
    "width": 300,
    "height": 400
  },
  {
    "id": 16,
    "title": "Willie Jack and Possum",
    "pic": "AP1GczOs-iUWK-4837iKsmCV0FrBYsmXBPoBtMPJvvrwLmMOGyl7jCgICZW_wlROIkogtijWsw27A6YnOu6J3P1rwaM_MTCZ1h-MiEuzqgyjgkl_PbYEY1p3TxzaA8eDBwf9zS9qy-0HdbxFmPuq1Mn39vA=w1024-h768-s-no-gm?authuser=0",
    "date": "31 December 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 17,
    "title": "Sister snuggles",
    "pic": "AP1GczNM-H6ik02Ena_n2vaNYTBK2toBki0kx4xGImiG6WlMxB-g1yqhJyxk1Bal1zPF7Xpv3OeD7_oQrnN74mVIBBlEYjSY_8nJIHiuvwZL6qJirvJ7XDs7PLcXbmf1khf6QxWnO3deVnldvjXZSE4HhvQ=w1024-h768-s-no-gm?authuser=0",
    "date": "31 December 2025",
    "width": 400,
    "height": 300
  },
  {
    "id": 18,
    "title": "Mommy/daughter photo shoot",
    "pic": "AP1GczPAeUUaJFtucJkKqO_6VBrcUxh03A6heIlVy-OrW22QRVKAhhZoGpGGasG_sP3gyqXmJL1K38OPJUoiU1D7YFmyXDhXmdtt2vDnyeaNMNWp9EodcSHHSc0Y7G1XKt6sbfm-od1wXEPVEJWsuBpOurw=w1024-h768-s-no-gm?authuser=0",
    "date": "1 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 19,
    "title": "Silly Willie Jack",
    "pic": "AP1GczOkk5uIX_K9GH32Sg0F7DNowy3NYHwsrPKeiZ248fkR7vQ6oR3t2nIbzlO7sFBmRrKVUAXSg0M0ga6VdcGMSTimPizd-uS0yb5mXojBRKEdHUPzRiG3au7AeVHLfoHXf6GCNUT7p-9ewegjVjclNfU=w1018-h896-s-no-gm?authuser=0",
    "date": "1 January 2026",
    "width": 300,
    "height": 300
  },
  {
    "id": 20,
    "title": "Happy Possum",
    "pic": "AP1GczOxXRm2PZRQWgp7GSZhaCZQTFtqjwWgQUPtNO4cGPf-NVP5W7G7LlrECj6HCXH55wyFEWK9BlK_Xb8HHCsgxxLSvGIN6Gg7z96DubbPc8vEteU3gYsgR-kb-z2u006eeTKw42xVLA7EA-0J0SoPnio=w672-h896-s-no-gm?authuser=0",
    "date": "8 January 2026",
    "width": 300,
    "height": 400
  },
  {
    "id": 21,
    "title": "Lovebugs",
    "pic": "AP1GczOLvvNU3sfkG8I0BTbt8VUJcFoiI2yw0i2A1N9nrJrfOPTi69dn0MuOiiUnLMlZnw8tCrak8ZA_e7Vw1qTh7g_qGgyPUqknGwcUeyMXX8lrXXjNgikBmatFlGNF5KjipLxq14YVrsxFPqGICXHNrEo=w672-h896-s-no-gm?authuser=0",
    "date": "9 January 2026",
    "width": 300,
    "height": 400
  },
  {
    "id": 22,
    "title": "So Precious",
    "pic": "AP1GczN9FSL3gYFCGTzo13yg3zEaK2P2DWkdNoEELWEXT6OKP2_6_1PhOZ9c55DR1hJapZ9BUYwv4SGrowzPy_Uc3QCaHG4CkwevPlBwTI-uqBw5ntyGtRJWimAFC2Wh1lNTOpwsWEJTpE7r0Zy8pfdP4S0=w1024-h768-s-no-gm?authuser=0",
    "date": "10 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 23,
    "title": "Silly fools",
    "pic": "AP1GczPvtGbEVr4FRqsYsJnnnoE9l9nLOOTCGGgP3iqwKR8HH-9WVb1XjzWVsftFfXC0rQFixPioAdLrGjUj9QCS7tt68zeAnqfZomNTKkZLZV9T0oIWEzvXJknYs9Q1Vk-3O0sODvExa0QhleQ1QjAC03Q=w672-h896-s-no-gm?authuser=0",
    "date": "14 January 2026",
    "width": 300,
    "height": 400
  },
  {
    "id": 24,
    "title": "Twinning",
    "pic": "AP1GczPX-EKKV1JJ4MWFnJnBELO7-c1tPXDydwAlaNkBYYWzlEnmsIhmdsDoUB1KwMsMdcvpOZm-qOJMCJdun5gcIBfOg6d5UcdbXsKIu35Sg1VWCU-QFOl7k-fUd9_OkE9TJ-D76Tt49r2LGfDt_jIGDOg=w1024-h768-s-no-gm?authuser=0",
    "date": "14 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 25,
    "title": "Twinning times two",
    "pic": "AP1GczNBSUJdZZ77OhpHi3q0Qvlv7BwB3FwHZxQt1zzjvcRyPWz4tNHpWbBuJSOA23Dbm0kyfx4_TQmx1utzZ4Esw1vVwvnnk-vhn05_0tmq_JYZbbyD6J-Hx4XBSUsqH-nFKJs-KQ4QEY93FXuX4MNZsW4=w1024-h768-s-no-gm?authuser=0",
    "date": "14 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 26,
    "title": "Very fierce",
    "pic": "AP1GczMyOdUbYOhQqF3_DSNS7EA_VKFdTyF68lDmsU7540ZgDzzW-_zwMINH3rbYBjcxT5yS9prdMhD0_yxYJxmIrJt6_lYK4EUCBx0ghWT4PYGjD3yTpSGacwY_n6NsOD_gmPPP64SM2FqbmlkBT8TWClU=w1024-h768-s-no-gm?authuser=0",
    "date": "14 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 27,
    "title": "Duplicate",
    "pic": "AP1GczMkrYzLrEuFvCxNDMNi1kDGhgwsN8Vdm0PKihBl3FpVln2NymYr_8mTmUxLE__2_fp1rfViJ1R-WSUm1woO_E_jT-XATRkwQv6MtgKK-ccBxnrdIuOOlSTpvLYoGrhmBTpQwY1AH4UQGRLBI08Ydlk=w1024-h768-s-no-gm?authuser=0",
    "date": "17 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 28,
    "title": "Poor Rusty",
    "pic": "AP1GczNv1VYztH3csbsYL7zclcner7kL3GJYk6XjoQL64Rue-bCGcr8NQT85liITimGt4ApXItVstrHTyT6fKY77k8BYg_S_xFHexz2AqmKUfNHH3AGGYDISej6Ixg5hiyyIku2oraEyGrPpi01U1Zmo49U=w672-h896-s-no-gm?authuser=0",
    "date": "20 January 2026",
    "width": 300,
    "height": 400
  },
  {
    "id": 29,
    "title": "Ouch!",
    "pic": "AP1GczPm4zc1EBF5d1IlLiFbDhMC7cbXo-wojls6tPSsKEwtxuU6jg0BG_M5kpHSJf-E83yBhrqubPOhxa5bQj0cn3_L91Z3Vj9YlPh4AnZmvDo0RW3UPqv6Yrn4XOWrBrWrcSeIDDG_KlOumk9eVlqFqCw=w1024-h768-s-no-gm?authuser=0",
    "date": "20 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 30,
    "title": "World's best funcle",
    "pic": "AP1GczNUlkDmU5QIUjIN3HSMTeijtWIydIPk-l5K8hipVjlsqdDm7VBPBaPf89VnHgbODmYyNOi5phhIHJYWi9jPz7UkyW-xRwA70zXB44nMbA93AzuL-SiPZYx9fPNf6KsD45j8hoVbH7C4P_yzfOisD8M=w1195-h896-s-no-gm?authuser=0",
    "date": "21 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 31,
    "title": "Very proud",
    "pic": "AP1GczN_jDyMxKHxPUeX7UliN7Ct8Hzgxj0utPxbe6LSj-fV23iF30SnlXBP9mcLIkAyMbH4GTBD8b7q1iE7etFj55zd5kr_UBaD4hwp20pQLwjd-BJ0DTGF7iU5cIY2pwtKs-8aKsTeS5wztbmMTL__dU4=w1195-h896-s-no-gm?authuser=0",
    "date": "21 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 32,
    "title": "Group photo",
    "pic": "AP1GczN38PBs2kPlcl-7bqa6qOo3QP1ibE1tyxjHPPlhx0il3J4BN5W59OZOcXEwPp5Eau-JJ-av5yh7gKzWDXjbp_5aHFZNY5y5Z69gGldbv7gnq3wMFL83bb_gHoC3B0hVNGShtVFoZuaM8qDfxL6xvvA=w1195-h896-s-no-gm?authuser=0",
    "date": "21 January 2026",
   "width": 300,
    "height": 400
  },
  {
    "id": 33,
    "title": "Sister snuggle",
    "pic": "AP1GczP3P51s-Kq5uKE0YAIcWBxxVZrPHpVdSmZdHWeeHagektbDGqPZA5PsglqQ1ynFZNUhXKTtIHFPEYUGvX-OFJslxkQIY-aDtZCu9BOXGcmmZbdgP56gWnkeF7QhQYz71FcLXy0lDmj4j9NMaEoKCsA=w1024-h768-s-no-gm?authuser=0",
    "date": "27 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 34,
    "title": "Kissing mommy's head",
    "pic": "AP1GczOK--csOVxH0for5kUmKLD2tQjJK5WMmnopl_ajgMs31qiXZXyc5tk2k7jda3F7wr7t8H7tpeosecnn3Q0ldlFOupkCVBJqMRb0d3IwEZDnWji3Fz4wQQ5d48HASZJF3mVhpvx9jU0sdt06eM0Ug0E=w672-h896-s-no-gm?authuser=0",
    "date": "28 January 2026",
   "width": 300,
    "height": 400
  },
  {
    "id": 35,
    "title": "Beautiful girls",
    "pic": "AP1GczPpVApvs2UfxAZ9sLQZ97KLZ9u8agP9INFi_VbJYAo5jX-nnMA3phN5JEAfZnxfYC1yCinnuTTr3ucEnHgzAw9d_979OJPGs36AAK0SRkiqGBDddnP-Kqt-EeN0qJEVEsWVMH4rgcMizfMHUKphjtA=w1040-h756-s-no-gm?authuser=0",
    "date": "28 January 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 36,
    "title": "Silly Xena",
    "pic": "AP1GczPdWCSVva9spx9JjhTsJRDKtIIOPD6LCQ-HXQM8pwdS4s1euMgUNgohoxcAJkeCTlhV8Bg9mR56AiY_rC0PH1ac6_-wZZrb7jKvSfL-650fmFTftRYCcmGvYSjr-WAT5ITTJJyDf3Xp272ka48nWLk=w1024-h768-s-no-gm?authuser=0",
    "date": "11 February 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 37,
    "title": "Hot dogs",
    "pic": "AP1GczNA5PLJ3-NcIe0DbgWhJ4SBNkuRBA9hrKZwEWpLIgun-MvWNGN2TCKLsOu0BZ3Ps6oWrKYUIeQiXnQqCjWpi5j26x8DPPqMx3HuM8hbpMJbXY_nYrDR4w7Xi7Uf0tzjEDwTaKpjAVNFLHTSym0-PDc=w1024-h768-s-no-gm?authuser=0",
    "date": "11 February 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 38,
    "title": "Soaking up the end of their playtime for the day",
    "pic": "AP1GczNIh_KO-vyBVdazClZnQSK8HCH_e24d5wvmEQYfC0n21cy62FOloXXTuawrCkS5GrERrQKBZv520QYHvM4NDgK-JEAvaenqQ2a_yxbRgRyi6WxX_UZgyHbOU2X3jTIPmELd9D97jji2eCJ3GcRoSrc=w1024-h768-s-no-gm?authuser=0",
    "date": "11 February 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 39,
    "title": "Watching Willa swim at our first time near water!",
    "pic": "AP1GczO419VsNqeLo-YceKEdmqe4OpzefLsct0yW0iBWerWXrfLc_oPQEWgioLQV05NvaAyi6zosbjT9AxN35fFz9QH4nsCNkTAeTcFDlatAfhAkk1JBQgZPHk9UkZMAZrYw1u5ZijhOVteCegkBxDNqB-g=w480-h360-s-no-gm?authuser=0",
    "date": "12 February 2026",
    "width": 400,
    "height": 300
  },
  {
    "id": 40,
    "title": "Getting DNA to find out whether she is Possum or Dog",
    "pic": "AP1GczNhlzgRFvwV5eEdKH6iMgn8DfoOgKnrw3FLRD7wzhQiWf5bsxB2Z4l8ckIjEB8CjGkghiuXdoGs_wG2GUUwkQiB7WwuoZSPCh-LLlt4Ev-6fJlhIR8wyMZR2qqelhAcwMpvrq1O0HNyeQjb1TiEwI8=w672-h896-s-no-gm?authuser=0",
    "date": "13 February 2026",
    "width": 300,
    "height": 400
  }
];

export default async function PostAdoption() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center text-center gap-9 text-balance">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
            Post-Adoption
          </h1>
        </header>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
          {postAdoption.reverse().map((postAdopt) => (
            <div key={postAdopt.id} className="rounded-xl p-2 m-2">
              <span>
                <Image
                  src={`https://lh3.googleusercontent.com/pw/${postAdopt.pic}`}
                  alt={postAdopt.title}
                  width={postAdopt.width}
                  height={postAdopt.height}
                  className="rounded-xl"
                />
              </span>
              <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                {postAdopt.title}
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                {postAdopt.date}
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