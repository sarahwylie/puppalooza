import Image from 'next/image';
import Link from 'next/link';

const puppies = [
  {
    "name": "Kathleen",
    "pic": "AP1GczP1oPqnfZI9bpTngpQDsim10sy0cVA5QiTglHKUQyOfOfTT2LBlM4mtltlnGI0tdTOemGTrPThDIpsSQy4Zz0sF061D54SORHqM6-W_GwYc4pFogz8hlhrElr6NXxSVAE9G_ozcHb4mp9x2yHjqjkU=w602-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400,
  },
  {
    "name": "Pinky",
    "pic": "AP1GczMvYKnyosb7rz-XpYH4qXS75JpcTky1Rs7IO68BOTnLNv8adCSp0HitJYApJ4174E5VxjqABxmua0pFGJkEd-w8t7Ypk__DLLRE4iGV8D1HSbEbUbe8a-dS_AMZwVsU_7Pn-M2DEfI7FtycYm_SKHc=w738-h804-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Possum",
    "pic": "AP1GczPo3d_ubRwJ9-aBs3x0BrJUNkXT-P6kk7YOnDzJHHCILY47VGXaL0YoDooc4zE8Rluyed6HsHoiEpCA1CDn1UwGeviRM94_1XQdi6VdwdipWuorECkpmNMiFWqBm5MJj-AovlYddu7R6XvIRLK0m-w=w603-h804-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Splinter",
    "pic": "AP1GczPmhtZszFy-3LIFmrgvzf5umC14AhFXPqveKt_8vmItxA3_-u86tdPTI5NqxtuErXQQ_GUNuS0a58knVsgRu79PRyVTe56RJeRzeQVorKY0MVW-NiE39DA02rf02v8AC1L1Gatn2aZulATrirFoxrY=w547-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400,
  }
];

export default function Home() {
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
            {puppies.map((puppy) => (
              <div key={puppy.name} className="border-1 border-solid border-indigo-500 rounded-xl p-2 m-2">
                <div className="contents">
                  <Link href={`/puppies/${puppy.name}`}>
                    <span className="flex justify-center items-center">
                      <Image
                        src={`https://lh3.googleusercontent.com/pw/${puppy.pic}`}
                        alt={`${puppy.name} the puppy`}
                        width={puppy.width}
                        height={puppy.height}
                        className="rounded-xl hover:shadow-md hover:ring-2 dark:hover:shadow-white"
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
</div>
      );
}
