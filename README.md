# Consolearn 🎓


## Descripción

Consolearn es una plataforma de cursos donde los usuarios pueden registrarse, iniciar sesión y acceder a una variedad de cursos. La plataforma permite a los usuarios:

- **Registrarse e iniciar sesión** utilizando autenticaciones internas y externas (Auth0 con Google).
- **Subir cursos** a la plataforma, que pueden ser gratuitos o de pago.
- **Escribir reseñas** y calificar cursos con estrellas.
- **Añadir cursos a favoritos** y gestionar sus órdenes (pendientes y pagadas).
- **Visualizar contenido de cursos** en formato de video, con la opción de marcar videos como completados.

Además, se implementa la plataforma de **Stripe** para gestionar pagos y un **panel de administración** para gestionar usuarios y cursos.

## Tecnologías Utilizadas

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Prisma, PostgreSQL
- **Estado global:** Context API
- **Autenticación:** Auth0
- **Pagos:** Stripe

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone (https://github.com/devnotmax/front-console-learn)

2. Clona el repositorio:
   ```bash
   cd front-console-learn

3. Instala las dependencias:
   ```bash
   npm install

4. Comando para correr el proyecto:
   ```bash
   npm run dev
5. Abre tu navegador y visita *http://localhost:3000* para ver el proyecto



# 🌟 Gitflow Workflow para el Proyecto

## 1. Rama Principal: `main` 🚀

- La rama `main` siempre debe contener el código limpio y listo para producción.
- Solo se permiten **merges** de código aprobado, probado y que haya pasado revisión de código (Code Review).
- ❌ No se debe realizar desarrollo directamente en la rama `main`.

## 2. Rama de Desarrollo: `develop` 🛠️ (opcional)

- En caso de tener un flujo de trabajo más grande, puedes añadir la rama `develop` como rama central para integrar todo el trabajo antes de hacer un **merge** final a `main`.
- Aquí se integran todas las ramas **feature** y **fix** para realizar pruebas antes de producción.

## 3. Ramas de Funcionalidades: `feature/[nombre]` ✨

- Cualquier nueva funcionalidad debe desarrollarse en una rama con el formato `feature/[nombre]`.
- Ejemplo: `feature/login-page` o `feature/appointment-scheduler`.
- Estas ramas se crean desde `develop` (o `main`) y se mergean nuevamente a `develop` al finalizar.
- 🔍 Cada cambio debe ser atómico: es mejor subir pequeños cambios que grandes commits de golpe.

## 4. Ramas de Correcciones: `fix/[nombre]` 🐛

- Para corregir errores, se debe crear una rama con el formato `fix/[nombre]`.
- Ejemplo: `fix/navbar-responsive` o `fix/password-validation`.
- Estas ramas se enfocan en arreglar bugs o realizar mejoras rápidas.
- Al terminar, se hace el **merge** a `develop` (o `main`, según tu flujo).

## 5. Ramas de Estilos: `style/[nombre]` 🎨

- Cambios relacionados con ajustes de diseño o mejoras visuales se desarrollan en ramas con el formato `style/[nombre]`.
- Ejemplo: `style/button-hover-effect` o `style/sidebar-color-tweaks`.
- Estas ramas son exclusivamente para cambios en el CSS o mejoras visuales sin modificar la lógica.

## 6. Ramas de Documentación: `docs/[nombre]` 📝

- Cualquier modificación o actualización de la documentación del proyecto debe ir en una rama `docs/[nombre]`.
- Ejemplo: `docs/update-readme` o `docs/gitflow-policy`.
- Así mantenemos la documentación organizada y versionada.

## 7. Commits Claros y Consistentes 🧹

- Asegúrate de que cada commit sea claro y explique lo que se ha cambiado o implementado.
- Usa un formato uniforme para los mensajes de commits:
  - **✨ feat**: para nuevas funcionalidades
  - **🐛 fix**: para correcciones de errores
  - **🎨 style**: para cambios en la apariencia
  - **📝 docs**: para cambios en la documentación
  - **♻️ refactor**: para mejoras en la estructura del código sin cambiar su comportamiento
  - **🧪 test**: para añadir o modificar pruebas.

## 8. Pull Requests (PRs) y Revisiones de Código 🔍

- Antes de hacer un **merge** a `develop` o `main`, abre un **Pull Request (PR)**.
- Requiere que al menos un compañero revise el código antes de aceptar el **PR**.
- 📄 El **PR** debe incluir una descripción clara de los cambios y, si es necesario, capturas de pantalla o ejemplos.

## 9. Mantén la Historia de Git Clara 🧑‍💻

- Usa **squash merges** o **rebase** para limpiar la historia de commits si hay demasiados commits pequeños.
- Evita **merge commits** innecesarios para mantener una historia de Git lineal y ordenada.

## 10. Pruebas Antes de Merge ✅

- Siempre prueba tu código localmente antes de crear un **PR**.
- Si es posible, automatiza las pruebas con herramientas como **Jest** o **Cypress** para asegurar que todo funcione correctamente.

# Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme a través de:

- **Email:** develop.maxsj@gmail.com
- **LinkedIn:** [machifrias](https://www.linkedin.com/in/machifrias/)

## Authors

- [@devnotmax](https://www.github.com/devnotmax)
- [@Moncada16](https://github.com/Moncada16)




# 🌟 Actualizaciones Recientes.

## **[15/10/2024]**: Actualización de Hero Component
- Se añadió el componente **Hero** a la página de inicio para mejorar la presentación de la misma.
- Este componente incluye una imagen destacada y un breve mensaje de bienvenida.

## **[15/10/2024]**: Actualización de Footer Component
- Este proyecto contiene una actualización del Footer y una sección de reseñas de usuarios para la plataforma de ConsoLearn. La sección de reseñas permite mostrar testimonios de usuarios con sus respectivas calificaciones, mientras que el Footer proporciona enlaces rápidos a redes sociales, cursos, carreras, y otros recursos importantes.

### **[16/10/2024]**: Inicio de Sesión (Login)

- Los usuarios registrados pueden iniciar sesión proporcionando:
  - Correo electrónico
  - Contraseña
- Validación de datos:
  - El correo electrónico y la contraseña son validados antes de enviar la solicitud.
  - En caso de que el correo o la contraseña no coincidan con un usuario registrado, se muestra un mensaje de error.

### **[16/10/2024]**: Registro de Usuarios (Register)

- Los usuarios pueden registrarse proporcionando:
  - Nombre completo
  - Correo electrónico
  - Contraseña (con confirmación)
  - Aceptación de términos y condiciones
- Validación de datos:
  - El campo de correo electrónico verifica el formato correcto.
  - La contraseña debe coincidir con la confirmación de la contraseña.
  - Los términos y condiciones deben ser aceptados para completar el registro.

### **[17/10/2024]**: Carrousel con cards de cursos (Carrousel)

- Se añadió el componente **Carrousel** donde se mostrarán los cursos más populares de la plataforma, donde incluiran:
  - Título del curso
  - Rate del curso, reflejados en estrellas
  - Breve Descripción del curso
- Se añadió el componente **productCard** Que son las cards en las que se vera la informacion de los cursos.

### **[17/10/2024]**: **Hero** en la pagina cursos
- Se añadió el componente **Hero**

### **[19/10/2024]**: **Cambios sugeridos en la demo**
- Unificacion de idioma.
- Correccion de las validaciones, ahora los inputs tienen validaciones independientes lo que nos permite manejar mejor la experiencia de usuario.
-Cambios de la paleta de colores y algunos estilos.

### **[21/10/2024]**: **Cousepage**
- Seccion donde se pueden ver todos los cursos disponibles en la pagina
- Mejora de los filtros

### **[22/10/2024]**: **Detalle de los cursos** /course/[id]
- Detalle de los cursos, donde incluimos mas informacion acerca del mismo, y un boton para la compra de cursos y añadirlo a favoritos.

### **[22/10/2024]**: **Boton de compra**
- Creacion de los servicios y logica del boton de compra, aun sin checkout a stripe

### **[23/10/2024]**: **Filtros mejorados, añadi una busqueda**
-Creacion de la interfaz grafica, concretamente la barra de busqueda

### **[25/10/2024]**: **Boton de compra**
- El componente del boton de compra actualiza con exito el estado de la orden de pendiente a pagado y ya puedo hacer el checkout a stripe

### **[26/10/2024]**: **Mejora del profile**
- ahora en el profile el usuario puede ver sus ordenes pendientes y pagadas, ver sus detalles, y tambien pagar las ordenes que no fueron pagadas todavia.
- getOrders(), me trae todas las ordenes del usuario pasandonle el token

### **[27/10/2024]**: **Alertas agregadas con SweetAlert2**
- Alertas de compras agregadas, contextos para obtener el token y pasarle el token a los servicios que lo necesitaban como el de la comprobacion de la compra.

### **[28/10/2024]**: **BUILD PASO LISTO PARA EL PRIMER DEPLOY!**
- Build ejecutado correctamente ya existe deploy en vercel.

### **[29/10/2024]**: **El curso ya ha sido comprado. (Evita que el usuario compre de nuevo el mismo curso)**
- Agregue una validacion, si el usuario ya compro un curso le saldra un aviso de que ya compro el curso, en vez del boton de compra. ademas agregue el boton para ver el contenido del curso.



