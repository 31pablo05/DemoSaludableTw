/**
 * TestimonialsSection Component
 * Sección de testimonios de clientes con diseño cálido y cercano
 * Muestra experiencias reales de personas satisfechas
 */
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Trelew, Chubut',
      text: 'Los productos de Saludable TW cambiaron mi forma de alimentarme. Las cookies de limón son mis favoritas, ¡y mis hijos las aman!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Fernández',
      location: 'Trelew, Chubut',
      text: 'El pan de almendras es increíble. Nunca pensé que algo tan saludable podría ser tan delicioso. Lo recomiendo 100%.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Laura Pérez',
      location: 'Rawson, Chubut',
      text: 'Excelente calidad y atención. Se nota el amor con el que preparan cada producto. Las prepizzas son perfectas para mi dieta.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Javier Martínez',
      location: 'Trelew, Chubut',
      text: 'Compro todas las semanas. Los productos son frescos, naturales y llegan siempre perfectos. ¡Un emprendimiento que vale la pena apoyar!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark font-quicksand mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-primary-green">clientes</span>
          </h2>
          <p className="text-lg text-gray-700">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Conoce sus experiencias con Saludable TW.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icono de comillas */}
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-primary-green/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Texto del testimonio */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Rating de estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-primary-green"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Información del cliente */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para dejar testimonio */}
        <div className="text-center mt-16">
          <div className="bg-primary-green/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary-green/10">
            <h3 className="text-2xl font-bold text-primary-dark mb-3 font-quicksand">
              ¿Ya probaste nuestros productos?
            </h3>
            <p className="text-gray-600 mb-6">
              Nos encantaría conocer tu experiencia. Comparte tu opinión con nosotros.
            </p>
            <button
              onClick={() => window.open('https://wa.link/q9b7aj', '_blank')}
              className="bg-primary-green text-white px-8 py-3 rounded-full font-semibold hover:bg-green-dark transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              Contáctanos
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
