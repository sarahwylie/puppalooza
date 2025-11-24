import HoverImage from "../components/hoverImage";
import Link from 'next/link';

const puppies = [
  {
    "name": "Kathleen",
    "pic": "AP1GczP1oPqnfZI9bpTngpQDsim10sy0cVA5QiTglHKUQyOfOfTT2LBlM4mtltlnGI0tdTOemGTrPThDIpsSQy4Zz0sF061D54SORHqM6-W_GwYc4pFogz8hlhrElr6NXxSVAE9G_ozcHb4mp9x2yHjqjkU=w602-h803-s-no-gm?authuser=0",
    "babyPic": "AP1GczOADOEwVszl0WHjl21Ou0f5bptL7iZwNKxO7Z5DscBGGH3UKEfpsu-27v6YCXFKNTygV-8NZ3aRkAqUvPQBdoYBYpAz3Ru7C2j_jbOx-Rh_M6v8qTCUMVk1Vh4kKsMBzDcsaKoJYcx_l9WQq6Q-W3I=w602-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400,
  },
  {
    "name": "Pinky",
    "pic": "AP1GczMvYKnyosb7rz-XpYH4qXS75JpcTky1Rs7IO68BOTnLNv8adCSp0HitJYApJ4174E5VxjqABxmua0pFGJkEd-w8t7Ypk__DLLRE4iGV8D1HSbEbUbe8a-dS_AMZwVsU_7Pn-M2DEfI7FtycYm_SKHc=w738-h804-s-no-gm?authuser=0",
    "babyPic": "AP1GczPU1D0mTF_wfxm41mv_TfEgzKXARuvQcNfcRPBXRP3qzeD4Xsyegw6f2ghBsPoEC62C_iiS-ta1Kk97WpiVzSE5j4SFs8FNX6zwmcnrK_49YQ96lF_W9NnurMGPWkmzXgGRxfkByCJ1XCGyg2m_kZg=w610-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  },
  {
    "name": "Possum",
    "pic": "AP1GczMq01I9ubKk62T4O3kZLTbBMJzd5QIwO3tNCdoFVHi7DiRpnVDirSVCF0r3CilD2xPGSZt5BOT_xRdAexHNdbMetYbgaNSclVADu-x9x0eTDwKX1hSqQUSclbAy4JuPntT-7dMmPxqRKnc5CouXq3Y=w886-h886-s-no-gm?authuser=0",
    "babyPic": "AP1GczPSFDyQqESzb81COYvOGkhZqUeJ8n6ggM40Xury_PWoAwJnDzG8PwNmn07JlNqA30Q1H8LMInlyvxjNMYTj8EC6ABXD8ZwoWjL3Cq9xPj1qvdhbH7RIjiZc908wjPr9bSjxA1thiq1D4SXCSYDuyQo=w602-h803-s-no-gm?authuser=0",
    "width": 300,
    "height": 400
  }
];

export default function Puppies() {
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
    </div>
  );
}
