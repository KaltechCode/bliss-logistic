import Image from "next/image";

export default function Herosection() {
  return (
    <section className="h-screen w-full ">
      <div
        className="relative h-[95vh] w-full overflow-hidden rounded-[18px] bg-cover bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/images/hero_background.jpg')",
          backgroundPosition: "center 58%",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(4,28,56,0.55)_0%,rgba(4,28,56,0.35)_34%,rgba(4,28,56,0.12)_66%,rgba(4,28,56,0.18)_100%)]" />

        <div className="absolute bottom-0 right-0 z-[2] h-[62%] w-[44%] bg-[linear-gradient(180deg,rgba(12,40,67,0)_0%,rgba(12,40,67,0.28)_100%)] sm:hidden" />

        <div className="relative z-10 flex h-full flex-col px-4 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6 md:px-9 md:pb-10 md:pt-8">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div className="hidden items-center gap-2 md:flex">
              <Image
                src={"/logo/bliz-logo.png"}
                height={250}
                width={250}
                alt="Bliz logo"
              />
            </div>

            <nav className="order-1 mx-auto flex items-center justify-center gap-1 rounded-full bg-[#295978]/55 p-1 sm:order-2 sm:mx-0">
              <button className="rounded-full bg-white px-4 py-1.5 text-md font-medium text-[#12385a]">
                Home
              </button>
              <button className="rounded-full px-4 py-1.5 text-md font-medium text-white/90">
                Tracking
              </button>
              <button className="rounded-full px-4 py-1.5 text-md font-medium text-white/90">
                Services
              </button>
            </nav>

            <button className="order-2 hidden items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#163d61] sm:order-3 md:inline-flex">
              Contact us
              <span className="text-base leading-none">&#8250;</span>
            </button>
          </header>

          <div className="relative mt-[30%] md:mt-14">
            <h1
              className="k-section-title max-w-[760px] text-white drop-shadow-lg"
              style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)" }}
            >
              YOUR MOVE
              <br />
              ABROAD,
              <br />
              SORTED.
            </h1>

            <div className="absolute right-0 top-3 hidden rounded-full bg-[#84a5b9]/75 px-4 py-2 text-xs font-semibold sm:px-6 sm:text-sm md:block">
              A Bliz Services company
            </div>
          </div>

          <div className="max-w-[380px] mt-20">
            <p
              className="k-body-lg max-w-[280px] text-white/90 drop-shadow-md sm:max-w-none"
              style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)" }}
            >
              We pack, ship, clear customs, and deliver your belongings between
              Cameroon and Canada, and beyond. You just bring your carry-on.
            </p>
            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#12385a]">
              Get a quote
              <span className="text-base leading-none">&#8250;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
