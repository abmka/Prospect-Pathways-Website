/** Preview-only stand-in for next/navigation. */
export function usePathname(): string {
  return (globalThis as any).__PP_PATH__ || "/";
}
export function useRouter() {
  return { push() {}, replace() {}, prefetch() {}, back() {}, forward() {}, refresh() {} };
}
export function useSearchParams() {
  return new URLSearchParams();
}
export function useParams() {
  return {};
}
export function notFound(): never {
  throw new Error("notFound() called in preview");
}
export function redirect(): never {
  throw new Error("redirect() called in preview");
}
