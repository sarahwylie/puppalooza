import Image from "next/image";

const kenneled = [
    {
        "id": 1,
        "title": "First vet visit",
        "pic": "/puppalooza/group/Vet/Vet1.jpg",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 2,
        "title": "Vet visit August 20th",
        "pic": "/puppalooza/group/Vet/Vet2.jpg",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
    {
        "id": 3,
        "title": "Vet visit August 20th",
        "pic": "/puppalooza/group/Vet/Vet3.jpg",
        "date": "20 August 2025",
        "width": 400,
        "height": 300,
    },
];

export default function Vet() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Vetscursion
                    </h1>
                    <span>
                        Our first big trip out of the house and over to the vet for a checkup and first-round vaccinations.
                    </span>
                </header>

                <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 place-items-center">
                    {kenneled.map((kennel) => (
                        <div key={kennel.id} className="rounded-xl p-2 m-2">
                            <span>
                                <Image
                                    src={kennel.pic}
                                    alt={kennel.title}
                                    width={kennel.width}
                                    height={kennel.height}
                                    className="rounded-xl"
                                />
                            </span>
                            <p className="text-base text-gray-900 dark:text-gray-100 font-bold text-center">
                                {kennel.title}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 text-center">
                                {kennel.date}
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
