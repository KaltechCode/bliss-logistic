import { MdArrowBack } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHolding } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";

export default function ThirdSection() {
  return (
    <section className="h-auto md:h-screen w-full">
      <div className="h-full w-full bg-[#060707] px-4 py-6 text-white sm:px-6 sm:py-8 md:px-10 md:py-10 xl:py-[6rem]">
        <div className="flex h-full flex-col gap-8 md:gap-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <p className="k-eyebrow text-[#2fa8eb]">Our Services</p>
              <h2 className="k-section-title mt-7 max-w-[820px] text-white">
                DELIVERING LOGISTICS
                <br />
                SOLUTIONS YOU CAN TRUST
              </h2>
            </div>

            <div className="md:col-span-3 md:justify-self-end">
              <button className="inline-flex items-center rounded-full bg-[#2fa8eb] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2398d8]">
                View All Services
              </button>
            </div>
          </div>

          <div className="grid flex-1 gap-7 sm:grid-cols-2 xl:grid-cols-4 mt-10">
            <article className="relative flex min-h-[250px] md:max-h-[300px] flex-col rounded-[18px] bg-[#34a3dc] p-5">
              <div className="text-4xl leading-none">
                <CiDeliveryTruck size={30} />
              </div>
              <div className="absolute -right-1 -top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-[#060707] bg-[#34a3dc] text-base">
                <MdArrowBack size={16} className="rotate-135" />
              </div>
              <h3 className="k-card-title mt-auto">Door-to-door relocation</h3>
              <p className="k-body-sm mt-3 text-white/90">
                We move your household from your old place to your new one. We
                pack it, you don't.
              </p>
            </article>

            <article className="relative flex min-h-[250px]  md:max-h-[300px] flex-col rounded-[18px] bg-[#e8e8e8] p-5 text-[#1d1d1d]">
              <div className="text-4xl leading-none">
                <FaHandHolding size={30} className="-rotate-180" color="#fff" />
              </div>
              <div className="absolute -right-1 -top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-[#060707] bg-[#e8e8e8] text-base text-black">
                <MdArrowBack size={16} className="rotate-135" />
              </div>
              <h3 className="k-card-title mt-auto">Storage & consolidation</h3>
              <p className="k-body-sm mt-3 text-[#4b4b4b]">
                New place not ready? We'll hold your things. Shipping several
                loads? We'll combine them and cut the cost.
              </p>
            </article>

            <article className="relative flex min-h-[250px]  md:max-h-[300px] flex-col rounded-[18px] bg-[#e8e8e8] p-5 text-[#1d1d1d]">
              <div className="text-4xl leading-none">
                <FiCalendar size={30} />
              </div>
              <div className="absolute -right-1 -top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-[#060707] bg-[#e8e8e8] text-base text-black">
                <MdArrowBack size={16} className="rotate-135" />
              </div>
              <h3 className="k-card-title mt-auto">Sea & air freight</h3>
              <p className="k-body-sm mt-3 text-[#4b4b4b]">
                Ship by sea to save money, or by air when you're in a hurry.
                Your call.
              </p>
            </article>

            <article className="relative flex min-h-[250px]   md:max-h-[300px] flex-col rounded-[18px] bg-[#e8e8e8] p-5 text-[#1d1d1d]">
              <div className="text-4xl leading-none">??</div>
              <div className="absolute -right-1 -top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-[#060707] bg-[#e8e8e8] text-base text-black">
                <MdArrowBack size={16} className="rotate-135" />
              </div>
              <h3 className="k-card-title mt-auto">Customs clearance</h3>
              <p className="k-body-sm mt-3 text-[#4b4b4b]">
                Duties and documentation handled at both ends, so your goods
                keep moving.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
