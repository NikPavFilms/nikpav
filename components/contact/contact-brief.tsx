import { getTranslations } from "next-intl/server";

import { frameNumber } from "@/lib/general/utils";

const ITEMS = ["date", "type", "story", "references"] as const;

// Shown while there is no inquiry form: helps visitors write a useful first message on Instagram.
export const ContactBrief = async () => {
  const t = await getTranslations("Contact.brief");

  return (
    <div>
      <h2 className="title-display text-5xl md:text-6xl">{t("title")}</h2>
      <ol className="mt-8 divide-y divide-border border-y border-border">
        {ITEMS.map((item, index) => (
          <li key={item} className="flex items-baseline gap-6 py-6">
            <span className="frame-index text-muted-foreground">{frameNumber(index + 1)}</span>
            <p className="text-lg leading-relaxed text-foreground/85">{t(`items.${item}`)}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
