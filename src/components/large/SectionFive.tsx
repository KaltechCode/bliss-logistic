export default function SectionFive() {
  return (
    <section className="h-auto md:h-screen w-full py-[10vh]">
      <div className="h-full w-full rounded-[18px] bg-[#e9e9e9] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <div className="flex h-full flex-col">
          <div className="text-center">
            <p className="k-eyebrow text-[#2ea2e2]">Simple Process</p>
            <h2 className="k-section-title mt-3 text-[#131313]">
              FROM PICKUP TO
              <br />
              DELIVERY MADE EASY
            </h2>
          </div>

          <div className="mt-7 grid flex-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="relative h-[320px] overflow-hidden rounded-[22px] sm:h-[390px] md:h-[460px] lg:h-[500px]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/store.jpg')",
                    backgroundPosition: "center 70%",
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.28)_0%,rgba(10,10,10,0.5)_100%)]" />
                <button className="absolute bottom-0 right-0 rounded-tl-[18px] bg-[#2ea2e2] px-6 py-3 text-sm font-medium text-white">
                  Book Your Shipment
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 mt-10">
              <div className="relative pl-8">
                <div className="absolute bottom-2 left-2 top-2 w-[2px] bg-[#101010]" />

                <div className="relative pb-7">
                  <span className="absolute -left-[30px] top-2 h-4 w-4 rounded-full bg-[#2ea2e2]" />
                  <h3 className="k-card-title text-[#2a2a2a]">Get a quote.</h3>
                  <p className="k-body-sm mt-2 max-w-[540px] text-[#666]">
                    Tell us what's moving and where to. You get a clear,
                    itemised price back within [24 hours].
                  </p>
                </div>

                <div className="relative pb-7">
                  <span className="absolute -left-[30px] top-2 h-4 w-4 rounded-full bg-[#101010]" />
                  <h3 className="k-card-title text-[#2a2a2a]">
                    We collect and pack.
                  </h3>
                  <p className="k-body-sm mt-2 max-w-[560px] text-[#666]">
                    Our team comes to you, packs everything, and gives you an
                    inventory to check.
                  </p>
                </div>

                <div className="relative pb-7">
                  <span className="absolute -left-[30px] top-2 h-4 w-4 rounded-full bg-[#101010]" />
                  <h3 className="k-card-title text-[#2a2a2a]">
                    Track it in transit.
                  </h3>
                  <p className="k-body-sm mt-2 max-w-[560px] text-[#666]">
                    One reference number, updated at every stage.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[30px] top-2 h-4 w-4 rounded-full bg-[#101010]" />
                  <h3 className="k-card-title text-[#2a2a2a]">
                    Delivered and cleared.
                  </h3>
                  <p className="k-body-sm mt-2 max-w-[560px] text-[#666]">
                    We handle customs and bring it to your door. Nothing left
                    for you to chase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
