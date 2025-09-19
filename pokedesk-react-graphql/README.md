# PokeDesk - React GraphQL Pokémon App

Una aplicación web moderna para explorar y visualizar información de Pokémon utilizando React, TypeScript, GraphQL y Redux Toolkit.

## 🚀 Características

- **Exploración de Pokémon**: Navega por una lista de los primeros 1000 Pokémon
- **Búsqueda en tiempo real**: Busca Pokémon por nombre con filtrado instantáneo
- **Ordenamiento**: Ordena la lista por ID o nombre
- **Vista detallada**: Visualiza información completa de cada Pokémon incluyendo:
  - Estadísticas base
  - Tipos y habilidades
  - Movimientos con poder > 70
  - Descripción del Pokémon
  - Peso y altura
- **Navegación fluida**: Navega entre Pokémon con botones de anterior/siguiente

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción
- **GraphQL** - API de consulta de datos
- **Apollo Client** - Cliente GraphQL
- **Redux Toolkit** - Gestión de estado
- **CSS Modules** - Estilos modulares

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd pokedesk-react-graphql
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/           # Componentes básicos reutilizables
│   ├── molecules/       # Componentes compuestos
│   ├── organisms/       # Componentes complejos
│   └── pages/          # Páginas principales (Home, Preview)
├── config/
│   └── pokeapi-client.ts    # Configuración del cliente GraphQL
├── core/
│   ├── services/        # Servicios de API
│   ├── slices/         # Redux slices
│   ├── stores/         # Configuración del store
│   └── types/          # Definiciones de tipos TypeScript
└── assets/             # Recursos estáticos
```

## 🎯 Funcionalidades Principales

### Página Principal (Home)
- Lista de Pokémon con imágenes
- Barra de búsqueda con filtrado en tiempo real
- Modal de ordenamiento (por ID o nombre)
- Navegación por tarjetas de Pokémon

### Página de Detalle (Preview)
- Información completa del Pokémon seleccionado
- Estadísticas base (HP, Ataque, Defensa, etc.)
- Lista de tipos y habilidades
- Movimientos con poder > 70
- Descripción del Pokémon
- Navegación entre Pokémon (anterior/siguiente)
- Tema dinámico basado en el tipo primario del Pokémon

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter ESLint

## 🌐 API

La aplicación utiliza la API GraphQL de PokéAPI:
- **Endpoint**: `https://graphql.pokeapi.co/v1beta2`
- **Datos**: Información de Pokémon, especies, tipos, movimientos, estadísticas y más

## 🎨 Temas y Colores

El sistema de temas se basa en los tipos de Pokémon:
- Cada tipo tiene colores de fondo y texto específicos
- Los colores se aplican dinámicamente según el tipo primario del Pokémon
- Soporte para todos los tipos: Normal, Fuego, Agua, Planta, Eléctrico, etc.

## 📱 Responsive Design

La aplicación está optimizada para:
- Escritorio (1024px+)
- Tablet (768px - 1023px)
- Móvil (320px - 767px)

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/` y pueden ser desplegados en cualquier servidor web estático.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
