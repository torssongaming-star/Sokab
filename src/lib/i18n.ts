import { createContext, useContext } from "react";

export type Lang = "sv" | "en";

export const PHONE_DISPLAY = "011-49 60 100";
export const PHONE_HREF = "tel:+4611496010";

export const dict = {
  sv: {
    nav: { home: "Hem", services: "Tjänster", about: "Om oss", contact: "Kontakt" },
    jourBar: "Jour dygnet runt – året om",
    callNow: "Ring oss",
    cta: { services: "Se våra tjänster", call: "Ring jouren", contact: "Kontakta oss" },
    tagline: "Ett nummer räcker – året runt, dygnet runt.",

    home: {
      eyebrow: "Sedan 2005",
      title: "Helheten för fastighetsägare.",
      lead: "Svensk områdeskontroll AB sköter din fastighet – invändigt, utvändigt, året runt. Välj helheten eller enskilda delar. Ett samtal räcker.",
      trust: ["Etablerat 2005", "Jour 24/7", "Ett kontaktnummer", "Certifierad personal"],
      servicesTitle: "Vi tar hand om allt",
      servicesLead: "Från daglig fastighetsskötsel till administration och jour – alltid med dig som kund i fokus.",
      whyTitle: "Varför Sokab?",
      why: [
        { title: "Helhetstänk", body: "Vi ansvarar för hela förvaltningen eller bara de delar du väljer – alltid samordnat och värdeskapande." },
        { title: "Kostnadsmedvetenhet", body: "Brett kontaktnät och lång erfarenhet gör att vi arbetar effektivt och kostnadseffektivt." },
        { title: "Erfarenhet sedan 2005", body: "Vi har byggt upp lång erfarenhet av fastighetsförvaltning och vet vad som krävs." },
      ],
      howTitle: "Så fungerar det",
      how: [
        { title: "Kontakt", body: "Ring eller skriv – vi svarar samma dag." },
        { title: "Behovsanalys", body: "Vi går igenom din fastighet och dina mål tillsammans." },
        { title: "Skräddarsydd förvaltning", body: "Vi tar över de delar du valt – helt eller delvis." },
      ],
      ctaTitle: "Ett samtal räcker.",
      ctaLead: "Få en kostnadsfri genomgång av hur vi kan förvalta din fastighet.",
    },

    services: {
      title: "Våra tjänster",
      lead: "Ett komplett utbud för dig som äger fastigheter. Välj helheten eller delar – vi anpassar oss efter dina mål kring värdetillväxt, användarnytta och avkastning.",
      groups: [
        {
          title: "Fastighetsskötsel",
          items: ["Fastighetsskötsel invändigt och utvändigt", "Centrumskötsel", "Lekplatskontroller med utbildad och certifierad personal"],
        },
        {
          title: "Säsong & utemiljö",
          items: ["Snö- och halkbekämpning", "Grönyteskötsel", "Säsongsunderhåll utomhus"],
        },
        {
          title: "Städning",
          items: ["Komplett städning av trapphus, lokaler och allmänna utrymmen", "Ventilationsrengöring"],
        },
        {
          title: "Hantverk & teknik",
          items: ["El", "Bygg", "Målning", "VVS", "Ventilation"],
        },
        {
          title: "Besiktningar & myndighetskrav",
          items: ["Besiktningar vid in- och avflyttning i lägenheter och lokaler", "Energideklaration", "OVK – obligatorisk ventilationskontroll"],
        },
        {
          title: "Administration & ekonomi",
          items: ["Hyresavisering", "Administration kring lägenhetsuthyrning", "Upprätthålla leverantörs- och entreprenadavtal", "Budget per fastighet"],
        },
        {
          title: "Kundservice & jour",
          items: ["Kundservice för hyresgäster och entreprenörer", "Störningsjour", "Jour dygnet runt – året om"],
        },
      ],
      closing: "Du som fastighetsägare väljer själv om du vill anlita oss för helheten eller bara enskilda delar. Oavsett vad du väljer arbetar vi mot de mål vi sätter upp tillsammans – värdetillväxt, användarnytta och avkastning.",
    },

    about: {
      title: "Om Sokab",
      lead: "Svensk områdeskontroll AB är ett väletablerat företag som startades redan 2005.",
      body: "Under åren har vi byggt upp ett brett kontaktnät och stor erfarenhet av fastighetsförvaltning. Det gör att vi arbetar både effektivt och kostnadsmedvetet. Vi har ett helhetstänkande som är värdeskapande – och alltid med dig som kund i fokus.",
      valuesTitle: "Våra värderingar",
      values: [
        { title: "Helhet", body: "Vi ser hela fastigheten och samordnar allt så att inget faller mellan stolarna." },
        { title: "Effektivitet", body: "Erfaren personal och rätt kontakter ger snabba lösningar utan onödiga kostnader." },
        { title: "Kostnadsmedvetenhet", body: "Vi tänker långsiktigt och hjälper dig att hålla budget för varje fastighet." },
        { title: "Långsiktiga relationer", body: "Vi vill vara din partner i många år – inte bara en leverantör." },
      ],
      timelineTitle: "Vår resa",
      timeline: [
        { year: "2005", text: "Sokab grundas och tar de första uppdragen inom fastighetsförvaltning." },
        { year: "2010", text: "Verksamheten växer med fler fastighetsägare och fler tjänsteområden." },
        { year: "2018", text: "Egen jourorganisation – tillgänglig dygnet runt, året om." },
        { year: "Idag", text: "En komplett förvaltningspartner för fastighetsägare i regionen." },
      ],
    },

    contact: {
      title: "Kontakta oss",
      lead: "Ett nummer räcker – året runt, dygnet runt.",
      phoneLabel: "Telefon & jour",
      emailLabel: "E-post",
      addressLabel: "Adress",
      hoursLabel: "Öppettider",
      hours: "Kontor: må–fre 08:00–17:00\nJour: dygnet runt, alla dagar",
      formTitle: "Skicka ett meddelande",
      formLead: "Berätta kort om din fastighet och vad du behöver hjälp med – vi återkommer samma arbetsdag.",
      fields: {
        name: "Namn",
        company: "Företag",
        email: "E-post",
        phone: "Telefon",
        property: "Fastighet / ort",
        message: "Meddelande",
        submit: "Skicka",
        sent: "Tack! Vi hör av oss inom kort.",
      },
    },

    footer: {
      rights: "Alla rättigheter förbehållna.",
      quickLinks: "Genvägar",
      contact: "Kontakt",
      about: "Svensk områdeskontroll AB är en komplett förvaltningspartner för fastighetsägare sedan 2005.",
    },
  },

  en: {
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact" },
    jourBar: "On call 24/7 – every day of the year",
    callNow: "Call us",
    cta: { services: "Explore services", call: "Call on-call line", contact: "Contact us" },
    tagline: "One number is all you need – year round, around the clock.",

    home: {
      eyebrow: "Since 2005",
      title: "The complete partner for property owners.",
      lead: "Svensk områdeskontroll AB looks after your property – inside and out, all year round. Take the full package or just the parts you need. One call is enough.",
      trust: ["Established 2005", "24/7 on-call", "One phone number", "Certified staff"],
      servicesTitle: "We take care of everything",
      servicesLead: "From day-to-day maintenance to administration and emergency response – always with you, the customer, in focus.",
      whyTitle: "Why Sokab?",
      why: [
        { title: "A holistic approach", body: "We manage the entire property or just the parts you choose – always coordinated and value-creating." },
        { title: "Cost awareness", body: "A wide network and long experience let us work efficiently and cost-effectively." },
        { title: "Experience since 2005", body: "Two decades of property management — we know what it takes." },
      ],
      howTitle: "How it works",
      how: [
        { title: "Get in touch", body: "Call or write – we reply the same day." },
        { title: "Needs analysis", body: "We walk through your property and your goals together." },
        { title: "Tailored management", body: "We take over the parts you've chosen – fully or partially." },
      ],
      ctaTitle: "One call is enough.",
      ctaLead: "Get a free walkthrough of how we can manage your property.",
    },

    services: {
      title: "Our services",
      lead: "A complete offering for property owners. Take the whole package or pick the parts – we adapt to your goals around value growth, usability and return.",
      groups: [
        { title: "Property care", items: ["Indoor and outdoor property maintenance", "Town centre maintenance", "Playground inspections by trained, certified staff"] },
        { title: "Seasonal & outdoor", items: ["Snow and ice clearing", "Green-space maintenance", "Outdoor seasonal upkeep"] },
        { title: "Cleaning", items: ["Full cleaning of stairwells, premises and common areas", "Ventilation cleaning"] },
        { title: "Trades & technical", items: ["Electrical", "Construction", "Painting", "Plumbing", "Ventilation"] },
        { title: "Inspections & compliance", items: ["Move-in and move-out inspections of apartments and premises", "Energy declaration", "OVK – mandatory ventilation inspection"] },
        { title: "Administration & finance", items: ["Rent invoicing", "Apartment letting administration", "Maintaining supplier and contractor agreements", "Per-property budgeting"] },
        { title: "Customer service & on-call", items: ["Customer service for tenants and contractors", "Disturbance on-call", "On call 24/7, year round"] },
      ],
      closing: "As the owner, you choose whether to use us for everything or just selected parts. Either way, we work toward the goals we set together – value growth, usability and return.",
    },

    about: {
      title: "About Sokab",
      lead: "Svensk områdeskontroll AB is a well-established company founded back in 2005.",
      body: "Over the years we've built a broad network and deep experience in property management. That lets us work both efficiently and cost-consciously. We bring a holistic mindset that creates value – with you, the customer, always in focus.",
      valuesTitle: "Our values",
      values: [
        { title: "Wholeness", body: "We see the whole property and coordinate everything so nothing falls through the cracks." },
        { title: "Efficiency", body: "Experienced staff and the right contacts mean fast solutions without unnecessary cost." },
        { title: "Cost awareness", body: "We think long term and help you stay on budget for every property." },
        { title: "Long-term relationships", body: "We want to be your partner for years – not just a vendor." },
      ],
      timelineTitle: "Our journey",
      timeline: [
        { year: "2005", text: "Sokab is founded and takes on its first property management assignments." },
        { year: "2010", text: "The business grows with more property owners and broader services." },
        { year: "2018", text: "Own on-call organisation – available 24/7, year round." },
        { year: "Today", text: "A complete management partner for property owners in the region." },
      ],
    },

    contact: {
      title: "Contact us",
      lead: "One number is all you need – year round, around the clock.",
      phoneLabel: "Phone & on-call",
      emailLabel: "Email",
      addressLabel: "Address",
      hoursLabel: "Hours",
      hours: "Office: Mon–Fri 08:00–17:00\nOn-call: 24/7, every day",
      formTitle: "Send a message",
      formLead: "Tell us briefly about your property and what you need help with – we'll get back to you within one business day.",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        property: "Property / city",
        message: "Message",
        submit: "Send",
        sent: "Thanks! We'll be in touch shortly.",
      },
    },

    footer: {
      rights: "All rights reserved.",
      quickLinks: "Quick links",
      contact: "Contact",
      about: "Svensk områdeskontroll AB has been a complete management partner for property owners since 2005.",
    },
  },
} as const;

export type Dict = (typeof dict)["sv"] | (typeof dict)["en"];

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

export const LanguageContext = createContext<LangCtx>({
  lang: "sv",
  setLang: () => {},
  t: dict.sv,
});

export const useT = () => useContext(LanguageContext);
