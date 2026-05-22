"use client";

import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

import { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
};

const items: AccordionItem[] = [
  {
    id: "01",
    title: "Relocation and personal effects",
    description:
      "Your household and belongings, packed and moved door to door on the Cameroon to Canada route and beyond.",
  },
  {
    id: "02",
    title: "Sea and air freight",
    description:
      "Ship by sea when timing is flexible, or by air when delivery is urgent. We manage routing and updates end to end.",
  },
  {
    id: "03",
    title: "Customs and documentation",
    description:
      "We prepare paperwork, declarations, and clearances to keep your cargo compliant across origin and destination.",
  },
  {
    id: "04",
    title: "Storage and consolidation",
    description:
      "Need staging space or combined loads? We store safely and consolidate shipments for cost and transit efficiency.",
  },
];

export default function SevenSection() {
  const [openId, setOpenId] = useState<string>("01");

  return (
    <section className="h-auto w-full">
      <div className="h-full w-full rounded-[18px] bg-[#ececec] py-32">
        <div className="h-full w-[90%] mx-auto overflow-hidden py-10 bg-[#ececec]">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-[#d7d7d7]/50 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className="grid w-full grid-cols-[56px_1fr_34px] items-start gap-4 px-4 py-7 text-left sm:grid-cols-[80px_1fr_42px] sm:px-6 md:grid-cols-[110px_1fr_56px] md:gap-6 md:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                >
                  <span className="text-[clamp(1.15rem,2.1vw,2rem)] font-normal leading-none text-[#141414]">
                    {item.id}
                  </span>

                  <div>
                    <h3 className="k-card-title font-normal text-[#121212]">
                      {item.title}
                    </h3>

                    {isOpen && (
                      <div
                        id={`panel-${item.id}`}
                        className="mt-4 grid items-start gap-3 sm:grid-cols-[160px_1fr] md:mt-5 md:gap-7 md:grid-cols-8 py-10 md:py-12"
                      >
                        <div
                          className="h-[150px] md:h-[100px] w-full rounded-[14px] bg-cover bg-center bg-no-repeat md:col-start-4 md:col-span-1"
                          style={{
                            backgroundImage:
                              "url('/images/hero_background.jpg')",
                            backgroundPosition: "center 72%",
                          }}
                        />
                        <p className="k-body-sm max-w-[460px] text-[#3d3d3d] md:col-start-5 md:col-span-2">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full text-[22px] leading-none sm:h-10 sm:w-10 sm:text-[26px] ${
                      isOpen ? "bg-[#2ea2e2] text-white" : "text-[#171717]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <FiArrowUpRight size={24} />
                    ) : (
                      <GoArrowRight size={24} />
                    )}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
