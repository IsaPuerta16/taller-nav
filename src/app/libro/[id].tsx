import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function LibroDetalle() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libroId = Array.isArray(id) ? id[0] : id;
  const libro = LIBROS.find((item) => item.id === libroId);

  if (!libro) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16, gap: 8 }}>
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text>{libro.titulo}</Text>
      <Text>{libro.autor}</Text>
      <Text>{libro.anio}</Text>
    </View>
  );
}
