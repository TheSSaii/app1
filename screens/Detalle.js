import * as Haptics from 'expo-haptics';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../firebase/firebaseConfig';
import { globalStyles } from '../styles/globalStyles';

export default function Detalle({ route, navigation }) {
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    async function obtenerContacto() {
      try {
        const docRef = doc(db, 'contactos', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setNombre(data.nombre);
          setTelefono(data.telefono);
          setCiudad(data.ciudad);
        }
      } catch (error) {
        Alert.alert('Error', 'No se pudo cargar el contacto.');
      } finally {
        setLoading(false);
      }
    }
    obtenerContacto();
  }, [id]);

  const handleActualizar = async () => {
    if (!nombre.trim() || !telefono.trim() || !ciudad.trim()) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos.');
      return;
    }

    try {
      setGuardando(true);
      const docRef = doc(db, 'contactos', id);
      await updateDoc(docRef, { nombre, telefono, ciudad });
      setEditando(false);

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert('¡Actualizado!', 'El contacto se actualizó correctamente.');
    } catch (error) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', 'No se pudo actualizar el contacto.');
    } finally {
      setGuardando(false);
    }
  };

  const handleEliminar = () => {
    Alert.alert(
      'Eliminar Contacto',
      '¿Estás seguro de que deseas eliminar este contacto? Esta acción no se puede deshacer.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive', 
          onPress: async () => {
            try {
              const docRef = doc(db, 'contactos', id);
              await deleteDoc(docRef);

              // Háptico de éxito y alerta antes de salir
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              Alert.alert(
                'Contacto eliminado',
                'El registro ha sido borrado de la base de datos.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
              );
            } catch (error) {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              Alert.alert('Error', 'No se pudo eliminar el contacto.');
            }
          } 
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={globalStyles.center}>
        <ActivityIndicator size="large" color="#0A84FF" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={globalStyles.container}
    >
      <ScrollView contentContainerStyle={globalStyles.scrollContainer} keyboardShouldPersistTaps="handled">
        
        <View style={globalStyles.headerRow}>
          <Text style={globalStyles.headerTitle}>{editando ? 'Editar' : 'Detalles'}</Text>
          {!editando && (
            <TouchableOpacity onPress={() => setEditando(true)}>
              <Text style={globalStyles.editText}>Editar</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={globalStyles.card}>
          <View style={globalStyles.fieldContainer}>
            <Text style={globalStyles.fieldLabel}>Nombre</Text>
            {editando ? (
              <TextInput style={globalStyles.input} value={nombre} onChangeText={setNombre} />
            ) : (
              <Text style={globalStyles.fieldValue}>{nombre}</Text>
            )}
          </View>

          <View style={globalStyles.separator} />

          <View style={globalStyles.fieldContainer}>
            <Text style={globalStyles.fieldLabel}>Teléfono</Text>
            {editando ? (
              <TextInput style={globalStyles.input} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
            ) : (
              <Text style={globalStyles.fieldValue}>{telefono}</Text>
            )}
          </View>

          <View style={globalStyles.separator} />

          <View style={globalStyles.fieldContainer}>
            <Text style={globalStyles.fieldLabel}>Ciudad</Text>
            {editando ? (
              <TextInput style={globalStyles.input} value={ciudad} onChangeText={setCiudad} />
            ) : (
              <Text style={globalStyles.fieldValue}>{ciudad}</Text>
            )}
          </View>
        </View>

        {editando ? (
          <>
            <TouchableOpacity style={globalStyles.button} onPress={handleActualizar} disabled={guardando}>
              <Text style={globalStyles.buttonText}>{guardando ? 'Guardando...' : 'Guardar Cambios'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[globalStyles.button, globalStyles.cancelButton]} onPress={() => setEditando(false)}>
              <Text style={globalStyles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={[globalStyles.button, globalStyles.deleteButton]} onPress={handleEliminar}>
            <Text style={globalStyles.deleteButtonText}>Eliminar Contacto</Text>
          </TouchableOpacity>
        )}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}