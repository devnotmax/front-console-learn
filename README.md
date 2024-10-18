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