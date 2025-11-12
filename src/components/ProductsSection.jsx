import { useState } from 'react';

/**
 * ProductsSection Component
 * Sección de productos destacados con cards interactivas
 * Cada producto incluye imagen(es), descripción y botón de pedido por WhatsApp
 * Soporta múltiples imágenes con carrusel automático
 */
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Cookies Saludables',
      description: 'Nuestras cookies más elegidas: limón, pasta de maní y pistacho. Sin harinas, sin azúcar.',
      features: ['Sin harinas', 'Sin azúcar', 'Low carb'],
      badge: '¡Más Elegida!',
      image: '/imagenes/cookies.jpg',
    },
    {
      id: 2,
      name: 'Pan de Almendras',
      description: 'El pan más elegido por nuestros clientes. Suave, nutritivo y perfecto para cualquier momento.',
      features: ['Alto en proteína', 'Sin gluten', 'Bajo en carbohidratos'],
      badge: '¡Favorito!',
      image: '/imagenes/PandeAlmendras.jpg',
    },
    {
      id: 3,
      name: 'Pan Integral con Semillas',
      description: 'Pan artesanal con semillas selectas. Ideal para un desayuno o merienda nutritiva.',
      features: ['Integral', 'Con semillas', 'Artesanal'],
      badge: null,
      image: '/imagenes/panIntegral.jpg',
    },
    {
      id: 4,
      name: 'Prepizzas Saludables',
      description: '3 variedades únicas: espinaca, calabaza y remolacha. Perfectas para tus creaciones.',
      features: ['3 variedades', 'Vegetales frescos', 'Sin conservantes'],
      badge: null,
      images: [
        '/imagenes/prepizzaHarinbadeArroz.jpg',
        '/imagenes/prepizzasaludable.jpg',
        '/imagenes/prepizza3.jpg',
      ],
    },
    {
      id: 5,
      name: 'Galletas Saludables',
      description: 'Crujientes y deliciosas. El snack perfecto para cualquier hora del día.',
      features: ['Sin azúcar refinada', 'Ingredientes naturales', 'Hecho con amor'],
      badge: null,
      images: [
        '/imagenes/galletasaludable2.jpg',
        '/imagenes/galletasaludable1.jpg',
        '/imagenes/galletasaludable3.jpg',
      ],
    },
    {
      id: 6,
      name: 'Budines Saludables',
      description: 'Esponjosos y nutritivos. Perfectos para el desayuno o merienda, sin culpa.',
      features: ['Sin azúcar', 'Bajo en carbohidratos', '100% artesanal'],
      badge: null,
       images: [
        '/imagenes/budin2.jpg',
        '/imagenes/budin1.jpg',
        '/imagenes/budin3.jpg',
      ],
    },
    {
      id: 7,
      name: 'Pan de Quinoa',
      description: '¿No consumís harinas? Este pan es todo lo que está bien. Alto en proteína, rico en fibra y libre de harinas. La opción perfecta para mañanas llenas de energía.',
      features: ['Sin harinas', 'Alto en proteína', 'Rico en fibra', 'Omega 6'],
      badge: null,

    images: [
        '/imagenes/panquinoa3.jpg',
        '/imagenes/panquinoa2.jpg',
        '/imagenes/panquinoa1.jpg',
      ],
    },
    {
      id: 8,
      name: 'Pan Dulce Navideño',
      description: 'Especial para las fiestas. Con harina de almendras, nueces, fruta abrillantada, chocolate al 70% y azúcar mascabo. Perfecto para compartir en tu mesa navideña.',
      features: ['Harina de almendras', 'Chocolate 70%', 'Azúcar mascabo', 'Edición especial'],
      badge: '🎄 Especial Fiestas',
      image: '/imagenes/pandulce.PNG',
      
    },
    {
      id: 9,
      name: 'Budín Navideño',
      description: 'La versión en budín de nuestro clásico navideño. Con harina de almendras, nueces, fruta abrillantada, chocolate al 70% y azúcar mascabo. Ideal para disfrutar rico y saludable.',
      features: ['Harina de almendras', 'Ingredientes premium', 'Azúcar mascabo', 'Edición especial'],
      badge: '🎄 Especial Fiestas',
      image: '/imagenes/budinnavideño.jpg',
    },
    {
      id: 10,
      name: 'Garrapiñadas',
      description: 'Nueces caramelizadas con azúcar mascabo. El snack perfecto para compartir en las fiestas o disfrutar en cualquier momento.',
      features: ['Nueces premium', 'Azúcar mascabo', 'Artesanales', 'Irresistibles'],
      badge: '🎄 Especial Fiestas',
      image: '/imagenes/garrapiñadas.jpg',
    },
    {
      id: 11,
      name: 'Grisines de Almendras',
      description: 'Nuevos grisines a base de harina de almendras. Livianos, crocantes y saludables. El acompañamiento perfecto para tus picadas.',
      features: ['Harina de almendras', 'Crocantes', 'Livianos', 'Sin harinas'],
      badge: '✨ Novedad',
      images: [
        '/imagenes/grisines1.jpg',
        '/imagenes/grisines2.jpg',
        
      ],
    },
    {
      id: 12,
      name: 'Cañoncitos de Pastelera',
      description: 'Nuevos cañoncitos rellenos con pastelera casera y nuez. Una explosión de sabor y textura que te va a encantar.',
      features: ['Pastelera casera', 'Con nuez', 'Crocantes', 'Artesanales'],
      badge: '✨ Novedad',
      images: [
        '/imagenes/cañoncitos1.jpg',
        '/imagenes/cañoncitos2.jpg',
        
      ],
    },
    {
      id: 13,
      name: 'Medialunas Low Carb',
      description: 'Disfrutá de nuestras medialunas Low Carb, perfectas para cualquier momento del día. Ahora podés elegir dulces o saladas.',
      features: ['Low carb', '2 variedades', 'Dulces o saladas', 'Sin culpa'],
      badge: null,
      images: [
        '/imagenes/medialunas2.jpg',
        '/imagenes/medialunas1.jpg',
        '/imagenes/medialunas3.jpg',
      ],
    },
  ];

  const handleWhatsAppOrder = (productName) => {
    const message = encodeURIComponent(`Hola! Me interesa el producto: ${productName}`);
    window.open(`https://wa.link/q9b7aj?text=${message}`, '_blank');
  };

  // Componente interno para manejar el carrusel de imágenes
  const ProductImageCarousel = ({ images, name }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Si solo hay una imagen o ninguna, usar el componente simple
    if (!images || images.length === 0) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-green-medium/20 to-primary-green/20 flex items-center justify-center">
          <div className="text-center p-6">
            <svg
              className="w-20 h-20 mx-auto text-primary-green opacity-40 group-hover:opacity-60 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-primary-dark text-xs font-medium mt-2 opacity-50">
              [Imagen del producto]
            </p>
          </div>
        </div>
      );
    }

    if (images.length === 1) {
      return (
        <img 
          src={images[0]} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      );
    }

    // Carrusel para múltiples imágenes
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <>
        <img 
          src={images[currentImageIndex]} 
          alt={`${name} - imagen ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Controles del carrusel */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Imagen anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Imagen siguiente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores de puntos */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="products" className="py-20 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark font-quicksand mb-4">
            Productos que <span className="text-primary-green">Transforman</span>
          </h2>
          <p className="text-lg text-gray-700">
            Cada producto está elaborado con dedicación, ingredientes de calidad y mucho amor. 
            Opciones sin harinas, sin azúcar y low carb para tu bienestar.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Imagen(es) del producto */}
              <div className="relative h-64 overflow-hidden">
                {/* Badge si es destacado */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-primary-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
                    {product.badge}
                  </div>
                )}
                
                {/* Carrusel de imágenes o imagen única */}
                <ProductImageCarousel 
                  images={product.images || (product.image ? [product.image] : null)} 
                  name={product.name}
                />
                
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-3 font-quicksand">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features/Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-green-medium/10 text-green-dark px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Botón de pedido */}
                <button
                  onClick={() => handleWhatsAppOrder(product.name)}
                  className="w-full bg-primary-green text-white py-3 rounded-full font-semibold hover:bg-green-dark transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
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
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿Buscas algo especial? Contáctanos y te ayudamos a encontrar el producto perfecto para ti.
          </p>
          <button
            onClick={() => window.open('https://wa.link/q9b7aj', '_blank')}
            className="bg-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Ver Catálogo Completo
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
