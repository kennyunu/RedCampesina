import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" }, // el footer lo manejamos nosotros
      }}
    >
      <Tabs.Screen name="perfil" options={{ href: null }} />
    </Tabs>
  );
}
