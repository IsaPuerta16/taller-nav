import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Acerca() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <Pressable
        onPress={() => router.back()}
        style={{
          paddingVertical: 12,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
        }}>
        <Text>Cerrar</Text>
      </Pressable>
    </View>
  );
}
