import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import global, { Colors } from "../Assets/StyleManager";
import Footer from "../components/Footer";
import { useCanasta } from "../context/CanastaContext";

export default function Canasta() {
  const { items, aumentar, disminuir, eliminar, total } = useCanasta();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.fondoOscuro }}>
      <ScrollView>
        <View style={global.panelPrincipal}>

          {/* HEADER */}
          <View style={global.header}>
            <Pressable
              onPress={() => router.back()}
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Feather name="arrow-left" size={18} color={Colors.verdeOscuro} />
              <Text style={global.headerTitulo}>Mercado de la Concordia</Text>
            </Pressable>
          </View>

          <Text style={global.tituloPagina}>Tu canasta actual</Text>
          <Text style={[global.textoGris, { marginBottom: 15 }]}>
            Tienes actualmente {items.length} producto{items.length !== 1 ? "s" : ""} reservado{items.length !== 1 ? "s" : ""} en tu canasta.
          </Text>

          {items.length === 0 && (
            <Text style={[global.textoGris, { textAlign: "center", marginTop: 30 }]}>
              Tu canasta está vacía 🧺
            </Text>
          )}

          {items.map((item) => (
            <ItemCanasta
              key={item.id}
              item={item}
              onAumentar={() => aumentar(item.id)}
              onDisminuir={() => disminuir(item.id)}
              onEliminar={() => eliminar(item.id)}
            />
          ))}

          {/* TOTAL */}
          {items.length > 0 && (
            <>
              <View style={global.tarjetaResumen}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Precio Total</Text>
                <Text style={{ fontSize: 22, fontWeight: "bold", color: Colors.verdeOscuro }}>
                  ${total.toLocaleString()}
                </Text>
                <Text style={[global.textoGris, { marginTop: 8, fontSize: 12 }]}>
                  ℹ️ Al reservar, aseguras estos productos para el mercado del próximo sábado.
                  Recibirás una notificación cuando estén listos para recoger.
                </Text>
              </View>

              <View style={global.botonesRow}>
                <Pressable
                  onPress={() => router.push({ pathname: "/pago", params: { total } })}
                  style={global.botonVerdeMedio}
                >
                  <Text style={global.botonTexto}>Ir a pagar →</Text>
                </Pressable>

                <Pressable
                  onPress={() => router.push("/reservaExitosa")}
                  style={global.botonVerde}
                >
                  <Text style={global.botonTexto}>Reservar</Text>
                </Pressable>
              </View>
            </>
          )}

        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

function ItemCanasta({ item, onAumentar, onDisminuir, onEliminar }) {
  return (
    <View style={global.tarjeta}>
      <Image
        source={{ uri: item.imagen }}
        style={global.imagenProducto}
        defaultSource={require("../Assets/imagenes/logos/placeholder.png")}
      />

      {/* Etiquetas del backend */}
      <View style={global.etiquetasRow}>
        {item.etiquetas?.map((e) => (
          <Text key={e} style={global.etiqueta}>{e}</Text>
        ))}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.nombre}</Text>
        <Text style={{ fontWeight: "bold", color: Colors.verdeOscuro }}>
          ${(item.precio * item.cantidad).toLocaleString()}
        </Text>
      </View>

      {/* Campesino — sin subrayado, sin link */}
      <Text style={global.textoGris}>
        {item.campesinoNombre} - {item.campesinoGranja}
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12, gap: 12 }}>
        <Pressable onPress={onDisminuir} style={styles.btnCantidad}>
          <Feather name="minus" size={14} color={Colors.verdeOscuro} />
        </Pressable>

        <Text style={{ fontWeight: "bold", fontSize: 16, minWidth: 20, textAlign: "center" }}>
          {item.cantidad}
        </Text>

        <Pressable onPress={onAumentar} style={styles.btnCantidad}>
          <Feather name="plus" size={14} color={Colors.verdeOscuro} />
        </Pressable>

        <Pressable onPress={onEliminar} style={{ marginLeft: "auto", flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Feather name="trash-2" size={14} color={Colors.rojo} />
          <Text style={{ color: Colors.rojo }}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = {
  btnCantidad: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.verdeOscuro,
    justifyContent: "center",
    alignItems: "center",
  },
};
