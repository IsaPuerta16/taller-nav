import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        drawerStyle: { backgroundColor: '#fff' },
        sceneStyle: { backgroundColor: '#fff' },
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: '#f5f5f5',
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
        }}
      />
      <Drawer.Screen
        name="ajustes"
        options={{
          drawerLabel: 'Ajustes',
          title: 'Ajustes',
        }}
      />
    </Drawer>
  );
}
