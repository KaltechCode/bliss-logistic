"use client";

import Image from "next/image";

export default function NineSection() {
  return (
    <footer className="w-full">
      <div className="w-full bg-[#050505] px-5 py-8 text-white sm:px-8 md:px-10 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-[#0a0f1a] text-[#2ea2e2]">
                <Image
                  src={"/logo/main_logo.png"}
                  height={250}
                  width={250}
                  alt="bliss logistic logo"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="k-card-title text-white">Services</h3>
            <ul className="k-body-sm mt-3 space-y-2 text-white/85">
              <li>Freight Forwarding</li>
              <li>Warehousing</li>
              <li>Supply Chain Management</li>
              <li>E-Commerce Fulfillment</li>
            </ul>
          </div>

          <div>
            <h3 className="k-card-title text-white">Company</h3>
            <ul className="k-body-sm mt-3 space-y-2 text-white/85">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="k-card-title text-white">Support</h3>
            <ul className="k-body-sm mt-3 space-y-2 text-white/85">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
