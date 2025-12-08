import { PhotoIcon } from '@heroicons/react/24/outline';
import Executive from '../assets/images/Executive.png';
const GalleryImpulse = () => {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-impulse-dark mb-6">
              Nossos Espaços
            </h2>
          </div>
          <p className="text-xl text-impulse-dark/90 max-w-2xl mx-auto leading-relaxed">
            Explore nossos ambientes projetados para produtividade, conforto e profissionalismo.
          </p>
        </div>

        {/* Cards mais alinhados, proporcionais e consistentes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* AUDITÓRIO 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden">
              <img
                src="/assets/images/AUDITORIO IMPULSE.jpg"
                alt="Auditório Impulse 1"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* AUDITÓRIO 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden">
              <img
                src="/assets/images/AUDITORIO IMPULSE 2.jpg"
                alt="Auditório Impulse 2"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* ILHA 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden">
              <img
                src="/assets/images/ILHA 2.jpg"
                alt="Ilha 2"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* FOTO HEIC */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden">
              <img
                src="/assets/images/IMG_7814.heic"
                alt="Espaço Impulse Foto HEIC"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* PLATINUM */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden bg-white flex items-center justify-center p-6">
              <img
                src="/assets/images/Platinum.png"
                alt="Sala Platinum"
                className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* PREMIUM */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden bg-white flex items-center justify-center p-6">
              <img
                src="/assets/images/Premium.png"
                alt="Sala Premium"
                className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* GOLDEN */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden bg-white flex items-center justify-center p-6">
              <img
                src="/assets/images/Golden.png"
                alt="Sala Golden"
                className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* EXECUTIVE */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-72 w-full overflow-hidden bg-white flex items-center justify-center p-6">
              <img
                src= {Executive}
                alt="Sala Executive"
                className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryImpulse;
