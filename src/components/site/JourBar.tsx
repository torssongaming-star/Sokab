import { Phone } from "lucide-react";
import { useT, PHONE_DISPLAY, PHONE_HREF } from "@/lib/i18n";

export function JourBar() {
  const { t } = useT();
  return (
    <div className="bg-forest text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
        <span className="font-medium tracking-wide">{t.jourBar}</span>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
