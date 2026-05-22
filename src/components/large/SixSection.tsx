import Image from "next/image";

export default function SixSection() {
  return (
    <section className="h-screen w-full py-[5vh]">
      <div className="h-full w-full rounded-[18px] bg-[#e9e9e9] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <div className="grid h-full grid-rows-[1fr_auto] gap-6">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="h-[220px] overflow-hidden  sm:h-[260px] md:h-[300px]">
                <div />
                <Image
                  src={"/images/logistic-van.jpg"}
                  alt="image"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="k-eyebrow inline-flex items-center gap-2 text-[#131313]">
                <span className="text-[16px] leading-none text-[#2ea2e2]"></span>
                <span>OUR SOLUTIONS</span>
              </p>
              <h2 className="k-section-title mt-5 max-w-[920px] text-[#131313]">
                Logistics and Supply Chain Solutions to Simplify Shipping and
                Optimize Efficiency.
              </h2>
            </div>
          </div>

          <p className="k-body-lg text-[#1e1e1e]">
            <span className="font-semibold">Smart. Fast. Secure.</span> Global.
            Reliable.
          </p>
        </div>
      </div>
    </section>
  );
}
