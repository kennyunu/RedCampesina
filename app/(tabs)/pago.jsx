import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

function Pago() {

  const { total = 0 } = useLocalSearchParams();
  const [metodo, setMetodo] = useState("nequi");

  function confirmarPago(){
    router.push("compraExitosa");

  }

  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
      <View style={{
        backgroundColor: "#e8e4cf",
        padding: 15,
        borderRadius: 20
      }}>


        <Text style={{ marginBottom: 10 }}>← Canasta</Text>

        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Realiza tu compra
        </Text>


        <View style={{
          backgroundColor: "#dcd8c0",
          padding: 15,
          borderRadius: 15,
          marginVertical: 15
        }}>
          <Text>Valor a pagar</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2e7d32" }}>
            ${Number(total).toLocaleString()}
          </Text>
        </View>

        <Text style={{ fontWeight: "bold" }}>
          Escoge tu forma de pago
        </Text>


        <Pressable onPress={() => setMetodo("nequi")} style={{
          backgroundColor: metodo === "nequi" ? "#dfe8c7" : "#e2ddc7",
          padding: 15,
          borderRadius: 20,
          marginTop: 10
        }}>
          <Text>Nequi / Daviplata</Text>

          {metodo === "nequi" && (
            <View style={{ marginTop: 10, alignItems: "center" }}>
              <Text>Escanea el código QR</Text>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={{ width: 150, height: 150, marginTop: 10 }}
              />
            </View>
          )}
        </Pressable>

        <Pressable onPress={() => setMetodo("banco")} style={{
          backgroundColor: metodo === "banco" ? "#2e7d32" : "#e2ddc7",
          padding: 15,
          borderRadius: 20,
          marginTop: 10
        }}>
          <Text style={{ color: metodo === "banco" ? "#fff" : "#000" }}>
            Transferencia Bancaria
          </Text>

          {metodo === "banco" && (
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "#fff" }}>Banco: Banco Agrario</Text>
              <Text style={{ color: "#fff" }}>Número: 1234 5678 9438</Text>
              <Text style={{ color: "#fff" }}>Tipo: Ahorros</Text>
            </View>
          )}
        </Pressable>

        <Pressable onPress={confirmarPago} style={{
          backgroundColor: "#2e7d32",
          padding: 15,
          borderRadius: 25,
          marginTop: 20
        }}>
          <Text style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold"
          }}>
            Confirmar pago
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

export default Pago;