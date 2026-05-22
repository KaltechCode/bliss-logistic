import { navItem } from "@/data/nav";
import Image from "next/image";
import LinkText from "../small/topography/linkText";
import BtnWhiteAngle from "../small/buttons/BtnWhiteAngle";

export default function Herosection() {
  return (
    <section className="h-screen w-full ">
      <div
        className="relative h-[650px] md:h-screen w-full overflow-hidden bg-cover bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/images/hero_background.jpg')",
          backgroundPosition: "center 58%",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(4,28,56,0.55)_0%,rgba(4,28,56,0.35)_34%,rgba(4,28,56,0.12)_66%,rgba(4,28,56,0.18)_100%)]" />

        <div className="absolute bottom-0 right-0 z-[2] h-[62%] w-[44%] bg-[linear-gradient(180deg,rgba(12,40,67,0)_0%,rgba(12,40,67,0.28)_100%)] sm:hidden" />

        <div className="relative z-10 flex h-full flex-col py-5 w-[90%] max-w-[1920px] mx-auto">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div className="hidden items-center gap-2 mobile-landscape:hiiden lg:flex">
              <Image
                src={"/logo/bliz-logo.png"}
                height={250}
                width={250}
                alt="Bliz logo"
              />
            </div>

            <nav className="mx-auto">
              <ul className="flex gap-4 justify-center">
                {navItem.map(
                  (link: { link: string; label: string }, k: number) => {
                    return (
                      <li className="rounded-full text-md font-medium" key={k}>
                        <LinkText label={link.label} linkHref={link.link} />
                      </li>
                    );
                  },
                )}
              </ul>
            </nav>

            <div className="hidden lg:flex">
              <BtnWhiteAngle label="Contact Us" />
            </div>
          </header>

          <div className="relative top-[18%] md:top-[22%] lg:top-[25%]">
            <div className="w-[70%]">
              <h1
                className="hero-section-title max-w-[760px] text-white drop-shadow-lg"
                style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)" }}
              >
                YOUR MOVE
                <br />
                ABROAD, SORTED.
              </h1>

              <div className="absolute right-0 top-3 hidden rounded-full bg-[#84a5b9]/75 px-4 py-2 text-xs font-semibold sm:px-6 sm:text-sm md:block">
                A Bliz Services company
              </div>
            </div>

            <div className="max-w-[380px]">
              <p
                className="k-body-lg max-w-[280px] text-white/90 drop-shadow-md sm:max-w-none mt-[7vh]"
                style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)" }}
              >
                We pack, ship, clear customs, and deliver your belongings
                between Cameroon and Canada, and beyond. You just bring your
                carry-on.
              </p>
              <div className="mt-[7vh]">
                <BtnWhiteAngle label="Get a qoute" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
