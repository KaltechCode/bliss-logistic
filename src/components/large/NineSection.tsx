"use client";

import Image from "next/image";
import Link from "next/link";

export default function NineSection() {
  const d = new Date();
  return (
    <footer className="w-full">
      <div className="w-full bg-[#050505] px-5 pt-24 pb-2 text-white sm:px-8 md:px-10 md:py-">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Link href={"/"} className="">
                <Image
                  src={"/logo/main_logo.png"}
                  height={550}
                  width={300}
                  alt="bliss logistic logo"
                  className="h-auto w-[190px] sm:w-[220px] md:w-[260px]"
                  priority
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="k-card-title text-white text-left!">Services</h3>
            <ul className="k-body-sm mt-3 space-y-2 text-white/85">
              <li>General Contracting Services</li>
              <li>Warehouse & Distribution</li>
              <li>Procurement Service</li>
              <li>Global Shipping</li>
            </ul>
          </div>

          <div>
            <h3 className="k-card-title text-white text-left!">Company</h3>
            <ul className="k-body-sm mt-3 space-y-2 text-white/85">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="k-card-title text-white text-left!">Support</h3>
            <ul className="k-body-sm mt-3 space-y-2 text-white/85">
              <li>
                <a
                  href={
                    "https://www.google.com/maps/place/Bonduma+Spring/@4.155015,9.2648712,17.14z/data=!4m6!3m5!1s0x106133ad7b5d54c1:0x69a82b416e25fe1!8m2!3d4.1549898!4d9.2697507!16s%2Fg%2F11v5vy05yp?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  }
                >
                  Bonduma, Buea <br />
                  South West Region <br /> Cameroon
                </a>
              </li>
              <li>
                <a href="tel:+237650942551"></a>+23765094255
              </li>
              <li>
                <a href="mailto:info@blizlogistics.com">
                  info@blizlogistics.com
                </a>
              </li>
              {/* <li>Privacy Policy</li> */}
            </ul>
          </div>
        </div>
        <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto pt-10 pb-2 text-white text-center flex items-center gap-1.5 justify-center mt-10">
          <p className="font-primary">
            &copy; {d.getFullYear()} All rights reserved.
          </p>
          <div className="h-[20px] w-[3px] bg-[#34a3dc]"></div>
          <Link
            href={"https://kaltechconsultancy.tech/"}
            className="font-primary"
            target="_blank"
          >
            Designed by Kaltech Consultancy
          </Link>
        </div>
      </div>
    </footer>
  );
}
