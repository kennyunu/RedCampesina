import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import global from "../../Assets/StyleManager";

function abrirMercado(){
  router.push("/mercadoDetalle.jsx");
}

function Comprador() {
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
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Text style={{ color: "#2e7d32", fontWeight: "bold" }}>
            Red Campesina
          </Text>
          <Text>🛒</Text>
        </View>

        <TextInput
          placeholder="Encuentra mercados o productos"
          style={{
            backgroundColor: "#dcd8c0",
            borderRadius: 20,
            padding: 10,
            marginVertical: 15
          }}
        />

        <View style={{
          height: 200,
          backgroundColor: "#cfcfcf",
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text>Mapa aquí</Text>

          <Pressable style={{
            position: "absolute",
            bottom: 10,
            backgroundColor: "#2e7d32",
            padding: 10,
            borderRadius: 20
          }}>
            <Text style={{ color: "#fff" }}>Explorar Más</Text>
          </Pressable>
        </View>

        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 15
        }}>
          Próximos Mercados
        </Text>

        <Pressable onPress={abrirMercado} style={cardStyle}>
                <Text style={tagGreen}>Orgánicos</Text>
                <Text style={title}>Mercado de la Concordia</Text>
                <Text>Mañana</Text>
                <Text>📍 Parque central</Text>
                <Text>⏰ 7:00AM - 4:00PM</Text>
        </Pressable>
        

        <View style={cardStyle}>
          <Text style={tagGreen}>Frescos</Text>
          <Text style={title}>Mercado Salitre</Text>
          <Text>Sábado</Text>
          <Text>📍 Calle primera</Text>
          <Text>⏰ 7:00AM - 4:00PM</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const cardStyle = {
  backgroundColor: "#e2ddc7",
  padding: 15,
  borderRadius: 15,
  marginBottom: 15
};

const tagGreen = {
  backgroundColor: "#cfe8b4",
  paddingHorizontal: 10,
  borderRadius: 10,
  alignSelf: "flex-start"
};

const title = {
  fontWeight: "bold",
  fontSize: 16,
  marginVertical: 5
};

export default Comprador;