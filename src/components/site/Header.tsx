import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT, PHONE_DISPLAY, PHONE_HREF, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links = [
  { to: "/" as const, key: "home" as const },
  { to: "/tjanster" as const, key: "services" as const },
  { to: "/om-oss" as const, key: "about" as const },
  { to: "/kontakt" as const, key: "contact" as const },
];

export function Header() {
  const { t, lang, setLang } = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-bold tracking-tight text-forest">Sokab</span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Svensk områdeskontroll
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-forest font-semibold" }}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={PHONE_HREF}>
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-forest"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-accent text-forest font-semibold" }}
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-border text-xs font-semibold">
      {(["sv", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "px-2.5 py-1.5 transition-colors",
            lang === l ? "bg-forest text-primary-foreground" : "bg-background text-foreground/70 hover:bg-accent",
          )}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
