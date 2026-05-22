import React from "react";

function BtnWhiteAngle({
  label,
  handler,
}: {
  label: string;
  handler?: () => void;
}) {
  return (
    <button className="order-2 items-center flex gap-2 rounded-full bg-white px-5 py-2 text-md font-semibold text-[#163d61] sm:order-3">
      {label}
      <span className="text-base leading-none">&#8250;</span>
    </button>
  );
}

export default BtnWhiteAngle;
