import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useT, PHONE_DISPLAY, PHONE_HREF } from "@/lib/i18n";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Sokab | Ring 011-49 60 100, jour dygnet runt" },
      {
        name: "description",
        content:
          "Kontakta Sokab — Svensk områdeskontroll AB. Telefon 011-49 60 100, jour dygnet runt året om. Skicka ett meddelande så hör vi av oss samma arbetsdag.",
      },
      { property: "og:title", content: "Kontakta Sokab — jour dygnet runt" },
      { property: "og:description", content: "Ett nummer räcker — året runt, dygnet runt." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder handler — wire to backend later.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t.contact.fields.sent);
    }, 600);
  };

  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h1 className="font-serif text-4xl text-forest md:text-5xl">{t.contact.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t.contact.lead}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact info */}
        <div className="space-y-6">
          <a
            href={PHONE_HREF}
            className="block rounded-2xl bg-forest p-8 text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-mint">
              <Phone className="h-4 w-4" />
              {t.contact.phoneLabel}
            </div>
            <div className="mt-3 font-serif text-4xl md:text-5xl">{PHONE_DISPLAY}</div>
            <p className="mt-3 text-sm text-mint">{t.jourBar}</p>
          </a>

          <InfoRow icon={Mail} label={t.contact.emailLabel}>
            <a href="mailto:info@sokab.nu" className="hover:text-forest">info@sokab.nu</a>
          </InfoRow>

          <InfoRow icon={MapPin} label={t.contact.addressLabel}>
            Norrköping, Sverige
          </InfoRow>

          <InfoRow icon={Clock} label={t.contact.hoursLabel}>
            <span className="whitespace-pre-line">{t.contact.hours}</span>
          </InfoRow>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
          <h2 className="font-serif text-2xl text-forest">{t.contact.formTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.contact.formLead}</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field id="name" label={t.contact.fields.name} required />
            <Field id="company" label={t.contact.fields.company} />
            <Field id="email" label={t.contact.fields.email} type="email" required />
            <Field id="phone" label={t.contact.fields.phone} type="tel" />
            <Field id="property" label={t.contact.fields.property} className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <Label htmlFor="message">{t.contact.fields.message}</Label>
              <Textarea id="message" name="message" rows={5} required className="mt-1.5" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                {t.contact.fields.submit}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mint/40 text-forest">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  className,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      <Input id={id} name={id} type={type} required={required} className="mt-1.5" />
    </div>
  );
}
