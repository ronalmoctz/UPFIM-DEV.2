# UPFIM-DEV.2

## Descripción

**UPFIM-DEV.2** es un proyecto de innovación universitaria desarrollado por estudiantes egresados de la [UPFIM](https://www.upfim.edu.mx). El propósito principal es fomentar el aprendizaje práctico en desarrollo de software mientras se construyen soluciones tecnológicas escalables que impacten positivamente en la comunidad universitaria.

### **Tecnologías utilizadas**

![JavaScript ES6](https://img.shields.io/badge/JavaScript-ES6-yellow)
![React 18](https://img.shields.io/badge/React-18-blue)
![Node.js 22.11.0](https://img.shields.io/badge/Node.js-22.11.0-green)
![Express.js](https://img.shields.io/badge/Express.js-4.18.0-grey)
![MySQL](https://img.shields.io/badge/MySQL-8.0.33-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)
![CSS](https://img.shields.io/badge/CSS-3-264de4)

---
> ⚠️ **Advertencia**: NO SE DARA ACCESO A LA BASE DE DATOS.


## **Guía de instalación**

### **Requisitos previos**

> ⚠️ **Advertencia**: Antes de comenzar, asegúrate de cumplir con todos los requisitos previos para evitar problemas durante la instalación.

- [Node.js (versión 18 o superior)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MySQL](https://www.mysql.com/) (versión 8 o superior)
- Un editor de código como [VS Code](https://code.visualstudio.com/)

### **Pasos para la instalación**

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/ronalmoctz/UPFIM-DEV.2.git
2. Navega a la carpeta del proyecto:
    ```bash
    cd UPFIM-DEV.2
3. Instala las dependecias para la raiz:
    ```bash
    npm install

### **Configuración del backend**
1. Instala las dependencias:
    ```bash
    cd backend
    npm install

2. Configura tu archivo `.env`:
    ```env
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_base_datos
    JWT_SECRET=clave_secreta
    PORT=3000

3. Accede al backend en http://localhost:3000.

### **Configuración del frontend**
1. Instala las dependencias:
    ```bash
    cd frontend
    npm install

3. Accede al frontend en http://localhost:5173.
> 🗒️ **Nota** Asegúrate de que el backend esté corriendo antes de iniciar el frontend.


### **inicar la aplicacion de manera simultanea**
1. PAara inicar la aplicacion se requiere que
   estes en la carpeta raiz del proyecto `UPFIM-DEV.2`:
    ```bash
    npm run dev

## **Estrcutura del proyecto**
    
      ├── .gitignore
      ├── LICENSE
      ├── backend
          ├── .babelrc
          ├── .eslintignore
          ├── .eslintrc.json
          ├── .gitignore
          ├── .prettierrc
          ├── db.sql
          ├── logs
          ├── package.json
          └── src
          │   ├── app.js
          │   ├── config
          │   ├── controllers
          │       ├── Dashboard
          │   ├── database
          │   ├── docs
          │   ├── errors
          │   ├── helpers
          │   ├── middleware
          │   ├── routers
          │   ├── service
          │   └── utils
      ├── docker-compose.yml
      ├── frontend
          ├── public
          ├── src
          │   ├── App.jsx
          │   ├── Hooks
          │   ├── assets
          │   ├── components
          │   │   ├── Actividades
          │   │   ├── Admin
          │   │   │   ├── components
          │   │   │   ├── pages
          │   │   │   └── routes
          │   │   ├── Contacto
          │   │   ├── Generales
          │   │   ├── Inicio
          │   │   │   ├── About
          │   │   │   ├── DocentesHome
          │   │   │   ├── Gallery
          │   │   │   ├── HeroSection
          │   │   │   ├── Metas
          │   │   │   └── TallerHome
          │   │   ├── Login
          │   │   └── Talleres
          │   ├── constants
          │   ├── index.css
          │   ├── main.jsx
          │   ├── pages
          │   ├── routes
          │   └── services
          ├── tailwind.config.js
          └── vite.config.js
      └── package.json

## **Licencia**
> 🛑 **Stop** Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## **Notas finales**
> 💡 Sugerencia: Si encuentras algún problema, abre un issue en el repositorio oficial, se agradeceria mucho.
