import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const InvertedBorderCard = ({
  title,
  text,
  image,
  index,
}: {
  title: string;
  text: string;
  image: any;
  index: number;
}) => {
  return (
    <div className="relative flex min-h-[250px] max-w-[400px] md:max-h-[300px] flex-col justify-end rounded-[18px] bg-white hover:scale-105 duration-300 transition-all p-5 overflow-hidden p-6 text-white first:bg-[#34a3dc]">
      {/* Top right inverted corner */}
      <div className="absolute right-0 z-12 top-0 h-16 w-16 bg-black rounded-bl-[30px]  shadow-md not-first:bg-white">
        <div
          className={`absolute right-1 top-1 flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? "bg-[#34a3dc]" : "bg-white"}`}
        >
          <GoArrowUpRight
            className={`${index == 0 ? "text-white" : "text-black"}`}
            size={24}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative top-0 z-10 gap-10 grid grid-rows-6  min-h-[250px] max-w-[400px] md:max-h-[300px] pt-[15%] ">
        <div className="row-span-2 flex items-end">
          <Image src={image} height={50} width={50} alt={title} />
        </div>

        <div className="justify-start row-span-3 flex flex-col">
          <h3 className="text-lg font-semibold leading-tight text-black">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-black/80">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InvertedBorderCard;
