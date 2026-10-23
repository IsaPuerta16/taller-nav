import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 }}>
      <Pressable
        onPress={() => router.push('/acerca')}
        style={{
          paddingVertical: 12,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
        }}>
        <Text>Acerca de</Text>
      </Pressable>
      <Pressable
        onPress={() => router.replace('/login')}
        style={{
          paddingVertical: 12,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
        }}>
        <Text>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}
