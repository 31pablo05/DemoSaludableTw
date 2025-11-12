# 🌱 Saludable TW - Landing Page

Landing page moderna y atractiva para **Saludable TW**, emprendimiento de productos artesanales y saludables ubicado en Trelew, Chubut, Argentina.

## 🎨 Características

- **Diseño Moderno y Responsivo**: Adaptado a todos los dispositivos (mobile-first)
- **Paleta de Colores Personalizada**: Tonos verdes y beige que transmiten naturalidad y calidez
- **Animaciones Suaves**: Transiciones y efectos que mejoran la experiencia de usuario
- **Scroll Suave**: Navegación interna fluida entre secciones
- **Integración con WhatsApp**: Botón flotante y múltiples CTAs para facilitar el contacto
- **Componentes Modulares**: Arquitectura limpia y escalable con React

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server ultra rápido
- **Tailwind CSS** - Framework de CSS utility-first
- **Google Fonts** - Poppins & Quicksand

## 🎨 Paleta de Colores

```css
--primary-dark: #00332e    /* Verde oscuro principal */
--primary-green: #009345   /* Verde principal */
--beige: #f1e8d9           /* Beige claro */
--green-medium: #729072    /* Verde grisáceo */
--green-dark: #106347      /* Verde intenso */
```

## 📁 Estructura de Componentes

```
src/
├── components/
│   ├── Navbar.jsx              # Navegación principal
│   ├── HeroSection.jsx         # Sección hero con CTA
│   ├── AboutSection.jsx        # Historia del emprendimiento
│   ├── ProductsSection.jsx     # Catálogo de productos
│   ├── GallerySection.jsx      # Carrusel de imágenes
│   ├── TestimonialsSection.jsx # Testimonios de clientes
│   ├── ContactSection.jsx      # Información de contacto
│   ├── Footer.jsx              # Pie de página
│   └── WhatsAppButton.jsx      # Botón flotante de WhatsApp
├── App.jsx                     # Componente principal
├── index.css                   # Estilos globales
└── main.jsx                    # Punto de entrada
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 3. Compilar para producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

### 4. Preview de la versión de producción

```bash
npm run preview
```

## 🌐 Despliegue en Vercel

### Método 1: Desde GitHub

1. Subir el proyecto a GitHub
2. Ir a [Vercel](https://vercel.com)
3. Importar el repositorio
4. Vercel detectará automáticamente la configuración de Vite
5. ¡Deploy!

### Método 2: CLI de Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Personalización

### Cambiar imágenes y videos

Los componentes tienen placeholders (cajas con iconos) donde deben ir las imágenes y videos reales. Para reemplazarlos:

1. Coloca tus imágenes en la carpeta `src/assets/`
2. Importa las imágenes en el componente correspondiente
3. Reemplaza el `<div>` placeholder con un `<img>` tag

Ejemplo en `ProductsSection.jsx`:

```jsx
// Antes (placeholder)
<div className="...">
  <svg>...</svg>
</div>

// Después (con imagen real)
import cookieImage from '../assets/cookies.jpg';

<img 
  src={cookieImage} 
  alt="Cookies Saludables"
  className="w-full h-full object-cover"
/>
```

### Modificar colores

Edita `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'primary-dark': '#TU_COLOR',
      'primary-green': '#TU_COLOR',
      // ...
    }
  }
}
```

### Cambiar tipografías

Edita `tailwind.config.js` y `src/index.css`:

```js
// tailwind.config.js
fontFamily: {
  'sans': ['TuFuente', 'system-ui'],
}
```

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@...');
```

## 📱 Información de Contacto

- **Dirección**: Remedios de Escalada 1465, Trelew 9100, Chubut
- **WhatsApp**: [Link de contacto](https://wa.link/q9b7aj)
- **Instagram**: [@saludabletw](https://instagram.com/saludabletw)
- **Horarios**: 
  - Lunes a Viernes: 10:00 - 20:00hs
  - Sábados: 10:00 - 15:00hs

## ✨ Características Destacadas

### SEO Optimizado
- Meta tags apropiados
- Estructura semántica HTML5
- URLs amigables con scroll interno

### Performance
- Lazy loading de componentes
- Imágenes optimizadas
- Code splitting automático con Vite
- CSS purge automático en producción

### Accesibilidad
- Navegación por teclado
- Labels y aria-labels apropiados
- Contraste de colores WCAG AA
- Focus states visibles

### Mobile-First
- Diseño responsive
- Touch-friendly buttons
- Menú hamburguesa en mobile
- Optimizado para pantallas pequeñas

## 🔧 Scripts Disponibles

```json
{
  "dev": "Inicia servidor de desarrollo",
  "build": "Compila para producción",
  "preview": "Preview de build de producción",
  "lint": "Ejecuta ESLint"
}
```

## 📄 Licencia

Proyecto desarrollado para **Saludable TW** - Todos los derechos reservados © 2024

---

**#VivirSaludable** - Porque vivir saludable no es una moda, es un estilo de vida 💚

Hecho con ❤️ en Trelew, Chubut
