import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { useT, PHONE_DISPLAY, PHONE_HREF } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl font-bold text-forest">Sokab</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t.footer.about}</p>
          <p className="mt-4 text-sm font-medium text-forest">{t.tagline}</p>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-foreground">{t.footer.quickLinks}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-forest">{t.nav.home}</Link></li>
            <li><Link to="/tjanster" className="text-muted-foreground hover:text-forest">{t.nav.services}</Link></li>
            <li><Link to="/om-oss" className="text-muted-foreground hover:text-forest">{t.nav.about}</Link></li>
            <li><Link to="/kontakt" className="text-muted-foreground hover:text-forest">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-foreground">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-forest">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href="mailto:info@sokab.nu" className="inline-flex items-center gap-2 hover:text-forest">
                <Mail className="h-4 w-4" />
                <span>info@sokab.nu</span>
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" /> Norrköping, Sverige
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {year} Svensk områdeskontroll AB. {t.footer.rights}</span>
          <span>Org.nr: 556xxx-xxxx</span>
        </div>
      </div>
    </footer>
  );
}
