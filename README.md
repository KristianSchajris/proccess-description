## 🖥️ Editor Web de Descripciones de Procesos conforme al estándar ISO/IEC/IEEE 24774:2021

---

### 🎯 Propósito

El objetivo de este proyecto es desarrollar un software de edición accesible desde un navegador web, orientado a facilitar la construcción de descripciones de procesos conforme a la norma ISO/IEC/IEEE 24774:2021. Este estándar define una estructura rigurosa para representar procesos, incluyendo elementos como propósito, resultados esperados, actividades, tareas, datos de entrada y salida, así como otros componentes opcionales que enriquecen su comprensión y utilidad.

El software permitirá a los usuarios crear y editar estos elementos mediante una interfaz dinámica, diseñada para guiar su inclusión de forma clara y ordenada.

A diferencia de otras herramientas complejas o dependientes de infraestructura técnica, este editor funcionará de manera completamente autónoma, sin persistencia en bases de datos ni requerimientos de conexión a servicios remotos. Cada proceso será almacenado localmente por el usuario en un archivo con extensión `.pro`, estructurado en formato JSON, permitiendo su edición posterior o reutilización en otros contextos. Además, el software incluirá opciones para cargar archivos previamente guardados, visualizar el proceso en un formato diseñado para impresión y generar un documento en PDF con los datos registrados.

Este proyecto busca no solo ofrecer una herramienta funcional, sino también apoyar la comprensión y aplicación práctica del estándar ISO/IEC/IEEE 24774, especialmente en entornos formativos o en organizaciones que requieren documentar sus procesos de forma estructurada y portable. La validación de los campos obligatorios, la separación clara entre los elementos requeridos y opcionales, y la posibilidad de reorganizar jerárquicamente las tareas, convierten a este editor en un recurso versátil tanto para diseñadores novatos como para profesionales con experiencia en ingeniería de procesos.

---

### 🛠️ Productos

- **Editor web interactivo para la definición estructurada de procesos:**  
  Aplicación web ejecutable directamente desde el navegador, sin necesidad de instalación ni conexión a una base de datos. Permitirá capturar los elementos requeridos por la norma ISO/IEC/IEEE 24774:2021, incluyendo nombre, propósito y resultados esperados, y ofrecerá la posibilidad de agregar componentes opcionales como entradas, actividades, tareas, controles y restricciones. La interfaz facilitará la edición por parte de usuarios con distintos niveles de experiencia, brindando validaciones automáticas para asegurar la completitud mínima de cada proceso.

- **📁 Mecanismo de generación y lectura de archivos `.pro`:**  
  El software permitirá guardar cada proceso como un archivo con extensión `.pro`, estructurado en formato JSON. Este archivo contendrá todos los datos registrados por el usuario y podrá ser reutilizado posteriormente, cargándolo en la aplicación para continuar su edición. Esta funcionalidad garantiza la portabilidad del proceso, así como la independencia del entorno tecnológico en que fue creado.

- **🖨️ Vista estructurada del proceso en formato de impresión:**  
  Opción para visualizar el proceso en un diseño estilo hoja de trabajo, optimizado para facilitar su revisión antes de la exportación o impresión. Permitirá alternar entre disposición vertical u horizontal, manteniendo una representación clara de los elementos del proceso y su jerarquía.

- **📄 Exportación del proceso a formato PDF:**  
  Generación de un documento PDF que contendrá todos los elementos del proceso definidos por el usuario, conservando el formato visual elegido y preparado para ser archivado, compartido o impreso.

- **📚 Documentación de usuario y ejemplos de uso:**  
  Manual breve que describa las funcionalidades principales del editor, incluyendo instrucciones para crear, guardar, cargar y exportar procesos. Se proporcionarán archivos `.pro` de ejemplo para experimentar el funcionamiento del editor.

---

### 🎯 Objetivos

**Objetivo general:**  
Desarrollar un software web independiente que permita construir, editar, visualizar y exportar descripciones de procesos conforme a la norma ISO/IEC/IEEE 24774:2021, garantizando una representación estructurada, portable y validable de cada proceso, sin depender de infraestructura de almacenamiento en bases de datos.

