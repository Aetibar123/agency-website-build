import { permanentRedirect } from "next/navigation";

export default function DeprecatedCustomerLeadSystemsPage() {
  permanentRedirect("/solutions/crm-lead-management");
}
