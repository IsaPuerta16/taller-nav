import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Pressable
        onPress={() => router.replace('/')}
        style={{
          paddingVertical: 12,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
        }}>
        <Text>Entrar</Text>
      </Pressable>
    </View>
  );
}
