# Respuestas 1

## Herramientas y su papel:

**1.Node.js y npm: Estas dos son las herramientas basicas para desarrollar cualquier tipo de aplicacion fundamentada en javascript, ya sea movil, web y otro tipo de arquitectura diferente. node.js es el entorno de ejecución para correr codigo de javascript fuera de la web; npm es el gestor de paquetes por defecto de este entorno de ejecucion almacena diferentes paquetes de codigo reutilizable para javascript y ofrece tambien herramientas de comandos de consola. Este entorno basico nos da acceso a codigo rapido y util sin necesidad de reinventar la rueda.**

**2.Metro bundler: Es el empaquetador de codigo para proyectos de React native. toma diferentes archivos de codigo, dependencias y los junta en un solo archivo optimizado.**

**3.JDK Y Android SDK: Estas dos son siglas para: (JDK): Java Development ToolKit y (Android SDK): Android Software Development Kit. Que son paquetes de herramientas utiles para el desarrollo de aplicaciones principalmente para dispositivos moviles Android.**

**4.Xcode:Este es el IDE o interfaz de edicion de texto desarrollada por Apple enfocada para ser usada en su ecosistema. ofrece diferentes herramientas de simulación de aplicaciones en los diferentes dispositivos de mencionado ecosistema.**

**Expo Go: Es una aplicación movil usada como entorno de pruebas para aplicaciones moviles desarrolladas con Expo y React native.Expo es un conjunto de herramientas que permiten el desarrollo de aplicaciones moviles con react native que corren hibridamente tanto en sistemas operativos Android y IOS.**
 
 **b)**
 Si dos personas, una con windows y otra con linux, tratan de corren una aplicación ios directamente en sus equipos no podran hacerlo debido a que la arquitectura de la aplicación esta diseñada para correr en dispositivos con sistema operativo IOS. esto debido a que el funcionamiento interno de la aplicacion esta diseñado para unas configuraciones de sistema especificas de dicho SO. Las alternativas que tienen para poder tratar de probar una aplicacion de este tipo en sus equipo es usando un simulador como Android studio o Expo Go.

**c)**
 ¿Qué son las variables de entorno del sistema operativo y por qué el emulador de Android falla cuando diferencia entre una variable de usuario y una variable de sistema.ANDROID_HOME o el PATH están mal configurados? Explique la diferencia entre una variable de usuario y una variable de sistema:

**Las variables de entorno son como "direcciones" que le damos a la computadora para que encuentre rápido los programas que necesita usar. Si ANDROID_HOME o el PATH tienen una dirección equivocada, la máquina se pierde buscando las herramientas de Android y por eso el emulador no arranca. Sobre los tipos: una variable de usuario es como una regla personal que solo afecta tu propia sesión, mientras que una variable de sistema es una regla general para cualquiera que use el equipo.**

### d. Expo y React native:

**Expo**
**Ventajas:** Configuración inicial inmediata sin lidiar con código nativo y pruebas muy ágiles usando la app Expo Go.
**Limitaciones:** Puede generar aplicaciones más pesadas y dificulta la integración de librerías con código nativo personalizado.
**Elección:** Ideal para prototipos rápidos, principiantes o apps que no requieren hardware complejo.
**ReactNative CLI**
**Ventajas:** Control absoluto sobre el código nativo (Java/Kotlin/Swift) y compatibilidad total con cualquier librería.
**Limitaciones:** Configuración inicial tediosa y exige tener instalados Android Studio o Xcode obligatoriamente.
**Elección:** Ideal para proyectos grandes, escalables o que dependen mucho de hardware específico del teléfono.

# Respuestas 2

## Equivalencias de HTML y React Native
**a)** 
- `<div>` = `<View>`
- `<p>` = `<Text>`
- `<span>` = `<Text>`
- `<img>` = `<Image>`
- `<input>` = `<TextInput>`
- `Lista larga con scroll` = `<FlatList>` (o `<ScrollView>`)

**b)** 
Existen tres diferencias clave: primero, no usamos archivos `.css`, sino objetos de JavaScript (normalmente con `StyleSheet`); segundo, las propiedades se escriben en *camelCase* (ej. `backgroundColor` en lugar de `background-color`); y tercero, Flexbox es el motor por defecto para todo el diseño. 
El valor por defecto de `flexDirection` es `column`. Esto tiene todo el sentido porque las pantallas móviles son verticales, así que lo más natural es apilar los elementos de arriba hacia abajo.

