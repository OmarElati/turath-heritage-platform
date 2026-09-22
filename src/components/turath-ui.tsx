import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("kicker", className)}>{children}</p>;
}

export function IdChip({ id }: { id: string }) {
  return <span className="id-chip">{id}</span>;
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "verified" | "clay" | "warn" | "muted";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-secondary text-secondary-foreground border-border",
    verified: "bg-verified/10 text-verified border-verified/30",
    clay: "bg-clay/10 text-clay border-clay/30",
    warn: "bg-destructive/10 text-destructive border-destructive/25",
    muted: "bg-muted text-muted-foreground border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function VerifiedBadge({ status }: { status: string }) {
  if (status === "TURATH VERIFIED") return <Badge tone="verified">◆ TURATH VERIFIED</Badge>;
  if (status === "UNDER REVIEW") return <Badge tone="clay">Under review</Badge>;
  return <Badge tone="muted">{status}</Badge>;
}

export function AccessBadge({ level }: { level: string }) {
  const tone = level === "PUBLIC" ? "verified" : level === "RESTRICTED" || level === "PRIVATE" ? "warn" : "clay";
  return <Badge tone={tone as "verified" | "warn" | "clay"}>Access: {level}</Badge>;
}

export function SectionHeading({
  kicker,
  title,
  lead,
  className,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker ? <Kicker className="mb-3">{kicker}</Kicker> : null}
      <h2 className="display text-3xl sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{lead}</p> : null}
    </div>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-b border-border/70 py-3 last:border-0">
      <p className="kicker mb-1.5">{label}</p>
      <div className="text-sm text-foreground">{children}</div>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-cream px-2 py-1 text-xs text-foreground">{children}</span>
  );
}

export function LinkButton({
  to,
  children,
  variant = "primary",
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "clay";
  params?: Record<string, string>;
}) {
  const styles: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    clay: "bg-clay text-clay-foreground hover:bg-clay/90",
    ghost: "border border-border bg-transparent text-foreground hover:bg-secondary",
  };
  return (
    <Link
      to={to}
      params={params}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors",
        styles[variant],
      )}
    >
      {children}
    </Link>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-border bg-secondary/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function Meter({ value, label }: { value: number; label?: string }) {
  return (
    <div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, value)}%` }} />
      </div>
      {label ? <p className="mt-1 text-xs text-muted-foreground">{label}</p> : null}
    </div>
  );
}

export function TimelineList({
  items,
}: {
  items: { date: string; type: string; label: string; reviewer?: string }[];
}) {
  return (
    <ol className="relative border-l border-border pl-5">
      {items.map((item, i) => (
        <li key={i} className="mb-5 last:mb-0">
          <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
          <p className="font-mono text-xs text-muted-foreground">
            {item.date} · {item.type}
          </p>
          <p className="mt-1 text-sm text-foreground">{item.label}</p>
          {item.reviewer ? <p className="text-xs text-muted-foreground">Reviewer: {item.reviewer}</p> : null}
        </li>
      ))}
    </ol>
  );
}
