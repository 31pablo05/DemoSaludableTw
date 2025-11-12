/**
 * AboutSection Component
 * Sección "Sobre Nosotros" con la historia del emprendimiento
 * Diseño cálido y artesanal que transmite cercanía
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video del emprendimiento */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Video real */}
              <video 
                className="w-full h-full object-cover aspect-square"
                controls
                loop 
                playsInline
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Badge decorativo */}
            <div className="inline-block">
              <span className="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-semibold">
                Nuestra Historia
              </span>
            </div>

            {/* Título */}
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark font-quicksand leading-tight">
              Un sueño que se convirtió en{' '}
              <span className="text-primary-green">realidad</span>
            </h2>

            {/* Historia principal */}
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Este proyecto nació en casa, entre <strong className="text-primary-dark">recetas, aromas</strong> y ganas de compartir algo distinto. 
                Hoy se convierte en un espacio donde el amor por la cocina, lo casero y lo saludable se encuentran.
              </p>
              
              <p>
                Elaboramos nuestros productos con <strong className="text-primary-green">verduras frescas</strong>, 
                sin aditivos ni conservantes. Todo es 100% artesanal, hecho con pasión y dedicación en cada preparación.
              </p>

              <p>
                Te acompañamos en ese proceso ofreciéndote <strong className="text-green-dark">productos sanos</strong> que 
                te hagan bien al cuerpo y al alma, porque vivir saludable no es una moda, es un estilo de vida.
              </p>
            </div>

            {/* Valores / Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">100% Artesanal</h4>
                  <p className="text-sm text-gray-600">Hecho con amor</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">Sin Conservantes</h4>
                  <p className="text-sm text-gray-600">100% natural</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">Verduras Frescas</h4>
                  <p className="text-sm text-gray-600">Ingredientes seleccionados</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">Low Carb</h4>
                  <p className="text-sm text-gray-600">Opciones saludables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
