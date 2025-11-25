// import React from 'react';
import { UserIcon, BuildingOfficeIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CertificateTypes = () => {
  const certificates = [
    {
      icon: UserIcon,
      title: 'Salas Privativas',
      subtitle: 'Ambientes exclusivos para foco e produtividade',
      description: 'Ideais para trabalho em grupo, atendimentos e reuniões, garantindo foco e conforto.',
      features: ['Espaço exclusivo e silencioso', 'Mesa e cadeira ergonômica', 'Wi-Fi de alta velocidade', 'Limpeza e manutenção inclusas']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Domicílio Fiscal',
      subtitle: 'Endereço legal e seguro para sua empresa',
      description: 'Utilize o endereço da Impulse como sede legal da sua empresa, garantindo credibilidade, segurança e economia.',
      features: ['Endereço legalizado', 'Privacidade e segurança', 'Gestão de correspondência', 'Suporte especializado']
    },
    {
      icon: DocumentIcon,
      title: 'Auditórios',
      subtitle: 'Espaços amplos para eventos corporativos',
      description: 'Auditórios preparados para palestras, workshops e treinamentos, com infraestrutura para eventos profissionais.',
      features: ['Espaço amplo', 'Equipamentos de áudio e vídeo', 'Conforto e praticidade', 'Suporte dedicado']
    },
    {
      icon: DocumentIcon,
      title: 'Estações de Trabalho',
      subtitle: 'Flexibilidade e produtividade em ambiente compartilhado',
      description: 'Estações individuais em coworking moderno, ideais para quem busca praticidade, networking e foco.',
      features: ['Ambiente compartilhado', 'Wi-Fi de alta velocidade', 'Custo acessível', 'Estrutura completa']
    },
    // {
    //   icon: DocumentIcon,
    //   title: 'Armários Privativos',
    //   subtitle: 'Guarde seus pertences com segurança e praticidade.',
    //   description: 'Espaço exclusivo para armazenar objetos pessoais ou materiais de trabalho com total comodidade dentro da Impulse.',
    //   features: ['Segurança garantida', 'Acesso exclusivo', 'Praticidade diária', 'Organização do espaço']
    // }
  ];

  
  const routes = ['/SalasPrivativas', '/DomicilioFiscal', '/Auditorios', '/EstacoesDeTrabalho', '/ArmariosPrivativos'];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-impulse-dark mb-6">
            Conheça Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             A Impulse oferece domicílio fiscal e salas modernas para reuniões, atendimentos e projetos, unindo praticidade, segurança e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-impulse-light transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-impulse-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="pt-8 text-center">
                <h3 className="text-2xl font-bold text-impulse-dark mb-2">
                  {cert.title}
                </h3>
                <p className="text-impulse-dark font-medium mb-4">
                  {cert.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-impulse-light rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={routes[index]}
                  className="block w-full text-center bg-impulse-dark hover:bg-impulse-light text-white font-semibold py-3 rounded-xl transition-colors duration-300"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateTypes;