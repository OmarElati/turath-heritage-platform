import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "FR" | "AR" | "EN";
export type Currency = "TND" | "EUR" | "USD";

interface LocaleValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (tnd: number) => string;
}

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("FR");
  const [currency, setCurrency] = useState<Currency>("TND");

  const value = useMemo<LocaleValue>(
    () => ({
      lang,
      setLang,
      currency,
      setCurrency,
      // Exchange rates are never hard-coded: non-base currencies are resolved
      // by a rate service at checkout time.
      formatPrice: (tnd: number) =>
        currency === "TND"
          ? `${tnd.toLocaleString("fr-FR")} TND`
          : `${tnd.toLocaleString("fr-FR")} TND · ${currency} at checkout rate`,
    }),
    [lang, currency],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
