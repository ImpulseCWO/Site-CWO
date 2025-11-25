import React from 'react';
import { ShieldCheckIcon, DocumentTextIcon, LockClosedIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const AboutCertificates = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Salas Privativas',
      description: 'Ambientes modernos e reservados, ideais para trabalho individual, reuniões ou atendimentos profissionais.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Domicílio Fiscal',
      description: 'Utilize o endereço da Impulse como sede legal da sua empresa, garantindo credibilidade, segurança e economia.'
    },
    {
      icon: LockClosedIcon,
      title: 'Auditórios',
      description: 'Espaços amplos, preparados para palestras, workshops e eventos corporativos, proporcionando praticidade e profissionalismo em cada detalhe.'
    },
    {
      icon: CheckBadgeIcon,
      title: 'Estações de Trabalho',
      description: 'Opção flexível e acessível para quem busca produtividade em um ambiente compartilhado, com toda a estrutura do coworking.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-impulse-dark mb-6">
            Nossos Serviçoscsdfvf about
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Impulse oferece domicílio fiscal e salas modernas para reuniões, atendimentos e projetos, unindo praticidade, segurança e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-impulse-light/10 rounded-full flex items-center justify-center group-hover:bg-impulse-light/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-impulse-light" />
              </div>
              <h3 className="text-xl font-semibold text-impulse-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertificates;