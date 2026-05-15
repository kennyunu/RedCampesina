import Feather from "@expo/vector-icons/Feather";
import { Image, ScrollView, Text, View } from "react-native";
import global, { Colors } from "../../Assets/StyleManager";
import Footer from "../../components/Footer";

export default function Perfil() {
  // Datos simulados del usuario — luego vendrán del backend de autenticación
  const usuario = {
    nombre: "Carlos H.",
    avatar: null,
  };

  const comprasExitosas = [
    {
      producto: "Huevos de Campo",
      imagen: null,
      precioCU: 25000,
      cantidad: 2,
      total: 50000,
      fecha: "09/02/2026",
    },
  ];

  const pendientes = [
    {
      producto: "Papas Sabaneras",
      imagen: null,
      precioCU: 4200,
      cantidad: "3Kg",
      total: 12600,
      fecha: "27/05/2026",
    },
  ];

  const campesinosContactados = [
    {
      nombre: "Don Juan",
      granja: "Finca La Esperanza",
      avatar: "https://i.pravatar.cc/101",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.fondoOscuro }}>
      <ScrollView>
        <View style={global.panelPrincipal}>

          {/* HEADER */}
          <View style={global.header}>
            <Text style={global.headerTitulo}>Red Campesina</Text>
            <Feather name="shopping-basket" size={22} color={Colors.verdeOscuro} />
          </View>

          <Text style={global.subtitulo}>Cuenta</Text>

          {/* AVATAR */}
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <View style={{
              width: 80, height: 80, borderRadius: 40,
              backgroundColor: Colors.fondoInput,
              justifyContent: "center", alignItems: "center",
            }}>
              <Feather name="user" size={40} color={Colors.gris} />
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 8 }}>
              Hola, {usuario.nombre}
            </Text>
          </View>

          {/* COMPRAS EXITOSAS */}
          <Text style={global.subtitulo}>Compras exitosas</Text>
          {comprasExitosas.map((c, i) => (
            <HistorialCard key={i} item={c} etiqueta={`Recogido el ${c.fecha}`} />
          ))}

          {/* PENDIENTES */}
          <Text style={global.subtitulo}>Pendientes por recoger</Text>
          {pendientes.map((p, i) => (
            <HistorialCard key={i} item={p} etiqueta={`Para recoger el ${p.fecha}`} />
          ))}

          {/* CAMPESINOS CONTACTADOS */}
          <Text style={global.subtitulo}>Compradores contactados</Text>
          {campesinosContactados.map((c, i) => (
            <View key={i} style={[global.tarjeta, { flexDirection: "row", alignItems: "center", gap: 12 }]}>
              <Image
                source={{ uri: c.avatar }}
                style={{ width: 55, height: 55, borderRadius: 28 }}
              />
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{c.nombre}</Text>
                <Text style={global.textoGris}>{c.granja}</Text>
              </View>
            </View>
          ))}

          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

function HistorialCard({ item, etiqueta }) {
  return (
    <View style={global.tarjeta}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <View style={{ width: 55, height: 55, borderRadius: 10, backgroundColor: Colors.fondoInput, justifyContent: "center", alignItems: "center" }}>
          <Feather name="package" size={24} color={Colors.gris} />
        </View>
        <View>
          <Text style={global.textoGris}>Producto:</Text>
          <Text style={{ fontWeight: "bold" }}>{item.producto}</Text>
        </View>
      </View>
      <Text style={global.textoGris}>Precio c/u: ${item.precioCU.toLocaleString()}</Text>
      <Text style={global.textoGris}>Cantidad: {item.cantidad}</Text>
      <Text style={{ fontWeight: "bold", marginTop: 2 }}>Total: ${item.total.toLocaleString()}</Text>
      <Text style={[global.textoGris, { marginTop: 4, fontStyle: "italic" }]}>{etiqueta}</Text>
    </View>
  );
}
