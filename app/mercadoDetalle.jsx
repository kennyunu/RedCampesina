import Feather from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import global, { Colors } from "../Assets/StyleManager";
import { useCanasta } from "../context/CanastaContext";

const API = "http://10.0.2.2:5000";

export default function MercadoDetalle() {
  const { mercadoId, mercadoNombre } = useLocalSearchParams();
  const { agregarItem, items } = useCanasta();

  const [campesinos, setCampesinos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const cantidadCanasta = items.reduce((acc, i) => acc + i.cantidad, 0);

  useEffect(() => {
    fetch(`${API}/api/v1/campesinos/mercado/${mercadoId}`)
      .then((r) => r.json())
      .then((data) => setCampesinos(data.data || []))
      .catch((e) => console.log("Error cargando campesinos:", e));
  }, [mercadoId]);

  // Armar lista plana de productos con info del campesino
  const todosLosProductos = campesinos.flatMap((c) =>
    (c.productor?.productos || []).map((p) => ({
      ...p,
      campesinoId: c.id,
      campesinoNombre: c.productor?.nombre,
      campesinoGranja: c.productor?.granja,
    }))
  );

  const productosFiltrados = todosLosProductos.filter((p) => {
    const q = busqueda.toLowerCase();
    if (!q) return true;
    return (
      p.nombre.toLowerCase().includes(q) ||
      p.campesinoNombre.toLowerCase().includes(q)
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.fondoOscuro }}>
      <ScrollView>
        <View style={global.panelPrincipal}>

          {/* HEADER */}
          <View style={global.header}>
            <Pressable onPress={() => router.back()} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Feather name="arrow-left" size={18} color={Colors.verdeOscuro} />
              <Text style={global.headerTitulo}>Red Campesina</Text>
            </Pressable>

            {/* Canasta con badge */}
            <Pressable onPress={() => router.push("/canasta")} style={{ position: "relative" }}>
              <Feather name="shopping-basket" size={24} color={Colors.verdeOscuro} />
              {cantidadCanasta > 0 && (
                <View style={{
                  position: "absolute", top: -6, right: -6,
                  backgroundColor: Colors.verdeOscuro, borderRadius: 10,
                  width: 18, height: 18, justifyContent: "center", alignItems: "center",
                }}>
                  <Text style={{ color: Colors.blanco, fontSize: 10, fontWeight: "bold" }}>
                    {cantidadCanasta}
                  </Text>
                </View>
              )}
            </Pressable>
          </View>

          {/* TÍTULO */}
          <Text style={global.tituloPagina}>{mercadoNombre}</Text>

          {/* BUSCADOR */}
          <View style={{
            flexDirection: "row", alignItems: "center",
            backgroundColor: Colors.fondoInput, borderRadius: 20,
            paddingHorizontal: 12, marginBottom: 15,
          }}>
            <Feather name="search" size={16} color={Colors.gris} />
            <TextInput
              placeholder="Buscar por producto o campesino"
              value={busqueda}
              onChangeText={setBusqueda}
              style={{ flex: 1, padding: 10 }}
            />
          </View>

          {/* PRODUCTOS */}
          {productosFiltrados.map((p, i) => (
            <ProductoCard
              key={`${p.campesinoId}-${p.id}-${i}`}
              producto={p}
              onReservar={() =>
                agregarItem(p, {
                  id: p.campesinoId,
                  nombre: p.campesinoNombre,
                  granja: p.campesinoGranja,
                })
              }
              onVerCampesino={() =>
                router.push({ pathname: "/productor", params: { campesinoId: p.campesinoId } })
              }
            />
          ))}

        </View>
      </ScrollView>
    </View>
  );
}

function ProductoCard({ producto, onReservar, onVerCampesino }) {
  return (
    <View style={global.tarjeta}>
      <Image
        source={{ uri: producto.imagenes?.[0] }}
        style={global.imagenProducto}
        defaultSource={require("../Assets/imagenes/logos/placeholder.png")}
      />

      {/* Etiquetas */}
      <View style={global.etiquetasRow}>
        {producto.etiquetas?.map((e) => (
          <Text key={e} style={global.etiqueta}>{e}</Text>
        ))}
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{producto.nombre}</Text>

      {/* Campesino — subrayado, lleva a productor */}
      <Pressable onPress={onVerCampesino}>
        <Text style={{ color: Colors.gris, textDecorationLine: "underline", marginTop: 2 }}>
          {producto.campesinoNombre} - {producto.campesinoGranja}
        </Text>
      </Pressable>

      <Text style={[global.textoGris, { marginTop: 6 }]}>
        Precio por {producto.unidad_medida}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
        ${producto.precio_por_unidad?.toLocaleString()}
      </Text>

      <Pressable onPress={onReservar} style={[global.botonVerde, { flex: 0 }]}>
        <Text style={global.botonTexto}>🧺 Reservar</Text>
      </Pressable>
    </View>
  );
}
