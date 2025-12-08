import { Link } from 'react-router-dom';
import Workstation1 from '../assets/images/Estacoes.png';


export default function ESTTB() {
  const estacoes = [
    {
      image: Workstation1,
      title: 'Estação Individual',
      subtitle: 'Foco total em um espaço exclusivo',
      description: 'Ideal para autônomos e freelancers que precisam de concentração e conforto.',
      features: ['Mesa exclusiva', 'Cadeira ergonômica', 'Iluminação adequada', 'Internet de alta velocidade'],
    },

  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-impulse-dark to-impulse-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Estações de Trabalho</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
            Estações de trabalho individuais em ambiente compartilhado, ideais para autônomos, freelancers, startups e empresas que buscam flexibilidade sem abrir mão de uma estrutura completa. Trabalhe com foco e conforto, aproveitando a sinergia de um coworking.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">← Voltar para o início</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-impulse-dark">O que são estações de trabalho?</h2>
            <p>As estações de trabalho são espaços individuais ou compartilhados, totalmente equipados, pensados para profissionais que precisam de um ambiente produtivo fora do escritório tradicional. Cada estação oferece mesa, cadeira ergonômica, iluminação adequada e internet de alta velocidade, garantindo conforto e foco.
Elas são ideais para freelancers, autônomos ou pequenas equipes que buscam flexibilidade e praticidade no dia a dia, com toda a infraestrutura necessária para trabalhar com eficiência.</p>

            <h2 className="text-2xl font-semibold text-impulse-dark">Conheça nossas estações</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              {estacoes.map((estacao, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-impulse-light transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={estacao.image}
                    alt={estacao.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-impulse-dark mb-2">{estacao.title}</h3>
                    <p className="text-impulse-dark font-medium mb-4">{estacao.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{estacao.description}</p>

                    <ul className="space-y-3 mb-4 text-left">
                      {estacao.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-impulse-light rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold text-impulse-dark">Como funciona?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="text-impulse-dark font-bold">Uso avulso:</span>  diária para quem precisa de praticidade imediata.</li>
              <li><span className="text-impulse-dark font-bold">Plano mensal fixo:</span> estação reservada e exclusiva para uso contínuo.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-impulse-dark">Benefícios</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="text-impulse-dark font-bold">Flexibilidade:</span> contrate apenas pelo tempo que precisar.</li>
              <li><span className="text-impulse-dark font-bold">Custo reduzido:</span> economize em aluguel, contas e manutenção.</li>
              <li><span className="text-impulse-dark font-bold">Profissionalismo:</span> recepção preparada para receber seus clientes.</li>
            </ul>

            {/* Seção de cards de estações de trabalho */}
            
          </div>

          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-impulse-dark">Valores & Planos</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li><span className="text-impulse-dark font-bold">Mensal:</span> 600,00</li>
              <li><span className="text-impulse-dark font-bold">Diária:</span> Indefinido</li>
            </ul>
            
            <a
              href="https://wa.me/5585991413326?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20esta%C3%A7%C3%B5es%20de%20trabalho"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-block bg-impulse-dark hover:bg-impulse-blue hover:scale-105 hover:shadow-xl text-white font-semibold px-6 py-3 rounded-full"
            >
              Falar no WhatsApp
            </a>
            <p className='mt-3 text-xs font-light'>Nenhuma taxa extra.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
