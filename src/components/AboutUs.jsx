

const AboutUs = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-impulse-dark mb-6">
          Sobre Nós
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          A <span className="text-impulse-blue font-semibold">Impulse corwork&Office </span> 
 (CNPJ 21.920.948/0001-35) foi fundada 2015 e tem sede em Fortaleza, Ceará.
Nossa atuação é focada em oferecer espaços modernos e soluções administrativas que facilitam a rotina de empreendedores.
 Aqui você encontra domicílio fiscal com segurança e credibilidade, além de salas privativas, ideais para reuniões, 
 atendimentos e projetos. Tudo em um ambiente que une profissionalismo, conforto e praticidade. </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-impulse-dark mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              
Fornecer um ambiente de trabalho inovador, flexível e colaborativo que impulsione o crescimento dos clientes.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-impulse-dark mb-4">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser referência em coworking e serviços de escritório no Brasil, com presença nacional, inovação e excelência.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-impulse-dark mb-4">Nossos Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              Inovação, flexibilidade, colaboração, comunidade e excelência: valores que guiam nossas soluções e fortalecem o sucesso dos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
