import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, dict, type Lang } from "@/lib/i18n";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sv");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("sokab-lang") as Lang | null) : null;
    if (saved === "sv" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          localStorage.setItem("sokab-lang", l);
        } catch {
          /* ignore */
        }
      },
      t: dict[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
