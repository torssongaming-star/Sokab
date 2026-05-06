import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Sokab | Fastighetsförvaltning sedan 2005" },
      {
        name: "description",
        content:
          "Svensk områdeskontroll AB grundades 2005. Vi är en komplett förvaltningspartner med helhetstänk, lång erfarenhet och fokus på dig som kund.",
      },
      { property: "og:title", content: "Om Sokab — fastighetsförvaltning sedan 2005" },
      {
        property: "og:description",
        content: "Komplett förvaltningspartner med helhetstänk, lång erfarenhet och kunden i fokus.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useT();

  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h1 className="font-serif text-4xl text-forest md:text-5xl">{t.about.title}</h1>
          <p className="mt-6 font-serif text-xl italic text-forest/80 md:text-2xl">{t.about.lead}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="font-serif text-3xl text-forest md:text-4xl">{t.about.valuesTitle}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-forest">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-serif text-3xl text-forest md:text-4xl">{t.about.timelineTitle}</h2>
          <ol className="mt-10 space-y-6 border-l-2 border-sage/40 pl-6">
            {t.about.timeline.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-sage bg-background" aria-hidden="true" />
                <div className="font-serif text-xl text-forest">{m.year}</div>
                <p className="mt-1 text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Button asChild>
              <Link to="/kontakt">{t.cta.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
