export default function FouthSection() {
  return (
    <section className="h-auto w-full">
      <div className="relative h-full w-full overflow-hidden bg-[#dcdcdc]  py-16 lg:py-16 xl:py-20">
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[#070707]"></div>

        <div className="relative z-10 h-full w-[90%] mx-auto max-w-[1520px]">
          <div
            className="relative h-full w-full overflow-hidden rounded-[18px] bg-cover bg-center bg-no-repeat py-10 xl:py-16"
            style={{
              backgroundImage: "url('/images/contact-bg.jpg')",
              backgroundPosition: "center 42%",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,20,31,0.62)_0%,rgba(6,20,31,0.38)_33%,rgba(6,20,31,0.20)_62%,rgba(6,20,31,0.3)_100%)] " />

            <div className="relative z-10 flex h-full flex-col p-5 sm:p-7 md:p-10 lg:w-[95%] xl:w-[90%] mx-auto">
              <p className="k-eyebrow text-white/85">Real-Time Tracking</p>

              <div className="flex flex-col lg:flex-row lg:gap-16 lg:justify-between">
                <div>
                  <h2 className="big-section-title  mt-10 max-w-[660px] text-white">
                    TRACK EVERY
                    <br />
                    SHIPMENT FULL <br /> TRANSPARENCY
                  </h2>
                </div>

                <div className="mt-12 w-full flex flex-col gap-4 max-w-[430px] md:max-w-[600px] lg:max-w-[576px] rounded-[14px] bg-[#e6e6e6] p-5 text-[#2a2a2a] shadow-[0_14px_34px_rgba(0,0,0,0.26)] px-8 py-8 self-center lg:py-16 lg:px-16">
                  <h3 className="k-card-title">Tracking Shipping</h3>
                  <div className="">
                    <label className="mt-5 block text-sm font-medium text-[#555]">
                      Track By
                    </label>
                    <div className="mt-2 flex items-center justify-between rounded-[8px] bg-[#dbdbdb] px-3 py-2.5 text-sm text-[#474747]">
                      <span>Number Shipping</span>
                      <span>&#9662;</span>
                    </div>
                  </div>

                  <div className="">
                    <label className="mt-4 block text-sm font-medium text-[#555]">
                      Enter Detail
                    </label>
                    <div className="mt-2 flex items-center justify-between rounded-[8px] border border-[#62b4de] bg-[#f0f0f0] px-3 py-2.5 text-sm text-[#474747]">
                      <span>6459026488299174</span>
                      <span>&#9662;</span>
                    </div>
                  </div>

                  <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2fa8e9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2798d4]">
                    Search
                    <span className="text-xs">&#9711;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
