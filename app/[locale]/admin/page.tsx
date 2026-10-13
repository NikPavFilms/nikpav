
import { setupPageLocale } from "@/lib/i18n/locale";
import { redirect } from "@/lib/i18n/navigation";
import { BasePageProps } from "@/types/page-props";

const AdminPage = async ({ params }: BasePageProps) => {
  const locale = await setupPageLocale(params);
  redirect({ href: "/admin/users", locale });
};

export default AdminPage;
