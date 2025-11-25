import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CallToActionImpulse = () => {
  const phone = '5585998210894';
  const message = 'Olá! Vi o site da Impulse e gostaria de agendar uma visita.';
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 bg-impulse-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para conhecer nossos 
          <span className="text-impulse-light"> espaços?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Descubra ambientes modernos e confortáveis que aumentam a produtividade 
          e proporcionam experiências únicas para você e sua equipe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-impulse-blue hover:bg-impulse-light-blue text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
          >
            Agendar Visita
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="/contato"
            className="border-2 border-white text-white hover:bg-white hover:text-impulse-dark font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Fale com Especialista
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-impulse-light mb-2">Flexível</div>
            <div className="text-gray-300">Salas, estações e pacotes personalizados</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-impulse-light mb-2">Confortável</div>
            <div className="text-gray-300">Ambientes modernos com todo suporte</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-impulse-light mb-2">Prático</div>
            <div className="text-gray-300">Agendamento rápido e atendimento especializado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionImpulse;
