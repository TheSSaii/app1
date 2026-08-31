# App de Gestión de Contactos (React Native & Firebase)

Aplicación móvil desarrollada con **Expo (SDK 54)** y **Cloud Firestore**, diseñada con una interfaz de usuario optimizada para iOS (Dark Mode / Apple Design Guidelines), sincronización de datos en tiempo real, retroalimentación háptica y un flujo completo de operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar).

---

## 🚀 Características Principales

* **Sincronización en Tiempo Real:** Conexión directa con Cloud Firestore (`onSnapshot`) para reflejar altas, modificaciones y bajas de contactos al instante.
* **Diseño Nativo (Apple Dark Mode):** Interfaz estilizada inspirada en el ecosistema iOS, con tarjetas limpias, tipografía jerarquizada y un fondo oscuro OLED puro.
* **Experiencia de Usuario (UX):** 
  * Formularios protegidos contra la superposición del teclado mediante `KeyboardAvoidingView` y `ScrollView`.
  * Retroalimentación háptica real y alertas nativas de confirmación al guardar o eliminar registros (`expo-haptics`).
* **Arquitectura Limpia:** Estilos centralizados en un archivo global (`styles/globalStyles.js`) para mantener la modularidad y escalabilidad del código.

---

## 🛠️ Tecnologías y Librerías Utilizadas

* **React Native / Expo** (SDK 54)
* **React Navigation** (Navegación tipo Stack)
* **Firebase / Cloud Firestore** (Base de datos NoSQL en la nube)
* **Expo Haptics** (Vibración y feedback físico)

---

## ⚙️ Configuración e Instalación Local

Si deseas clonar y probar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd <nombre-de-la-carpeta>
   
2. **Instala las dependencias:**
   npm install

3. **Configura las variables de entorno:**
   Crea un archivo llamado .env en la raíz del proyecto y añade tus credenciales privadas de Firebase:
   EXPO_PUBLIC_FIREBASE_API_KEY=tu_api_key
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=tu_app_id

4. **Inicia la aplicación**
   npx expo start -c

# Autor
   TheSSaii //
   Simón Morales arango
