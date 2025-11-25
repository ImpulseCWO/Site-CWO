import { BrushCleaning, Coffee, Clock4, Hotel, Wifi, User, Lock, Users } from 'lucide-react';

const UsageExamples = () => {
  const examples = [
    {
      icon: Clock4,
      title: 'Flexibilidade de uso',
      description: 'Diárias, pacotes de horas ou mensalidade.'
    },
    {
      icon: Hotel,
      title: 'Espaços privativos e compartilhados',
      description: 'Salas, estações de trabalho e auditórios para todos os tamanhos de equipe.'
    },
    {
      icon: Wifi,
      title: 'Internet de alta velocidade',
      description: 'Conexão rápida e estável para reuniões e videoconferências.'
    },
    {
      icon: User,
      title: 'Recepção profissional',
      description: 'Atendimento personalizado e suporte para receber clientes.'
    },
    {
      icon: BrushCleaning,
      title: 'Limpeza recorrente',
      description: 'Espaços sempre organizados e higienizados.'
    },
    {
      icon: Coffee,
      title: 'Café e conveniências inclusas',
      description: 'Para tornar o dia de trabalho mais agradável.'
    },
    {
      icon: Lock,
      title: 'Segurança e privacidade',
      description: 'Ambientes controlados, fechaduras individuais e monitoramento discreto.'
    },
    {
      icon: Users,
      title: 'Networking e comunidade',
      description: 'Conexão com outros profissionais e oportunidades de parcerias.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-impulse-dark mb-6">
            Benefícios Impulse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os diversos benefícios de fazer parte da Impulse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-impulse-light/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-impulse-light/20 transition-colors duration-300">
                <example.icon className="w-7 h-7 text-impulse-light" />
              </div>
              <h3 className="text-lg font-semibold text-impulse-dark mb-3">
                {example.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageExamples;