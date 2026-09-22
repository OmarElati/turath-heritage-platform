import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useLocale, type Currency, type Lang } from "@/lib/locale";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/registry", label: "Registry" },
  { to: "/discover", label: "Discover" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/artisans", label: "Artisans" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/scan", label: "Scan & Radar" },
  { to: "/admin", label: "Admin" },
];

function Mark() {
  return (
    <Link to="/" className="flex items-baseline gap-2">
      <span className="display text-xl tracking-[0.22em] text-primary">TURATH</span>
      <span className="kicker hidden sm:inline">Tunisia</span>
    </Link>
  );
}

function Switcher() {
  const { lang, setLang, currency, setCurrency } = useLocale();
  return (
    <div className="flex items-center gap-1.5">
      <select
        aria-label="Language"
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        className="rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] text-foreground"
      >
        <option value="FR">FR</option>
        <option value="AR">AR</option>
        <option value="EN">EN</option>
      </select>
      <select
        aria-label="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        className="rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] text-foreground"
      >
        <option value="TND">TND</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5">
          <Mark />
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  pathname.startsWith(n.to)
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Switcher />
            <button
              onClick={() => setOpen((o) => !o)}
              className="rounded-md border border-border px-3 py-1.5 text-xs lg:hidden"
              aria-label="Menu"
            >
              Menu
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border bg-card px-5 py-3 lg:hidden">
            <div className="grid grid-cols-2 gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-ink text-ink-foreground">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="display text-2xl tracking-[0.22em]">TURATH</p>
            <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">
              Digital infrastructure for Tunisian living heritage. Notre patrimoine. Notre identité. Notre avenir.
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-ink-foreground/50">
              TURATH is not a government certification system. Records are “verified according to TURATH's
              verification criteria”. The platform claims no legal ownership of heritage and no statutory
              protection. Pilot records shown here are demo data.
            </p>
          </div>
          <div>
            <p className="kicker text-ink-foreground/50">Platform</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              <li><Link to="/registry">Heritage Registry</Link></li>
              <li><Link to="/discover">Discovery Engine</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/artisans">Artisan Passports</Link></li>
            </ul>
          </div>
          <div>
            <p className="kicker text-ink-foreground/50">Systems</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              <li><Link to="/intelligence">Heritage Intelligence</Link></li>
              <li><Link to="/scan">AI Scanner & Radar</Link></li>
              <li><Link to="/adopt">Adopt a Craft</Link></li>
              <li><Link to="/api">TURATH API</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
