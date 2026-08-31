import * as Haptics from 'expo-haptics';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../firebase/firebaseConfig';
import { globalStyles } from '../styles/globalStyles';

export default function Nuevo({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGuardar = async () => {
    if (!nombre.trim() || !telefono.trim() || !ciudad.trim()) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos para continuar.');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'contactos'), { nombre, telefono, ciudad });
      
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert(
        '¡Contacto creado!',
        'El contacto se ha guardado exitosamente en tu agenda.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', 'No se pudo guardar el contacto.');
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={globalStyles.container}
    >
      <ScrollView contentContainerStyle={globalStyles.scrollContainer} keyboardShouldPersistTaps="handled">
        
        <View style={globalStyles.headerContainer}>
          <Text style={globalStyles.headerTitle}>Nuevo Contacto</Text>
          <Text style={globalStyles.headerSubtitle}>Añade los datos principales del perfil</Text>
        </View>

        <View style={globalStyles.card}>
          <TextInput 
            style={globalStyles.input} 
            placeholder="Nombre completo" 
            placeholderTextColor="#8E8E93"
            value={nombre} 
            onChangeText={setNombre} 
          />
          <View style={globalStyles.separator} />
          <TextInput 
            style={globalStyles.input} 
            placeholder="Teléfono móvil" 
            placeholderTextColor="#8E8E93"
            value={telefono} 
            onChangeText={setTelefono} 
            keyboardType="phone-pad" 
          />
          <View style={globalStyles.separator} />
          <TextInput 
            style={globalStyles.input} 
            placeholder="Ciudad de residencia" 
            placeholderTextColor="#8E8E93"
            value={ciudad} 
            onChangeText={setCiudad} 
          />
        </View>

        <TouchableOpacity 
          style={globalStyles.button} 
          onPress={handleGuardar}
          activeOpacity={0.8}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={globalStyles.buttonText}>Guardar en la nube</Text>
          )}
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}