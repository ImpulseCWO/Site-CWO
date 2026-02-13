import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Wifi,
  Coffee,
  ShieldCheck,
  Users,
  Sparkles,
  BadgeCheck,
  CalendarClock,
} from "lucide-react";
import Espaco from "../assets/images/recepcao.png";

const Hero = () => {
  const phone = "5585991413326";
  const message =
    "Olá! Vim do site da Impulse. Quero saber disponibilidade e valores (salas, auditórios, estações e domicílio fiscal).";
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;

  const services = [
    {
      title: "Domicílio Fiscal (CNPJ)",
      desc: "Endereço profissional + gestão de correspondências.",
      to: "/DomicilioFiscal",
      tag: "Mais procurado",
    },
    {
      title: "Salas Privativas",
      desc: "Atendimentos, reuniões e foco com privacidade.",
      to: "/SalasPrivativas",
      tag: "Para atender",
    },
    {
      title: "Auditórios",
      desc: "Treinamentos, workshops e eventos corporativos.",
      to: "/Auditorios",
      tag: "Para eventos",
    },
    {
      title: "Estações de Trabalho",
      desc: "Coworking no dia a dia (diária ou mensal).",
      to: "/EstacoesDeTrabalho",
      tag: "Produtividade",
    },
  ];

  const headerH = 84;

  return (
    <section
      id="inicio"
      className={[
        "relative isolate overflow-hidden",
        "z-0",
        "flex items-center",
        "pt-[84px]",
        "min-h-[calc(100svh-84px)] min-h-[calc(100dvh-84px)]",
      ].join(" ")}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={Espaco}
          alt="Impulse Coworking"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-impulse-dark/80 via-impulse-dark/35 to-transparent" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-xs sm:text-sm font-semibold backdrop-blur border border-white/15">
                <Sparkles className="w-4 h-4" />
                Impulse Coworking • Duets (Cocó) • Fortaleza
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight">
                Estrutura{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-light to-white">
                  profissional
                </span>{" "}
                para trabalhar, atender e crescer.
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Salas privativas, auditórios e estações de trabalho com recepção,
                internet rápida e conforto, além de{" "}
                <span className="font-extrabold">domicílio fiscal</span> para
                dar credibilidade ao seu CNPJ.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {[
                  { icon: <Wifi className="w-4 h-4" />, label: "Wi-Fi rápido" },
                  { icon: <Coffee className="w-4 h-4" />, label: "Café e água" },
                  { icon: <ShieldCheck className="w-4 h-4" />, label: "Recepção" },
                  { icon: <Users className="w-4 h-4" />, label: "Estrutura premium" },
                ].map((b, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-3 py-3 text-white flex items-center gap-2"
                  >
                    <div className="text-white">{b.icon}</div>
                    <span className="text-xs sm:text-sm font-semibold leading-tight">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-impulse-light hover:bg-white text-slate-900 font-extrabold px-6 py-3 sm:px-7 sm:py-3.5 shadow-xl hover:shadow-2xl transition"
                >
                  <Phone className="w-4 h-4" />
                  Falar no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 border border-white/15 backdrop-blur transition"
                >
                  Ver serviços
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-white/85 text-xs sm:text-sm">
                <MapPin className="w-4 h-4" />
                Impulse Coworking • Prédio Duets • Cocó
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="p-6 sm:p-7 border-b border-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white/75 text-xs uppercase tracking-wider font-semibold">
                        Comece por aqui
                      </p>
                      <h3 className="mt-1 text-white text-xl sm:text-2xl font-extrabold leading-tight">
                        Selecione o serviço
                      </h3>
                      <p className="mt-2 text-white/80 text-sm leading-relaxed">
                        Clique para ver detalhes, benefícios e valores.
                      </p>
                    </div>

                    <div className="shrink-0 hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-white/15">
                      <BadgeCheck className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { icon: <CalendarClock className="w-4 h-4" />, label: "Agendamento rápido" },
                      { icon: <ShieldCheck className="w-4 h-4" />, label: "Ambiente premium" },
                      { icon: <Wifi className="w-4 h-4" />, label: "Wi-Fi estável" },
                    ].map((c) => (
                      <div
                        key={c.label}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-white/90"
                      >
                        {c.icon}
                        {c.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="space-y-3">
                    {services.map((item) => (
                      <Link
                        key={item.title}
                        to={item.to}
                        className="group block rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
                      >
                        <div className="px-4 py-3.5 flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <div className="text-white font-extrabold text-sm sm:text-base leading-tight">
                                {item.title}
                              </div>
                              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-2 py-0.5 text-[10px] font-bold text-white/85">
                                {item.tag}
                              </span>
                            </div>

                            <div className="mt-1 text-white/80 text-xs sm:text-sm leading-relaxed">
                              {item.desc}
                            </div>
                          </div>

                          <ArrowRight className="w-4 h-4 text-white/70 mt-1 group-hover:translate-x-0.5 transition" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 font-extrabold px-6 py-3.5 shadow-xl hover:shadow-2xl transition"
                  >
                    <Phone className="w-4 h-4" />
                    Atendimento rápido
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="mt-3 text-center text-white/70 text-xs">
                    Resposta rápida no WhatsApp • Disponibilidade sujeita à agenda
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  to="/DomicilioFiscal"
                  className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-4 py-3 text-white hover:bg-white/15 transition"
                >
                  <div className="text-xs font-semibold text-white/80">Mais procurado</div>
                  <div className="text-sm sm:text-base font-extrabold">Domicílio Fiscal</div>
                </Link>

                <Link
                  to="/SalasPrivativas"
                  className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-4 py-3 text-white hover:bg-white/15 transition"
                >
                  <div className="text-xs font-semibold text-white/80">Para atender</div>
                  <div className="text-sm sm:text-base font-extrabold">Salas Privativas</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="h-px w-full bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
