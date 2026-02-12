import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Mail,
  Building2,
  Clock,
  Star,
  Sparkles,
  BadgeCheck,
  ArrowRight,
  Phone,
  MapPin,
  Receipt,
  Users,
  CalendarClock,
  X,
  HelpCircle,
} from "lucide-react";

export default function ECNPJ() {
  const plans = useMemo(
    () => [
      {
        id: "easy",
        name: "EASY",
        price: "R$ 59,90",
        period: "/mês",
        tag: "Mais econômico",
        description: "Pagamento anual • Fidelidade 2 anos",
        highlights: [
          "Endereço fiscal e comercial",
          "Recebimento + organização de correspondências",
          "Aviso por WhatsApp",
          "Suporte para dúvidas de uso",
        ],
        footnote: "Pagamento anual. Melhor custo-benefício.",
        featured: false,
      },
      {
        id: "top",
        name: "TOP",
        price: "R$ 79,90",
        period: "/mês",
        tag: "Mais escolhido",
        description: "Pagamento mensal • Fidelidade 1 ano",
        highlights: [
          "Endereço fiscal e comercial",
          "Recebimento + organização de correspondências",
          "Aviso por WhatsApp",
          "Prioridade no atendimento",
        ],
        footnote: "Ideal para quem quer flexibilidade sem abrir mão de estrutura.",
        featured: true,
      },
      {
        id: "premium",
        name: "PREMIUM",
        price: "R$ 99,90",
        period: "/mês",
        tag: "Mais completo",
        description: "Pagamento mensal • Sem fidelidade",
        highlights: [
          "Endereço fiscal e comercial",
          "Recebimento + organização de correspondências",
          "Aviso por WhatsApp",
          "1h de sala/mês",
        ],
        footnote: "Para quem quer o pacote completo e zero amarras.",
        featured: false,
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        icon: <Building2 className="w-5 h-5" />,
        title: "Endereço profissional",
        text: "Use o endereço da Impulse como sede do CNPJ e passe mais credibilidade na primeira impressão.",
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Conformidade e segurança",
        text: "Seu CNPJ fica regular com endereço oficial para registros e comunicações formais.",
      },
      {
        icon: <Mail className="w-5 h-5" />,
        title: "Correspondência sob controle",
        text: "Recebemos e organizamos seus documentos e notificações com aviso rápido.",
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Economia real",
        text: "Pare de pagar aluguel de sala só pra ter endereço. Estrutura profissional por uma fração do custo.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "O que é domicílio fiscal?",
        a: "É o endereço oficial da sua empresa perante os órgãos públicos, usado em cadastros, registros e recebimento de correspondências oficiais.",
      },
      {
        q: "Posso usar para MEI ou LTDA?",
        a: "Sim. Serve para MEI, EI, SLU, LTDA e outros modelos, conforme as regras do seu registro e do seu contador.",
      },
      {
        q: "Como funciona o recebimento de correspondências?",
        a: "A Impulse recebe suas correspondências e você é avisado. A retirada/gestão segue o plano contratado e o combinado no atendimento.",
      },
      {
        q: "Quanto tempo para começar a usar?",
        a: "Normalmente é rápido: você contrata e recebe as orientações para atualizar o endereço do CNPJ conforme sua necessidade.",
      },
      {
        q: "A 1h de sala do Premium acumula?",
        a: "Não. ¹Acesso mediante agendamento prévio e não cumulativo.",
      },
    ],
    []
  );

  const [selectedPlanId, setSelectedPlanId] = useState("top");
  const [openFaq, setOpenFaq] = useState(0);

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const whatsappLink =
    "https://wa.me/5585991413326?text=Ol%C3%A1%2C%20quero%20contratar%20Domic%C3%ADlio%20Fiscal%20na%20Impulse.%20Pode%20me%20passar%20os%20documentos%20e%20o%20passo%20a%20passo%3F";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Background decor */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-impulse-light/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full bg-impulse-dark/20 blur-3xl" />
        </div>

        {/* Top bar */}
        <header className="relative border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="text-sm">Voltar</span>
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Impulse Coworking • Endereço fiscal e comercial
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                  Seu CNPJ com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-dark to-impulse-light">
                    endereço premium
                  </span>{" "}
                  sem pagar por uma sala.
                </h1>

                <p className="mt-5 text-base md:text-lg text-slate-700 max-w-2xl">
                  Use o endereço da Impulse como sede oficial do seu CNPJ e ganhe
                  credibilidade, regularidade e praticidade com gestão de
                  correspondências e suporte.
                </p>

                {/* Social proof / bullets */}
                <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { icon: <BadgeCheck className="w-5 h-5" />, text: "Endereço profissional no Duets (Cocó)" },
                    { icon: <Mail className="w-5 h-5" />, text: "Recebimento e aviso de correspondências" },
                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Mais conformidade e menos dor de cabeça" },
                    { icon: <Clock className="w-5 h-5" />, text: "Ativação rápida e processo simples" },
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

                {/* CTA row */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                  >
                    Quero contratar agora
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#planos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold transition"
                  >
                    Ver planos e benefícios
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-4 text-xs text-slate-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Impulse Coworking • Prédio Duets • Cocó
                </div>
              </div>

              {/* Pricing highlight card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-impulse-dark to-impulse-light text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/90">
                          Plano em destaque
                        </p>
                        <h3 className="text-2xl font-extrabold mt-1">
                          {selectedPlan.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-4 h-4" />
                        {selectedPlan.tag}
                      </div>
                    </div>

                    <div className="mt-5 flex items-end gap-2">
                      <span className="text-4xl font-extrabold">
                        {selectedPlan.price}
                      </span>
                      <span className="text-white/90">{selectedPlan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/90">
                      {selectedPlan.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-slate-900">
                      O que você recebe:
                    </p>

                    <ul className="mt-3 space-y-3">
                      {selectedPlan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                          <span className="text-sm text-slate-700">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                      <div className="flex items-start gap-3">
                        <Receipt className="w-5 h-5 text-slate-700 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            Sem surpresas
                          </p>
                          <p className="text-sm text-slate-700 mt-1">
                            {selectedPlan.footnote}
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-impulse-dark hover:bg-impulse-blue text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                    >
                      Fechar no WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    
                  </div>
                </div>

                {/* Plan toggle */}
                <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                  <p className="text-xs font-semibold text-slate-600 px-2">
                    Selecione um plano para ver detalhes:
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {plans.map((p) => {
                      const active = p.id === selectedPlanId;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setSelectedPlanId(p.id)}
                          className={[
                            "rounded-xl px-3 py-2 text-sm font-semibold transition border",
                            active
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200",
                          ].join(" ")}
                        >
                          {p.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-14 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Domicílio fiscal que vende por você
                </h2>
                <p className="mt-2 text-slate-700 max-w-2xl">
                  Um endereço certo melhora percepção, reduz fricção e deixa seu
                  negócio mais “pronto” para fechar com clientes e parceiros.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users className="w-4 h-4" />
                Ideal para MEIs, autônomos e pequenas empresas
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition p-6"
                >
                  <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-extrabold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Como funciona (sem enrolação)
                </h2>
                <p className="mt-2 text-slate-700">
                  Processo simples, pensado para você começar rápido.
                </p>

                <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                  
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      n: "1",
                      title: "Contrate o plano",
                      text: "Escolha EASY, TOP ou PREMIUM e confirme seus dados.",
                    },
                    {
                      n: "2",
                      title: "Use o endereço",
                      text: "Você passa a utilizar o endereço da Impulse como sede fiscal.",
                    },
                    {
                      n: "3",
                      title: "Receba avisos",
                      text: "Correspondências chegam aqui e você é notificado rapidamente.",
                    },
                  ].map((s) => (
                    <div
                      key={s.n}
                      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-2xl bg-impulse-dark text-white font-extrabold flex items-center justify-center">
                          {s.n}
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-slate-400" />
                      </div>
                      <h3 className="mt-4 font-extrabold text-slate-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-700">{s.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-slate-700 mt-0.5" />
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="planos" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Planos que cabem no seu momento
                </h2>
                <p className="mt-2 text-slate-700 max-w-2xl">
                  Escolha pelo seu perfil: economia, flexibilidade ou pacote
                  completo.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Falar com atendimento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div
                  key={p.id}
                  className={[
                    "rounded-3xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden",
                    p.featured
                      ? "border-slate-900 ring-2 ring-slate-900/10"
                      : "border-slate-100",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "p-6",
                      p.featured
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-900",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold">{p.name}</h3>
                      <div
                        className={[
                          "text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2",
                          p.featured ? "bg-white/15" : "bg-white border border-slate-200",
                        ].join(" ")}
                      >
                        <Star className="w-4 h-4" />
                        {p.tag}
                      </div>
                    </div>

                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-3xl font-extrabold">{p.price}</span>
                      <span className={p.featured ? "text-white/80" : "text-slate-600"}>
                        {p.period}
                      </span>
                    </div>
                    <p className={["mt-2 text-sm", p.featured ? "text-white/85" : "text-slate-700"].join(" ")}>
                      {p.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-impulse-dark mt-0.5" />
                          <span className="text-sm text-slate-700">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={
                        "https://wa.me/5585991413326?text=" +
                        encodeURIComponent(
                          `Olá! Quero contratar o Domicílio Fiscal (${p.name}). Pode me passar os documentos e o passo a passo?`
                        )
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[
                        "mt-6 inline-flex w-full items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition shadow-sm hover:shadow-lg",
                        p.featured
                          ? "bg-impulse-dark hover:bg-impulse-blue text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white",
                      ].join(" ")}
                    >
                      Contratar {p.name}
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="mt-3 text-xs text-slate-500">{p.footnote}</p>
                    {p.id === "premium" && (
                      <p className="mt-2 text-xs text-slate-500">
                        
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Dúvidas frequentes
                </h2>
                <p className="mt-2 text-slate-700">
                  Respostas rápidas para você decidir sem insegurança.
                </p>

                <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-impulse-dark mt-0.5" />
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">
                        Transparência
                      </p>
                      <p className="text-sm text-slate-700 mt-1">
                        Se você quiser, eu também monto uma versão com provas
                        sociais (depoimentos, números, logos) — isso aumenta MUITO
                        a conversão.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-3">
                  {faqs.map((f, idx) => {
                    const open = openFaq === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setOpenFaq(open ? -1 : idx)}
                        className="w-full text-left rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-extrabold text-slate-900">{f.q}</p>
                            {open && (
                              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
                            )}
                          </div>
                          <div className="mt-1 text-slate-500">
                            {open ? <X className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-impulse-dark to-impulse-light text-white p-8 md:p-10 shadow-xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold">
                    Pronto pra colocar seu CNPJ num endereço que passa confiança?
                  </h2>
                  <p className="mt-2 text-white/90 max-w-2xl">
                    Chama no WhatsApp e peça o checklist de documentos + o passo a
                    passo. Você resolve isso rápido e já fica com a estrutura “de
                    empresa”.
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-2 bg-white text-slate-900 font-extrabold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition"
                  >
                    Falar no WhatsApp agora
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
