import { Slot } from 'expo-router';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AuthLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: insets.top }}>
      <Text style={{ fontSize: 18, paddingHorizontal: 16, paddingVertical: 12 }}>Biblioteca</Text>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </View>
  );
}
