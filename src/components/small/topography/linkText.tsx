"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

function LinkText({ linkHref, label }: { linkHref: string; label: string }) {
  const pathName = usePathname();
  return (
    <Link
      href={linkHref}
      className={`font-inter inline-block rounded-full text-md text-center cursor-pointer font-medium px-4 py-1.5 md:py-2 md:px-8  hover:bg-white hover:text-[#295978] transition-all duration-400 ${pathName == linkHref ? "bg-white text-[#295978]" : "bg-[#295978]/55 text-white"} `}
    >
      {label}
    </Link>
  );
}

export default LinkText;
