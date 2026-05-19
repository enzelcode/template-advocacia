"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-8 py-4">
        <Link href="#top" aria-label={siteConfig.name} className="flex items-center">
          {siteConfig.logo ? (
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              priority
              className="h-10 w-auto sm:h-11"
            />
          ) : (
            <span className="font-heading text-xl font-normal tracking-tight text-[color:var(--brand-navy)]">
              {siteConfig.shortName}
            </span>
          )}
        </Link>

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

        <WhatsappButton
          label="Falar agora"
          size="default"
          tone={scrolled ? "navy" : "outline-light"}
          className="hidden sm:inline-flex"
        />
      </Container>
    </header>
  );
}
