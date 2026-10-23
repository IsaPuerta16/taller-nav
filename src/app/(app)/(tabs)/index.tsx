import { Link } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function Inicio() {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: '#fff' }}
      data={LIBROS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link href={{ pathname: '/libro/[id]', params: { id: item.id } }} asChild>
          <Pressable style={{ paddingHorizontal: 16, paddingVertical: 14 }}>
            <Text>{item.titulo}</Text>
            <Text>{item.autor}</Text>
          </Pressable>
        </Link>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: '#eee', marginHorizontal: 16 }} />
      )}
    />
  );
}
