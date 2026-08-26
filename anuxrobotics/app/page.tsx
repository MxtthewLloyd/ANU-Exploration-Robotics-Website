import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden bg-[--paper]">
        <div className="hero-image absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/reef-home.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-white-panel absolute inset-0 z-[1] bg-white/80" />

        {/* Scroll indicator */}
        <div className="absolute right-6 top-1/2 z-[3] hidden -translate-y-1/2 flex-col items-center gap-2.5 text-white/85 md:flex">
          <div className="scroll-tick relative h-14 w-px overflow-hidden bg-white/40" />
          <span className="text-[10px] tracking-[0.15em] uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>

        {/* White diagonal panel*/}
        <div className="relative z-[2] flex h-full w-full flex-col px-6 pb-16 pt-8 md:w-[62%] md:px-12">
          <nav className="flex items-center gap-16 md:pr-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo (1).png" alt="Exploration Robotics logo" width={200} height={40} />
            </div>
            <ul className="hidden gap-7 md:flex">
              <li>
                <Link href="/team" className="inline-block text-xs font-medium uppercase tracking-wide text-[--ink] transition-transform duration-200 hover:scale-110 hover:text-[--coral]">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/vehicle" className="inline-block text-xs font-medium uppercase tracking-wide text-[--ink] transition-transform duration-200 hover:scale-110 hover:text-[--coral]">
                  Vehicle
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="inline-block text-xs font-medium uppercase tracking-wide text-[--ink] transition-transform duration-200 hover:scale-110 hover:text-[--coral]">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/updates" className="inline-block text-xs font-medium uppercase tracking-wide text-[--ink] transition-transform duration-200 hover:scale-110 hover:text-[--coral]">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block text-xs font-medium uppercase tracking-wide text-[--ink] transition-transform duration-200 hover:scale-110 hover:text-[--coral]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-1 items-center pr-8">
            <div>
              <h1 className="font-display text-[clamp(3.4rem,7vw,6.2rem)] font-extrabold leading-[0.95] tracking-tight">
                Exploration
                <br />
                Robotics
              </h1>
              <p className="mt-6 max-w-[36ch] text-lg text-[#4a5560]">
                Lorem Ipsum bla bla bla
              </p>

              <Link
                href="/team"
                className="mt-6 inline-block rounded-sm bg-[var(--coral)] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--ink)]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST SUBS */}
      <section className="mx-auto max-w-[1280px] px-[8vw] py-28">
        <div className="mb-12 flex items-end justify-between border-b border-[--line] pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[--coral]">
              Build Progress
            </span>
            <h2 className="text-3xl font-semibold">Latest subs</h2>
          </div>
          <Link href="/updates" className="border-b border-[--ink] pb-0.5 text-sm font-semibold">
            Learn more →
          </Link>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {[
            { tag: "Lorem ipsum", title: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { tag: "Lorem ipsum", title: "Sed do eiusmod", desc: "Ut enim ad minim veniam, quis nostrud exercitation." },
            { tag: "Lorem ipsum", title: "Duis aute irure", desc: "Excepteur sint occaecat cupidatat non proident." },
          ].map((card) => (
            <div
              key={card.title}
              className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm p-5 text-white"
              style={{ background: "linear-gradient(200deg, #0e7a8f, #052437 75%)" }}
            >
              <span className="text-[11px] uppercase tracking-wide text-[--cyan]">{card.tag}</span>
              <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="mx-auto max-w-[1280px] px-[8vw] py-28">
        <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[--coral]">Who we are</span>
            <h2 className="my-4 text-3xl font-semibold">About us</h2>
            <p className="mb-4 text-base leading-7 text-[#3b444d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p className="mb-4 text-base leading-7 text-[#3b444d]">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block rounded-sm bg-[var(--coral)] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-[var(--paper)] transition-colors hover:bg-[var(--ink)]">
              Contact us
            </Link>
          </div>
          <div
            className="aspect-square rounded-sm"
            style={{ background: "linear-gradient(160deg, #0a5c73, #1fc4a8)" }}
          />
        </div>
      </section>

      {/* MEET THE TEAM*/}
      <section className="mx-auto max-w-[1280px] px-[8vw] py-28">
        <div className="mb-12 flex items-end justify-between border-b border-[--line] pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[--coral]">
              Who&apos;s building it
            </span>
            <h2 className="text-3xl font-semibold">Meet the team</h2>
          </div>
          <Link href="/team" className="border-b border-[--ink] pb-0.5 text-sm font-semibold">
            Learn more →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { name: "Lorem Ipsum", role: "Lorem ipsum" },
            { name: "Lorem Ipsum", role: "Lorem ipsum" },
            { name: "Lorem Ipsum", role: "Lorem ipsum" },
            { name: "Lorem Ipsum", role: "Lorem ipsum" },
          ].map((member, i) => (
            <div key={i}>
              <div
                className="mb-3.5 aspect-square rounded-sm"
                style={{ background: "linear-gradient(150deg, #e4e2db, #cfd3ce)" }}
              />
              <h4 className="font-display text-sm font-semibold">{member.name}</h4>
              <span className="text-xs text-[#8a8f88]">{member.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORS */}
      <section className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 border-t border-[--line] px-[8vw] py-16">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex h-10 w-[120px] items-center justify-center rounded-sm bg-[#eeede8] text-[10px] uppercase tracking-wide text-[#9a9c94]"
          >
            Sponsor
          </div>
        ))}
      </section>
    </>
  );
}