# SONIX AUDIO

## Descripción del proyecto

SONIX AUDIO es una aplicación web SPA desarrollada con React y Vite. Está enfocada en una empresa de producción de eventos y servicios profesionales de sonido, iluminación y equipamiento audiovisual.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router DOM

## Páginas del proyecto

1. **Inicio:** presentación de la empresa y sus servicios.
2. **Eventos:** categorías de eventos y trabajos realizados.
3. **Clientes:** muestra de empresas e instituciones.
4. **Parlantes:** catálogo de monitores y subwoofers.
5. **Contactos:** información de contacto de la empresa.

## Componentes reutilizables

- **Menu:** encabezado y navegación principal.
- **Footer:** pie de página compartido en todas las ventanas.
- **TarjetaParlante:** componente reutilizable para mostrar los equipos de sonido.

## Implementación de Props

Las Props fueron implementadas en la página de Parlantes.

- **Componente padre:** `parlantes.jsx`
- **Componente hijo:** `TarjetaParlante.jsx`

El componente padre envía información al componente hijo mediante las siguientes Props:

- `nombre`: nombre del equipo.
- `descripcion`: descripción del parlante.
- `marca`: marca del equipo.
- `imagen`: imagen correspondiente al producto.

El componente hijo recibe estos datos y los utiliza para mostrar cada tarjeta de manera dinámica y reutilizable.

## Navegación

Se utilizó React Router DOM para permitir la navegación entre las cinco páginas de la aplicación sin recargar completamente el sitio.

## Diseño responsive

Se implementaron estilos CSS y media queries para adaptar la interfaz a diferentes tamaños de pantalla, como computadoras, tablets y celulares.
