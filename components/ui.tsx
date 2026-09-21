import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrow, IconCheck, IconImage } from "./Icon";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={light ? "eyebrow eyebrow--light" : "eyebrow"}>{children}</div>;
}

export function PageHero({
  crumbs,
  title,
  crumbLabel,
  intro,
  meta,
  deep = false,
  children,
}: {
  crumbs: { label: string; href?: string }[];
  title: string;
  /** Breadcrumb label when the H1 is a strapline rather than the page name. */
  crumbLabel?: string;
  intro?: string;
  meta?: string;
  deep?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={deep ? "page-hero page-hero--deep" : "page-hero"}>
      <div className="container stack gap-20">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label} style={{ display: "contents" }}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumbLabel ?? title}</span>
        </nav>
        <h1 className="h1">{title}</h1>
        {intro && <p className="lead measure">{intro}</p>}
        {meta && <p className="note">{meta}</p>}
        {children}
      </div>
    </section>
  );
}

export function Media({
  label,
  deep = false,
  variant,
}: {
  label: string;
  deep?: boolean;
  variant?: "card" | "tall" | "map";
}) {
  const classes = ["media"];
  if (deep) classes.push("media--deep");
  if (variant) classes.push(`media--${variant}`);
  return (
    <div className={classes.join(" ")}>
      <IconImage color={deep ? "#8fd3d9" : "#6ba7af"} />
      <span className="media__label">{label}</span>
    </div>
  );
}

export function Check({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <li className="check-item">
      <IconCheck color={light ? "#45c1b7" : "#0b4b55"} />
      <span>{children}</span>
    </li>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="link-arrow" href={href}>
      {children}
      <IconArrow />
    </Link>
  );
}

export function CtaBand({
  title,
  body,
  ctaLabel,
  ctaHref,
  deep = false,
  secondary,
}: {
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  deep?: boolean;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className={deep ? "cta-band cta-band--deep" : "cta-band"}>
      <div className="container row row--between gap-32">
        <div className="stack gap-10">
          <h2>{title}</h2>
          {body && <p className="body">{body}</p>}
        </div>
        <div className="row gap-14">
          <Link className={deep ? "btn btn--mint" : "btn btn--primary"} href={ctaHref}>
            {ctaLabel}
          </Link>
          {secondary && (
            <Link className={deep ? "btn btn--ghost-light" : "btn btn--ghost"} href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Step({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="step">
      <div className="index-num">{step}</div>
      <h3 className="h4">{title}</h3>
      <p className="body-sm">{children}</p>
    </div>
  );
}
