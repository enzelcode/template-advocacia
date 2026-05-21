import { whatsappLink, hasWhatsapp } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/shared/brand-icons";

export function WhatsappFab() {
  if (!hasWhatsapp()) return null;
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/30"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}
