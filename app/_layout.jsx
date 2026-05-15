import { Stack } from "expo-router";
import { CanastaProvider } from "../context/CanastaContext";

export default function RootLayout() {
  return (
    <CanastaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="comprador" options={{ headerShown: false }} />
        <Stack.Screen name="mercadoDetalle" options={{ headerShown: false }} />
        <Stack.Screen name="canasta" options={{ headerShown: false }} />
        <Stack.Screen name="productor" options={{ headerShown: false }} />
        <Stack.Screen name="pago" options={{ headerShown: false }} />
        <Stack.Screen name="compraExitosa" options={{ headerShown: false }} />
        <Stack.Screen name="reservaExitosa" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CanastaProvider>
  );
}
