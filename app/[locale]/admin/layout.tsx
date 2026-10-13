import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import { AdminHeader } from "@/components/admin/admin-header";
import { AdminProviders } from "@/components/admin/admin-providers";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminSignInButton } from "@/components/admin/admin-sign-in-button";
import { ErrorPage } from "@/components/error-page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { authOptions } from "@/lib/auth/auth";
import { setupPageLocale } from "@/lib/i18n/locale";
import { BaseLayoutProps } from "@/types/page-props";

const AdminLayout = async ({ children, params }: BaseLayoutProps) => {
  await setupPageLocale(params);

  const session = await getServerSession(authOptions);
  if (!session) {
    const t = await getTranslations("Admin.auth");

    return (
      <ErrorPage
        title="Access Denied"
        description="You are not authorized to access the admin panel. Please sign in with an admin account."
        action={<AdminSignInButton label={t("signIn")} />}
      />
    );
  }

  return (
    <AdminProviders session={session}>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset className="h-svh max-h-svh overflow-hidden">
          <AdminHeader />
          <ScrollArea className="h-0 flex-1">
            <main className="mx-auto max-w-screen-2xl px-4 py-6">
              {children}
            </main>
          </ScrollArea>
        </SidebarInset>
      </SidebarProvider>
    </AdminProviders>
  );
};

export default AdminLayout;
