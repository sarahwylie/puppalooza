
const headerLinks = [
  {
    href: "/puppalooza",
    section: "Home",
  },
  {
    href: "/puppalooza/albums",
    section: "Albums",
  },
  {
    href: "/puppalooza/puppies",
    section: "Puppies",
  },
  {
    href: "/puppalooza/albums/BabyDays",
    section: "Babydaze",
  },
  {
    href: "/puppalooza/albums/UncleBuck",
    section: "Rusty",
  },
  {
    href: "/puppalooza/albums/SleepyTime",
    section: "Sleepy",
  },
  {
    href: "/puppalooza/albums/Travelin",
    section: "Travelin",
  },
  {
    href: "/puppalooza/albums/PlayTime",
    section: "Play",
  },
  {
    href: "/puppalooza/albums/FinalFour",
    section: "Final",
  },
  // {
  //   href: "/puppalooza/albums/Three",
  //   section: "Three",
  // }
];

import { ReactNode } from "react";

export default function AlbumLayout({ children }: { children: ReactNode }) {
  return (
    <section>
        <nav className="flex justify-center items-center text-gray-900 dark:text-gray-100 w-full md:w-auto">
          <ul className="flex flex-wrap text-center justify-center items-center list-none mt-5">
            {headerLinks.map((link) => (
              <li
                key={link.section}
                className="mx-2 p-2 md:p-4 sm:inline hover:rounded-full hover:bg-gray-900 hover:text-gray-100 hover:dark:text-gray-900 hover:dark:bg-gray-100 pt-2 md:pt-4"
              >
                <a
                  href={link.href}
                  className="sm:text-3xl text-2xl font-bold tracking-widest sm:tracking-normal"
                >
                  {link.section}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      {children}

      <span className="text-center">
        <h2
          className="text-3xl text-gray-900 dark:text-slate-300 font-bold mb-2"
          id="links"
        >
          Ready to Adopt?
        </h2>
        <p className="mb-5">
          Fill out an{" "}
          <strong>
            <a href="https://jackjackspack.org/adopt" className="text-sky-400">
              Adoption Form
            </a>
          </strong>{" "}
          today!
        </p>
      </span>
    </section>
  );
}
