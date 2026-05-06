import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Tjänster — Sokab | Fastighetsförvaltning, städning, jour 24/7" },
      {
        name: "description",
        content:
          "Sokabs tjänster: fastighetsskötsel, städning, snöröjning, besiktningar, OVK, energideklaration, hyresavisering och jour dygnet runt.",
      },
      { property: "og:title", content: "Sokabs tjänster — komplett fastighetsförvaltning" },
      {
        property: "og:description",
        content: "Allt från daglig skötsel till administration och jour 24/7.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useT();

  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h1 className="font-serif text-4xl text-forest md:text-5xl">{t.services.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t.services.lead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-sage"
            >
              <h2 className="font-serif text-2xl text-forest">{group.title}</h2>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-sage/40 bg-mint/20 p-8 md:p-10">
          <p className="font-serif text-lg text-forest md:text-xl">{t.services.closing}</p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/kontakt">
                {t.cta.contact}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
