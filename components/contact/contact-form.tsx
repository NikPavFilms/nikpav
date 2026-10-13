"use client";

import { CalendarDays, Layers, Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORY_SLUGS, isCategorySlug } from "@/lib/works/categories";

const OTHER_TYPE = "other";
const FIELD_CLASS = "h-12 bg-card/40 text-base md:text-sm";
const LABEL_CLASS = "eyebrow gap-2 text-muted-foreground";

// No backend: the inquiry is composed into a mailto: link that opens the visitor's mail app.
export const ContactForm = ({ email }: { email: string }) => {
  const t = useTranslations("Contact.form");
  const tCategories = useTranslations("Categories");
  const [projectType, setProjectType] = useState("");
  const [hasOpenedMail, setHasOpenedMail] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    const typeLabel = isCategorySlug(projectType) ? tCategories(`${projectType}.label`) : t("typeOther");
    const details = [
      [t("name"), field("name")],
      [t("email"), field("email")],
      [t("phone"), field("phone")],
      [t("type"), typeLabel],
      [t("date"), field("date")],
      [t("location"), field("location")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);

    const subject = t("subject", { type: typeLabel, name: field("name") });
    const body = [...details, "", field("message")].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setHasOpenedMail(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="grid gap-2.5">
        <Label htmlFor="contact-name" className={LABEL_CLASS}>
          <User className="inline size-3.5" /> {t("name")}
        </Label>
        <Input id="contact-name" name="name" required autoComplete="name" placeholder={t("namePlaceholder")} className={FIELD_CLASS} />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="contact-email" className={LABEL_CLASS}>
          <Mail className="inline size-3.5" /> {t("email")}
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          className={FIELD_CLASS}
        />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="contact-phone" className={LABEL_CLASS}>
          <Phone className="inline size-3.5" /> {t("phone")}
          <span className="tracking-normal normal-case opacity-70">({t("optional")})</span>
        </Label>
        <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={FIELD_CLASS} />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="contact-type" className={LABEL_CLASS}>
          <Layers className="inline size-3.5" /> {t("type")}
        </Label>
        <Select value={projectType} onValueChange={setProjectType}>
          <SelectTrigger id="contact-type" className="h-12! w-full bg-card/40">
            <SelectValue placeholder={t("typePlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            {CATEGORY_SLUGS.map((slug) => (
              <SelectItem key={slug} value={slug}>
                {tCategories(`${slug}.label`)}
              </SelectItem>
            ))}
            <SelectItem value={OTHER_TYPE}>
              {t("typeOther")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="contact-date" className={LABEL_CLASS}>
          <CalendarDays className="inline size-3.5" /> {t("date")}
          <span className="tracking-normal normal-case opacity-70">({t("optional")})</span>
        </Label>
        <Input id="contact-date" name="date" type="date" className={`${FIELD_CLASS} cursor-pointer`} />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="contact-location" className={LABEL_CLASS}>
          <MapPin className="inline size-3.5" /> {t("location")}
          <span className="tracking-normal normal-case opacity-70">({t("optional")})</span>
        </Label>
        <Input id="contact-location" name="location" placeholder={t("locationPlaceholder")} className={FIELD_CLASS} />
      </div>
      <div className="grid gap-2.5 sm:col-span-2">
        <Label htmlFor="contact-message" className={LABEL_CLASS}>
          <MessageSquare className="inline size-3.5" /> {t("message")}
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder={t("messagePlaceholder")}
          className="min-h-40 bg-card/40 text-base md:text-sm"
        />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{t("note")}</p>
        <Button type="submit" size="xl" icon={<Send className="size-4" />}>
          {t("submit")}
        </Button>
      </div>
      {hasOpenedMail && (
        <p role="status" className="border-l border-foreground/40 pl-4 text-sm text-foreground/85 sm:col-span-2">
          {t.rich("opened", {
            address: email,
            email: (chunks) => (
              <a href={`mailto:${email}`} className="cursor-pointer underline underline-offset-4">
                {chunks}
              </a>
            ),
          })}
        </p>
      )}
    </form>
  );
};
