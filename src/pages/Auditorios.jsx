import { Link } from 'react-router-dom';
import Auditorio1 from '../assets/images/audi.png';
import Auditorio2 from '../assets/images/AUDITORIO .jpg';
import Auditorio3 from '../assets/images/AUDITORIO 1 .jpg';

export default function AuditoriosImpulse() {
  const auditorios = [
    {
      image: Auditorio1,
      title: 'Auditório 1',
      subtitle: 'Estrutura completa para treinamentos e palestras',
      description:
        'Auditório ideal para treinamentos, palestras e encontros corporativos que exigem estrutura profissional, conforto e boa experiência para os participantes.',
      features: [
        'Capacidade para até 40 pessoas',
        'Projetor e microfone',
        'Gelágua disponível no espaço',
        'Ambiente climatizado',
        'Internet de alta velocidade',
      ],
    },
    {
      image: Auditorio2,
      title: 'Auditório 2',
      subtitle: 'Ideal para eventos corporativos e turmas maiores',
      description:
        'Espaço amplo e confortável, perfeito para workshops, reuniões ampliadas e eventos corporativos com maior número de participantes.',
      features: [
        'Capacidade para até 50 pessoas',
        'TV para apresentações',
        'Ambiente climatizado',
        'Internet de alta velocidade',
        'Excelente visibilidade para todos os participantes',
      ],
    },
    {
      image: Auditorio3,
      title: 'Auditório 3',
      subtitle: 'Versátil e completo para cursos e formações',
      description:
        'Perfeito para cursos, formações, seminários e treinamentos recorrentes, oferecendo recursos multimídia completos e conforto.',
      features: [
        'Capacidade para até 50 pessoas',
        'Projetor e microfone',
        'Gelágua disponível no espaço',
        'Ambiente climatizado',
        'Internet de alta velocidade',
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
            Três auditórios climatizados, com internet e estrutura profissional para treinamentos, palestras,
            workshops e eventos corporativos. Locação individual ou combinada, conforme a necessidade do seu evento.
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
          <div className="md:col-span-2 space-y-8">
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

            <h2 className="text-2xl font-semibold text-impulse-dark">Benefícios dos auditórios</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Estrutura profissional para eventos corporativos e treinamentos</li>
              <li>Internet estável e de alta velocidade</li>
              <li>Ambientes climatizados e confortáveis</li>
              <li>Limpeza recorrente e organização do espaço</li>
              <li>Recepção preparada para apoiar seus convidados</li>
            </ul>

            <h2 className="text-2xl font-semibold text-impulse-dark">Como funciona a locação</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Turno de 4 horas ou diária completa das 8h às 18h</li>
              <li>Escolha o auditório conforme a capacidade e estrutura desejada</li>
              <li>Possibilidade de locação de mais de um auditório para eventos maiores</li>
              <li>Hora extra disponível mediante disponibilidade</li>
            </ul>
          </div>

          {/* Aside – Valores */}
          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-impulse-dark mb-4">Valores de Locação</h3>

            <table className="w-full text-left border-collapse mb-4">
              <thead>
                <tr className="bg-impulse-dark text-white">
                  <th className="px-4 py-2 rounded-tl-2xl">Auditório</th>
                  <th className="px-4 py-2">Capacidade</th>
                  <th className="px-4 py-2 rounded-tr-2xl">Turno (4h)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 font-semibold">Auditório 1</td>
                  <td className="px-4 py-2">Até 40 pessoas</td>
                  <td className="px-4 py-2">R$ 650,00</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 font-semibold">Auditório 2</td>
                  <td className="px-4 py-2">Até 50 pessoas</td>
                  <td className="px-4 py-2">R$ 600,00</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 font-semibold">Auditório 3</td>
                  <td className="px-4 py-2">Até 50 pessoas</td>
                  <td className="px-4 py-2">R$ 650,00</td>
                </tr>
              </tbody>
            </table>

            <div className="p-4 bg-white rounded-xl border border-gray-200 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Diária (10h):</strong> a partir de <strong>R$ 1.000,00</strong><br />
                <strong>Hora extra:</strong> a partir de <strong>R$ 110,00</strong>
              </p>
            </div>

            <a
              href="https://wa.me/5585991413326?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20locação%20dos%20auditórios%20da%20Impulse."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-impulse-dark hover:bg-impulse-blue hover:scale-105 hover:shadow-xl text-white font-semibold px-6 py-3 rounded-full"
            >
              Falar no WhatsApp
            </a>

            <p className="mt-3 text-xs font-light text-center">
              Valores sujeitos à disponibilidade.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
