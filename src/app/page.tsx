import Link from 'next/link';
import Image from 'next/image';
import HoverImage from './components/hoverImage';
import Age from './components/age';

const headerLinks = [
  {
    href: "#links",
    section: "Adopt",
  },
  {
    href: "#puppies",
    section: "Puppies",
  },
  {
    href: "#mama",
    section: "Mama",
  },
  {
    href: "#albums",
    section: "Albums",
  },
];

// Main page puppy pics
const puppies = [
  {
    "name": "Kathleen",
    "pic": "AP1GczOfLxA__Fdl-yRliOnh3Le-BE-d2Ow9pfWQMcMgTzJGLkM1M1SH0Gz4AggPZnpUW8dRjAGpGjl3QBJ20eZ72mmcq5xN4FLyFyeNDzYq_tqoudQbbh8GQL2PUKdpBotCCCMK09Ft9I1EFC2JQqN_AkI=w1434-h1912-s-no-gm?authuser=0",
    "babyPic": "AP1GczOADOEwVszl0WHjl21Ou0f5bptL7iZwNKxO7Z5DscBGGH3UKEfpsu-27v6YCXFKNTygV-8NZ3aRkAqUvPQBdoYBYpAz3Ru7C2j_jbOx-Rh_M6v8qTCUMVk1Vh4kKsMBzDcsaKoJYcx_l9WQq6Q-W3I=w602-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400,
  },
  {
    "name": "Pinky",
    "pic": "AP1GczPhJqCP0ZDX2Pz2WKDStukTjK7lJHW6Dixkh8Ugb1hVm1FNxVbnOyAsQZ_Pysxr5iVIx8jVbSAdPOBCvTQYijGYjW5dtuPSdO0Fwy1jTylEDaApOWIge0Pz8CQzTAPfzrcAVRvz8wTP4-Ki9_NYduA=w1756-h1912-s-no-gm?authuser=0",
    "babyPic": "AP1GczPU1D0mTF_wfxm41mv_TfEgzKXARuvQcNfcRPBXRP3qzeD4Xsyegw6f2ghBsPoEC62C_iiS-ta1Kk97WpiVzSE5j4SFs8FNX6zwmcnrK_49YQ96lF_W9NnurMGPWkmzXgGRxfkByCJ1XCGyg2m_kZg=w610-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Hippo",
    "pic": "AP1GczN6_zJ7UqgcrHaa0rkwTCDy-rkmfJFfO28yYEtMZk-rPCqpB3KlDhgJjlSmoYvVeUVPDqW-VoMCkFLvopnMshhhw4ZC8k9-rXkWjlJN4vjah41rWo_h1FBd9JoRAa7lPZzDRQZFLgzba5lBCKe1vRs=w603-h804-s-no-gm?authuser=0",
    "babyPic": "AP1GczPsQkYhsErPR0fff-dzH5DN7bQv0srctmXTUu7HrAPs0SnqWp4kqpxKSeNrnuWaF252ZWxEC-VbayJAFurkLxBhV3_5U25zo7yZEMmJFVWhjWu1Eps2g-iHCWnFG3wIuDcVk-P8x_ZY5t1XNb_G12E=w661-h881-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Otter",
    "pic": "AP1GczMn4dK74l923X2cfK9CJo7zMUJJiqfP8ZqWDd4A2Pb0d5kW0wotpQdf4chdE9pQxxeiUYcPLBrBf5EkqoOxrURpzo00Bb8_0yVNIpZy_lCVh46cvAmug404oXiYVS8SiEdEnt8Lg2PJOlfik6S2Fjo=w518-h804-s-no-gm?authuser=0",
    "babyPic": "AP1GczNYndj2Zy4rsB3kpovggEauLP29WgJDXI7RlNPO6K-7LNiY85Zr7u60jnmXaeZhJvO_Ols7ur9JEVTztmLj2CDuJPQ0kCHI_5E-eQL7sjR-XwpzAn7UQUyD7ZbP1N1KyT9hS1Jx1IqSYRfYovQjw1s=w861-h881-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Piggy",
    "pic": "AP1GczPU-1ZtuMwl4gZ3qBbdfE3S0tcJ1uSzOh1iOOa7FUEHdqdLuDhchwGbH_HFpuupx13zmea6QCscYIpmeaS_lzU3RX6TZh_60zebI34ZjMclNBvFLdN89z6MCLG9dAqL6aQiFzKVa3gDYGNmtdysR1E=w603-h804-s-no-gm?authuser=0",
    "babyPic": "AP1GczOmDeL69id4e6mAAvegX9xdJZhAwrcIlGhetrgIXxizFk_WYIkzhapbtlqTUDPoNbI57oayLCwD3lIh-SctXvslzpIpNjb0geXq6mSEiuysItJJcVeafOkX3tHDQ7yV_vdQKaHHD2iV5l5k4ucK8Zc=w661-h881-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Reptar",
    "pic": "AP1GczPK8JAbOt90rBOMjv8JmZ9PzzEYsX6N4xapk5rkQrF2nMx308u93V2h5xqELKt8Jt-Cbcwd7jQJcbF5V0HtghJCaZR0bxr5lh8tsGslpJMTOsbIS7v4UwjdIDKDYsFf_azUCETHkqN-Q6OU1zD93sY=w603-h804-s-no-gm?authuser=0",
    "babyPic": "AP1GczMGdAtOa1X2c--yuiqNBXuEOZsI0jQOTT4hMOlNTVAWXEvSIuqR8ouZ698ZLGMI0J9wrhHyMVkQfHNm7P5sSfNoZ2pWdJ6NQp3g5VFfId7KlGE8T_-hiGo5Qcx0zjovku9gZLSy8gOkyDGbkcUpcQ8=w603-h881-s-no-gm?authuser=0",
    "width": 400,
    "height": 450
  },
  {
    "name": "Splinter",
    "pic": "AP1GczPmUkWViuS_Jr4eJm2u6AwLgVPBcchMuOf19HkTGs8NmiO3d3uisrvcdKOegzQ-tRBYubGm6Ts0EVGAQePrzkB8tV0aPLVwiD8tDjLgmTV33dXUrgMYaadLJNf2fFBxJm4-3P5w24ENhUS1oW_36DI=w2330-h1748-s-no-gm?authuser=0",
    "babyPic": "AP1GczOAH43cjTa8U4YpTqpulnkFIFGMBESPR6zDmIRTYevT7Ssj1lw3ks1eebmnr2I4EMNsq0vQGYFjJoDRNbnzWWf8CAF8h0QuVOfHJVnrzl157H4Cmop7iGywZtcdvjRV4AsvLYVMWv0Vg4BCCEDJE1Q=w661-h881-s-no-gm?authuser=0",
    "width": 500,
    "height": 400
  },
  {
    "name": "Violet",
    "pic": "AP1GczMW_nUmVh9LU97ao-sAudwaE7kKWi84J6aq0uJMtQmeDjDS6Ssvj-raHadM_grBIojjT69yiQYTunN7ikSO2yDjQuvv0si6OgRc9hRWUfaqtrY9maohtZZPf-LCMMZIqK7NFBYpggzxlO2YxHK4Asc=w1072-h804-s-no-gm?authuser=0",
    "babyPic": "AP1GczPJxcuQW6KsXmxy33-5fwi7gmhnXfBDUJj-GH8dPSpaeX6V_LVVzMnX7nBJOdZ7Q918pB4m3O48cp1rmYUwH8RD10UW2eKw2TakY1zYA02Vhiza8EsroD9WXVcUbbZMwcd8WVKREjWs4-7Nz8BCbPw=w661-h881-s-no-gm?authuser=0",
    "width": 500,
    "height": 400
  }
];

