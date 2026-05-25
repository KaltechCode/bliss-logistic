"use client";

import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

import { useState } from "react";
import Image from "next/image";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
};

const items: AccordionItem[] = [
  {
    id: "01",
    title: "GENERAL CONTRACTING SERVICES",
    description: "End-to-end project execution & management",
  },
  {
    id: "02",
    title: "WAREHOUSE & DISTRIBUTION",
    description: "Storage, fulfilment & last-mile delivery",
  },
  {
    id: "03",
    title: "PROCUREMENT SERVICE",
    description: "Strategic sourcing & vendor management and office supplies",
  },
  {
    id: "04",
    title: "RELIABLE GLOBAL SHIPPING",
    description: "Air, sea & land freight worldwide",
  },
];

export default function SevenSection() {
  const [openId, setOpenId] = useState<string>("01");

  return (
    <section className="h-auto w-full">
      <div className="w-full rounded-[18px] bg-[#ececec] py-32">
        <div className="h-full w-[90%] max-w-[1520px] mx-auto overflow-hidden py-10 bg-[#ececec]">
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

                  <div className=" grid md:grid-cols-8">
                    <h3 className="k-card-title font-normal text-[#121212] !text-left md:col-start-1 md:col-span-8 lg:col-start-3 lg:col-span-6">
                      {item.title}
                    </h3>

                    {isOpen && (
                      <div
                        id={`panel-${item.id}`}
                        className="mt-4 grid items-start gap-3 sm:grid-cols-[160px_1fr] md:mt-5 md:gap-7 md:grid-cols-8 md:col-start-1 md:col-span-8"
                      >
                        <div className="md:col-start-1 md:col-span-2 lg:col-start-3 lg:col-span-2 rounded-md overflow-hidden ">
                          <Image
                            src={"/images/hero_background.jpg"}
                            height={550}
                            width={300}
                            alt="bliss logistic logo"
                            className="h-auto w-[100%]"
                            priority
                          />
                        </div>
                        <div className=" max-w-[460px] text-[#3d3d3d]  md:max-w-[550px] md:col-start-1 md:col-span-8 lg:col-start-3 lg:col-span-6">
                          <p className="k-body-sm md:max-w-[420px]">
                            {item.description}
                          </p>
                        </div>
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
