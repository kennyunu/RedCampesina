import { View, Text, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

function ReservaExitosa() {

  const { usuario = "Usuario", codigo = "A0000" } = useLocalSearchParams();

  function volver(){
    router.replace("/comprador.jsx"); 
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#1c1c1c",
      justifyContent: "center",
      padding: 20
    }}>

      <View style={{
        backgroundColor: "#e8e4cf",
        borderRadius: 20,
        padding: 20,
        alignItems: "center"
      }}>

        <Text style={{
          color: "#2e7d32",
          fontWeight: "bold",
          marginBottom: 20
        }}>
          Red Campesina
        </Text>

        <View style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          borderWidth: 8,
          borderColor: "#2e7d32",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15
        }}>
          <Text style={{ fontSize: 50, color: "#2e7d32" }}>✔</Text>
        </View>

        <Text style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#2e7d32",
          marginBottom: 20
        }}>
          ¡Reserva exitosa!
        </Text>

        <View style={{
          backgroundColor: "#dcd8c0",
          borderRadius: 20,
          padding: 15,
          width: "100%",
          alignItems: "center",
          marginBottom: 15
        }}>

          <Text>Usuario: {usuario}</Text>

          <Text style={{ marginTop: 10 }}>
            Código de la reserva
          </Text>

          <Text style={{
            backgroundColor: "#cfe8b4",
            padding: 10,
            borderRadius: 15,
            fontWeight: "bold",
            marginTop: 5
          }}>
            {codigo}
          </Text>

        </View>

        <Text style={{
          textAlign: "center",
          fontSize: 12,
          marginBottom: 20
        }}>
          Recuerde presentar su código para reclamar su producto.
        </Text>

        <Pressable onPress={volver} style={{
          backgroundColor: "#2e7d32",
          padding: 12,
          borderRadius: 25,
          width: "100%"
        }}>
          <Text style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold"
          }}>
            Volver
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

export default ReservaExitosa;