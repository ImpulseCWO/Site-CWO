import Espaco from '../assets/images/recepcao.png';

const Hero = () => {
  const phone = '5585998210894';
  const message = 'Olá! Vim do site e gostaria de solicitar meu certificado digital.';
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${Espaco})`, // agora usando o import
      }}
    >
      {/* Overlay para leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-br from-impulse-dark/80 via-impulse-dark/70 to-impulse-blue-dark/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Descubra seu espaço de trabalho
          <br />
          <span className="text-impulse-light">moderno em Fortaleza</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow">
          Conforto, praticidade e profissionalismo para você focar no que importa.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-impulse-blue hover:bg-impulse-light-blue text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
        >
          Agende sua visita
        </a>
      </div>
    </section>
  );
};

export default Hero;
