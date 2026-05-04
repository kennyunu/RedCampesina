import Feather from '@expo/vector-icons/Feather';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#2e7d32"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20
        },

        // TAB BAR
        tabBarStyle: {
          backgroundColor: "#1c1c1c",
          height: 65,
          paddingTop: 5,
          borderTopWidth: 0
        },

        tabBarShowLabel: false,

        tabBarActiveTintColor: "#4caf50",
        tabBarInactiveTintColor: "#aaa"
      }}
    >

      <Tabs.Screen
        name="registro"
        options={{
          headerTitle: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="comprador"
        options={{
          headerTitle: "Mercados",
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="mercadoDetalle"
        options={{
          headerTitle: "Detalle",
          href: null
        }}
      />


      <Tabs.Screen
        name="canasta"
        options={{
          headerTitle: "Canasta",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          )
        }}
      />


      <Tabs.Screen
        name="pago"
        options={{
          headerTitle: "Pago",
          href: null 
        }}
      />


      <Tabs.Screen
        name="compraExitosa"
        options={{
          headerTitle: "Compra",
          href: null
        }}
      />

      <Tabs.Screen
        name="reservaExitosa"
        options={{
          headerTitle: "Reserva",
          href: null
        }}
      />

    </Tabs>
  );
}