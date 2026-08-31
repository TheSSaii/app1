import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../firebase/firebaseConfig';
import { globalStyles } from '../styles/globalStyles';

export default function Lista({ navigation }) {
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contactos'), (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContactos(lista);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.center}>
        <ActivityIndicator size="large" color="#0A84FF" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTitle}>Contactos</Text>
        <Text style={globalStyles.headerSubtitle}>{contactos.length} registros en la nube</Text>
      </View>

      {contactos.length === 0 ? (
        <View style={globalStyles.emptyContainer}>
          <Text style={globalStyles.emptyText}>Sin contactos</Text>
          <Text style={globalStyles.emptySubText}>Toca el botón '+' para agregar el primero.</Text>
        </View>
      ) : (
        <FlatList
          data={contactos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={globalStyles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={globalStyles.cardItem}
              onPress={() => navigation.navigate('Detalle', { id: item.id })}
              activeOpacity={0.7}
            >
              <View>
                <Text style={globalStyles.nombre}>{item.nombre}</Text>
                <Text style={globalStyles.ciudad}>{item.ciudad}</Text>
              </View>
              <Text style={globalStyles.chevron}>›</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity 
        style={globalStyles.floatingButton}
        onPress={() => navigation.navigate('Nuevo')}
        activeOpacity={0.85}
      >
        <Text style={globalStyles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}