**c)** 
Las **props** son los datos que un componente padre le pasa a un hijo (como parámetros) y son de solo lectura. El **estado**, en cambio, es la memoria interna del componente, pertenece solo a él y puede cambiar según las acciones del usuario, haciendo que la pantalla se actualice. 
**Ejemplo en una lista de productos:** Una prop sería la información de cada producto (como su nombre y precio) que se pasa para dibujarlo en pantalla. El estado sería el texto que el usuario está escribiendo en una barra de búsqueda para filtrar esos productos.

# Respuestas 3
## Manejo de plantillas y navegación 

**a)** 
- **Stack (Pila):** Pone una pantalla sobre otra. Ideal para flujos secuenciales, como ir de una lista al detalle de un contacto.
- **Tabs (Pestañas):** Botones de acceso rápido, generalmente abajo. Se usa para las vistas principales, como en Instagram (Inicio, Buscar, Perfil).
- **Drawer (Cajón):** Menú lateral desplegable. Perfecto para opciones secundarias o de configuración, como el menú de carpetas en Gmail.

**b)** 
El contenedor (como `NavigationContainer`) es el "director de orquesta": gestiona el árbol de pantallas y recuerda en dónde está el usuario. Debe existir solo uno en la raíz de la app porque, si hubieran varios, los historiales chocarían, la aplicación se confundiría y perderíamos el control de la navegación global.

**c)** 
Los parámetros se envían dentro de un objeto al usar la función de navegar (ej. `navigate('Detalle', { id: 1 })`), y la pantalla destino los lee usando un hook como `useRoute`. Siempre conviene enviar **solo el identificador** (el ID), no el objeto completo. Así, la pantalla destino se obliga a buscar los datos frescos de la base de datos, evitando mostrar información vieja si esta cambió por otro lado.

**d)** 
Cuando regresas de la pantalla B a la A, la pantalla A **conserva su estado**, no se crea desde cero porque quedó "congelada" en la pila (Stack). La implicación es que, si agregas un registro en B, al volver a A la lista no se refrescará sola. Para solucionarlo, hay que usar herramientas de la librería (como `useFocusEffect`) que le avisen a la pantalla A que volvió a estar visible para que recargue los datos.

**e)** 
Android tiene un botón del sistema (físico o virtual) universal para retroceder, mientras que iOS depende de deslizar el dedo desde el borde o de botones dentro de la pantalla. La librería de navegación unifica esto: intercepta el botón de Android para que funcione de forma nativa, y al mismo tiempo provee los botones en la cabecera superior y los gestos en iOS, logrando que el mismo código sirva para ambos.

# Respuestas 4: 
## Configuración base de Firebase

**a)** 
1. Crear un proyecto nuevo en la consola web de Firebase.
2. Registrar una aplicación (puede ser web) dentro del proyecto.
3. Habilitar la base de datos Cloud Firestore desde el menú.
4. Instalar el SDK en nuestro proyecto local (`npm install firebase`).
5. Crear un archivo de configuración en el código (ej. `firebase.js`) donde ponemos las credenciales (usando variables de entorno) y llamamos a la función `initializeApp`.

**b)** 
- **apiKey:** Es una llave pública que simplemente identifica el proyecto frente a los servidores de Google, no otorga permisos de datos.
- **projectId:** El nombre único e irrepetible de tu proyecto en toda la nube de Google.
- **appId:** El identificador específico de la aplicación (iOS, Android o Web) que registraste dentro de tu proyecto.
- **storageBucket:** La dirección web donde se guardarán los archivos pesados (como fotos o videos) si decides usar Firebase Storage.

**c)** 
La `apiKey` de Firebase no es una contraseña secreta, es solo un identificador público. Cualquiera puede verla y eso es normal porque la app necesita enviarla para comunicarse con Firebase. La seguridad real no está en esconder esa llave, sino en las **Reglas de Seguridad** (Security Rules) que configuras en el servidor de Firebase, las cuales dictan quién puede leer o escribir datos.

**d)** 
El modo de prueba deja tu base de datos abierta: cualquiera que tenga tu identificador puede leer, borrar o alterar toda tu información libremente (suele bloquearse automáticamente a los 30 días). El modo de producción viene cerrado por defecto, protegiendo todo. El riesgo de publicar en modo de prueba es inmenso: un atacante malintencionado podría secuestrar o destruir todos los datos de tus usuarios en segundos.

**e)** 
1. **Estructura:** Firestore usa colecciones y documentos; Realtime DB usa un gran árbol JSON. 
2. **Consultas:** Firestore permite filtros combinados y complejos; Realtime es más limitado. 
3. **Escalabilidad:** Firestore está diseñado para crecer sin afectar el rendimiento. 
Para la Parte 2 elegiría **Firestore**, porque organizar los contactos como documentos dentro de una colección "contactos" es mucho más ordenado, fácil de consultar y, además, es la herramienta que el taller nos exige usar explícitamente.