# Documentación de Prueba Técnica
## Descripción del Proyecto

Esta prueba técnica consiste en una aplicación para filtrar, buscar y listar países utilizando GraphQL para la gestión de datos y Unsplash para la obtención de imágenes. La aplicación está construida con React, Apollo Client, TypeScript, Zustand, ShadCN React, Axios y Tailwind CSS.

[Demo del proyecto](https://prueba-tecnica-paises.vercel.app/)

## Tecnologías Utilizadas

- **React:** Biblioteca para construir la interfaz de usuario.
- **Apollo Client:** Cliente GraphQL para la integración con el servidor GraphQL.
- **TypeScript:** Lenguaje de programación que añade tipado estático a JavaScript.
- **Zustand:** Biblioteca para la gestión del estado.
- **ShadCN:** Componentes UI para React.
- **Axios:** Cliente HTTP para hacer peticiones.
- **Tailwind CSS:** Framework de CSS para estilos rápidos y responsivos.
- **GraphQL:** Lenguaje de consulta para APIs.
- **Unsplash:** API para obtener imágenes de alta calidad.

## Instalación y Configuración

1. Clonar el repositorio
  ```bash
  git clone https://github.com/justin-A18/prueba-tecnica.git
  cd prueba-tecnica
  ```

2. Instalar Dependencias
  ```bash
  pnpm install
  ```

3. Cambia el nombre al `.env.template` por `.env`

4. Edita el `.env` y agraga tu `ACCESS_KEY` de Unsplash

## Funcionalidades

  - Filtrado de Países
    - Permite filtrar la lista de países basada en diferentes criterios.

  - Buscar Países
    - Implementa una búsqueda dinámica de países utilizando un campo de búsqueda.

  - Listar Países
    - Muestra una lista de países con información relevante.

  - Obtener Imágenes de Países
    - Usa la API de Unsplash para mostrar imágenes relacionadas con los países.
