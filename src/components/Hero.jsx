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
} from "lucide-react";
import Espaco from "../assets/images/recepcao.png";

const Hero = () => {
  const phone = "5585991413326";
  const message =
    "Olá! Vim do site da Impulse. Quero saber disponibilidade e valores (salas, auditórios, estações e domicílio fiscal).";
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="inicio"
      className={[
        "relative isolate overflow-hidden",
        "z-0",
        "flex items-center",
        "min-h-[100svh] md:min-h-screen",
        "pt-[72px] sm:pt-[84px] md:pt-0",
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

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/55 via-black/55 to-black/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-impulse-dark/70 via-impulse-dark/35 to-transparent" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-xs sm:text-sm font-semibold backdrop-blur border border-white/15">
                <Sparkles className="w-4 h-4" />
                Coworking • Salas • Auditórios • Domicílio Fiscal
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
                Estrutura{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-light to-white">
                  profissional
                </span>{" "}
                para trabalhar, atender e crescer.
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Impulse Coworking no <span className="font-extrabold">Duets (Cocó)</span>: recepção, internet rápida,
                salas privativas, auditórios e estações de trabalho — além de{" "}
                <span className="font-extrabold">domicílio fiscal</span> para dar credibilidade ao seu CNPJ.
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
                    <span className="text-xs sm:text-sm font-semibold leading-tight">{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-impulse-light hover:bg-white text-slate-900 font-extrabold px-6 py-3 sm:px-7 sm:py-3.5 shadow-xl hover:shadow-2xl transition"
                >
                  <Phone className="w-4 h-4" />
                  Falar no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 border border-white/15 backdrop-blur transition"
                >
                  Ver serviços
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-white/85 text-xs sm:text-sm">
                <MapPin className="w-4 h-4" />
                Impulse Coworking • Prédio Duets • Cocó • Fortaleza
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur shadow-2xl overflow-hidden">
                <div className="p-6 sm:p-7">
                  <p className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                    Comece pelo que você precisa
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        title: "Domicílio Fiscal (CNPJ)",
                        desc: "Endereço profissional + gestão de correspondências.",
                        to: "/DomicilioFiscal",
                      },
                      {
                        title: "Salas Privativas",
                        desc: "Atendimentos, reuniões e foco com privacidade.",
                        to: "/SalasPrivativas",
                      },
                      {
                        title: "Auditórios",
                        desc: "Treinamentos, workshops e eventos corporativos.",
                        to: "/Auditorios",
                      },
                      {
                        title: "Estações de Trabalho",
                        desc: "Plano mensal ou diária para produtividade no coworking.",
                        to: "/EstacoesDeTrabalho",
                      },
                    ].map((item) => (
                      <Link
                        key={item.title}
                        to={item.to}
                        className="group block rounded-2xl bg-white/10 border border-white/15 px-4 py-3.5 hover:bg-white/15 transition"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-white font-extrabold text-sm sm:text-base leading-tight">
                              {item.title}
                            </div>
                            <div className="text-white/85 text-xs sm:text-sm mt-1 leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/80 mt-1 group-hover:translate-x-0.5 transition" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-impulse-dark hover:bg-impulse-blue text-white font-extrabold px-6 py-3.5 shadow-xl transition"
                  >
                    Quero atendimento rápido
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
