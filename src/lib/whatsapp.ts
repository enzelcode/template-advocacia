import { siteConfig } from "@/config/site";

/**
 * Aceita tanto número (5511999999999) quanto URL completa
 * (https://api.whatsapp.com/message/XYZ ou https://wa.me/XYZ).
 */
export function whatsappLink(message?: string) {
  const value = siteConfig.contact.whatsapp;
  if (value.startsWith("http")) return value;
  const msg = encodeURIComponent(
    message ?? siteConfig.contact.whatsappMessage,
  );
  return `https://wa.me/${value}?text=${msg}`;
}
