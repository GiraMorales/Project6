# Proyecto 6: Project6 (API REST)

Esta es una API REST creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar usuarios y proyectos.
Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Project6.

## Endpoints

### Users

GET /api/v1/users: Obtiene todos los usuarios.
POST /api/v1/users: Crea un nuevo usuari.
PUT /api/v1/users/:id: Actualiza un usuario existente.
DELETE /api/v1/users/:id: Elimina un usuario y su archivo asociado en Cloudinary.

### Projects

GET /api/v1/projects: Obtiene todos los proyectos.
POST /api/v1/projects: Crea un nuevo proyecto.
PUT /api/v1/projects/:id: Actualiza un proyecto existente.
PUT /api/v1/projects//update-relation/:id: Actualiza relacions de un proyecto (sin borrar y evitando duplicados)
UserRoutes.put('/update-relation/:id', updateProjectRelations);
DELETE /api/v1/projects/:id: Elimina un proyecto y su archivo asociado en Cloudinary.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- INMSOMIA
- Visual Studio Code

## Instalación

### Se clona este repositorio

- https://github.com/GiraMorales/Project6.git

### Incializar un paquete de npm

- nmp init -y

### Se instala las dependencias

npm install...

`Para manejar variables del archivo .env donde estan los datos sensibles que no pueden ver nadie.`

- "dotenv"

`Para simplificar la creación de rutas, middlewares y servidores.`

- "express"

`Para interactuar con la base de datos mongo.`

- "mongodb"

`Para crear modelos de dots y gestionarlos`

- "mongoose"

### añadir los scripts

`Para ejecutar el fichero  index.js`

- "start": "node index.js"

`Para levantar la base de datos`

- "dev": "nodemon index.js"