**Objetivos específicos:**
- Aplicar los lineamientos del estándar ISO/IEC/IEEE 24774:2021 para definir la estructura mínima y ampliada de una descripción de proceso.
- Diseñar una interfaz web que facilite la edición secuencial de los elementos de un proceso, con validaciones orientadas a asegurar su completitud y coherencia.
- Implementar mecanismos de almacenamiento y recuperación de procesos utilizando archivos locales estructurados en JSON.
- Proveer medios de visualización e impresión que representen el proceso de forma legible y formal, permitiendo su revisión y distribución en formatos digitales.
- Hacer fácil e interactivo el uso práctico de estándares de documentación de procesos mediante una herramienta accesible para entornos educativos y profesionales.

---

### 📦 Alcance

El proyecto abarca el desarrollo de un software web, ejecutable de forma local desde el navegador, orientado a la construcción de descripciones de procesos conforme a la estructura establecida por la norma ISO/IEC/IEEE 24774:2021. Permitirá la definición de procesos compuestos por elementos obligatorios y opcionales, con almacenamiento local en archivos de texto estructurado, y visualización en formatos adecuados para revisión e impresión.

Incluye la definición de requisitos, análisis y diseño, construcción, prueba y documentación de un editor que funcione sin conexión a bases de datos ni integración con servicios en la nube. Se contempla la posibilidad de crear procesos desde cero, editar procesos previamente guardados en archivos `.pro`, y generar documentos PDF con las descripciones formateadas del proceso.

No contempla funcionalidades colaborativas multiusuario, persistencia mediante bases de datos, autenticación, ni despliegue en servidores. Tampoco incluye la validación semántica de los contenidos introducidos, más allá de las reglas básicas de completitud y longitud definidas por el modelo de datos.

---

### 📑 Entregables

- Editor web funcional (HTML, CSS, JavaScript), ejecutable en navegador sin instalación ni conexión a internet.
- Plantilla de archivo `.pro` y estructura JSON de referencia, con archivos de ejemplo.
- Manual de usuario con instrucciones claras para cada funcionalidad.
- Ejemplos exportados en PDF en disposición vertical y horizontal.
- Resumen de pruebas funcionales y criterios de aceptación.

Además, se entregarán todos los productos de trabajo definidos por el proceso Desarrollo y Mantenimiento de Software (DMS) conforme al modelo MoProSoft, para asegurar la trazabilidad, calidad técnica y cumplimiento metodológico.

---

### 💼 Necesidad de negocio

En organizaciones de desarrollo de software y programas de formación en ingeniería, existe la necesidad de documentar procesos de forma estructurada, reutilizable y conforme a estándares internacionales. Las herramientas actuales suelen ser complejas, requieren instalación o están orientadas a otras finalidades, dificultando la aplicación de la norma ISO/IEC/IEEE 24774:2021 en equipos pequeños o entornos educativos.

Este proyecto responde a esa necesidad mediante un software web autónomo, accesible desde cualquier navegador, que permite construir y editar descripciones de procesos sin depender de una base de datos ni conocimientos técnicos avanzados. La posibilidad de guardar, recuperar, imprimir o exportar procesos como archivos estructurados facilita su integración en actividades de documentación, auditoría, formación o evaluación.

---

### 📝 Supuestos y premisas

- El software será utilizado por diseñadores de procesos con comprensión básica de la norma ISO/IEC/IEEE 24774:2021, pero sin formación técnica avanzada.
- El entorno de ejecución será un navegador web actualizado, con acceso local al software y sin necesidad de conexión a internet.
- El editor funcionará de forma autónoma, sin base de datos ni integración con sistemas externos, y los procesos se almacenarán localmente en archivos `.pro` en formato JSON.
- Los usuarios valorarán la posibilidad de conservar, recuperar y exportar sus procesos de forma estructurada y legible, y requerirán validación automática de los elementos obligatorios.
- El equipo de desarrollo tendrá acceso al estándar ISO/IEC/IEEE 24774:2021 para implementar una representación coherente y completa de los procesos.

---

### ⛔ Restricciones

- El desarrollo se realizará en un entorno académico, con tiempo limitado y equipo reducido (dos bloques de 3 horas).
- Solo se utilizarán tecnologías web ejecutables en navegador (HTML, CSS, JavaScript), sin backend ni persistencia en bases de datos.
- No se contará con integración continua ni herramientas avanzadas de gestión de configuración.
- El alcance funcional se limitará a los elementos del estándar ISO/IEC/IEEE 24774:2021 contemplados en los requerimientos iniciales, sin extensiones ni personalizaciones adicionales.
