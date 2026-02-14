import { ReactNode } from "react";

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
    href: "/puppalooza/puppies/Hippo",
    section: "Hippo",
  },
  {
    href: "/puppalooza/puppies/Kathleen",
    section: "Kathleen",
  },
  {
    href: "/puppalooza/puppies/Otter",
    section: "Otter",
  },
  {
    href: "/puppalooza/puppies/Piggy",
    section: "Piggy",
  },
  {
    href: "/puppalooza/puppies/Pinky",
    section: "Pinky",
  },
  {
    href: "/puppalooza/puppies/Possum",
    section: "Possum",
  },
  {
    href: "/puppalooza/puppies/Reptar",
    section: "Reptar",
  },
  {
    href: "/puppalooza/puppies/Splinter",
    section: "Splinter",
  },
  {
    href: "/puppalooza/puppies/Violet",
    section: "Violet",
  },
];

export default function PuppyLayout({ children }: { children: ReactNode }) {
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
{/* 
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
      </span> */}
    </section>
  );
}
