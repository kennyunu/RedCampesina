import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

function Productor() {

  const { id } = useLocalSearchParams();

  // luego esto viene del backend
  const productor = {
    nombre: "Don Juan",
    finca: "Finca La Esperanza",
    descripcion: "Producción de productos frescos y orgánicos...",
    anios: 30,
    rating: 4.5,
    ordenes: 300,
    imagen: "../Assets/imagenes/productores/don juan.jpg"
  };

  const productos = [
    {
      nombre: "Papas Sabaneras",
      precio: 4200,
      imagen: "../Assets/imagenes/productos/papas.jpg"
    }
  ];

  function volver(){
    router.back();
  }

  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
      <View style={{
        backgroundColor: "#e8e4cf",
        padding: 15,
        borderRadius: 20
      }}>

        {/* HEADER */}
        <Pressable onPress={volver}>
          <Text>← Red Campesina</Text>
        </Pressable>

        {/* NOMBRE */}
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#2e7d32",
          marginVertical: 10
        }}>
          {productor.nombre} - {productor.finca}
        </Text>

        {/* IMAGEN */}
        <Image
          source={{ uri: productor.imagen }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 20
          }}
        />

        {/* DESCRIPCIÓN */}
        <Text style={{
          marginVertical: 15,
          textAlign: "center"
        }}>
          {productor.descripcion}
        </Text>

        {/* MÉTRICAS */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}>

          <InfoBox titulo="Años activo" valor={`${productor.anios} años`} />
          <InfoBox titulo="Puntuación" valor={`${productor.rating}/5`} />

        </View>

        <View style={{ marginTop: 10 }}>
          <InfoBox titulo="Órdenes realizadas" valor={`+${productor.ordenes}`} />
        </View>

        {/* PRODUCTOS */}
        <Text style={{
          fontSize: 18,
          fontWeight: "bold",
          marginVertical: 15,
          color: "#2e7d32"
        }}>
          Productos en venta
        </Text>

        {productos.map((p, i) => (
          <ProductoMini key={i} producto={p} />
        ))}

      </View>
    </ScrollView>
  );
}