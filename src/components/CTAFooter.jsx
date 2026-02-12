import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CalendarClock,
  BadgeCheck,
  Sparkles,
  Users,
  Building2,
  Presentation,
  LayoutGrid,
} from "lucide-react";

const CallToActionImpulse = () => {
  const phone = "5585991413326";
  const message =
    "Olá! Vi o site da Impulse e gostaria de saber disponibilidade e valores (salas, auditórios, estações e domicílio fiscal).";
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-impulse-dark via-slate-900 to-impulse-dark text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-impulse-light/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur border border-white/15">
            <Sparkles className="w-4 h-4" />
            Atendimento rápido • Duets (Cocó)
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Pronto para conhecer nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-light to-white">
              espaços
            </span>
            ?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Estrutura profissional para você trabalhar, atender e realizar eventos com padrão premium.
            Fale com a gente e receba orientação do melhor formato (diária, pacote ou mensalidade).
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 font-extrabold px-6 py-3.5 shadow-xl hover:shadow-2xl transition w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-6 py-3.5 transition w-full sm:w-auto"
            >
              <CalendarClock className="w-4 h-4" />
              Ver serviços
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Flexível",
                desc: "Salas, estações e pacotes sob medida.",
                icon: <BadgeCheck className="w-5 h-5" />,
              },
              {
                title: "Confortável",
                desc: "Ambientes modernos com suporte no local.",
                icon: <Users className="w-5 h-5" />,
              },
              {
                title: "Prático",
                desc: "Reserva rápida e atendimento especializado.",
                icon: <CalendarClock className="w-5 h-5" />,
              },
            ].map((k) => (
              <div
                key={k.title}
                className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-6 text-left shadow-lg"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center">
                  {k.icon}
                </div>
                <div className="mt-4 text-lg font-extrabold">{k.title}</div>
                <div className="mt-1 text-sm text-white/80">{k.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white/10 border border-white/15 backdrop-blur p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                to="/DomicilioFiscal"
                className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-3 text-left transition"
              >
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                  <Building2 className="w-4 h-4" />
                  Domicílio Fiscal
                </div>
                <div className="mt-1 text-sm font-extrabold">Credibilidade pro CNPJ</div>
              </Link>

              <Link
                to="/SalasPrivativas"
                className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-3 text-left transition"
              >
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                  <BadgeCheck className="w-4 h-4" />
                  Salas Privativas
                </div>
                <div className="mt-1 text-sm font-extrabold">Atenda com presença</div>
              </Link>

              <Link
                to="/Auditorios"
                className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-3 text-left transition"
              >
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                  <Presentation className="w-4 h-4" />
                  Auditórios
                </div>
                <div className="mt-1 text-sm font-extrabold">Treinamentos e eventos</div>
              </Link>

              <Link
                to="/EstacoesDeTrabalho"
                className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-3 text-left transition"
              >
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                  <LayoutGrid className="w-4 h-4" />
                  Estações
                </div>
                <div className="mt-1 text-sm font-extrabold">Foco no coworking</div>
              </Link>
            </div>

            <div className="mt-4 text-xs text-white/70 text-center">
              Disponibilidade sujeita à agenda • Atendimento pelo WhatsApp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionImpulse;
