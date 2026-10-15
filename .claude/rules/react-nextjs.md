---
paths:
  - "app/**"
  - "components/**"
  - "hooks/**"
  - "server_actions/**"
---

# React & Next.js Patterns

## Server / client boundary

- **Server Components by default.** Use `"use client"` only for event handlers, browser APIs, `useState`/`useEffect`, or animation, and push it as far down the tree as possible.
- **`page.tsx` and `layout.tsx` stay server components.** Never add `"use client"` to them; extract a client child instead.
- **Small components with isolated state.** A component that owns state re-renders only itself, and the Server Component parent ships zero JS for it.
- **Always await `params`** in pages and layouts. It is a `Promise`, not a plain object (Next.js 16).
- **A `notFound()` under a `loading.tsx` boundary is a soft 404.** The Suspense boundary streams the shell first, so the response goes out as HTTP 200 + `noindex`. Keep the catch-all (`app/[locale]/[...rest]/page.tsx`) and `not-found.tsx` at `app/[locale]/`, above every loading boundary, and verify with `curl -o /dev/null -w "%{http_code}"`.
- **Dynamic routes: `generateStaticParams` + `export const dynamicParams = false`.** A page returns params for all of its own dynamic segments (`[category]` AND `[slug]`); the locale comes from the `[locale]` layout.
- **Route-based filters get no `loading.tsx`.** Filter chips that link between static pages (`/works` ↔ `/works/<category>`, `scroll={false}`) keep the current grid on screen during the transition; a `loading.tsx` in that segment would flash on every click. Leaf pages (about, contact, project) do get one.
- **Never put `redirect()` inside try/catch.** It throws internally to trigger navigation, so catching it silently breaks the redirect.

  ```typescript
  // GOOD
  const data = await fetchData();
  if (!data) redirect("/error");

  // BAD, the redirect is swallowed
  try {
    if (!data) redirect("/error");
  } catch (error) {}
  ```

## Component structure

- Order inside a component: **State, then Callbacks, then useEffects, then Return.** No exceptions.
- ALL `useEffect`s sit immediately before the return, after every callback.
- Component-specific interfaces go immediately above the component; shared ones in `types/`.

## useEffect

- **Minimal dependencies:** only what is used AND should trigger a re-run. Never include state the effect itself updates.
- **Prefer derived state.** Compute during render instead of syncing with an effect.
- **Always clean up** subscriptions, timers and listeners, and use the `isMountedRef` pattern for async work.

## Performance

- **Lazy-load heavy client components** with `next/dynamic` and `ssr: false`: modals, charts, editors, below-the-fold widgets. Wrap route segments in `<Suspense>`.
- **Memoize where it matters.** `React.memo` on leaf components with stable props; `useMemo`/`useCallback` for expensive derivations only. Never pass inline objects, arrays or functions to a memoized child.
- **Images via `next/image`** with explicit width/height to prevent CLS (static imports from `assets/` give width, height and blur for free). Next 16: `priority` is deprecated, so use `preload` on the single LCP image only (never together with `loading="eager"`/`fetchPriority`). `images.qualities` defaults to `[75]`; any other `quality` must be listed in `next.config.ts` or it is silently coerced. Every `fill` image needs a `sizes` that matches its real column width.
- **A landscape photo in a portrait `object-cover` frame renders blurry.** `sizes` describes the frame width, but cover scales the image to the frame *height*, so the browser picks a variant about half the pixels it needs and stretches it. Crop the source to the frame's aspect with sharp (`extract`, from the full-size original) instead of relying on `object-position`; then `sizes` is truthful. Verify by downloading the served `/_next/image` variant: `naturalWidth` is srcset-density-adjusted and lies.
- **Statically imported images live in `assets/`, not `public/`.** Importing from `public/` serves every file twice (hashed copy + raw copy). `public/` is only for URL-referenced files: videos, the OG image, `logo.png` for JSON-LD.
- **Background video:** render the `next/image` poster as the LCP element and attach `<source>`s from a client effect after `load` (or near the viewport). `autoPlay` overrides `preload="none"` and would race the poster. Skip it for reduced-motion/Save-Data, and give loops over 5 s a visible pause control (WCAG 2.2.2). See `components/site/background-video.tsx`.
- **Fonts via `next/font`**, third-party scripts via `next/script` (`lazyOnload` for analytics, `afterInteractive` for tag managers). Never a raw `<script>`, except JSON-LD, which Next's own guide renders inline: use `components/seo/json-ld.tsx` (it escapes `<`).
- **`useTransition` and `useDeferredValue`** for non-urgent updates.

## Drag & drop (dnd-kit)

- `@dnd-kit/core` + `@dnd-kit/sortable` + `@dnd-kit/utilities`.
- `PointerSensor` with `distance: 8` prevents accidental drags on interactive elements.
- `closestCorners` collision detection for column and grid layouts (Kanban).
- Always render a `DragOverlay` ghost (`shadow-xl rotate-2 opacity-90`).
- `useSortable` for items, `useDroppable` for columns. Move optimistically on drop, revert on API error.

## State transitions

- Allowed transitions live in one `VALID_TRANSITIONS: Record<Status, Status[]>` map, client-side, validated before the API call.
- Forward skips are allowed (for example `PREPARING` straight to `DELIVERING`). Terminal states map to `[]` and their items are not draggable.
- Transitions needing extra input (rejection reason, ETA) open a dialog before confirming.
