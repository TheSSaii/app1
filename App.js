import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos las pantallas
import Detalle from './screens/Detalle';
import Lista from './screens/Lista';
import Nuevo from './screens/Nuevo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista"
        screenOptions={{
          // ESTO FUERZA A QUE TODO EL HEADER SEA NEGRO Y COMBINE CON TU APP
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#FFFFFF', // Color de la flecha de "Atrás" y títulos estándar
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false, // Elimina la línea divisoria molesta del header en iOS
        }}
        >
        <Stack.Screen 
          name="Lista" 
          component={Lista} 
          options={{ title: 'Contactos' }} 
        />
        <Stack.Screen 
          name="Detalle" 
          component={Detalle} 
          options={{ title: 'Detalle del Contacto' }} 
        />
        <Stack.Screen 
          name="Nuevo" 
          component={Nuevo} 
          options={{ title: 'Nuevo Contacto' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}