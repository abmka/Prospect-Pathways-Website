import React from "react";

/** Preview-only stand-in for next/link: turns /about-us into #/about-us. */
export default function Link({ href, children, ...rest }: any) {
  const to = typeof href === "string" && href.startsWith("/") ? `#${href}` : href;
  const { onClick, prefetch, replace, scroll, ...safe } = rest;
  return React.createElement("a", { href: to, ...safe }, children);
}
