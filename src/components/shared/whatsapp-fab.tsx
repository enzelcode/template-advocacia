import { whatsappLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/shared/brand-icons";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-5 text-sm font-medium text-white shadow-xl shadow-emerald-900/25 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-emerald-900/30"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/15">
        <WhatsappIcon className="size-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
