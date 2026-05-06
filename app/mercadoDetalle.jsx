import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

function MercadoDetalle() {

  function volver(){
    router.back();
  }

  function irACanasta(){
    router.replace("/canasta.jsx");
  }

  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c" }}>

      <View style={{
        backgroundColor: "#e8e4cf",
        flex: 1,
        padding: 15,
        borderRadius: 20
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10
        }}>
          <Pressable onPress={volver}>
            <Text style={{ marginRight: 10 }}>←</Text>
          </Pressable>

          <Text style={{ color: "#2e7d32", fontWeight: "bold" }}>
            Red Campesina
          </Text>
        </View>

        <Text style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10
        }}>
          Mercado de la Concordia
        </Text>

        <TextInput
          placeholder="Buscar productos..."
          style={{
            backgroundColor: "#dcd8c0",
            borderRadius: 20,
            padding: 10,
            marginBottom: 15
          }}
        />

        <ProductoCard
          nombre="Papas Sabaneras"
          descripcion="Don Juan - Finca La Esperanza"
          precio="$4.200"
          imagen="../Assets/imagenes/productos/Papas sabaneras.jpg"
        />

        <ProductoCard
          nombre="Zanahorias"
          descripcion="Don Juan - Finca La Esperanza"
          precio="$2.800"
          imagen="../Assets/imagenes/productos/Zanahorias.webp"
        />

        <ProductoCard
          nombre="Arroz"
          descripcion="Finca Los Sauces"
          precio="$12.500"
          imagen="../Assets/imagenes/productos/Arroz.jpg"
        />

      </View>
    </ScrollView>
  );

function ProductoCard({ nombre, descripcion, precio, imagen }) {
  return (
    <View style={{
      backgroundColor: "#e2ddc7",
      borderRadius: 20,
      padding: 15,
      marginBottom: 20
    }}>

      <Image
        source={{ uri: imagen }}
        style={{
          width: "100%",
          height: 150,
          borderRadius: 15,
          marginBottom: 10
        }}
      />

      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        {nombre}
      </Text>

      <Text style={{ color: "#666" }}>
        {descripcion}
      </Text>

      <Text style={{ marginVertical: 5 }}>
        Precio por kilo
      </Text>

      <Text style={{ fontWeight: "bold" }}>
        {precio}
      </Text>

      <Pressable onPress={irACanasta} style={{
        backgroundColor: "#2e7d32",
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center"
      }}>
        <Text style={{ color: "#fff" }}>
          Reservar
        </Text>
      </Pressable>

    </View>
  );
}
}

export default MercadoDetal