import { createFileRoute } from "@tanstack/react-router";
import jenPortrait from "@/assets/jen-portrait.png";
import logoMark from "@/assets/hanson-logo.png";
import ogImage from "@/assets/og-image.jpg";

const SITE_URL = "https://hansonstrategiesllc.com";
const OG_IMAGE_URL = new URL(ogImage, SITE_URL).href;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hanson Strategies — Fractional Product & Operator Leadership" },
      {
        name: "description",
        content:
          "Jen Hanson embeds with early-stage startups as a fractional product leader and operator — bridging strategy and execution so founders can focus on growth.",
      },
      { property: "og:title", content: "Hanson Strategies — Fractional Product & Operator Leadership" },
      {
        property: "og:description",
        content:
          "Senior product thinking. Operator instincts. Jen Hanson works with startups as an embedded fractional leader across product, ops, and AI strategy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hansonstrategiesllc.com" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Hanson Strategies — Fractional Product & Operator Leadership" },
      {
        name: "twitter:description",
        content:
          "Senior product thinking. Operator instincts. Jen Hanson works with startups as an embedded fractional leader across product, ops, and AI strategy.",
      },
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
    body: "I've navigated product decisions across B2B, B2C, and B2B2C models, in verticals including FinTech, AdTech, EdTech, and e-commerce, at every company stage.",
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
            href="https://www.linkedin.com/in/jenhansonco/"
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
      <header className="max-w-6xl mx-auto px-6 sm:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent">
              Fractional Product &amp; AI Leadership
            </span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h1
            className="text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8 text-balance"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Turning{" "}
            <span
              className="italic whitespace-nowrap"
              style={{ color: "var(--accent)" }}
            >
              early-stage chaos
            </span>{" "}
            into forward momentum.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            I embed with startup teams as a{" "}
            <span className="text-foreground font-medium">senior product leader and operator</span>,{" "}
            bridging strategy and execution so founders can focus on what matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jen@hansonstrategiesllc.com"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://zcal.co/jenhanson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Book a 30-min intro call
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Why founders hire me */}
      <section className="bg-[var(--surface)] border-y border-border/60 py-16 sm:py-24">
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
              ground-level execution. I don't just advise from the sideline. I'm hands-on and move
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

      {/* About */}
      <section className="bg-background py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4 flex justify-center lg:justify-start self-center">
              <div className="rounded-2xl overflow-hidden bg-[var(--surface)] w-[260px]">
                <img
                  src={jenPortrait}
                  alt="Jen Hanson"
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent mb-5">
                About
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-8"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                A little{" "}
                <span className="italic" style={{ color: "var(--accent)" }}>
                  about me.
                </span>
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed space-y-5">
                <p>
                  I'm a generalist at heart with product expertise. I think in terms of users,
                  outcomes, and tradeoffs, and that applies to pretty much everything else a startup
                  needs. I sit between teams that don't always speak the same language and help them
                  move together.
                </p>
                <p>
                  Outside of work I garden and play cooperative strategy games. Growing things,
                  building toward a goal, getting the team to win is a recurring theme. I'm also an
                  AI tinkerer and I believe the best way to bring AI into a business is to start by
                  having fun with it, sparking curiosity and creativity before optimizing for
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Speaking */}
      <section className="bg-[var(--surface)] border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
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
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-24 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent mb-5">
            Let's talk
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Need a product leader who can{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              build momentum?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I work with no more than a couple clients at a time so that I have real impact. If you're
            figuring out what to build, how to ship faster, or how to build AI into your product,
            let's have a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jen@hansonstrategiesllc.com"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://zcal.co/jenhanson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Book a 30-min intro call
              <span aria-hidden>↗</span>
            </a>
          </div>
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
                · Principal, Hanson Strategies LLC
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
