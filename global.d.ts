import type { routing } from "./lib/i18n/routing";
import type en from "./messages/en.json";

// next-intl 4 reads its types from this augmentation (the old global `IntlMessages` is ignored),
// so translation keys and locales are checked at compile time.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en;
  }
}
