import Image from "next/image";

export default function SixSection() {
  return (
    <section className="h-auto w-full ">
      <div className="h-full  rounded-[18px] bg-[#e9e9e9] py-24 md:py-32">
        <div className="grid h-full grid-rows-[1fr_auto] gap-6 w-[90%] mx-auto">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="overflow-hidden">
                <div />
                <Image
                  src={"/images/logistic-van.jpg"}
                  height={550}
                  width={300}
                  alt="bliss logistic logo"
                  className="h-auto w-[190px] w-full md:w-[260px]"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <p className="k-eyebrow inline-flex items-center gap-2 text-[#131313]">
                <span className="text-[16px] leading-none text-[#2ea2e2]"></span>
                <span>OUR SOLUTIONS</span>
              </p>
              <h2 className="text-lg font-bold  mt-5 max-w-[920px] text-[#131313]">
                Logistics and Supply Chain Solutions to Simplify Shipping and
                Optimize Efficiency.
              </h2>
              <p className="text-sm text-[#1e1e1e] mt-3">
                <span className="font-semibold">Smart. Fast. Secure.</span>{" "}
                Global. Reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
