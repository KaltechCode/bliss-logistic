import Image from "next/image";

export default function SixSection() {
  return (
    <section className="h-max w-full">
      <div className="h-full bg-[#e9e9e9] py-24 md:py-32">
        <div className="gap-6 h-max w-[90%] max-w-[1520px] mx-auto">
          <div className="grid h-max items-center gap-8 lg:gap-24 w-full md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="w-full ">
                <Image
                  src={"/images/logistic-van.jpg"}
                  height={550}
                  width={300}
                  alt="bliss logistic logo"
                  className="h-auto w-full "
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-6">
              <p className="k-eyebrow inline-flex items-center gap-2 text-[#131313] ">
                <span className="text-[16px] leading-none text-[#2ea2e2]"></span>
                <span>Our Solution</span>
              </p>
              <h2 className="k-section-title font-bold  mt-5 max-w-[80%] text-[#131313] text-wrap">
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
