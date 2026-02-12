import React, { useMemo, useState } from "react";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left px-5 sm:px-6 py-5 hover:bg-slate-50 transition"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-impulse-light shrink-0" />
            <span className="font-extrabold text-slate-900 leading-snug">
              {q}
            </span>
          </div>
        </div>

        <div className="shrink-0 mt-0.5">
          {open ? (
            <MinusIcon className="w-5 h-5 text-impulse-dark" />
          ) : (
            <PlusIcon className="w-5 h-5 text-impulse-dark" />
          )}
        </div>
      </button>

      <div
        className={[
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 text-slate-600 leading-relaxed">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const phone = "5585991413326";
  const waLink = (msg) =>
    `https://wa.me/${String(phone).replace(/\D/g, "")}?text=${encodeURIComponent(
      msg
    )}`;

  const [query, setQuery] = useState("");

  const faqs = useMemo(
    () => [
      {
        q: "O que é a Impulse?",
        a: "A Impulse é um coworking que oferece salas privativas, auditórios, salas de reunião e estações de trabalho, além de serviços como domicílio fiscal e gestão de correspondência.",
      },
      {
        q: "Quais são os principais serviços?",
        a: "Temos salas privativas, salas executivas, auditórios, estações de trabalho e domicílio fiscal. Cada serviço pode ser contratado por hora, pacote ou mensalidade.",
      },
      {
        q: "O que é domicílio fiscal?",
        a: (
          <>
            É a possibilidade de usar o endereço da Impulse para registro da sua
            empresa e recebimento de correspondências. Saiba mais em{" "}
            <a
              className="text-impulse-dark font-extrabold underline underline-offset-4"
              href={waLink("Olá! Quero mais informações sobre domicílio fiscal.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              falar no WhatsApp
            </a>
            .
          </>
        ),
      },
      {
        q: "Como funciona o agendamento de salas?",
        a: "Você pode agendar previamente salas de reunião, executivas ou auditórios de acordo com a disponibilidade. É rápido e prático pelo WhatsApp.",
      },
      {
        q: "Quais benefícios estão incluídos?",
        a: "Internet de alta velocidade, café gratuito, recepção, limpeza recorrente, segurança e suporte no dia a dia.",
      },
      {
        q: "A Impulse oferece planos mensais?",
        a: "Sim! Você pode optar por planos mensais em salas privativas, estações de trabalho ou domicílio fiscal.",
      },
      {
        q: "Onde a Impulse está localizada?",
        a: "Estamos no Duets Office Towers, Cocó, Fortaleza/CE, em uma localização estratégica e de fácil acesso.",
      },
      {
        q: "Qual é o horário de funcionamento?",
        a: "Funcionamos de segunda a sexta-feira, das 8h às 18h. Alguns espaços podem ter horários estendidos mediante solicitação.",
      },
      {
        q: "Como faço para agendar uma visita?",
        a: (
          <>
            Basta clicar em “Agendar Visita” no site ou{" "}
            <a
              className="text-impulse-dark font-extrabold underline underline-offset-4"
              href={waLink("Olá! Gostaria de agendar uma visita à Impulse.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              falar no WhatsApp
            </a>
            .
          </>
        ),
      },
      {
        q: "A Impulse atende empresas de fora de Fortaleza?",
        a: "Sim! O serviço de domicílio fiscal e gestão de correspondência pode atender empresas de qualquer lugar do Brasil.",
      },
      {
        q: "As salas têm TV e lousa disponíveis?",
        a: "Sim, algumas salas e auditórios contam com TV HDMI e lousa para facilitar reuniões, treinamentos e apresentações.",
      },
      {
        q: "Há estacionamento disponível?",
        a: "O prédio possui 3 andares de estacionamento. Mensalidade do estacionamento não inclusa nos planos mensais.",
      },
      {
        q: "É possível contratar apenas por algumas horas?",
        a: "Sim! Trabalhamos com diárias, pacotes de horas e também locações por hora.",
      },
      {
        q: "A Impulse oferece café e água?",
        a: "Sim, oferecemos café gratuito e água como parte da estrutura para todos os clientes e visitantes.",
      },
      {
        q: "Posso usar a Impulse para atender clientes?",
        a: "Com certeza! Muitos profissionais utilizam nossas salas e auditórios para reuniões, apresentações e atendimentos de forma profissional.",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const qy = query.trim().toLowerCase();
    if (!qy) return faqs;

    return faqs.filter((item) => {
      const qMatch = String(item.q).toLowerCase().includes(qy);
      const aMatch =
        typeof item.a === "string" ? item.a.toLowerCase().includes(qy) : false;
      return qMatch || aMatch;
    });
  }, [faqs, query]);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-impulse-dark via-slate-900 to-impulse-dark text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-impulse-light/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur border border-white/15">
            <Sparkles className="w-4 h-4" />
            FAQ • Tire suas dúvidas
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Perguntas frequentes
            <span className="block text-white/85 text-base sm:text-lg font-semibold mt-3 max-w-3xl">
              Respostas rápidas sobre serviços, planos e funcionamento da Impulse.
            </span>
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/#inicio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 font-extrabold px-6 py-3 transition w-full sm:w-auto"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar para o início
            </Link>

            <a
              href={waLink("Olá! Vim do FAQ e tenho uma dúvida sobre a Impulse.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-6 py-3 transition w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Falar com especialista
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2 text-white/75 text-xs sm:text-sm">
            <MapPin className="w-4 h-4" />
            Duets Office Towers • Cocó • Fortaleza/CE
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
            <label className="block text-sm font-extrabold text-slate-900 mb-3">
              Buscar no FAQ
            </label>

            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Ex.: domicílio fiscal, salas, planos, estacionamento…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-impulse-light"
              />
            </div>

            <p className="text-slate-500 text-sm mt-3">
              {filtered.length} resultado{filtered.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {filtered.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-slate-700 font-semibold">
                Não encontramos nada com “{query}”.
              </p>

              <a
                href={waLink(
                  `Olá! Procurei por "${query}" no FAQ da Impulse e não encontrei. Pode me ajudar?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-impulse-dark hover:bg-impulse-blue text-white font-extrabold px-6 py-3 transition"
              >
                Perguntar no WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

          <div className="mt-8 rounded-3xl bg-slate-900 text-white p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-extrabold">Ainda ficou alguma dúvida?</div>
                <div className="text-sm text-white/80 mt-1">
                  Chama no WhatsApp e a gente te direciona pro melhor serviço.
                </div>
              </div>

              <a
                href={waLink("Olá! Vim do FAQ e quero ajuda para escolher o melhor serviço.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 font-extrabold px-6 py-3 transition w-full sm:w-auto"
              >
                Falar agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
