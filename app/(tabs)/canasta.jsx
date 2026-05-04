import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

function irAReservar(){
  router.push("/reservaExitosa");
}

function irAPagar(){
  router.push("/pago.jsx");
}

function Canasta() {

  const [items, setItems] = useState([
    {
      id: 1,
      nombre: "Papas Sabaneras",
      precio: 4200,
      cantidad: 3,
      imagen: "../Assets/imagenes/productos/Papas sabaneras.jpg"
    },
    {
      id: 2,
      nombre: "Zanahorias",
      precio: 2800,
      cantidad: 2,
      imagen: "../Assets/imagenes/productos/Zanahorias.webp"
    }
  ]);

  function aumentar(id){
    setItems(items.map(item =>
      item.id === id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    ));
  }

  function disminuir(id){
    setItems(items.map(item =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    ));
  }

  function eliminar(id){
    setItems(items.filter(item => item.id !== id));
  }

  const total = items.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <ScrollView style={{ backgroundColor: "#1c1c1c" }}>
      <View style={{
        backgroundColor: "#e8e4cf",
        padding: 15,
        borderRadius: 20
      }}>

        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Tu canasta actual
        </Text>

        <Text style={{ marginBottom: 15 }}>
          Tienes {items.length} productos reservados
        </Text>

        {items.map(item => (
          <ItemCanasta
            key={item.id}
            item={item}
            aumentar={aumentar}
            disminuir={disminuir}
            eliminar={eliminar}
          />
        ))}

        <View style={{
          backgroundColor: "#dcd8c0",
          padding: 15,
          borderRadius: 15,
          marginTop: 20
        }}>
          <Text>Precio Total</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2e7d32" }}>
            ${total.toLocaleString()}
          </Text>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20
        }}>

          <Pressable onPress={irAPagar} style={{
            backgroundColor: "#4caf50",
            padding: 10,
            borderRadius: 20,
            flex: 1,
            marginRight: 5
          }}>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Ir a pagar →
            </Text>
          </Pressable>

          <Pressable onPress={irAReservar} style={{
            backgroundColor: "#2e7d32",
            padding: 10,
            borderRadius: 20,
            flex: 1,
            marginLeft: 5
          }}>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Reservar
            </Text>
          </Pressable>

        </View>

      </View>
    </ScrollView>
  );

  function ItemCanasta({ item, aumentar, disminuir, eliminar }) {
  return (
    <View style={{
      backgroundColor: "#e2ddc7",
      borderRadius: 20,
      padding: 15,
      marginBottom: 15
    }}>

      <Image
        source={{ uri: item.imagen }}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 15
        }}
      />

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        {item.nombre}
      </Text>

      <Text>${(item.precio * item.cantidad).toLocaleString()}</Text>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
      }}>

        <Pressable onPress={() => disminuir(item.id)}>
          <Text>➖</Text>
        </Pressable>

        <Text style={{ marginHorizontal: 10 }}>
          {item.cantidad}
        </Text>

        <Pressable onPress={() => aumentar(item.id)}>
          <Text>➕</Text>
        </Pressable>

        <Pressable onPress={() => eliminar(item.id)} style={{ marginLeft: 20 }}>
          <Text style={{ color: "red" }}>Eliminar</Text>
        </Pressable>

      </View>

    </View>
  );
}
}