const albums = [
  {
    "id": 1,
    "title": "Phase One: The Whelping Pen Days",
    "pic": "AP1GczPKPOyAWOOWxR8YBH2t870pDRcaOOay0eLH_XlqtfZQQj4MhyLLsoRi3wPDUT_SCqqZKZfkPyhefji7UagenNjC5PIxUdpbDt3OLG66zTGeDj5rmdHPViuAIYgfa6PfF0_Pdh9HgUO2esuxedW6pCY=w602-h803-s-no-gm?authuser=0",
    "url": "BabyDays",
    "width": 300,
    "height": 400,
    "alt": "Newborn snuggle pups"
  },
  {
    "id": 2,
    "title": "Playtime with Uncle Rusty Shackleford",
    "pic": "AP1GczM0UmL9mkbR04iJI6uqPDqUZFAbSSx-LduAahkBL5lgAhYZBizgcnJBVSx2R2qI_BTRqXXieiZ3NSxMQy0Xt1yhdDx7uBiAqcJ8vW2t1oZV1j-F7jpqhrJJyo8zM4bpcz2ZayBLRC2-Y-Ukmu974ZE=w821-h803-s-no-gm?authuser=0",
    "date": "28 August 2025",
    "url": "UncleBuck",
    "width": 400,
    "height": 400,
    "alt": "Tug of War with Uncle Rusty"
  },
  {
    "id": 3,
    "title": "Sleepy Time",
    "pic": "AP1GczP1wYUFpMxQhVFU7AF_jVjwGncfjHdgrmJnYL-WQPr9cHZk-teoLpPHLeOoro0cUvfhVancK_DterPSFD3kyv8BNCfi90IYiRTHwiFR7PIbs2mA5bWvxX90rJlQ1bZsV58A9vg0u8hka1qcw2R_SNY=w1397-h803-s-no-gm?authuser=0",
    "date": "10 August 2025",
    "url": "SleepyTime",
    "width": 480,
    "height": 270,
    "alt": "Six puppies sleeping"
  },
  {
    "id": 4,
    "title": "Puppies on the Move",
    "pic": "AP1GczOuOz-35F97AUUuivWCZJ-GI93VKyxcMKrLcOHq3vsmRSQrw0xjvXrB5b5c_v7BG7CevWAMdbG1Dz3cokisuwQlQDzqBix4n4r3jaFU3HGa9URdgHiTdHZYgy3gvNGHfSpUzeqHsMN8RKtlrglDSZg=w1071-h803-s-no-gm?authuser=0",
    "date": "20 August 2025",
    "url": "Travelin",
    "width": 400,
    "height": 300,
    "alt": "Puppies in a crate"
  },
  {
    "id": 5,
    "title": "Puppies Gone Wild!",
    "pic": "AP1GczMz4Nvs3Kbf3oFOQESJMjfwnMd0KwdDm_s5jtyxtPciraa2iIAGSrk0-LHTNMJLJdN0QiCxdUGEQOaliOVEuB04krbzuD_vwx7-LqkYx0ehsaUW4ECjYQG2oTSHisNhioPPwq1S-5e21u2_nmszFgo=w602-h803-s-no-gm?authuser=0",
    "date": "22 August 2025",
    "url": "PlayTime",
    "width": 300,
    "height": 400,
    "alt": "Newborn puppies mouthing at each other"
  },
  {
    "id": 6,
    "title": "The Final Four",
    "pic": "AP1GczO-fScnEOdJ9HWApTyXn9uzJllGF2oBRrmhis3ZR2KwKifyxJrXHwauyzY1WbmT1gL7-NTAY6wkt6CMKikIIS0D4w5yQqifTFoaEpaPKvAY0p_LFEAk1SgksW9ZwbhPS51eg4s4FWsPZm513gOs0LE=w1024-h768-s-no-gm?authuser=0",
    "date": "26 September 2025",
    "url": "FinalFour",
    "width": 400,
    "height": 300,
    "alt": "The Four"
  },
  {
    "id": 7,
    "title": "Trois",
    "pic": "AP1GczN_PylMb6jRRfo0K5GkHejs9BGuTlFG9is0GmA1cHeYdzQ-PaQPrTaalbgi8Pdca9bDqwJTeqCwXqW-8PYYKQbWFYvEiHL9vj_GfTjyRgIaKA5bBvfZKYt0Du6zuVwJDY4XBUp3YfuoFS3AVKKfr98=w2330-h1748-s-no-gm?authuser=0",
    "date": "22 November 2025",
    "url": "Three",
    "width": 400,
    "height": 300,
    "alt": "Three"
  }
]

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
        <header className="flex flex-col items-center text-center gap-9">

          <div className="flex justify-center items-center md:justify-end text-gray-900 dark:text-gray-100 w-full md:w-auto">
            <nav>
              <ul className="text-center list-none flex-col sm:flex-row">
                {headerLinks.map((link) => (
                  <li
                    key={link.section}
                    className="mx-4 p-2 md:p-4 sm:inline hover:rounded-full hover:bg-gray-900 hover:text-gray-100 hover:dark:text-gray-900 hover:dark:bg-gray-100 pt-2 md:pt-6"
                  >
                    <a href={link.href} className="sm:text-3xl text-2xl font-bold tracking-widest sm:tracking-normal">
                      {link.section}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Adoptable <span className="line-through">Puppies</span> Puppy!
          </h1>
          <Age />
          <div className="border-1 border-solid border-indigo-500 rounded-xl p-2 m-2">
            <div className="contents">
              <Link href='/puppies/Possum'>
                <span className="justify-center items-center">
                  <HoverImage
                    defaultSrc='https://lh3.googleusercontent.com/pw/AP1GczMq01I9ubKk62T4O3kZLTbBMJzd5QIwO3tNCdoFVHi7DiRpnVDirSVCF0r3CilD2xPGSZt5BOT_xRdAexHNdbMetYbgaNSclVADu-x9x0eTDwKX1hSqQUSclbAy4JuPntT-7dMmPxqRKnc5CouXq3Y=w886-h886-s-no-gm?authuser=0'
                    hoverSrc='https://lh3.googleusercontent.com/pw/AP1GczPSFDyQqESzb81COYvOGkhZqUeJ8n6ggM40Xury_PWoAwJnDzG8PwNmn07JlNqA30Q1H8LMInlyvxjNMYTj8EC6ABXD8ZwoWjL3Cq9xPj1qvdhbH7RIjiZc908wjPr9bSjxA1thiq1D4SXCSYDuyQo=w602-h803-s-no-gm?authuser=0'
                    altText='Possum as a puppy'
                    width={300}
                    height={400}
                  />
                </span>
                <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold text-center mt-1">
                  Possum
                </h2>
              </Link>
            </div>
          </div>
          <p className='max-w-xl'>This sweet baby is house-trained, leash-trained, and she knows Sit. Possum is a love bug who may be shy, but she is adventurous and loyal. She is unbearably cute, and she loves to play just as much as she loves to chill. She sleeps through the night in her bed, and she has fragments of a bunny stuffy (destroyed by a wild pack of pups) that she suckles as her emotional support animal.</p>
          <h2 className="text-3xl text-gray-900 dark:text-slate-300 font-bold" id="links">
            Interested?
          </h2>
          <ul className="text-center">
            <li className='mb-5'>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> see her on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong></li>
          </ul>

          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center px-10">
            Photos were last uploaded on: 12 December 2025
          </p>
          <div className="text-center w-full">
            <hr />
          </div>
        </header>

        <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">

          {/* PUPPIES */}
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="puppies">
            Meet the puppies:
          </h2>
          <br />
          <br />
          <div className="grid md:grid-cols-3 md:grid-rows-3 xs:grid-cols-1 gap-4 place-items-center">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczNIJ0ATEb4mwW6p_zeWQ5dBLfusAQRguor84h-PIQx01fEi21JUS-fPByxcoOdeBcPTMNppKBitF-OZvqrF4Ydrwq5i-eKUOX2DypK0FHi3M9PCIg=w2400"
              alt="Seven cute puppies"
              width={400}
              height={300}
              className="mx-2"
            />
            {puppies.map((puppy) => (
              <div key={puppy.name} className="border-1 border-solid border-indigo-500 rounded-xl p-2 m-2">
                <div className="contents">
                  <Link href={`/puppies/${puppy.name}`}>
                    <span className="justify-center items-center">
                      <HoverImage
                        defaultSrc={`https://lh3.googleusercontent.com/pw/${puppy.pic}`}
                        hoverSrc={`https://lh3.googleusercontent.com/pw/${puppy.babyPic}`}
                        altText={`${puppy.name} the puppy`}
                        width={puppy.width}
                        height={puppy.height}
                      />
                    </span>
                    <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold text-center mt-1">
                      {puppy.name}
                    </h2>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            ))}
          </div>

          <div className="text-center w-full">
            <hr />
          </div>

          {/* ADOPT */}
          <h2 className="text-3xl text-gray-900 dark:text-slate-300 font-bold" id="links">
            Interested?
          </h2>
          <ul className="text-center">
            <li className='mb-5'>Fill out an <strong><a href="https://jackjackspack.org/adopt" className="text-sky-400">Adoption Form</a></strong> or view our pups on <strong><a href="https://www.petfinder.com/search/pets-for-adoption/?include_transportable=0&shelter_id%5B0%5D=TX2761&sort%5B0%5D=recently_added" className="text-sky-400">PetFinder</a></strong></li>
            <li><strong>Please share this site!</strong></li>
          </ul>
          <div className="justify-center items-center flex flex-wrap">
            <Image
              src="https://drive.google.com/thumbnail?id=1MB8a4r22TILii27RHPSztq71--2Yin_y"
              alt="QR Code"
              width={800}
              height={800}
              className="rounded-xl w-2/3 h-auto xs:w-auto" />
          </div>

          <div className="text-center w-full">
            <hr />
          </div>

          {/* ALBUMS */}
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="albums">
            Cute puppy pics
          </h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
            {albums.map((album) => (
              <div key={album.id} className="rounded-xl p-2 m-2">
                <Link href={`/albums/${album.url}`}>
                  <span className="justify-center items-center">
                    <Image
                      src={`https://lh3.googleusercontent.com/pw/${album.pic}`}
                      alt={album.alt}
                      width={album.width}
                      height={album.height}
                      className="rounded-xl border-r-4 border-b-4 border-double border-indigo-500 hover:shadow-md dark:hover:shadow-white mb-1"
                    />
                  </span>
                  <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center mt-2">
                    {album.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center w-full">
            <hr />
          </div>

          {/* WILLA */}
          <h2 className="text-2xl text-gray-900 dark:text-slate-300 font-bold" id="mama">
            Meet the mama:
          </h2>
          <div className="columns-md gap-4">
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">
                Willa
              </h3>
              <span>
                Willa is a beautiful and sweet dog with a very mild temperament. She was found in the neighborhood and came to live with us on May 28th, 2025 as a foster after the rescue helped us catch her. The vet estimated her age around 2.5 years, and her DNA results are pictured.
              </span>
              <br />
              <br />
              <span className="justify-center items-center flex flex-wrap row gap-4">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczPaTi5TS1nSp2tO8z_mwW1Ck57_-vZFd0QMYgXjjMti2m4dZe7jZUdht5vnxu2Ea1eg0eekOm1SJh-Z96DucCg3O-O4eW_suJmu4a_KsB_ulSNKaGsKhv29_-uf6XAXIpGVCMaumQhurS_JR84byJE=w603-h804-s-no-gm?authuser=0"
                  alt="Willa"
                  priority={true}
                  width={300}
                  height={400}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczOVgSEuae55soJqwERv2dfQ4eBUlzmaI8u6RBVLjXS84QDh4kL-mMQTWcDSioCvcDt_MLa5vZYgSnvjNNPU7ucdfM8E4BuoEbcoeJyV4vJolxhhMw=w2400"
                  alt="Willa"
                  width={400}
                  height={300}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczNjWV3ew61IAGnqSTqP6PFwt0qxOnq-pA4KqAukSvyKZqSqf-o3XfxLkWt1GKdV2yu9jDP-XFMVFR31cpeDBRWUmmi66ZDD0UzbqWapH1C2e7MpHA=w2400"
                  alt="Willa"
                  width={400}
                  height={300}
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
              </span>
              <br />
              <span>
                We got quite the surprise when we discovered she was pregnant, and an even bigger surprise when she birthed TEN puppies! Nine of them survived, and they are unbearably cute, but they all need homes.
              </span>
              <span className="justify-center items-center flex">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczMjGhwd9j4ogaBXfxS0_LEd4W9kseMqCVfYXzFrGfJQAZrY6FXYf0jqvRCbbh5iui-5rvEHTodASmQPh0mDXRNj3_5cZcf_mLb8eK5juLUSHND3aA=w2400"
                  alt="Willa with her brand new puppies"
                  width={400}
                  height={300}
                  className="rounded-xl w-3/4 h-auto my-1"
                />
              </span>
            </div>
            <div className="justify-center items-center flex">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczM_qAXQCnSDX6oYvhMtl92dyqwI0EmeNWY94XCyupI0WfJ521aQlUsg0e5nwiRcVjsPdne0wh75gLMfqmrLELVvisrYk2ScvK0YfZF867K6z5B84BNf2OF-4urqoLT2XWAk_iZbkKRcjlVjR8w7O5U=w565-h804-s-no-gm?authuser=0"
                alt="Willa's DNA results"
                width={300}
                height={400}
                className="rounded-3xl w-5/6 h-auto my-1"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
