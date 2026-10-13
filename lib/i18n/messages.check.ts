import type el from "@/messages/el.json";
import type en from "@/messages/en.json";

// Compile-time guard: message types come from en.json only, so without this a key missing
// from el.json would only surface at runtime. `pnpm tsc --noEmit` fails here instead.
type HasEveryKeyOf<Source, Target extends Source> = Target;

export type GreekHasEveryEnglishKey = HasEveryKeyOf<typeof en, typeof el>;
