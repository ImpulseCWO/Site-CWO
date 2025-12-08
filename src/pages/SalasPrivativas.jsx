import { Link } from 'react-router-dom';
import Platinum from '../assets/images/Platinum.png';
import Golden from '../assets/images/Golden.png';
import Premium from '../assets/images/Premium.png';
import Executive from '../assets/images/Executive.png';


export default function ECPF() {
  const salas = [
    {
      image: Platinum,
      title: 'Sala Platinum',
      subtitle: 'Espaço amplo para grandes equipes',
      description: 'Ideal para treinamentos, reuniões maiores e apresentações com todo o suporte profissional.',
      features: ['Até 12 pessoas', 'TV e lousa disponíveis', 'Lousa de vidro', 'Suporte completo'],
    },
    {
      image: Golden,
      title: 'Sala Golden',
      subtitle: 'Conforto e acolhimento para atendimentos',
      description: 'Ambiente sofisticado, perfeito para atendimentos humanizados, psicólogos e consultorias.',
      features: ['Poltrona confortável', 'Mesa de apoio', 'Ambiente silencioso', 'Sofá para atendimento'],
    },
    {
      image: Premium,
      title: 'Sala Premium',
      subtitle: 'Praticidade para equipes e reuniões',
      description: 'Sala versátil para até 4 pessoas, equipada para encontros ágeis e produtivos.',
      features: ['TV HDMI', 'Lousa de vidro', 'Mesa ampla', 'Ambiente profissional'],
    },
    {
      image: Executive,
      title: 'Sala Executive',
      subtitle: 'Compacta e eficiente para o dia a dia',
      description: 'Espaço ideal para até 3 pessoas, com iluminação natural e privacidade.',
      features: ['Ambiente iluminado', 'Wi-Fi rápido', 'Mesa e cadeiras', 'Lousa de vidro'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-impulse-dark to-impulse-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Salas Privativas</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
            Pensadas para quem busca foco, profissionalismo e conforto em um só lugar. Cada espaço é exclusivo, pronto para atendimentos, reuniões e trabalhos diários com toda a infraestrutura que você precisa.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">← Voltar para o início</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-impulse-dark">Conheça nossos espaços</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {salas.map((sala, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-impulse-light transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={sala.image}
                    alt={sala.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-impulse-dark mb-2">{sala.title}</h3>
                    <p className="text-impulse-dark font-medium mb-4">{sala.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{sala.description}</p>

                    <ul className="space-y-3 mb-4 text-left">
                      {sala.features.map((feature, idx) => (
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

            <h2 className="text-2xl font-semibold text-impulse-dark">Benefícios Impulse</h2>
            <p className="text-gray-700">
              <li> Privacidade e conforto </li>
              <li> Internet de alta velocidade </li>
              <li> Café e água inclusos </li>
              <li> Limpeza recorrente </li>
              <li> Recepção preparada para receber clientes </li>
              <li> Acesso a endereço fiscal e gestão de correspondência </li>
            </p>

            <h2 className="text-2xl font-semibold text-impulse-dark">Como funciona</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Pacote de Horas: ideal para quem precisa de flexibilidade.</li>
              <li>Diária: para quem precisa do espaço o dia inteiro, sem preocupações</li>
              <li>Mensalidade: para quem quer um ambiente fixo, garantindo exclusividade e benefícios adicionais, como endereço fiscal e gestão de correspondência.</li>
            </ul>
          </div>

          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
  <h3 className="text-lg font-semibold text-impulse-dark mb-4">Valores & Planos</h3>
  <h3 className="text-md font-semibold text-impulse-dark mb-2">Pacote de Horas</h3>
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="bg-impulse-dark text-white">
        <th className="px-4 py-2 rounded-tl-2xl">Sala</th>
        <th className="px-4 py-2">1 Hora</th>
        <th className="px-4 py-2">4 Horas</th>
        <th className="px-4 py-2 rounded-tr-2xl">8 Horas</th>
      </tr>
    </thead>
    <tbody>
      <tr className="odd:bg-white even:bg-gray-100">
        <td className="px-4 py-2 font-semibold">Platinum</td>
        <td className="px-4 py-2"> 65,00</td>
        <td className="px-4 py-2"> 210,00</td>
        <td className="px-4 py-2"> 390,00</td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-100">
        <td className="px-4 py-2 font-semibold">Golden</td>
        <td className="px-4 py-2"> 55,00</td>
        <td className="px-4 py-2"> 180,00</td>
        <td className="px-4 py-2"> 330,00</td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-100">
        <td className="px-4 py-2 font-semibold">Premium</td>
        <td className="px-4 py-2"> 50,00</td>
        <td className="px-4 py-2"> 160,00</td>
        <td className="px-4 py-2"> 300,00</td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-100">
        <td className="px-4 py-2 font-semibold">Executive</td>
        <td className="px-4 py-2"> 38,00</td>
        <td className="px-4 py-2"> 130,00</td>
        <td className="px-4 py-2"> 230,00</td>
      </tr>
    </tbody>
  </table>
  <h3 className="text-md font-semibold text-impulse-dark mt-5">Mensalidade: consultar disponibilidade</h3>
  
  <a
    href="https://wa.me/5585991413326?text=Olá%2C%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20salas%20privativas."
    target="_blank"
    rel="noopener noreferrer"
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
