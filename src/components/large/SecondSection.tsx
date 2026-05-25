import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiFoldersDuotone } from "react-icons/pi";
import { BsGlobeAmericas } from "react-icons/bs";

export default function SecondSection() {
  return (
    <section className=" h-auto md-landscape:h-auto xl:h-screen w-full bg-[#e9e9e9] py-4 md:py-10 lg:py-16 ">
      <div className="mx-auto grid h-full w-[90%] max-w-[1520px] gap-8 rounded-[18px] py-5">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <p className="k-eyebrow inline-flex items-center gap-2 text-[#101010]">
              <span className="text-[16px] leading-none text-[#2ea2e2]"></span>
              <span>ABOUT US</span>
            </p>
            <h2 className="k-section-title mt-5 max-w-[680px] text-[#121212]">
              Transforming Logistics with Reliable, Scalable Shipping Solutions
              for Businesses.
            </h2>
          </div>

          <div className="md:col-span-5 md:pt-10 mt-7 md:mt-0">
            <p className="k-body-lg max-w-[500px] text-[#2f2f2f]">
              At Bliz, we believe logistics should be simple and dependable. Our
              team empowers companies to move goods faster and safer, allowing
              businesses to focus on growth.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-12">
          <article className="rounded-[20px] bg-[#f2f2f2] p-5 md:min-h-[300px] md:p-6 lg:col-span-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#dfdfdf] text-[18px] text-[#2ea2e2]">
              <MdOutlineMapsHomeWork size={20} />
            </div>
            <div className="mt-4 flex items-end gap-1 text-[#101010]">
              <span className="text-[72px] font-medium leading-none">24</span>
              <span className="mb-2 text-[48px] leading-none">k</span>
            </div>
            <p className="k-body-sm mt-12 w-full text-[#2f2f2f] md:mt-14">
              Trusted by businesses across multiple industries with shipments
              delivered on time and with precision.
            </p>
          </article>

          <article className="rounded-[20px] bg-black p-5 text-white md:min-h-[300px] md:p-6 lg:col-span-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1ea2ea] text-[18px] text-white">
              <PiFoldersDuotone size={20} />
            </div>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-[72px] font-medium leading-none">98</span>
              <span className="mb-2 text-[48px] leading-none">%</span>
            </div>
            <p className="k-body-sm mt-12 w-full text-white/90 md:mt-14">
              Our smart tracking system and optimized supply chain ensure
              reliability every step of the way.
            </p>
          </article>

          <article className="rounded-[20px] bg-[#34a3dc] p-5 text-white md:col-span-2 md:min-h-[300px] md:p-6 lg:col-span-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-[18px] text-white">
              <BsGlobeAmericas size={24} />
            </div>
            <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1 text-white">
              <span className="k-card-title leading-none">500+</span>
              <span className="k-card-title leading-none">Global Partners</span>
            </div>
            <p className="k-body-sm mt-12 max-w-[640px] text-white/90 md:mt-14">
              An expanding network of logistics partners and warehouses across
              key hubs enables us to serve every destination local, regional, or
              overseas ensuring seamless operations and reliable delivery.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
