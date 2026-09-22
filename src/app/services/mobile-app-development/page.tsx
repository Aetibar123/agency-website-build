import { permanentRedirect } from "next/navigation";

export default function MobileAppDevRedirect() {
  permanentRedirect("/services/app-development");
}
