'use client';
import Image from 'next/image';
import { useMemo } from 'react';

const possums = [
        {
                "id": 1,
                "title": "Brand new",
                "pic": "AP1GczMZoTFjktKACpZOzEKmwmRjGAr4RCmqc5KBWV_UuE6RGe0jeWPPelf8bpAkiE30Fp9Z_9bOfcfodgc6mSShWGLNVyVLM235zT4PDjKoU0xl0q2ixX0uhqJM-9WBS29AfoMmYx33lKlmE9beUMn4FiM=w602-h803-s-no-gm?authuser=0",
                "date": "12 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 2,
                "title": "Angry panda",
                "pic": "AP1GczOuC1-1WL7vEYlX44SElJdcqEzhOZZuoIfzt4v9ymbw-_o0EEDKdRM5Kib_i5ULLXLU8ZLx4i4I0EhGaXndXCDVWIQjdbpq1Vc5fPpdD0GsqcgA2rA5cmUdRvEfgQH13MA9ikl-V_eY2COeNDxdZKM=w457-h803-s-no-gm?authuser=0",
                "date": "13 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 3,
                "title": "One day old",
                "pic": "AP1GczPImDtX0gCaMKnv8eG_WTdkh0AoX8Hd9LSPyz_QjSoYSkrHwLzoB7HqqlN1T6H4CP2kMFpvhYotjWB3QsRwhx0cPP1TloiYCFWTM_tGi1h6UIFf3lG-uYxWBn-p6uLBS6CwaV1b9YEGTlhrsZYLPWE=w602-h803-s-no-gm?authuser=0",
                "date": "13 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 4,
                "title": "Keeping an eye on you",
                "pic": "AP1GczMsY0fhZqvkCKYV3PaZmbIg3L9_PcLZSPsAy0964G_pC4pAp14MBLIuwLI0Q7VcmekIfsuuG2F8VGi2acTCeFCfe7_cwduThPTEwH614cxS_wqA2IRiVAtkK5iQpx28ud60mV3c-OH_zSDR5cVWiuw=w1071-h803-s-no-gm?authuser=0",
                "date": "31 July 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 5,
                "title": "Sleepy pup",
                "pic": "AP1GczMH6aFRlFoCZd7FuxWmGArOd6Mw2DZxS-LhQ7D2atR4irRd-yKSByYl9lPFa5RmsJtIZ17HtiQjaVcSUOibBWTnYjbHgJ2p9h9c7tw7COFyqJ5aXrUBsVBpn5RI4iyVeWZjAgBmsbKoC1SmarZ5iFg=w602-h803-s-no-gm?authuser=0",
                "date": "30 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 6,
                "title": "Side-eye",
                "pic": "AP1GczO5OxN3jFQ4SjusUekgzh-9YXkgmJlDabhB61h5poaxmRh1dO14kPZXfs4li3HeEkV4PF1ckOCbJPq2frstahC7sgsHAIDNe4M0TxntHba4rO1w_-t30Ro3a3AUU1SbSBAA1ttf-u8WR6Wdztd4z10=w602-h803-s-no-gm?authuser=0",
                "date": "31 July 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 7,
                "title": "Soulful",
                "pic": "AP1GczObsR907__hmDvSeRBGtNjj8hWF4W0ywSuhhLw3eRhEYQiYBaPtUPXNV6uGJF_iQ40y7TZi642SlVUd5kdUJAtkxLfvZFFlINPVCWZ2tRKJfU9ijr8CJM2AMeA4Uf-WSQu-Ek-dp665-zpQqqGx3mU=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 8,
                "title": "Dirty beak",
                "pic": "AP1GczMoOf6tc6PA9NL-H5mrMkwYIqRTNxAJY2w0HSiEA-m-AXXjmlmd599-AevXGyFgoNA--npTRDE6GaM3LcJ5UrQVEC-ewSUuMV-WOuVuCClBgU8_aWN10CTmvmwpopsFtb3HdGMzlsdsA0UrBuKduog=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 9,
                "title": "Ready to please",
                "pic": "AP1GczPSFDyQqESzb81COYvOGkhZqUeJ8n6ggM40Xury_PWoAwJnDzG8PwNmn07JlNqA30Q1H8LMInlyvxjNMYTj8EC6ABXD8ZwoWjL3Cq9xPj1qvdhbH7RIjiZc908wjPr9bSjxA1thiq1D4SXCSYDuyQo=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 10,
                "title": "On the move",
                "pic": "AP1GczNrLtQVc0DExbpEFvvYhcCnUhdzXeuHHZeUPfHz0BE9nniPt8UbzkP2A6b044BxRpM7ld1Bj43az2u1dtRyn_CF9jUjAxy9XQ6QXmXiGJnQxonLBKIyFlLdqVQ0-EfK119oohLCxyO2IjGbZVwlO00=w602-h803-s-no-gm?authuser=0",
                "date": "16 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 11,
                "title": "This is serious",
                "pic": "AP1GczOPgj-hNvZEf8ctUvJbmd_GygrXyHvwGOqboOv368CIlD1I5aMYCKek53h8H8eUXfSHYrmaferCHSP1oJY74_4F0xJzgGV4W2O_Wzz60joMWGTknvlaMcFFA9OlDWzZ_Eqjfq-NBs3l3Ok0vTASrVk=w602-h803-s-no-gm?authuser=0",
                "date": "30 August 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 12,
                "title": "Let's Play Ball",
                "pic": "AP1GczPWQaMZAIhM_wNpwO8V2P-5jGtGYrhPB68GFMkc8kEo8xmVvGSYkk8WQB7CPZ5tYdNbEnSt6nG2-i12lgEQecNp9m5VJU50Hlrqtdpn7Y8sSllymrUYL78cAtQTbAUdBj7RyC8RLzRjIrhvwYhvY04=w1071-h803-s-no-gm?authuser=0",
                "date": "27 August 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 13,
                "title": "Ready for a close-up",
                "pic": "AP1GczPo3d_ubRwJ9-aBs3x0BrJUNkXT-P6kk7YOnDzJHHCILY47VGXaL0YoDooc4zE8Rluyed6HsHoiEpCA1CDn1UwGeviRM94_1XQdi6VdwdipWuorECkpmNMiFWqBm5MJj-AovlYddu7R6XvIRLK0m-w=w603-h804-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 14,
                "title": "Cheesin'",
                "pic": "AP1GczOx1p-xxRDKlW-dntHLumqa4HQk3SJ59u3X3A2DKkyh_mVpFWUL98GRd_PoM1xfZUUsp2FwJYXJAj7QsPk5mG7BKha2rR1_j4XlB20kT4XHmBFuwKxnbWDrXmr-WlNS3pilbWQwXscJbNqzrb7klAs=w602-h803-s-no-gm?authuser=0",
                "date": "15 September 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 15,
                "title": "Sunny naptime with mommy",
                "pic": "AP1GczPAwpJiSbqnrm02DTxWYqwTY3qPrzmER10HQ6QvHlBgW76y6AnmbGx2JyllRcJyaR3GTs6z28XESoHcQeLYcJiZDtoD2gL2nRj6btpaMtYs4ZHUlNxz4Y88mK7Ybm4uXrN7hyO_5AW8O8Igm62nZto=w1071-h803-s-no-gm?authuser=0",
                "date": "25 September 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 16,
                "title": "Sweet baby",
                "pic": "AP1GczMq01I9ubKk62T4O3kZLTbBMJzd5QIwO3tNCdoFVHi7DiRpnVDirSVCF0r3CilD2xPGSZt5BOT_xRdAexHNdbMetYbgaNSclVADu-x9x0eTDwKX1hSqQUSclbAy4JuPntT-7dMmPxqRKnc5CouXq3Y=w886-h886-s-no-gm?authuser=0",
                "date": "30 October 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 17,
                "title": "Suckling on her baby",
                "pic": "AP1GczPqK2IPir-lUvAjzbELJcIzzme8OzHdjYN8eYV_tvhqEpgvhw7XsyUrMU59aw3wbd76pV_-3YvN-pGtAGXAQCg37eNBD0PaSdhoXX3TDG2G5SFBHvLGSRxUPAzAqVvhwbXPptqFntrUWF3hb4okhRQ=w1210-h1614-s-no-gm?authuser=0",
                "date": "9 November 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 18,
                "title": "Fell asleep like this",
                "pic": "AP1GczMj8NOxy2B_PW6aSEIT4GZExfTRh_aOBjYFg0ykUd0Mn__lXggMyyixToPKRnuYGsY4xX7wiUkJ3dOgLE17RVhDpBIKkaCWeYc0ryyqcqv2M8O3TmovmA9xeoF8HbRzJNMX82yKZZz404XmCdazpvg=w2152-h1614-s-no-gm?authuser=0",
                "date": "9 November 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 19,
                "title": "Happy girl",
                "pic": "AP1GczP5lchm6QLy8hU5QnXosYnSeRQcn7PGbeapyk3a05Bf2dimwgxAy63ByGr4cp6Zb-kprFfkMgj_QY5Um2NLBLhKX-j1h0R0plLcG_7fanwje3PEpjAnjVajbqtjkTkbFFRFPbqgM_aVs_dlR9fvqZA=w1256-h1762-s-no-gm?authuser=0",
                "date": "24 November 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 20,
                "title": "Got my pack",
                "pic": "AP1GczNpzVeVik5KBqemVPFA9SZmJmrtJ6XA9z1NNWTcw7SWPrWnrLtg3dJJHKiQXdy9o7V1deiCw_qFMH18wKcrx1yKSaWBSKvYrYWrCujrzPvfLmA9phMVWpFyMnlT6fYoNDCqUmcpNRN5OZ2bxHBmdb8=w1322-h1762-s-no-gm?authuser=0",
                "date": "24 November 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 21,
                "title": "Driver",
                "pic": "AP1GczNxThDSYrEYTv1jyWeP7qk-LLw8rhlRewjY-WAUU_pDPn2pDtddpH8SzweTcb-eCrQVC9i21hgDRR-AqYMHnT9rU2_HYujFMBtBpfNtH5Grc7yZx5YEIguFD0ko3XtYPZ7aLmy24yMk1ClsRbWjLuM=w1322-h1762-s-no-gm?authuser=0",
                "date": "24 November 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 22,
                "title": "Big Yawns",
                "pic": "AP1GczOClFha04o_WN_VNvsdx0i0ijnypGMmdQEZe9rgJ8hYttXxzPYJiwhGJhyDpHcrdIggCfT-MpetorWOouaIqqjLnY3dIkfJ0c8OssIbVnvTWuDYfsBORSUEoyx7wOMfQ0wk8VWELESiL6YR1ld0a7c=w661-h881-s-no-gm?authuser=0",
                "date": "24 November 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 23,
                "title": "Twinning with Xena",
                "pic": "AP1GczMmJxORebpsfB88UD15OS97siIh9QXxj5rvoS8X2gmSN_V5qPjEGFW_OqLpsbwMk-GgGIzYetoS-Bt_epZg7zliigFZw70nly-dzHCz6QCTsrJH41hdHyFx6rUDk9XIukIvn2Ou9dC23VV8Ne7PYMI=w1175-h881-s-no-gm?authuser=0",
                "date": "1 December 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 24,
                "title": "Kathleen and Possum, besties",
                "pic": "AP1GczMjn-93Aclfwxt-FMklL-WEgwYMzD5OfR5IS5SVs2LKki8Es-WAvBmIVwioBC9-axsHiWqxte5XlXWiPjBK8YE6rJwPQTPQQlxiIXMLNaPGx6zG51D05Zg1S4EVaznB4kMTH9rSoZKlaasVFV4ND2w=w1175-h881-s-no-gm?authuser=0",
                "date": "2 December 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 25,
                "title": "Cuddles with Uncle Rusty",
                "pic": "AP1GczNcHoP4T6HbB6K_66-TyjQrcMr_StQ-LqIiCJ0tH018wJIipx91TcTP4trklhaotDftjpb-3PH-zPECK70Y3riX_CdmJT0OGuwGWM5aX73qhsDtBTNvdjE0zxfUj9Jg69zffs-CcGeLa9NZpD7b8FU=w1175-h881-s-no-gm?authuser=0",
                "date": "3 December 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 26,
                "title": "Pack Walk",
                "pic": "AP1GczPASjQ2PX3zqDAlRJdyQEcOTf4UeutQqF6EvLzPpP2IAWBwad5sdE1GWhYLbsO9nng0Zgtkb7wvURkBPX91dI6_bPQQFnxh5IWLtCOOiYpRVPXuiV46E0S4zg4jB_zmnlv4qCetJi79bEfqXRTBoCU=w1029-h881-s-no-gm?authuser=0",
                "date": "6 December 2025",
                "width": 350,
                "height": 300,
        },
        {
                "id": 27,
                "title": "Awkward",
                "pic": "AP1GczOFcVYSRm3YFS1kXGMngToEtvk_U74HYlOnY4dgtSAGyh2cJCW829UXII4rBn1mAxeIGbfTTRczREOIAGElCXfsWLCcXlLTr3SrT891cDnjc9-b45qz-9Qirw5vCkruprfm9m1u3D3JL3SDqvbdQog=w661-h881-s-no-gm?authuser=0",
                "date": "6 December 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 28,
                "title": "Out for an Adventure!",
                "pic": "AP1GczMXm5Ym3qX27PgJ4Dw6akhLduxpe6rdLHywbR-aONcnKjOeoyPIVIS3pzQCECttxgLA0Y60eNYuQug2RABDGtn20ajaQUQfkL2e8bHKHaurikqRTk6nYG0TB2aOhD-rOYTVjmrop7hjxaSpN3JZok0=w1175-h881-s-no-gm?authuser=0",
                "date": "9 December 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 29,
                "title": "Testing out the hip new lunch spot with Xena",
                "pic": "AP1GczN9CH1xnF9ZqQBoxbXvAkHsyLrAVN4v35Htzyl0y8PzZ-ehAqkbmr5Qu4iCML4i8MPmKTtm6synVKY6Ind80HgqVFkHkwbG_9IozrkX3HNrTC60n_XOQymUxP38DjwTw0EvvUixQhCEgxSatva_k3g=w1175-h881-s-no-gm?authuser=0",
                "date": "10 December 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 30,
                "title": "Family Nap",
                "pic": "AP1GczPLAKpH_4kwpqmYhnOpjTXnf-aKQdyUxVtSNc-lqdhj5D5DeveNgVs0lYWSkPh-t5lk6EfYAQ2NOvad8kXXoutkzQZwOU8qmPDeFlMQHiwD9xKdS8gEUx8vnqHANwPbyNSdzH4PpTqSlouhoiLlYDk=w1175-h881-s-no-gm?authuser=0",
                "date": "11 December 2025",
                "width": 400,
                "height": 300,
        },
        {
                "id": 31,
                "title": "Sitting for a treat",
                "pic": "AP1GczNlCZbKDjUEZSKQhMYxFwPCKPuNx8cqQRyWTgeOddUmbneVj7nYgnDrZtewgkdzCvmG4nPHoKims3bv6K-p3uSaAGRa2ThUb7tlwsxamX09EPoRXfpJMAh7e19mTVdFOLEUUjuVpPAhxxUM1JetHS8=w661-h881-s-no-gm?authuser=0",
                "date": "12 December 2025",
                "width": 300,
                "height": 400,
        },
        {
                "id": 32,
                "title": "Boop!",
                "pic": "AP1GczPIP22RhMzDZ9j_ZTkIAKr2Tk-SvRQb-4ljAUGctDBBWk6R1xG2ju3xHeYrD2FoNQrhVCfwx_rvhDUCTezwRxaVaQH1ZCkzI2b_WtmrJkGNQXGtAeKAIyqX0OVbqx5-kziDI-tljnJz3OEBucpY1FI=w661-h881-s-no-gm?authuser=0",
                "date": "12 December 2025",
                "width": 300,
                "height": 400,
        }
];

export default function Possum() {
        const shuffledPossums = useMemo(() => {
                return [...possums].sort(() => Math.random() - 0.5);
        }, [possums]);

        return (
                <main className="flex items-center justify-center pt-16 pb-4">
                        <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                                <header className="flex flex-col items-center gap-9">
                                        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                                                Possum
                                        </h1>
                                </header>
                                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                Possum has found her forever family!
                                                {/* Possum makes an immediate connection and gets excited to play or cuddle. She looks like a tiny husky, and her silver fur is stunning. */}
                                        </p>
                                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                                {/* Possum is up for anything, and she is happiest when she is with her people or her pups. How can you resist that mask? */}
                                        </p>
                                </div>
                                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 place-items-center">
                                        {shuffledPossums.map((possum) => (
                                                <div key={possum.id} className="rounded-xl p-2 m-2">
                                                        <span>
                                                                <Image
                                                                        src={`https://lh3.googleusercontent.com/pw/${possum.pic}`}
                                                                        alt={possum.title}
                                                                        width={possum.width}
                                                                        height={possum.height}
                                                                        className="rounded-xl"
                                                                />
                                                        </span>
                                                        <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                                                {possum.title}
                                                        </p>
                                                        <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                                                {possum.date}
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