import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import global from "../Assets/StyleManager";

function Registro() {

  function irAComprar(){
    router.replace("./(tabs)/comprador"); 
  }

  /*function irAVender(){
    router.push("/(tabs)/vendedor.jsx");
  }*/

  return (
    <View style={[global.container, { backgroundColor: "#1c1c1c" }]}>

      <View style={{
        backgroundColor: "#e8e4cf",
        flex: 1,
        borderRadius: 20,
        padding: 20
      }}>

        <Text style={{
          textAlign: "center",
          color: "#2e7d32",
          fontWeight: "600"
        }}>
          Red Campesina
        </Text>

        <Text style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: "bold",
          color: "#2e7d32",
          marginVertical: 20
        }}>
          Bienvenido a nuestra app!
        </Text>

        <Pressable onPress={irAComprar} style={{
          backgroundColor: "#dfe8c7",
          borderRadius: 20,
          padding: 20,
          marginBottom: 20
        }}>

          <Text style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#2e7d32"
          }}>
            Quiero comprar
          </Text>

          <Text style={{
            textAlign: "center",
            color: "#4caf50"
          }}>
            Registrar como comprador →
          </Text>

        </Pressable>

        <Pressable style={{
          backgroundColor: "#e8dcc7",
          borderRadius: 20,
          padding: 20
        }}>

          <Text style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#a67c52"
          }}>
            Quiero vender
          </Text>

          <Text style={{
            textAlign: "center",
            color: "#a67c52"
          }}>
            Registrar como vendedor →
          </Text>

        </Pressable>

      </View>

    </View>
  );
}

export default Registro;