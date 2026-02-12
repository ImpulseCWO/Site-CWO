import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Sparkles,
  Users,
  Wifi,
  Coffee,
  ShieldCheck,
  CalendarClock,
  Clock,
  X,
} from "lucide-react";

import Platinum from "../assets/images/Platinum.png";
import Golden from "../assets/images/Golden.png";
import Premium from "../assets/images/Premium.png";
import Executive from "../assets/images/Executive.png";

export default function ECPF() {
  const salas = useMemo(
    () => [
      {
        id: "platinum",
        image: Platinum,
        title: "Sala Platinum",
        subtitle: "Espaço amplo para grandes equipes",
        description:
          "Ideal para treinamentos, reuniões maiores e apresentações com todo o suporte profissional.",
        features: ["Até 12 pessoas", "TV e lousa disponíveis", "Lousa de vidro", "Suporte completo"],
        capacity: "Até 12 pessoas",
        highlight: "Perfeita para treinamentos",
      },
      {
        id: "golden",
        image: Golden,
        title: "Sala Golden",
        subtitle: "Conforto e acolhimento para atendimentos",
        description:
          "Ambiente sofisticado, perfeito para atendimentos humanizados, psicólogos e consultorias.",
        features: ["Poltrona confortável", "Mesa de apoio", "Ambiente silencioso", "Sofá para atendimento"],
        capacity: "Atendimentos",
        highlight: "Clima premium e reservado",
      },
      {
        id: "premium",
        image: Premium,
        title: "Sala Premium",
        subtitle: "Praticidade para equipes e reuniões",
        description:
          "Sala versátil para até 4 pessoas, equipada para encontros ágeis e produtivos.",
        features: ["TV HDMI", "Lousa de vidro", "Mesa ampla", "Ambiente profissional"],
        capacity: "Até 4 pessoas",
        highlight: "Reuniões rápidas e produtivas",
      },
      {
        id: "executive",
        image: Executive,
        title: "Sala Executive",
        subtitle: "Compacta e eficiente para o dia a dia",
        description:
          "Espaço ideal para até 3 pessoas, com iluminação natural e privacidade.",
        features: ["Ambiente iluminado", "Wi-Fi rápido", "Mesa e cadeiras", "Lousa de vidro"],
        capacity: "Até 3 pessoas",
        highlight: "Perfeita para calls e foco",
      },
    ],
    []
  );

  const pricing = useMemo(
    () => [
      { sala: "Platinum", one: "R$ 65,00", four: "R$ 210,00", eight: "R$ 390,00" },
      { sala: "Golden", one: "R$ 55,00", four: "R$ 180,00", eight: "R$ 330,00" },
      { sala: "Premium", one: "R$ 50,00", four: "R$ 160,00", eight: "R$ 300,00" },
      { sala: "Executive", one: "R$ 38,00", four: "R$ 130,00", eight: "R$ 230,00" },
    ],
    []
  );

  const perks = useMemo(
    () => [
      { icon: <Wifi className="w-5 h-5" />, title: "Internet rápida", text: "Wi-Fi de alta velocidade para reuniões, calls e produtividade." },
      { icon: <Coffee className="w-5 h-5" />, title: "Café e água", text: "Conforto para você e seus clientes durante toda a experiência." },
      { icon: <ShieldCheck className="w-5 h-5" />, title: "Estrutura profissional", text: "Ambiente pronto para atender clientes com padrão premium." },
      { icon: <Users className="w-5 h-5" />, title: "Recepção preparada", text: "Chegada organizada, atendimento e suporte na rotina." },
    ],
    []
  );

  const howItWorks = useMemo(
    () => [
      { icon: <Clock className="w-5 h-5" />, title: "Pacote de horas", text: "Flexível para quem usa quando precisa, sem compromisso." },
      { icon: <CalendarClock className="w-5 h-5" />, title: "Diária", text: "Pra ficar o dia inteiro com tranquilidade e conforto." },
      { icon: <Star className="w-5 h-5" />, title: "Mensalidade", text: "Sala fixa e exclusiva. Consulte disponibilidade e condições." },
    ],
    []
  );

  const [activeSalaId, setActiveSalaId] = useState("premium");
  const activeSala = salas.find((s) => s.id === activeSalaId) || salas[2];

  const whatsappBase =
    "https://wa.me/5585991413326?text=";

  const whatsappLinkGeneral =
    whatsappBase +
    encodeURIComponent(
      "Olá! Estou entrando em contato pelo site e gostaria de saber mais sobre as salas privativas da Impulse."
    );

  const whatsappLinkSala =
    whatsappBase +
    encodeURIComponent(
      `Olá! Quero reservar a ${activeSala.title}. Pode me informar disponibilidade e o melhor pacote?`
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
              href={whatsappLinkGeneral}
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
                  Salas privativas • Atendimento, reuniões e foco
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                  Salas que passam{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-dark to-impulse-light">
                    confiança
                  </span>{" "}
                  na hora.
                </h1>

                <p className="mt-5 text-base md:text-lg text-slate-700 max-w-2xl">
                  Estrutura pronta, ambiente premium e conforto para você e seus clientes.
                  Escolha a sala ideal e feche sua agenda com uma experiência profissional.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, text: "Impulse Coworking • Prédio Duets • Cocó" },
                    { icon: <Wifi className="w-5 h-5" />, text: "Internet rápida para calls e reuniões" },
                    { icon: <Coffee className="w-5 h-5" />, text: "Café e água inclusos" },
                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Recepção e suporte no local" },
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
                    href="#salas"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-impulse-dark hover:bg-impulse-blue text-white font-semibold shadow-sm hover:shadow-lg transition"
                  >
                    Ver salas disponíveis
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#valores"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold transition"
                  >
                    Ver valores e planos
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-impulse-dark to-impulse-light text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/90">
                          Destaque agora
                        </p>
                        <h3 className="text-2xl font-extrabold mt-1">
                          {activeSala.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold">
                        <Users className="w-4 h-4" />
                        {activeSala.capacity}
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-white/90">
                      {activeSala.highlight}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="rounded-2xl border border-slate-100 overflow-hidden">
                      <img
                        src={activeSala.image}
                        alt={activeSala.title}
                        className="w-full h-52 object-cover"
                      />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-900">
                      Ideal para:
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {activeSala.description}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {activeSala.features.slice(0, 4).map((h) => (
                        <div
                          key={h}
                          className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-impulse-dark mt-0.5" />
                            <span className="text-sm text-slate-700">{h}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={whatsappLinkSala}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Reservar no WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="mt-3 text-xs text-slate-500">
                      Nenhuma taxa extra.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                  <p className="text-xs font-semibold text-slate-600 px-2">
                    Selecione a sala:
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {salas.map((s) => {
                      const active = s.id === activeSalaId;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setActiveSalaId(s.id)}
                          className={[
                            "rounded-xl px-3 py-2 text-sm font-semibold transition border",
                            active
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200",
                          ].join(" ")}
                        >
                          {s.title.replace("Sala ", "")}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="salas" className="py-14 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Conheça os espaços
                </h2>
                <p className="mt-2 text-slate-700 max-w-2xl">
                  Escolha o ambiente ideal e atenda com mais presença, conforto e profissionalismo.
                </p>
              </div>
              <a
                href={whatsappLinkGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Consultar disponibilidade
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {salas.map((s) => (
                <div
                  key={s.id}
                  className={[
                    "rounded-3xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden",
                    s.id === activeSalaId ? "border-slate-900 ring-2 ring-slate-900/10" : "border-slate-100",
                  ].join(" ")}
                >
                  <div className="relative">
                    <img src={s.image} alt={s.title} className="w-full h-44 object-cover" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-black/55 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur">
                      <Users className="w-4 h-4" />
                      {s.capacity}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900">{s.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{s.subtitle}</p>
                      </div>
                      <button
                        onClick={() => setActiveSalaId(s.id)}
                        className={[
                          "shrink-0 inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs font-semibold transition",
                          s.id === activeSalaId
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200",
                        ].join(" ")}
                      >
                        Ver
                      </button>
                    </div>

                    <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                      {s.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {s.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-impulse-dark mt-0.5" />
                          <span className="text-sm text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={
                        "https://wa.me/5585991413326?text=" +
                        encodeURIComponent(`Olá! Tenho interesse na ${s.title}. Pode me informar disponibilidade e valores?`)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-5 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Reservar esta sala
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Benefícios Impulse
                </h2>
                <p className="mt-2 text-slate-700 max-w-2xl">
                  Tudo que você precisa para atender e trabalhar com conforto e padrão profissional.
                </p>
              </div>
            </div>

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

        <section className="py-14 bg-white" id="valores">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Valores & Planos
                </h2>
                <p className="mt-2 text-slate-700">
                  Pacote de horas com preços claros. Mensalidade: consultar disponibilidade.
                </p>

                <div className="mt-6 space-y-4">
                  {howItWorks.map((h, idx) => (
                    <div key={idx} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                          {h.icon}
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">{h.title}</p>
                          <p className="text-sm text-slate-700 mt-1">{h.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLinkGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                >
                  Consultar disponibilidade no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="mt-3 text-xs text-slate-500">Nenhuma taxa extra.</p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-impulse-dark to-impulse-light text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/90">
                          Pacote de horas
                        </p>
                        <h3 className="text-2xl font-extrabold mt-1">
                          Tabela de valores
                        </h3>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-4 h-4" />
                        Preço direto
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                          <tr className="text-slate-600 text-sm">
                            <th className="px-4 py-3 font-extrabold">Sala</th>
                            <th className="px-4 py-3 font-extrabold">1 Hora</th>
                            <th className="px-4 py-3 font-extrabold">4 Horas</th>
                            <th className="px-4 py-3 font-extrabold">8 Horas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pricing.map((r) => (
                            <tr key={r.sala} className="border-t border-slate-100">
                              <td className="px-4 py-4">
                                <div className="font-extrabold text-slate-900">{r.sala}</div>
                                <div className="text-xs text-slate-500 mt-1">Pacote de horas</div>
                              </td>
                              <td className="px-4 py-4 text-slate-700 font-semibold">{r.one}</td>
                              <td className="px-4 py-4 text-slate-700 font-semibold">{r.four}</td>
                              <td className="px-4 py-4 text-slate-700 font-semibold">{r.eight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                          <div>
                            <p className="text-sm font-extrabold text-slate-900">Mensalidade</p>
                            <p className="text-sm text-slate-700 mt-1">
                              Consulte disponibilidade e condições.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                          <div>
                            <p className="text-sm font-extrabold text-slate-900">Sem taxas extras</p>
                            <p className="text-sm text-slate-700 mt-1">
                              Transparência total no fechamento.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href={whatsappLinkGeneral}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Fechar pelo WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-impulse-dark to-impulse-light text-white p-8 md:p-10 shadow-xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold">
                    Quer reservar agora e garantir o horário?
                  </h2>
                  <p className="mt-2 text-white/90 max-w-2xl">
                    Chama no WhatsApp e informe a sala desejada. A gente confirma disponibilidade e já
                    deixa tudo pronto para você atender com padrão Impulse.
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <a
                    href={whatsappLinkGeneral}
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

        <footer className="py-10 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Impulse Coworking
            </p>
            <Link to="/" className="text-sm font-semibold text-slate-900 hover:underline">
              Voltar para o início
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
