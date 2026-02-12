import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Wifi,
  Coffee,
  ShieldCheck,
  Users,
  Laptop,
  CalendarClock,
} from "lucide-react";

import Workstation1 from "../assets/images/Estacoes.png";

export default function ESTTB() {
  const estacoes = useMemo(
    () => [
      {
        id: "individual",
        image: Workstation1,
        title: "Estação Individual",
        subtitle: "Foco total em um espaço exclusivo",
        description:
          "Ideal para autônomos e freelancers que precisam de concentração e conforto.",
        features: ["Mesa exclusiva", "Cadeira ergonômica", "Iluminação adequada", "Internet de alta velocidade"],
      },
    ],
    []
  );

  const perks = useMemo(
    () => [
      {
        icon: <Wifi className="w-5 h-5" />,
        title: "Internet rápida",
        text: "Wi-Fi de alta velocidade pra calls, reuniões e trabalho sem travar.",
      },
      {
        icon: <Coffee className="w-5 h-5" />,
        title: "Café e água",
        text: "Conforto no dia a dia para manter o ritmo com energia.",
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Estrutura profissional",
        text: "Ambiente pronto para atender clientes com padrão coworking.",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Recepção e suporte",
        text: "Chegada organizada, apoio e atendimento no local.",
      },
    ],
    []
  );

  const whatsappBase = "https://wa.me/5585991413326?text=";
  const whatsappGeneral =
    whatsappBase +
    encodeURIComponent(
      "Olá! Gostaria de mais informações sobre as estações de trabalho da Impulse (mensal/diária, disponibilidade e regras)."
    );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-impulse-light/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full bg-impulse-dark/20 blur-3xl" />
        </div>

        <header className="relative border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="text-sm">Voltar</span>
            </Link>

            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </header>

        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Estações de trabalho • Coworking
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                  Trabalhe com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-dark to-impulse-light">
                    foco
                  </span>{" "}
                  e estrutura completa.
                </h1>

                <p className="mt-5 text-base md:text-lg text-slate-700 max-w-2xl">
                  Estações individuais em ambiente compartilhado, ideais para autônomos,
                  freelancers, startups e empresas. Flexibilidade sem abrir mão de conforto,
                  internet e suporte.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, text: "Impulse Coworking • Prédio Duets • Cocó" },
                    { icon: <Wifi className="w-5 h-5" />, text: "Internet de alta velocidade" },
                    { icon: <Laptop className="w-5 h-5" />, text: "Mesa e cadeira ergonômica" },
                    { icon: <CalendarClock className="w-5 h-5" />, text: "Plano mensal ou uso avulso" },
                  ].map((b, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/70 backdrop-blur px-4 py-3 shadow-sm"
                    >
                      <div className="mt-0.5 text-impulse-dark">{b.icon}</div>
                      <p className="text-sm text-slate-700">{b.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#estacoes"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-impulse-dark hover:bg-impulse-blue text-white font-semibold shadow-sm hover:shadow-lg transition"
                  >
                    Ver estação
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#valores"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold transition"
                  >
                    Ver valores
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-impulse-dark to-impulse-light text-white">
                    <p className="text-xs uppercase tracking-wider text-white/90">Destaque</p>
                    <h3 className="text-2xl font-extrabold mt-1">Estação Individual</h3>
                    <p className="mt-2 text-sm text-white/90">
                      Um lugar fixo pra você produzir, atender e manter consistência no dia a dia.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="rounded-2xl border border-slate-100 overflow-hidden">
                      <img src={Workstation1} alt="Estações de trabalho" className="w-full h-56 object-cover" />
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {["Mesa exclusiva", "Cadeira ergonômica", "Iluminação adequada", "Wi-Fi rápido"].map((t) => (
                        <div key={t} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-impulse-dark mt-0.5" />
                            <span className="text-sm text-slate-700">{t}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={whatsappGeneral}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Consultar disponibilidade no WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="mt-3 text-xs text-slate-500">Nenhuma taxa extra.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="estacoes" className="py-14 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Conheça a estação</h2>
                <p className="mt-2 text-slate-700 max-w-2xl">
                  Um espaço individual em ambiente compartilhado, pensado para produtividade real.
                </p>
              </div>

              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Falar com atendimento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                  <img
                    src={estacoes[0].image}
                    alt={estacoes[0].title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold text-slate-900">{estacoes[0].title}</h3>
                    <p className="mt-1 text-slate-600">{estacoes[0].subtitle}</p>
                    <p className="mt-4 text-slate-700 leading-relaxed">
                      As estações de trabalho são espaços individuais em ambiente compartilhado,
                      equipados para quem precisa de produtividade fora do escritório tradicional.
                      Mesa, cadeira ergonômica, iluminação e internet rápida — pra você render de verdade.
                    </p>

                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      {estacoes[0].features.map((f) => (
                        <div key={f} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-impulse-dark mt-0.5" />
                            <span className="text-sm text-slate-700">{f}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div id="valores" className="rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-impulse-dark to-impulse-light text-white">
                    <p className="text-xs uppercase tracking-wider text-white/90">Valores & Planos</p>
                    <h3 className="text-2xl font-extrabold mt-1">Escolha seu formato</h3>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">Plano mensal fixo</p>
                          <p className="text-sm text-slate-700 mt-1">
                            Estação reservada e exclusiva para uso contínuo.
                          </p>
                          <p className="text-sm font-extrabold text-slate-900 mt-2">R$ 600,00</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">Uso avulso (diária)</p>
                          <p className="text-sm text-slate-700 mt-1">
                            Para quem precisa de praticidade imediata.
                          </p>
                          <p className="text-sm font-extrabold text-slate-900 mt-2">Consultar</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={whatsappGeneral}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Fechar no WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="text-xs text-slate-500">Nenhuma taxa extra.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Benefícios Impulse
            </h2>
            <p className="mt-2 text-slate-700 max-w-2xl">
              Estrutura completa pra você manter consistência e trabalhar com mais presença.
            </p>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition p-6"
                >
                  <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="mt-4 font-extrabold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-impulse-dark to-impulse-light text-white p-8 md:p-10 shadow-xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold">
                    Quer garantir sua estação e começar hoje?
                  </h2>
                  <p className="mt-2 text-white/90 max-w-2xl">
                    Chame no WhatsApp para confirmar disponibilidade e o melhor formato (mensal/diária).
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <a
                    href={whatsappGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-2 bg-white text-slate-900 font-extrabold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                  >
                    Falar no WhatsApp agora
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="mt-4 text-xs text-white/80">
                Impulse Coworking • Prédio Duets • Cocó
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
