import 'react-native-gesture-handler';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="dark" />  
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#000',
          contentStyle: { backgroundColor: '#fff' },
        }}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="libro/[id]" options={{ title: 'Detalle' }} />
        <Stack.Screen
          name="acerca"
          options={{ presentation: 'modal', title: 'Acerca de' }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
