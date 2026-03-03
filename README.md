🛠️ Tecnologías Utilizadas

⚛️ React

🟦 TypeScript

⚡ Vite

🌐 API de Giphy Developers

🎨 CSS personalizado

🔤 Fuentes personalizadas (Google Fonts)

📦 Fetch API

📌 Características Principales

🔎 Búsqueda dinámica de GIFs

⏱️ Implementación de Debounce para optimizar peticiones HTTP

🔄 Manejo de estado con React Hooks

🔗 Comunicación entre componentes (props)

⚙️ Uso de useEffect para efectos secundarios

🔐 Uso de variables de entorno para proteger la API Key

🎨 Diseño limpio con fuentes personalizadas

🧠 Conceptos Aplicados
🔹 HTTP Requests

Se realizan peticiones a la API oficial de Giphy utilizando fetch para obtener resultados dinámicos según el término de búsqueda.

🔹 Debounce

Se implementa debounce para evitar múltiples peticiones innecesarias mientras el usuario escribe en el input.

🔹 Manejo de Estado

Uso de useState para:

Controlar el valor del input

Guardar los GIFs obtenidos

Manejar estados de carga

🔹 Comunicación entre Componentes

Se pasan datos y funciones mediante props para mantener una arquitectura modular y reutilizable.

🔹 useEffect

Se utiliza para ejecutar efectos secundarios como:

Realizar peticiones cuando cambia el término de búsqueda.

🔹 Variables de Entorno

La API Key se almacena en un archivo .env:

VITE_GIPHY_API_KEY=your_api_key_here

⚙️ Instalación y Uso

1️⃣ Clonar el repositorio

git clone https://github.com/tu-usuario/tu-repo.git

2️⃣ Instalar dependencias

npm install

3️⃣ Crear archivo .env

VITE_GIPHY_API_KEY=your_api_key_here

4️⃣ Ejecutar el proyecto

npm run dev
📈 Mejoras Futuras

Implementar paginación

Agregar favoritos con localStorage

Añadir animaciones

Mejorar manejo de errores

Implementar testing con Jest o Vitest

👨‍💻 Autor

Desarrollado por Alejandro Alfaro
Fullstack Developer 🚀
