"use client";

import { AbstractIntlMessages, Locale, NextIntlClientProvider } from "next-intl";

import { DialogProvider } from "@/components/dialog-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: Locale;
  /** Same zone as the server config, so client-rendered dates never mismatch on hydration. */
  timeZone: string;
};

// The brand is dark only: `<html className="dark">` is static, so no theme provider is needed.
// Auth (SessionProvider) lives in the admin layout, so public pages never call /api/auth/session.
export const Providers = ({ children, messages, locale, timeZone }: Props) => {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone={timeZone}>
      <TooltipProvider>{children}</TooltipProvider>
      <DialogProvider />
      <Toaster />
    </NextIntlClientProvider>
  );
};
