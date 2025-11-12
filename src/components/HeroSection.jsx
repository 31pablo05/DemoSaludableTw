import { useEffect, useState } from 'react';

/**
 * HeroSection Component
 * Sección principal con mensaje impactante y call-to-action
 * Incluye animaciones fade-in y slide
 */
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/q9b7aj', '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige via-beige to-green-medium/10 pt-20"
    >
      {/* Background Pattern - Optional decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDMzMmUiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4IDAgOS45NCA4LjA2IDE4IDE4IDE4em0tMTggMGMwIDkuOTQgOC4wNiAxOCAxOCAxOCAwLTkuOTQtOC4wNi0xOC0xOC0xOHptNTQgMGMwLTkuOTQtOC4wNi0xOC0xOC0xOCAwIDkuOTQgOC4wNiAxOCAxOCAxOHptLTE4IDI0YzAtOS45NC04LjA2LTE4LTE4LTE4IDAgOS45NCA4LjA2IDE4IDE4IDE4eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading with Animation */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-dark mb-6 font-quicksand leading-tight">
              Productos Reales
              <br />y <span className="text-primary-green">Nutritivos</span>
            </h2>
          </div>

          {/* Subtitle with delayed animation */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-green-dark mb-4 font-light">
              Opciones sin harinas, sin azúcar y low carb
            </p>
            <p className="text-lg sm:text-xl text-green-medium mb-10 max-w-2xl mx-auto">
              Elaborados con amor, 100% artesanales, sin aditivos ni conservantes.
              Te acompañamos en tu estilo de vida saludable.
            </p>
          </div>

          {/* CTA Buttons with delayed animation */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCTAClick}
                className="bg-primary-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Ver Catálogo
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Hacer Pedido
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`mt-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex justify-center">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-primary-green"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
