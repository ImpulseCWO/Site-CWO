import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
  Users,
  Wifi,
  ShieldCheck,
  CheckCircle2,
  CalendarClock,
  Mic,
  MonitorPlay,
  Droplets,
  Snowflake,
  Star,
} from "lucide-react";

import Auditorio1 from "../assets/images/audi.png";
import Auditorio2 from "../assets/images/AUDITORIO .jpg";
import Auditorio3 from "../assets/images/AUDITORIO 1 .jpg";

export default function AuditoriosImpulse() {
  const auditorios = useMemo(
    () => [
      {
        id: "aud1",
        image: Auditorio1,
        title: "Auditório 1",
        subtitle: "Estrutura completa para treinamentos e palestras",
        description:
          "Ideal para treinamentos, palestras e encontros corporativos que exigem estrutura profissional, conforto e boa experiência para os participantes.",
        features: [
          "Capacidade para até 40 pessoas",
          "Projetor e microfone",
          "Gelágua disponível no espaço",
          "Ambiente climatizado",
          "Internet de alta velocidade",
        ],
        capacity: "Até 40 pessoas",
        turno: "R$ 690,00",
        badge: "Mais completo",
      },
      {
        id: "aud2",
        image: Auditorio2,
        title: "Auditório 2",
        subtitle: "Ideal para eventos corporativos e turmas maiores",
        description:
          "Espaço amplo e confortável, perfeito para workshops, reuniões ampliadas e eventos corporativos com maior número de participantes.",
        features: [
          "Capacidade para até 50 pessoas",
          "TV para apresentações",
          "Ambiente climatizado",
          "Internet de alta velocidade",
          "Excelente visibilidade para todos os participantes",
        ],
        capacity: "Até 50 pessoas",
        turno: "R$ 640,00",
        badge: "Melhor custo",
      },
      {
        id: "aud3",
        image: Auditorio3,
        title: "Auditório 3",
        subtitle: "Versátil e completo para cursos e formações",
        description:
          "Perfeito para cursos, formações, seminários e treinamentos recorrentes, oferecendo recursos multimídia completos e conforto.",
        features: [
          "Capacidade para até 50 pessoas",
          "Projetor e microfone",
          "Gelágua disponível no espaço",
          "Ambiente climatizado",
          "Internet de alta velocidade",
        ],
        capacity: "Até 50 pessoas",
        turno: "R$ 690,00",
        badge: "Mais reservado",
      },
    ],
    []
  );

  const perks = useMemo(
    () => [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Estrutura corporativa",
        text: "Layout ideal para palestras, workshops e treinamentos.",
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        title: "Internet estável",
        text: "Wi-Fi rápido para apresentações, inscrições e suporte ao evento.",
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Experiência profissional",
        text: "Ambiente organizado e recepção preparada para seus convidados.",
      },
      {
        icon: <CalendarClock className="w-5 h-5" />,
        title: "Locação simples",
        text: "Turno (4h) ou diária (10h). Hora extra sob disponibilidade.",
      },
    ],
    []
  );

  const howItWorks = useMemo(
    () => [
      {
        title: "Escolha o auditório",
        text: "Selecione conforme capacidade, mídia e formato do seu evento.",
      },
      {
        title: "Defina o período",
        text: "Turno de 4 horas ou diária completa das 8h às 18h.",
      },
      {
        title: "Confirme e reserve",
        text: "Chame no WhatsApp para checar disponibilidade e fechar.",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState("aud2");
  const active = auditorios.find((a) => a.id === activeId) || auditorios[1];

  const whatsappBase = "https://wa.me/5585991413326?text=";
  const whatsappGeneral =
    whatsappBase +
    encodeURIComponent(
      "Olá! Vim pelo site e gostaria de mais informações sobre a locação dos auditórios da Impulse (disponibilidade, valores e regras)."
    );
  const whatsappAud =
    whatsappBase +
    encodeURIComponent(
      `Olá! Quero reservar o ${active.title}. Pode me informar disponibilidade para turno/diária e confirmar os valores?`
    );

  const featureIcon = (txt) => {
    const t = txt.toLowerCase();
    if (t.includes("capacidade")) return <Users className="w-4 h-4" />;
    if (t.includes("internet")) return <Wifi className="w-4 h-4" />;
    if (t.includes("climat")) return <Snowflake className="w-4 h-4" />;
    if (t.includes("microfone")) return <Mic className="w-4 h-4" />;
    if (t.includes("projetor") || t.includes("tv")) return <MonitorPlay className="w-4 h-4" />;
    if (t.includes("gelágua") || t.includes("gela")) return <Droplets className="w-4 h-4" />;
    return <CheckCircle2 className="w-4 h-4" />;
  };

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
                  Auditórios Impulse • Eventos corporativos
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                  Seu evento com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-dark to-impulse-light">
                    estrutura premium
                  </span>{" "}
                  e experiência profissional.
                </h1>

                <p className="mt-5 text-base md:text-lg text-slate-700 max-w-2xl">
                  Três auditórios climatizados, com internet e recursos multimídia para treinamentos,
                  palestras, workshops e eventos corporativos. Locação individual ou combinada.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, text: "Impulse Coworking • Prédio Duets • Cocó" },
                    { icon: <Wifi className="w-5 h-5" />, text: "Internet de alta velocidade" },
                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Organização e recepção para apoiar" },
                    { icon: <CalendarClock className="w-5 h-5" />, text: "Turno (4h) ou diária (10h)" },
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
                    href="#auditorios"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-impulse-dark hover:bg-impulse-blue text-white font-semibold shadow-sm hover:shadow-lg transition"
                  >
                    Ver auditórios
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
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/90">
                          Destaque agora
                        </p>
                        <h3 className="text-2xl font-extrabold mt-1">{active.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold">
                        <Users className="w-4 h-4" />
                        {active.capacity}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-white/90">{active.subtitle}</p>
                  </div>

                  <div className="p-6">
                    <div className="rounded-2xl border border-slate-100 overflow-hidden">
                      <img
                        src={active.image}
                        alt={active.title}
                        className="w-full h-52 object-cover"
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {active.features.slice(0, 4).map((f) => (
                        <div key={f} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-impulse-dark mt-0.5" />
                            <span className="text-sm text-slate-700">{f}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={whatsappAud}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Reservar este auditório
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="mt-3 text-xs text-slate-500">Valores sujeitos à disponibilidade.</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                  <p className="text-xs font-semibold text-slate-600 px-2">Selecione o auditório:</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {auditorios.map((a) => {
                      const isActive = a.id === activeId;
                      return (
                        <button
                          key={a.id}
                          onClick={() => setActiveId(a.id)}
                          className={[
                            "rounded-xl px-3 py-2 text-sm font-semibold transition border",
                            isActive
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200",
                          ].join(" ")}
                        >
                          {a.title.replace("Auditório ", "")}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="auditorios" className="py-14 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Conheça os auditórios
                </h2>
                <p className="mt-2 text-slate-700 max-w-2xl">
                  Escolha pelo formato do seu evento. E se precisar, dá pra combinar mais de um espaço.
                </p>
              </div>

              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Consultar disponibilidade
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditorios.map((a) => (
                <div
                  key={a.id}
                  className={[
                    "rounded-3xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden",
                    a.id === activeId ? "border-slate-900 ring-2 ring-slate-900/10" : "border-slate-100",
                  ].join(" ")}
                >
                  <div className="relative">
                    <img src={a.image} alt={a.title} className="w-full h-52 object-cover" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-black/55 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur">
                      <Users className="w-4 h-4" />
                      {a.capacity}
                    </div>
                    <div className="absolute top-3 right-3 inline-flex items-center gap-2 bg-white/85 text-slate-900 px-3 py-1 rounded-full text-xs font-extrabold backdrop-blur border border-white/60">
                      <Star className="w-4 h-4" />
                      {a.badge}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900">{a.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{a.subtitle}</p>
                      </div>
                      <button
                        onClick={() => setActiveId(a.id)}
                        className={[
                          "shrink-0 inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs font-semibold transition",
                          a.id === activeId
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200",
                        ].join(" ")}
                      >
                        Ver
                      </button>
                    </div>

                    <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                      {a.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {a.features.slice(0, 5).map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <div className="text-impulse-dark mt-0.5">{featureIcon(f)}</div>
                          <span className="text-sm text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={
                        "https://wa.me/5585991413326?text=" +
                        encodeURIComponent(
                          `Olá! Tenho interesse no ${a.title}. Pode me informar disponibilidade, valores (turno/diária) e regras?`
                        )
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-5 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Reservar este auditório
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Benefícios dos auditórios
            </h2>
            <p className="mt-2 text-slate-700 max-w-2xl">
              Estrutura feita para o seu evento rodar liso do começo ao fim.
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

        <section className="py-14 bg-white" id="valores">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Valores de locação
                </h2>
                <p className="mt-2 text-slate-700">
                  Turno (4h) com preço direto por auditório. Diária e hora extra sob consulta.
                </p>

                <div className="mt-6 space-y-4">
                  {howItWorks.map((h, idx) => (
                    <div key={idx} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                          {idx === 0 ? <Star className="w-5 h-5" /> : idx === 1 ? <CalendarClock className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">{h.title}</p>
                          <p className="text-sm text-slate-700 mt-1">{h.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                    <div className="text-sm text-slate-700">
                      <div>
                        <span className="font-extrabold text-slate-900">Diária (10h):</span>{" "}
                        a partir de <span className="font-extrabold">R$ 1.000,00</span>
                      </div>
                      <div className="mt-1">
                        <span className="font-extrabold text-slate-900">Hora extra:</span>{" "}
                        a partir de <span className="font-extrabold">R$ 110,00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                >
                  Consultar e reservar no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="mt-3 text-xs text-slate-500">Valores sujeitos à disponibilidade.</p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-impulse-dark to-impulse-light text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/90">
                          Turno (4h)
                        </p>
                        <h3 className="text-2xl font-extrabold mt-1">
                          Tabela de valores
                        </h3>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold">
                        <Users className="w-4 h-4" />
                        Capacidades e preços
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                          <tr className="text-slate-600 text-sm">
                            <th className="px-4 py-3 font-extrabold">Auditório</th>
                            <th className="px-4 py-3 font-extrabold">Capacidade</th>
                            <th className="px-4 py-3 font-extrabold">Turno (4h)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {auditorios.map((a) => (
                            <tr key={a.id} className="border-t border-slate-100">
                              <td className="px-4 py-4">
                                <div className="font-extrabold text-slate-900">{a.title}</div>
                                <div className="text-xs text-slate-500 mt-1">Recursos multimídia</div>
                              </td>
                              <td className="px-4 py-4 text-slate-700 font-semibold">{a.capacity}</td>
                              <td className="px-4 py-4 text-slate-700 font-extrabold">{a.turno}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex items-start gap-3">
                          <MonitorPlay className="w-5 h-5 text-impulse-dark mt-0.5" />
                          <div>
                            <p className="text-sm font-extrabold text-slate-900">Recursos</p>
                            <p className="text-sm text-slate-700 mt-1">
                              Projetor/TV e microfone conforme o auditório.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex items-start gap-3">
                          <CalendarClock className="w-5 h-5 text-impulse-dark mt-0.5" />
                          <div>
                            <p className="text-sm font-extrabold text-slate-900">Hora extra</p>
                            <p className="text-sm text-slate-700 mt-1">
                              A partir de R$ 110,00, mediante disponibilidade.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href={whatsappGeneral}
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
                    Quer garantir o auditório para sua próxima turma?
                  </h2>
                  <p className="mt-2 text-white/90 max-w-2xl">
                    Chame no WhatsApp com data, horário e número de pessoas. A gente confirma disponibilidade e
                    te passa o melhor formato (turno/diária).
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
