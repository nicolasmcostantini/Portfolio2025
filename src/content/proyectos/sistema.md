---
titulo: 'Sistema De Gestion'
descripcion: 'Sistema web desarrollado para la administración y seguimiento de inventario, cobranzas y clientes. Permite centralizar la información y mejorar la eficiencia operativa.'
portada: 'vonzu_logo.jpg'
imagenes: 
    - '/assets/sistema/inicio.png'
    - '/assets/sistema/sistema.png'
    - '/assets/sistema/clientes.png'
    - '/assets/sistema/productos.png'
    - '/assets/sistema/depositos.png'
    - '/assets/sistema/ventas.png'
    - '/assets/sistema/proveedores.png'

tecnologias:
    - html 
    - css
    - javascript
    - php
    - mysql
    - jquery

caracteristicas:
    - 'Interfaz de usuario intuitiva y responsiva'
    - 'Gestión completa de inventario y stock'
    - 'Sistema de cobranzas y seguimiento de pagos'
    - 'Administración de clientes y proveedores'
    - 'Reportes y estadísticas en tiempo real'
    - 'Panel de control centralizado'

desafios:
    - 'Implementar un sistema de permisos robusto para diferentes roles de usuario'
    - 'Optimizar consultas de base de datos para manejar grandes volúmenes de información'
    - 'Crear una interfaz intuitiva que facilite la adopción por parte de usuarios no técnicos'

aprendizajes:
    - 'Mejoré mis habilidades en diseño de bases de datos relacionales complejas'
    - 'Aprendí a implementar sistemas de autenticación y autorización seguros'
    - 'Desarrollé mejores prácticas para crear interfaces de usuario accesibles y usables'

fecha: '2025'
estado: 'Completado'

---
# **Sistema de gestion "Von Zu Hause"**

### **Descripción General**
Desarrollo de una aplicación web completa de gestión desarrollada en **PHP nativo** con arquitectura MVC, diseñada para administrar todos los aspectos operativos de un negocio, incluyendo ventas, inventario, clientes, proveedores y finanzas.

### **Tecnologías Utilizadas**
- **Backend**: PHP 8.x, MySQL
- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Base de Datos**: MySQL con PDO
- **Librerías**: Chart.js, Toastr.js, Font Awesome
- **Arquitectura**: Patrón DAO (Data Access Object)

### **Funcionalidades Principales**

#### **1. Gestión de Clientes**
- Registro completo con fotos y documentos adjuntos
- Búsqueda avanzada por nombre o DNI
- Gestión de información de contacto (teléfonos, email, dirección)
- Sistema de observaciones y comentarios
- Visualización de archivos adjuntos

#### **2. Gestión de Productos e Inventario**
- Control de stock en tiempo real
- Alertas de productos con bajo stock
- Gestión de depósitos múltiples
- Categorización y organización de productos
- Sistema de imágenes para productos

#### **3. Sistema de Ventas**
- Proceso de venta completo con múltiples productos
- Cálculo automático de totales
- Gestión de diferentes métodos de pago
- Historial detallado de transacciones
- Generación de reportes de ventas

#### **4. Gestión de Proveedores**
- Registro y seguimiento de proveedores
- Control de compras y pagos pendientes
- Sistema de deudas y cobranzas
- Historial de transacciones con proveedores

#### **5. Sistema Financiero**
- Dashboard con métricas en tiempo real
- Control de ingresos y egresos
- Gestión de gastos operativos
- Sistema de cuenta corriente
- Reportes financieros con gráficos

#### **6. Gestión de Usuarios**
- Sistema de autenticación seguro
- Control de acceso por roles
- Registro de nuevos usuarios
- Recuperación de contraseñas

### **Características Técnicas Destacadas**

#### **Arquitectura y Diseño**
- Implementación del patrón **DAO** para separación de responsabilidades
- Uso de **PDO** para conexiones seguras a base de datos
- Sistema de **sesiones** para autenticación
- Validación de datos en frontend y backend

#### **Interfaz de Usuario**
- Diseño responsive y moderno
- Sistema de notificaciones con Toastr
- Modales dinámicos para operaciones CRUD
- Gráficos interactivos con Chart.js
- Iconografía consistente con Font Awesome

#### **Seguridad**
- Validación de entrada de datos
- Escape de caracteres especiales (XSS prevention)
- Autenticación por sesiones
- Control de acceso a páginas

#### **Funcionalidades Avanzadas**
- Sistema de búsqueda en tiempo real
- Carga y gestión de archivos múltiples
- Visualización de imágenes con zoom
- Exportación de datos
- Filtros y ordenamiento dinámico
