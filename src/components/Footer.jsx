import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  const phone = "5585991413326";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Impulse e gostaria de mais informações (salas, auditórios, estações e domicílio fiscal)."
  )}`;

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/impulsecoworkeoffice",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/impulse-coworkoffice-95b766382/",
      icon: Linkedin,
    },
  ];

  const quickLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "WhatsApp", href: waLink, external: true },
  ];

  const serviceLinks = [
    { name: "Domicílio Fiscal", to: "/DomicilioFiscal" },
    { name: "Salas Privativas", to: "/SalasPrivativas" },
    { name: "Auditórios", to: "/Auditorios" },
    { name: "Estações de Trabalho", to: "/EstacoesDeTrabalho" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-impulse-dark via-slate-900 to-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-impulse-light/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-36 -left-36 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold border border-white/15 backdrop-blur">
              Impulse Coworking • Duets (Cocó)
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Impulse{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-light to-white">
                Cowork & Office
              </span>
            </h3>

            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
              Espaços privativos, compartilhados e auditórios projetados para oferecer
              praticidade, conforto e produtividade para empresas e profissionais.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 font-extrabold px-4 py-3 hover:shadow-lg transition"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-extrabold">Links rápidos</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="hover:text-white transition"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-extrabold">Serviços</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              {serviceLinks.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:text-white transition">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-extrabold">Contato</h4>

            <div className="mt-4 space-y-3 text-white/80 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-white/70" />
                <a
                  href="mailto:atendimento@impulsecwo.com.br"
                  className="hover:text-white transition break-all"
                >
                  atendimento@impulsecwo.com.br
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-white/70" />
                <a href="tel:+5585991413326" className="hover:text-white transition">
                  (85) 99141-3326
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-white/70" />
                <span>Fortaleza, CE</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-white/70" />
                <span>Seg–Sex: 8h–18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p className="text-sm text-white/80">
              Quer uma sugestão rápida do melhor plano/horário? Chama no WhatsApp e a gente te direciona.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-impulse-light hover:bg-white text-slate-900 font-extrabold px-6 py-3 transition w-full md:w-auto"
            >
              Falar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-white/55">
            © 2025 Impulse Coworking. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
