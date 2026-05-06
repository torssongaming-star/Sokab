import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Wrench, Snowflake, Sparkles, ClipboardCheck, FileText, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT, PHONE_DISPLAY, PHONE_HREF } from "@/lib/i18n";
import heroImage from "@/assets/hero-property.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sokab — Helheten för fastighetsägare | Svensk områdeskontroll AB" },
      {
        name: "description",
        content:
          "Komplett fastighetsförvaltning sedan 2005. Skötsel, städning, snöröjning, besiktningar och jour dygnet runt — året om. Ett nummer räcker.",
      },
      { property: "og:title", content: "Sokab — Helheten för fastighetsägare" },
      {
        property: "og:description",
        content: "Komplett fastighetsförvaltning sedan 2005. Jour 24/7. Ett nummer räcker.",
      },
      { property: "og:image", content: heroImage },
      { property: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const serviceIcons = [Wrench, Snowflake, Sparkles, ClipboardCheck, FileText, ShieldAlert];

function HomePage() {
  const { t } = useT();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full border border-sage/40 bg-mint/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
              {t.home.eyebrow}
            </span>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-forest md:text-6xl">
              {t.home.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.home.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/tjanster">
                  {t.cta.services}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_HREF}>
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-mint/40 blur-2xl" aria-hidden="true" />
            <img
              src={heroImage}
              alt="Välskött flerbostadshus i vårljus"
              width={1920}
              height={1280}
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl ring-1 ring-border"
            />
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-y border-border/70 bg-secondary/40">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-sm font-medium text-forest">
            {t.home.trust.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sage" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-forest md:text-4xl">{t.home.servicesTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.home.servicesLead}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.groups.slice(0, 6).map((group, i) => {
            const Icon = serviceIcons[i] ?? Wrench;
            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-sage hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mint/40 text-forest">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-forest">{group.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {group.items.slice(0, 3).map((it) => (
                    <li key={it}>· {it}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/tjanster">
              {t.cta.services}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl text-forest md:text-4xl">{t.home.whyTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.home.why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-serif text-xl text-forest">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="font-serif text-3xl text-forest md:text-4xl">{t.home.howTitle}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {t.home.how.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-border bg-card p-7">
              <span className="font-serif text-5xl font-bold text-mint">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-xl text-forest">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA band */}
      <section className="bg-forest py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">{t.home.ctaTitle}</h2>
            <p className="mt-3 max-w-xl text-mint">{t.home.ctaLead}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <a href={PHONE_HREF}>
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-mint/60 bg-transparent text-primary-foreground hover:bg-mint/10 hover:text-primary-foreground">
              <Link to="/kontakt">{t.cta.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
