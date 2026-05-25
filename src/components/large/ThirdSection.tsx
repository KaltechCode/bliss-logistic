import InvertedBorderCard from "../medium/InvertedBorder";
import { homeServices, IService } from "@/data/service";

export default function ThirdSection() {
  return (
    <section className="h-auto w-full">
      <div className="h-full w-full bg-[#060707] text-white py-10 lg:py-16">
        <div className="flex h-full w-[90%] max-w-[1520px] mx-auto flex-col gap-8 md:gap-10 py-6">
          <p className="k-eyebrow text-[#2fa8eb]">Our Services</p>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <h2 className="k-section-title mt-10 max-w-[820px] text-white">
                DELIVERING LOGISTICS
                <br />
                SOLUTIONS YOU CAN TRUST
              </h2>
            </div>

            <div className="md:col-span-3 md:justify-self-end mt-10">
              <button className="inline-flex items-center rounded-full bg-[#2fa8eb] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2398d8]">
                View All Services
              </button>
            </div>
          </div>

          <div className="grid flex-1 gap-7 items-end sm:grid-cols-2 sm:gap-16 xl:grid-cols-4 mt-10 justify-center lg:mt-16 xl:pt-16">
            {homeServices.map((item: IService, k: number) => {
              return (
                <InvertedBorderCard
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  key={k}
                  index={k}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
