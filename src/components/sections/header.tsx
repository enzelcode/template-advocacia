"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fecha com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          open
            ? "border-transparent bg-transparent"
            : scrolled
              ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex items-center justify-between gap-8 py-4">
          <Link
            href="#top"
            aria-label={siteConfig.name}
            className="relative z-[60] flex items-center"
            onClick={() => setOpen(false)}
          >
            {siteConfig.logo ? (
              // Logo renderizada via CSS mask pra permitir troca de cor
              // dinâmica: dourada sobre o hero (transparente / mobile menu
              // aberto), verde quando a navbar fica fixa sobre fundo branco.
              <span
                role="img"
                aria-label={siteConfig.logo.alt}
                className={cn(
                  "block h-12 transition-colors duration-300 sm:h-14",
                  scrolled && !open
                    ? "bg-[color:var(--brand-green)]"
                    : "bg-[color:var(--brand-gold)]",
                )}
                style={{
                  aspectRatio: `${siteConfig.logo.width} / ${siteConfig.logo.height}`,
                  maskImage: `url(${siteConfig.logo.src})`,
                  WebkitMaskImage: `url(${siteConfig.logo.src})`,
                  maskSize: "100% 100%",
                  WebkitMaskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />
            ) : (
              <BrandMark variant={open || !scrolled ? "light" : "dark"} />
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm transition-colors duration-300",
                  scrolled
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-white/85 hover:text-white",
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--brand-gold)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <WhatsappButton
            label="Falar agora"
            size="default"
            tone={scrolled ? "navy" : "outline-light"}
            className="hidden md:inline-flex"
          />

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={cn(
              "relative z-[60] grid size-11 place-items-center rounded-full border transition-colors md:hidden",
              open
                ? "border-white/40 text-white"
                : scrolled
                  ? "border-border/70 text-foreground hover:bg-secondary"
                  : "border-white/25 text-white hover:bg-white/10",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </header>

      {/* Overlay full screen — mobile menu */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-[color:var(--brand-navy)]" />
        <div aria-hidden className="bg-pillars absolute inset-0 opacity-25" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-25%] size-[40rem] rounded-full bg-[color:var(--brand-gold)]/15 blur-[120px]"
        />

        <div className="relative flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                }}
                className={cn(
                  "group flex items-baseline gap-5 border-b border-white/10 py-5 transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                <span className="font-heading text-xs font-medium tracking-[0.2em] text-[color:var(--brand-gold)]">
                  0{i + 1}
                </span>
                <span className="font-heading text-3xl font-normal text-white">
                  {link.label}
                </span>
                <span
                  aria-hidden
                  className="ml-auto text-white/40 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Rodapé do menu: CTA + contato */}
          <div
            style={{
              transitionDelay: open ? `${120 + navLinks.length * 60}ms` : "0ms",
            }}
            className={cn(
              "mt-auto flex flex-col gap-6 transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <WhatsappButton
              label="Falar pelo WhatsApp"
              tone="gold"
              className="w-full justify-center"
            />
            <div className="flex flex-col items-center gap-1">
              {siteConfig.contact.phone ? (
                <p className="font-heading text-base text-white">
                  {siteConfig.contact.phone}
                </p>
              ) : null}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-white/60 transition-colors hover:text-[color:var(--brand-gold)]"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
