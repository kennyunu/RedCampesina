import { View, Text, Pressable, Image } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

function CompraExitosa() {

  const {
    usuario = "Carlos",
    total = 0
  } = useLocalSearchParams();

  const productos = [
    {
      nombre: "Zanahorias",
      imagen: "../Assets/imagenes/productos/zanahorias.jpg"
    },
    {
      nombre: "Papas Sabaneras",
      imagen: "../Assets/imagenes/productos/papas sabaneras.jpg"
    }
  ];

  function volver(){
    router.replace("/comprador");
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
          ¡Compra exitosa!
        </Text>

        <View style={{
          backgroundColor: "#dcd8c0",
          borderRadius: 20,
          padding: 15,
          width: "100%",
          marginBottom: 20
        }}>

          <Text style={{ marginBottom: 10 }}>
            Usuario: {usuario}
          </Text>

          <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
            Productos:
          </Text>

          {productos.map((p, i) => (
            <View key={i} style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}>
              <Image
                source={{ uri: p.imagen }}
                style={{ width: 50, height: 50, borderRadius: 10 }}
              />
              <Text style={{ marginLeft: 10 }}>
                {p.nombre}
              </Text>
            </View>
          ))}

          <Text style={{
            marginTop: 10,
            fontWeight: "bold"
          }}>
            Total: ${Number(total).toLocaleString()}
          </Text>

          <Text style={{
            marginTop: 10,
            color: "#2e7d32",
            fontWeight: "bold"
          }}>
            ¡Gracias por tu compra!
          </Text>

        </View>

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

export default CompraExitosa;