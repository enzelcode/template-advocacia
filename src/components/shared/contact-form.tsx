"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink, hasWhatsapp } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";

type Field = {
  id: "name" | "phone" | "subject" | "message";
  label: string;
  type: "text" | "tel" | "textarea";
  placeholder: string;
  required?: boolean;
};

const fields: Field[] = [
  { id: "name", label: "Nome", type: "text", placeholder: "Como podemos te chamar?", required: true },
  { id: "phone", label: "Telefone", type: "tel", placeholder: "(DDD) número", required: true },
  { id: "subject", label: "Área de interesse", type: "text", placeholder: "Ex: Demissão, Assédio Moral" },
  { id: "message", label: "Mensagem", type: "textarea", placeholder: "Conte resumidamente sua situação", required: true },
];

const initialState = { name: "", phone: "", subject: "", message: "" };

export function ContactForm() {
  const [data, setData] = useState(initialState);
  const wa = hasWhatsapp();
  const Icon = wa ? WhatsappIcon : Mail;
  const ctaLabel = wa ? "Enviar pelo WhatsApp" : "Enviar por e-mail";
  const helperText = wa
    ? "Ao enviar, sua mensagem abre direto no WhatsApp do escritório. Resposta em até 24h em dias úteis."
    : "Ao enviar, sua mensagem abre no seu app de e-mail. Resposta em até 24h em dias úteis.";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (wa) {
      const parts = [
        `Olá, vim pelo site da ${siteConfig.shortName} Advocacia.`,
        "",
        `*Nome:* ${data.name}`,
        `*Telefone:* ${data.phone}`,
        data.subject ? `*Área:* ${data.subject}` : null,
        "",
        `*Mensagem:*`,
        data.message,
      ]
        .filter(Boolean)
        .join("\n");

      window.open(whatsappLink(parts), "_blank", "noopener,noreferrer");
      return;
    }

    const subject = `Contato pelo site — ${data.name}${data.subject ? ` — ${data.subject}` : ""}`;
    const body = [
      `Olá, vim pelo site da ${siteConfig.shortName} Advocacia.`,
      "",
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.subject ? `Área: ${data.subject}` : null,
      "",
      `Mensagem:`,
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal flex flex-col gap-5 rounded-md border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8"
    >
      {fields.map((f) => (
        <div key={f.id} className="flex flex-col gap-2">
          <label
            htmlFor={f.id}
            className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50"
          >
            {f.label} {f.required ? <span className="text-[color:var(--brand-gold)]">*</span> : null}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.id}
              required={f.required}
              rows={4}
              value={data[f.id]}
              onChange={(e) => setData({ ...data, [f.id]: e.target.value })}
              placeholder={f.placeholder}
              className={cn(
                "resize-none rounded-md border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30",
                "outline-none transition-all focus:border-[color:var(--brand-gold)] focus:bg-white/[0.04]",
              )}
            />
          ) : (
            <input
              id={f.id}
              type={f.type}
              required={f.required}
              value={data[f.id]}
              onChange={(e) => setData({ ...data, [f.id]: e.target.value })}
              placeholder={f.placeholder}
              className={cn(
                "h-11 rounded-md border border-white/15 bg-transparent px-4 text-sm text-white placeholder:text-white/30",
                "outline-none transition-all focus:border-[color:var(--brand-gold)] focus:bg-white/[0.04]",
              )}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className={cn(
          "group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-[color:var(--brand-gold)] px-7 h-12 text-sm font-medium tracking-wide text-[color:var(--brand-navy)]",
          "transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105 hover:shadow-lg hover:shadow-black/20",
        )}
      >
        <Icon className="size-[18px]" />
        {ctaLabel}
        <span aria-hidden className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      <p className="text-[11px] leading-relaxed text-white/40 text-pretty">
        {helperText}
      </p>
    </form>
  );
}
