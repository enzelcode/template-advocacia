import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  WhatsappIcon,
} from "@/components/shared/brand-icons";
import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { whatsappLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { social, contact } = siteConfig;

  return (
    <footer className="relative border-t border-border bg-background">
      <Container className="relative py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            {siteConfig.logo ? (
              // Footer tem fundo branco → logo renderizada em verde via CSS mask
              // pra ter contraste forte (a fonte original é dourada).
              <span
                role="img"
                aria-label={siteConfig.logo.alt}
                className="block h-16 bg-[color:var(--brand-green)]"
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
              <BrandMark size="lg" />
            )}
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {siteConfig.oab}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href={whatsappLink()}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all hover:border-[color:var(--brand-gold)] hover:text-[color:var(--brand-gold)]"
              >
                <WhatsappIcon className="size-4" />
              </Link>
              {social.instagram ? (
                <Link
                  href={social.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all hover:border-[color:var(--brand-gold)] hover:text-[color:var(--brand-gold)]"
                >
                  <InstagramIcon className="size-4" />
                </Link>
              ) : null}
              {social.linkedin ? (
                <Link
                  href={social.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all hover:border-[color:var(--brand-gold)] hover:text-[color:var(--brand-gold)]"
                >
                  <LinkedInIcon className="size-4" />
                </Link>
              ) : null}
              {social.facebook ? (
                <Link
                  href={social.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all hover:border-[color:var(--brand-gold)] hover:text-[color:var(--brand-gold)]"
                >
                  <FacebookIcon className="size-4" />
                </Link>
              ) : null}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-[color:var(--brand-navy)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {contact.phone ? <li>{contact.phone}</li> : null}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-[color:var(--brand-navy)]"
                >
                  {contact.email}
                </a>
              </li>
              {contact.address ? (
                <li className="text-muted-foreground">{contact.address}</li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="uppercase tracking-[0.22em]">
            Conforme provimento OAB nº 205/2021
          </p>
        </div>
      </Container>
    </footer>
  );
}
