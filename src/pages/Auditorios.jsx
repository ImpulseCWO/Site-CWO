import { Link } from 'react-router-dom';
import Auditorio1 from '../assets/images/Platinum.png';
import Auditorio2 from '../assets/images/Golden.png';
import Auditorio3 from '../assets/images/Premium.png';

export default function AuditoriosImpulse() {
  const auditorios = [
    {
      image: Auditorio1,
      title: 'Auditório 1',
      subtitle: 'Versátil para treinamentos e palestras',
      description:
        'Espaço ideal para empresas que precisam de um ambiente completo para treinamentos, reuniões ampliadas e apresentações com estrutura profissional.',
      features: [
        'Capacidade para até 40 pessoas',
        'Layout flexível (escolar, auditório, em U)',
        'Sistema de projeção / TV e lousa de apoio',
        'Acesso ao espaço externo com caramanchão para montagem de mesa de alimentação',
      ],
    },
    {
      image: Auditorio2,
      title: 'Auditório 2',
      subtitle: 'Perfeito para turmas maiores e eventos corporativos',
      description:
        'Auditório amplo, ideal para workshops, imersões, encontros corporativos e eventos com maior número de participantes.',
      features: [
        'Capacidade para até 50 pessoas',
        'Ambiente climatizado e confortável',
        'Infraestrutura para som e apresentações',
        'Acesso ao espaço externo com caramanchão para coffee break e alimentação',
      ],
    },
    {
      image: Auditorio3,
      title: 'Auditório 3',
      subtitle: 'Ambiente dinâmico para cursos e formações',
      description:
        'Perfeito para cursos, aulas, seminários e treinamentos recorrentes, garantindo conforto e boa visibilidade para todos.',
      features: [
        'Capacidade para até 50 pessoas',
        'Possibilidade de diferentes configurações de layout',
        'Suporte para recursos multimídia',
        'Acesso ao espaço externo com caramanchão para montagem de mesa de alimentação',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-impulse-dark to-impulse-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Auditórios Impulse</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
            Três auditórios moduláveis, com estrutura completa para treinamentos, palestras, workshops e eventos
            corporativos. Você pode locar individualmente ou utilizar os três juntos, formando um grande auditório
            integrado.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-impulse-dark">Conheça nossos auditórios</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {auditorios.map((audit, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-impulse-light transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={audit.image}
                    alt={audit.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-impulse-dark mb-2">{audit.title}</h3>
                    <p className="text-impulse-dark font-medium mb-4">{audit.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{audit.description}</p>

                    <ul className="space-y-3 mb-4 text-left">
                      {audit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-impulse-light rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>


            <h2 className="text-2xl font-semibold text-impulse-dark">Benefícios dos nossos auditórios</h2>
            <p className="text-gray-700">
              <li> Estrutura profissional para eventos corporativos e treinamentos </li>
              <li> Internet de alta velocidade para transmissões e apresentações </li>
              <li> Café e água inclusos para os participantes </li>
              <li> Limpeza recorrente e ambiente sempre organizado </li>
              <li> Recepção preparada para receber, orientar e apoiar seus convidados </li>
              <li> Acesso aos espaços externos com caramanchão para montagem de mesa de alimentação/coffee break </li>
            </p>

            <h2 className="text-2xl font-semibold text-impulse-dark">Como funciona a locação</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Diária de evento: das <strong>8h às 18h</strong>, com tempo para organização, realização do evento e
                encerramento.
              </li>
              <li>
                Locação individual: escolha entre Auditório 1, 2 ou 3 de acordo com a capacidade e o formato do seu
                evento.
              </li>
              <li>
                Auditório completo: possibilidade de utilizar os <strong>3 auditórios integrados</strong>, formando um
                grande salão para eventos de maior porte.
              </li>
              <li>
                Montagem flexível: formatos em auditório, escolar, em U e outros, conforme a necessidade.
              </li>
            </ul>
          </div>

          {/* Aside – Valores & planos */}
          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-impulse-dark mb-4">Valores & Planos</h3>
            <h3 className="text-md font-semibold text-impulse-dark mb-2">Diária (8h às 18h)</h3>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-impulse-dark text-white">
                  <th className="px-4 py-2 rounded-tl-2xl">Auditório</th>
                  <th className="px-4 py-2">Capacidade</th>
                  <th className="px-4 py-2 rounded-tr-2xl">Valor diária</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 font-semibold">Auditório 1</td>
                  <td className="px-4 py-2">Até 40 pessoas</td>
                  <td className="px-4 py-2">R$ 550,00</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 font-semibold">Auditório 2</td>
                  <td className="px-4 py-2">Até 50 pessoas</td>
                  <td className="px-4 py-2">R$ 550,00</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 font-semibold">Auditório 3</td>
                  <td className="px-4 py-2">Até 50 pessoas</td>
                  <td className="px-4 py-2">R$ 550,00</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-5 p-4 bg-white rounded-xl border border-gray-200">
              <h4 className="text-md font-semibold text-impulse-dark mb-1">
                Auditório Completo (1 + 2 + 3)
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Utilização dos três auditórios integrados, formando um grande espaço para eventos de maior porte. <br />
                <strong>Valor diária (8h às 18h): R$ 1.200,00</strong>
              </p>
            </div>

            <a
              href="https://wa.me/5585991413326?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20audit%C3%B3rios%20da%20Impulse."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-impulse-dark hover:bg-impulse-blue hover:scale-105 hover:shadow-xl text-white font-semibold px-6 py-3 rounded-full"
            >
              Falar no WhatsApp
            </a>
            <p className="mt-3 text-xs font-light">Nenhuma taxa extra surpresa.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
