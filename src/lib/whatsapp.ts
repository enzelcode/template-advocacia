import { siteConfig } from "@/config/site";

export function whatsappLink(message?: string) {
  const msg = encodeURIComponent(message ?? siteConfig.contact.whatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`;
}
