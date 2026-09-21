"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, site } from "../site.config";
import { IconChevron, IconMenu, IconClose } from "./Icon";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const groupActive = (children: readonly { href: string }[]) => children.some((c) => isActive(c.href));

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label={`${site.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt={site.name} width={2212} height={639} />
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className={groupActive(item.children) ? "nav__item nav__item--active" : "nav__item"}
              >
                <button type="button" className="nav__button" aria-expanded="false">
                  {item.label}
                  <IconChevron />
                </button>
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={isActive(child.href) ? "page" : undefined}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div key={item.href} className="nav__item">
                <Link
                  className="nav__link"
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </div>
            )
          )}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <Link className="btn btn--primary btn--sm" href="/make-a-referral">
            Make a referral
          </Link>
          <button
            type="button"
            className="menu-toggle"
            data-menu-toggle
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" data-mobile-menu data-open={open ? "true" : "false"}>
        {NAV.map((item) =>
          "children" in item ? (
            <div key={item.label}>
              <div className="mobile-menu__group">{item.label}</div>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  className="mobile-menu__sub"
                  href={child.href}
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          )
        )}
        <div className="mobile-menu__actions">
          <Link className="btn btn--primary" href="/contact-us" onClick={() => setOpen(false)}>
            Make a referral
          </Link>
          <a className="btn btn--ghost" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
