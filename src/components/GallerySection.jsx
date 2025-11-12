import { useState } from 'react';

/**
 * GallerySection Component
 * Carrusel de imágenes y videos mostrando el proceso y productos
 * Diseño visual impactante con navegación intuitiva
 */
const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos de la galería (imágenes y videos placeholder)
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Proceso de Elaboración',
      description: 'Detrás de escena: elaborando con amor cada producto',
    },
    {
      id: 2,
      type: 'image',
      title: 'Ingredientes Frescos',
      description: 'Seleccionamos los mejores ingredientes naturales',
    },
    {
      id: 3,
      type: 'video',
      title: 'Cocina Artesanal',
      description: 'Proceso artesanal de principio a fin',
    },
    {
      id: 4,
      type: 'image',
      title: 'Productos Terminados',
      description: 'El resultado de nuestro trabajo con dedicación',
    },
    {
      id: 5,
      type: 'image',
      title: 'Empaque con Amor',
      description: 'Cada detalle cuenta en nuestros productos',
    },
    {
      id: 6,
      type: 'image',
      title: 'Felicidad Compartida',
      description: 'La sonrisa de nuestros clientes es nuestra recompensa',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Galería
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark font-quicksand mb-4">
            Nuestro <span className="text-primary-green">Proceso</span>
          </h2>
          <p className="text-lg text-gray-700">
            Cada imagen cuenta una historia. Conoce el detrás de escena de nuestros productos artesanales.
          </p>
        </div>

        {/* Carrusel principal */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Contenedor del slide */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Placeholder para imagen/video */}
                  <div className="w-full h-full bg-gradient-to-br from-green-medium/20 to-primary-green/20 flex flex-col items-center justify-center p-8">
                    {item.type === 'video' ? (
                      <svg
                        className="w-32 h-32 text-primary-green opacity-40 mb-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-32 h-32 text-primary-green opacity-40 mb-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    <h3 className="text-2xl font-bold text-primary-dark mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center max-w-md">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-4">
                      [{item.type === 'video' ? 'Video' : 'Imagen'} del producto o proceso]
                    </p>
                  </div>

                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Información del slide */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg opacity-90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicadores de puntos */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-primary-green'
                      : 'w-3 h-3 bg-green-medium/30 hover:bg-green-medium/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid de thumbnails (opcional) */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-primary-green scale-105 shadow-lg'
                    : 'hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-green-medium/20 to-primary-green/20 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <svg
                      className="w-8 h-8 text-primary-green opacity-60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-8 text-primary-green opacity-60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
