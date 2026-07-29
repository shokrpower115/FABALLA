# Análisis del proyecto Faballa Eventos

## Resumen general
Este proyecto es un sitio web desarrollado con Next.js para promocionar y organizar un servicio de taquiza para eventos. La estructura actual está basada en el sistema de rutas de App Router y, en su mayoría, presenta contenido estático con páginas base listas para expandirse.

## Estructura principal del proyecto

- [package.json](package.json): define las dependencias del proyecto, así como los scripts de desarrollo, build y lint.
- [app/layout.tsx](app/layout.tsx): es el layout principal de la aplicación. Aquí se define el contenido global, el metadata del sitio y se incluye la barra de navegación.
- [app/globals.css](app/globals.css): contiene los estilos globales de la aplicación.
- [app/components/navbar.tsx](app/components/navbar.tsx): define la barra superior con enlaces a las secciones principales.

## Rutas y páginas

### Inicio
- [app/page.tsx](app/page.tsx)
- Funcionalidad actual:
  - Hero principal con mensaje promocional.
  - Sección “Quién soy”.
  - Vista previa de paquetes.
  - Botón de llamada a la acción para reservar.

### Paquetes
- [app/paquetes/page.tsx](app/paquetes/page.tsx)
- Funcionalidad actual:
  - Página de destino para mostrar los paquetes disponibles.
  - Por el momento está como contenido base o placeholder.

### Galería
- [app/galeria/page.tsx](app/galeria/page.tsx)
- Funcionalidad actual:
  - Página preparada para mostrar imágenes o ejemplos de eventos.
  - Actualmente es una página simple sin contenido visual real.

### Reservar
- [app/reservar/page.tsx](app/reservar/page.tsx)
- Funcionalidad actual:
  - Página destinada para la reserva de fechas o cotización.
  - Todavía no contiene formulario ni lógica funcional.

### Admin
- [app/admin/page.tsx](app/admin/page.tsx)
- Funcionalidad actual:
  - Página de administración o panel base.
  - En este momento solo muestra un encabezado simple.

## Archivos de lógica y datos

### Colores
- [app/lib/colores.tsx](app/lib/colores.tsx)
- Función:
  - Centraliza los colores del tema visual del sitio.
  - Se usa para mantener consistencia en la identidad visual.

### Paquetes y precios
- [app/lib/paquetes.tsx](app/lib/paquetes.tsx)
- Función:
  - Contiene la estructura de datos principal para los paquetes del negocio.
  - Incluye información como:
    - nombre del paquete
    - descripción
    - emoji representativo
    - elementos incluidos
    - notas adicionales
    - precios por cantidad de tacos
    - extras como quesadillas o pellizcadas
    - combos con hot dogs

## Mapa de funcionalidades por sección

- Navegación general: [app/components/navbar.tsx](app/components/navbar.tsx)
- Presentación de marca y propuesta de valor: [app/page.tsx](app/page.tsx)
- Información del negocio y experiencia: [app/page.tsx](app/page.tsx)
- Catálogo o presentación de paquetes: [app/lib/paquetes.tsx](app/lib/paquetes.tsx) y [app/page.tsx](app/page.tsx)
- Página de contacto o reserva: [app/reservar/page.tsx](app/reservar/page.tsx)
- Gestión visual del sitio: [app/globals.css](app/globals.css) y [app/lib/colores.tsx](app/lib/colores.tsx)

## Observaciones clave

- El proyecto está bien organizado para un landing page o sitio informativo.
- La lógica de negocio más importante ya está modelada en [app/lib/paquetes.tsx](app/lib/paquetes.tsx).
- Actualmente no se observan integraciones con backend, formularios reales, base de datos o autenticación.
- Las páginas de paquetes, galería, reservar y admin parecen estar planteadas como secciones futuras que aún necesitan desarrollo.

## Resumen rápido
Si buscas ubicar una funcionalidad específica, lo más recomendable es revisar:

- [app/page.tsx](app/page.tsx) para la portada y contenido inicial
- [app/components/navbar.tsx](app/components/navbar.tsx) para la navegación
- [app/lib/paquetes.tsx](app/lib/paquetes.tsx) para todo lo relacionado con precios y paquetes
- [app/reservar/page.tsx](app/reservar/page.tsx) para la sección de reservas futura
