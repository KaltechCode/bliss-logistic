"use client";

import { LuMessagesSquare } from "react-icons/lu";
import { GiAngelWings } from "react-icons/gi";

export default function EightSection() {
  return (
    <section className="h-auto lg:h-screen w-full py-[10vh]">
      <div
        className="relative h-full w-full overflow-hidden rounded-[18px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/third-bg.jpg')",
          backgroundPosition: "center 64%",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(19,19,19,0.35)_0%,rgba(19,19,19,0.15)_45%,rgba(19,19,19,0.22)_100%)]" />

        <div className="relative z-10 h-full w-full p-4 sm:p-6 md:p-8">
          <div className="grid h-full gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="rounded-[14px] bg-[rgba(21,24,29,0.72)] p-5 text-white backdrop-blur-[3px] sm:p-6 md:p-8 lg:col-span-7">
              <p className="k-eyebrow tracking-[0.3em] text-white/85">
                LET'S GROW TOGETHER
              </p>
              <h2 className="k-section-title mt-4 max-w-[670px] font-normal text-white">
                For expert assistance and further inquiries, please contact our
                team.
              </h2>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14">
                <article className="mt-10">
                  <div className="text-3xl">
                    <LuMessagesSquare size={24} />
                  </div>
                  <h3 className="k-card-title mt-3">Fast Response</h3>
                  <p className="k-body-sm mt-2 text-white/85">
                    Quick and responsive service communication to ensure
                    operational continuity.
                  </p>
                </article>

                <article className="mt-10">
                  <div className="text-3xl">
                    <GiAngelWings size={24} />
                  </div>
                  <h3 className="k-card-title mt-3">Clear Next Steps</h3>
                  <p className="k-body-sm mt-2 text-white/85">
                    Clear and well-defined steps that guide your progress with
                    clarity and confidence.
                  </p>
                </article>
              </div>
            </div>

            <div className="rounded-[12px] bg-[#efefef] px-4 py-10 text-[#1b1b1b] shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:p-5 md:p-6 lg:col-span-5">
              <h3 className="k-card-title">
                Do You Have Any Questions Or
                <br />
                <span className="text-[#3f79d9] text-md mt-10">
                  Would You Like To Discuss Further?
                </span>
              </h3>

              <form
                className="mt-5 space-y-4 md:mt-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-[#2c2c2c]"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-[8px] border border-[#dadada] bg-[#f4f4f4] px-3 py-2.5 text-sm outline-none placeholder:text-[#a1a1a1] focus:border-[#8a8a8a]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-[#2c2c2c]"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-[8px] border border-[#dadada] bg-[#f4f4f4] px-3 py-2.5 text-sm outline-none placeholder:text-[#a1a1a1] focus:border-[#8a8a8a]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-[#2c2c2c]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    className="w-full resize-none rounded-[8px] border border-[#dadada] bg-[#f4f4f4] px-3 py-2.5 text-sm outline-none placeholder:text-[#a1a1a1] focus:border-[#8a8a8a]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#151515] px-6 py-3 text-base font-medium text-white transition hover:bg-black"
                >
                  Get Started
                </button>

                <p className="text-[11px] leading-[1.4] text-[#9b9b9b]">
                  By submitting this form, you acknowledge and accept our terms
                  and privacy policy, along with how your data will be securely
                  processed and managed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
