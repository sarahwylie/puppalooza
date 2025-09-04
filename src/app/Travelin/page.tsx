import Image from "next/image";

const pupburries = [
    {
        "id": 1,
        "title": "First vet visit",
        "pic": "/puppalooza/group/Travelin/Vet1.jpg",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Locked and Loaded",
        "pic": "/puppalooza/group/Travelin/Vet2.jpg",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 3,
        "title": "Vetscursion",
        "pic": "/puppalooza/group/Travelin/Vet3.jpg",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 4,
        "title": "Reptar's first trip to the park",
        "pic": "/puppalooza/group/Travelin/ReptarAtThePark.jpeg",
        "date": "2 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 5,
        "title": "Reptar supervising playtime at the park",
        "pic": "/puppalooza/group/Travelin/ReptarOutnAbout.jpeg",
        "date": "2 September 2025",
        "width": 300,
        "height": 400,
    },
    {
        "id": 6,
        "title": "Possum giving side-eye",
        "pic": "/puppalooza/group/Travelin/sideEye.jpeg",
        "date": "3 September 2025",
        "width": 400,
        "height": 350,
    },
    {
        "id": 7,
        "title": "Supervising playtime is exhausting",
        "pic": "/puppalooza/group/Travelin/sleeposs.jpeg",
        "date": "3 September 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 8,
        "title": "Just keeping an eye on things",
        "pic": "/puppalooza/group/Travelin/Splintervisor.jpeg",
        "date": "4 September 2025",
        "width": 300,
        "height": 400,
    },
];

export default function Travelin() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9 text-balance">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mx-1 sm:mx-2 lg:mx-4">
                        The Travelin' Pupburries
                    </h1>
                    <span>
                        Our first big trip out of the house was to the vet for a checkup and first-round vaccinations.
                    </span>
                    <span>
                        Now that their first round of shots is complete, we are taking them on more adventures! No paws touch the ground outside our property, and they only meet dogs we already know (safety first!).
                    </span>
                </header>

                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">
                    {pupburries.map((pupburry) => (
                        <div key={pupburry.id} className="m-2">
                            <span>
                                <Image
                                    src={pupburry.pic}
                                    alt={pupburry.title}
                                    width={pupburry.width}
                                    height={pupburry.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {pupburry.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {pupburry.date}
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
