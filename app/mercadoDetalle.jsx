import Feather from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import global, { Colors } from "../Assets/StyleManager";
import { useCanasta } from "./context/CanastaContext";

const API = "https://backredcampesina.onrender.com";

const FOTOS_PRODUCTOS = {
  "Aguacate":           require("../Assets/imagenes/productos/Aguacate.jpg"),
  "Arroz":              require("../Assets/imagenes/productos/Arroz.jpg"),
  "Arveja":             require("../Assets/imagenes/productos/Arveja.jpg"),
  "Banano":             require("../Assets/imagenes/productos/Banano.png"),
  "Brocoli":            require("../Assets/imagenes/productos/Brocoli.avif"),
  "Café en grano":      require("../Assets/imagenes/productos/Café en grano.avif"),
  "Cebolla cabezona":   require("../Assets/imagenes/productos/Cebolla cabezona.jpg"),
  "Cebolla larga":      require("../Assets/imagenes/productos/Cebolla larga.webp"),
  "Cilantro":           require("../Assets/imagenes/productos/Cilantro.jpg"),
  "Espinaca":           require("../Assets/imagenes/productos/Espinaca.webp"),
  "Fresa":              require("../Assets/imagenes/productos/Fresa.jpg"),
  "Frijol rojo":        require("../Assets/imagenes/productos/Frijol rojo.webp"),
  "Guanabana":          require("../Assets/imagenes/productos/Guanabana.jpg"),
  "Habichuela":         require("../Assets/imagenes/productos/Habichuela.webp"),
  "Lechuga crespa":     require("../Assets/imagenes/productos/Lechuga crespa.jpg"),
  "Lulo":               require("../Assets/imagenes/productos/Lulo.jpg"),
  "Mango":              require("../Assets/imagenes/productos/Mango.webp"),
  "Manzana":            require("../Assets/imagenes/productos/Manzana.jpg"),
  "Maíz":               require("../Assets/imagenes/productos/Maíz.jpg"),
  "Melon":              require("../Assets/imagenes/productos/Melon.jpg"),
  "Mora":               require("../Assets/imagenes/productos/Mora.jpg"),
  "Naranja":            require("../Assets/imagenes/productos/Naranja.jpg"),
  "Papas sabaneras":    require("../Assets/imagenes/productos/Papas sabaneras.avif"),
  "Papaya":             require("../Assets/imagenes/productos/Papaya.webp"),
  "Patilla":            require("../Assets/imagenes/productos/Patilla.jpg"),
  "Pepino cohombro":    require("../Assets/imagenes/productos/Pepino cohombro.jpg"),
  "Pimentón":           require("../Assets/imagenes/productos/Pimentón.webp"),
  "Piña":               require("../Assets/imagenes/productos/Piña.webp"),
  "Platano verde":      require("../Assets/imagenes/productos/Platano verde.webp"),
  "Plátano (Maduro)":   require("../Assets/imagenes/productos/Plátano (Maduro).jpg"),
  "Tomate chonto":      require("../Assets/imagenes/productos/Tomate chonto.jpg"),
  "Yuca":               require("../Assets/imagenes/productos/Yuca.jpg"),
  "Zanahoria":          require("../Assets/imagenes/productos/Zanahoria.webp"),
  "Zuccini":            require("../Assets/imagenes/productos/Zuccini.webp"),
};

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
              <Image
                source={require("../Assets/imagenes/logos/canasta.png")}
                style={{ width: 28, height: 28 }}
                resizeMode="contain"
              />
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
        source={
          producto.imagenes?.[0]
            ? { uri: producto.imagenes[0] }
            : (FOTOS_PRODUCTOS[producto.nombre] ?? require("../Assets/imagenes/logos/placeholder.jpg"))
        }
        style={global.imagenProducto}
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

      <Pressable onPress={onReservar} style={[global.botonVerde, { flex: 0, width: "100%", paddingHorizontal: 20 }]}>
        <Text style={global.botonTexto}>🧺 Reservar</Text>
      </Pressable>
    </View>
  );
}
