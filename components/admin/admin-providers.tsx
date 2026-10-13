"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface AdminProvidersProps {
  session: Session | null;
  children: React.ReactNode;
}

// Seeded with the server session so the sidebar's useSession() doesn't refetch on mount.
export const AdminProviders = ({ session, children }: AdminProvidersProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
