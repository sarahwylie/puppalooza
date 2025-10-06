import Image from 'next/image';
import Link from 'next/link';

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
  }
]

export default function Albums() {
  return (
        <div className="w-full space-y-6 px-4 flex flex-col items-center">
          <div>
          <h1 className="text-2xl text-gray-900 dark:text-slate-300 font-bold mt-8">
            Help us find our forever homes!
          </h1>
          </div>
          <br />
          <br />
          <div className="flex flex-wrap gap-4 place-items-center justify-center items-center">
            {albums.map((album) => (
              <div key={album.id} className="rounded-xl p-2 m-2">
                <Link href={`/albums/${album.url}`}>
                  <span className="flex justify-center items-center">
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
</div>
      );
}
