import { PhotoIcon } from '@heroicons/react/24/outline';

const GalleryImpulse = () => {
  // Substitua pelos links reais das imagens da Impulse
  const images = [
    '/assets/images/Impulse1.jpg',
    '/assets/images/Impulse2.jpg',
    '/assets/images/Impulse3.jpg',
    '/assets/images/Impulse4.jpg',
    '/assets/images/Impulse5.jpg',
    '/assets/images/Impulse6.jpg'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            
            <h2 className="text-4xl md:text-5xl font-bold text-impulse-dark mb-6">
            Nosso Espaços
          </h2>
          </div>
          <p className="text-xl text-impulse-dark/90 max-w-2xl mx-auto leading-relaxed">
            Explore nossos espaços e ambientes projetados para produtividade, conforto e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <img
                src={src}
                alt={`Espaço Impulse ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImpulse;
