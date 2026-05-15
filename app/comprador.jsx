import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import global, { Colors } from "../Assets/StyleManager";
import Footer from "./components/Footer";

const API = "https://backredcampesina.onrender.com";

const DIAS_ORDEN = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábados","Domingos"];

export default function Comprador() {
  const [mercados, setMercados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch(`${API}/api/v1/mercados`)
      .then((r) => r.json())
      .then((data) => setMercados(data.data || []))
      .catch((e) => console.log("Error cargando mercados:", e));
  }, []);

  const mercadosFiltrados = mercados.filter((m) => {
    const q = busqueda.toLowerCase();
    if (!q) return true;
    return (
      m.nombre.toLowerCase().includes(q) ||
      m.dias?.some((d) => d.toLowerCase().includes(q))
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.fondoOscuro }}>
      <ScrollView>
        <View style={global.panelPrincipal}>

          {/* HEADER */}
          <View style={global.header}>
            <Text style={global.headerTitulo}>Red Campesina</Text>
            <Pressable onPress={() => router.push("/canasta")}>
              <Image
                source={require("../Assets/imagenes/logos/canasta.png")}
                style={{ width: 28, height: 28 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          {/* BUSCADOR */}
          <View style={{
            flexDirection: "row", alignItems: "center",
            backgroundColor: Colors.fondoInput, borderRadius: 20,
            paddingHorizontal: 12, marginBottom: 15,
          }}>
            <Feather name="search" size={16} color={Colors.gris} />
            <TextInput
              placeholder="Buscar por nombre o día"
              value={busqueda}
              onChangeText={setBusqueda}
              style={{ flex: 1, padding: 10 }}
            />
          </View>

          {/* TÍTULO */}
          <Text style={global.tituloPagina}>Próximos Mercados</Text>

          {/* TARJETAS */}
          {mercadosFiltrados
            .sort((a, b) => DIAS_ORDEN.indexOf(a.dias?.[0]) - DIAS_ORDEN.indexOf(b.dias?.[0]))
            .map((m) => (
              <Pressable
                key={m._id}
                onPress={() => router.push({ pathname: "/mercadoDetalle", params: { mercadoId: m._id, mercadoNombre: m.nombre } })}
                style={global.tarjeta}
              >
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16, flex: 1 }}>{m.nombre}</Text>
                  <Text style={global.etiqueta}>{m.dias?.[0]}</Text>
                </View>
                <Text style={[global.textoGris, { marginTop: 4 }]}>📍 {m.direccion}</Text>
                <Text style={[global.textoGris, { marginTop: 3 }]}>⏰ {m.horario?.inicio} - {m.horario?.fin}</Text>
              </Pressable>
            ))}

        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
