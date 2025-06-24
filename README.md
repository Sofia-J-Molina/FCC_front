# 🏋️‍♀️ Proyecto React - CUCH

Este es un sitio web desarrollado con React y Vite para mostrar los clubes, actividades y formas de contacto del CUCH (Centro Universitario del Conurbano Hiperfachero 😎).  
Contiene navegación con React Router y un menú desplegable para acceder a las diferentes opciones de clubes.

---

## 🚀 Pasos para ejecutar el proyecto

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. **Ingresar a la carpeta del proyecto**

   ```bash
   cd tu-repo
   ```

3. **Instalar las dependencias**

   ```bash
   npm install
   ```

   > 💡 Asegurate de tener Node.js instalado. Las dependencias como `react`, `react-dom` y `react-router-dom` se instalarán automáticamente con este comando.

4. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Abrir el proyecto en el navegador**

   Ir a:

   ```
   http://localhost:5173
   ```

---

## 🧱 Estructura del proyecto

```
src/
├── components/
│   └── Header/
│       ├── Header.jsx
│       └── Header.css
├── pages/
│   ├── Inicio.jsx
│   ├── ClubGimnasia.jsx
│   ├── ClubYoga.jsx
│   └── Contacto.jsx
├── App.jsx
└── main.jsx
```

---

## 🧰 Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS

---

## ✨ Funcionalidades

- Navegación entre páginas sin recargar.
- Menú desplegable en "Clubes" con opciones individuales.
- Diseño responsive básico y personalizable.

---

## 📂 Imagen

La imagen del logo `Titulo.png` debe estar en la carpeta `public/`, y se accede mediante:

```jsx
<img src="/Titulo.png" alt="Logo CUCH" />
```

---

## 🙌 Contribuciones

¡Se aceptan sugerencias, mejoras o clubes nuevos!  
Podés hacer un fork y mandar un pull request 😄

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
