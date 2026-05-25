import { siteConfig } from "@/config/site";

/**
 * Retorna o link de contato.
 * - WhatsApp configurado (URL completa ou número) → abre WhatsApp.
 * - Vazio → cai pro formulário interno (#contato).
 */
export function whatsappLink(message?: string) {
  const value = siteConfig.contact.whatsapp;
  if (!value) return "#contato";
  if (value.startsWith("http")) return value;
  const msg = encodeURIComponent(
    message ?? siteConfig.contact.whatsappMessage,
  );
  return `https://wa.me/${value}?text=${msg}`;
}

export function hasWhatsapp() {
  return Boolean(siteConfig.contact.whatsapp);
}
