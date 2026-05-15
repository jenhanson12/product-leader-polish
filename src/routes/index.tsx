import { createFileRoute } from "@tanstack/react-router";
import jenPortrait from "@/assets/jen-portrait.png";
import logoMark from "@/assets/hanson-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jen Hanson — Fractional Product & AI Leadership" },
      {
        name: "description",
        content:
          "Jen Hanson is a fractional product leader who embeds with startup teams to turn early-stage chaos into momentum that lasts.",
      },
      { property: "og:title", content: "Jen Hanson — Fractional Product & AI Leadership" },
      {
        property: "og:description",
        content:
          "Senior product thinking with operator instincts. Bridging strategy and execution for early-stage startups.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const VALUE_PROPS = [
  {
    title: "Force Multiplier, Not Overhead",
    body: "I absorb execution across product, ops, and AI strategy so CEOs can focus on growth. I take ownership of whatever the team needs, from strategy to execution to tooling.",
  },
  {
    title: "AI-Native Product Leadership",
    body: "I've driven AI-powered products from concept through scale from inside the team. I've scoped, built, and shipped with AI.",
  },
  {
    title: "Cross-Functional Glue",
    body: "I serve as the connective tissue between leadership, engineering, and design, cutting through ambiguity, surfacing priorities, and keeping everyone moving in the same direction.",
  },
  {
    title: "Operator Depth Across Stages",
    body: "I've navigated complex product decisions across industries and company stages, from B2B pivots and consumer app launches to enterprise platforms and AI tooling.",
  },
];

function Index() {
  return (
    <div
      className="min-h-screen bg-background text-foreground selection:bg-accent/20"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Nav — light, logo-led, sticky */}
      <div className="sticky top-0 z-40 bg-background sm:bg-background/85 sm:backdrop-blur-md border-b border-border/60">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group" aria-label="Hanson Strategies — home">
          <img
            src={logoMark}
            alt=""
            className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span
            className="hidden sm:inline text-sm tracking-[0.28em] uppercase text-muted-foreground group-hover:text-foreground transition-colors"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Hanson Strategies
          </span>
        </a>
        <div className="flex gap-5 sm:gap-8 items-center text-xs sm:text-sm tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
          <a
            href="https://www.linkedin.com/in/jenhanson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jen@hansonstrategiesllc.com"
            className="text-foreground hover:text-accent transition-colors border-b border-accent/40 hover:border-accent pb-0.5"
          >
            Get in touch
          </a>
        </div>
      </nav>
      </div>


      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 sm:pt-12 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
                Fractional Product &amp; AI Leadership
              </span>
            </div>
            <h1
              className="text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8 text-balance max-w-none sm:max-w-[18ch]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Turning{" "}
              <span
                className="italic whitespace-nowrap"
                style={{ color: "var(--accent)" }}
              >
                early-stage chaos
              </span>{" "}
              into momentum that lasts.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              I embed with startup teams as a{" "}
              <span className="text-foreground font-medium">senior product leader and operator</span>,{" "}
              bridging strategy and execution so founders can focus on what matters.
            </p>
            <a
              href="mailto:jen@hansonstrategiesllc.com"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Smaller headshot with soft fade + caption rule */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-[170px] sm:w-[220px] lg:w-[300px]">
              <div className="aspect-[4/5] rounded-2xl bg-[var(--surface)] overflow-hidden">
                <img
                  src={jenPortrait}
                  alt="Jen Hanson, fractional product and AI leader"
                  loading="eager"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center top",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 90%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why founders hire me */}
      <section className="bg-[var(--surface)] border-y border-border/60 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16 sm:mb-20">
            <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent mb-5">
              Why founders hire me
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Senior product thinking.{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                Operator instincts.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              I'm brought in when a startup needs someone who can hold both the big picture and the
              ground-level execution. I don't just advise from the sideline - I'm hands-on and move
              things forward. I reduce founder decision load without losing momentum, and I get
              products and teams operational.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {VALUE_PROPS.map((vp, i) => (
              <li key={vp.title} className="flex gap-6">
                <span
                  className="text-2xl italic shrink-0 text-accent/70 leading-none pt-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    className="text-xl sm:text-2xl mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                  >
                    {vp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{vp.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Community & Speaking */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
              Community &amp; Speaking
            </p>
            <div className="hidden lg:block mt-8 pl-0 border-l-2 border-accent/40 pl-5">
              <p
                className="italic text-xl text-muted-foreground leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Showing up where founders &amp; builders gather.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
            Active in the local{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              AI &amp; startup community.
            </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a regular at Boulder and Denver's AI and startup community events, as an attendee
              and sometimes a speaker. I've spoken at Boulder Startup Week, the AI Impact Forum,
              Denver AI, and Women in AI, and I co-organize{" "}
              <a
                href="https://meetup.com/meetup-group-ai-and-product"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
              >
                AI &amp; Product
              </a>
              , a meetup for product people navigating the AI landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[var(--surface)] border-y border-border/60 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent mb-5">
            Let's talk
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Need a product leader{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              to build momentum?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I work with no more than a couple startups at a time so I can be genuinely useful. If you're
            figuring out what to build, how to ship faster, or how to build AI into your product,
            let's talk.
          </p>
          <a
            href="mailto:jen@hansonstrategiesllc.com"
            className="inline-block text-xl sm:text-2xl italic text-foreground hover:text-accent transition-colors border-b border-accent/30 hover:border-accent pb-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            jen@hansonstrategiesllc.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-7 w-auto opacity-80" />
            <p
              className="text-sm italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Jen Hanson
              <span className="text-muted-foreground not-italic">
                {" "}
                · Founder, Hanson Strategies LLC
              </span>
            </p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            © {new Date().getFullYear()} Hanson Strategies LLC
          </p>
        </div>
      </footer>
    </div>
  );
}
