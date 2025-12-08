import React, { useMemo, useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-semibold text-impulse-dark">{q}</span>
        {open ? <MinusIcon className="w-5 h-5 text-impulse-light" /> : <PlusIcon className="w-5 h-5 text-impulse-light" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-700 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const phone = '5585991413326';
  const waLink = (msg) =>
    `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;

  const [query, setQuery] = useState('');

  const faqs = useMemo(() => ([
    {
      q: 'O que é a Impulse?',
      a: 'A Impulse é um coworking que oferece salas privativas, auditórios, salas de reunião e estações de trabalho, além de serviços como domicílio fiscal e gestão de correspondência.'
    },
    {
      q: 'Quais são os principais serviços?',
      a: 'Temos salas privativas, salas executivas, auditórios, estações de trabalho e domicílio fiscal. Cada serviço pode ser contratado por hora, pacote ou mensalidade.'
    },
    {
      q: 'O que é domicílio fiscal?',
      a: (
        <>
          É a possibilidade de usar o endereço da Impulse para registro da sua empresa e recebimento de correspondências. 
          Saiba mais em <a className="text-impulse-light underline" href={waLink('Olá! Quero mais informações sobre domicílio fiscal.')}>falar no WhatsApp</a>.
        </>
      )
    },
    {
      q: 'Como funciona o agendamento de salas?',
      a: 'Você pode agendar previamente salas de reunião, executivas ou auditórios de acordo com a disponibilidade. É rápido e prático pelo WhatsApp.'
    },
    {
      q: 'Quais benefícios estão incluídos?',
      a: 'Internet de alta velocidade, café gratuito, recepção, limpeza recorrente, segurança e suporte no dia a dia.'
    },
    {
      q: 'A Impulse oferece planos mensais?',
      a: 'Sim! Você pode optar por planos mensais em salas privativas, estações de trabalho ou domicílio fiscal.'
    },
    {
      q: 'Onde a Impulse está localizada?',
      a: 'Estamos no Duets Office Towers, cocó, Fortaleza/CE, em uma localização estratégica e de fácil acesso.'
    },
    {
      q: 'Qual é o horário de funcionamento?',
      a: 'Funcionamos de segunda a sexta-feira, das 8h às 18h. Alguns espaços podem ter horários estendidos mediante solicitação.'
    },
    {
      q: 'Como faço para agendar uma visita?',
      a: (
        <>
          Basta clicar em "Agendar Visita" no site ou <a className="text-impulse-light underline" href={waLink('Olá! Gostaria de agendar uma visita à Impulse.')}>falar no WhatsApp</a>.
        </>
      )
    },
    {
      q: 'A Impulse atende empresas de fora de Fortaleza?',
      a: 'Sim! O serviço de domicílio fiscal e gestão de correspondência pode atender empresas de qualquer lugar do Brasil.'
    },
    {
      q: 'As salas têm TV e lousa disponíveis?',
      a: 'Sim, algumas salas e auditórios contam com TV HDMI e lousa para facilitar reuniões, treinamentos e apresentações.'
    },
    {
      q: 'Há estacionamento disponível?',
      a: 'O prédio possui 3 andares de estacionamento. Mensalidade do estacionemento não inclusa nos planos mensais.'
    },
    {
      q: 'É possível contratar apenas por algumas horas?',
      a: 'Sim! Trabalhamos com diárias, pacotes de horas e também locações por hora.'
    },
    {
      q: 'A Impulse oferece café e água?',
      a: 'Sim, oferecemos café gratuito e água como parte da estrutura para todos os clientes e visitantes.'
    },
    {
      q: 'Posso usar a Impulse para atender clientes?',
      a: 'Com certeza! Muitos profissionais utilizam nossas salas e auditórios para reuniões, apresentações e atendimentos de forma profissional.'
    }
  ]), []);

  const filtered = useMemo(() => {
    const qy = query.trim().toLowerCase();
    if (!qy) return faqs;
    return faqs.filter(item =>
      String(item.q).toLowerCase().includes(qy) ||
      (typeof item.a === 'string' ? item.a.toLowerCase().includes(qy) : false)
    );
  }, [faqs, query]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header FAQ */}
      <section className="bg-gradient-to-r from-impulse-dark to-impulse-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">FAQ — Perguntas Frequentes</h1>
          <p className="text-white/90 mt-4 max-w-3xl">
            Tire suas dúvidas sobre nossos espaços, serviços e benefícios oferecidos pela Impulse.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/#inicio"
              className="inline-block bg-white text-impulse-dark hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition text-center"
            >
              ← Voltar para o início
            </Link>

            <a
              href={waLink('Olá! Vim do FAQ e tenho uma dúvida sobre a Impulse.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition text-center"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Busca */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Busque por palavras-chave (ex.: salas, domicílio fiscal, planos)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-impulse-light"
            />
          </div>
          <p className="text-gray-500 text-sm mt-3">
            {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
          </p>
        </div>
      </section>

      {/* Lista FAQ */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {filtered.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-gray-600 bg-white border border-gray-200 rounded-2xl p-8">
              <p className="mb-4">Não encontramos nada com “{query}”.</p>
              <a
                href={waLink(`Olá! Procurei por "${query}" no FAQ da Impulse e não encontrei.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-impulse-light text-white font-semibold px-6 py-3 rounded-full"
              >
                Perguntar no WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
