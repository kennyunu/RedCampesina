import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

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

function CompraExitosa() {
  const { total = 0, items: itemsParam = "[]" } = useLocalSearchParams();

  const items = JSON.parse(itemsParam);

  function volver() {
    router.replace("/comprador");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1c", justifyContent: "center", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <View style={{ backgroundColor: "#e8e4cf", borderRadius: 20, padding: 20, alignItems: "center" }}>

          <Text style={{ color: "#2e7d32", fontWeight: "bold", marginBottom: 20 }}>
            Red Campesina
          </Text>

          <View style={{
            width: 120, height: 120, borderRadius: 60,
            borderWidth: 8, borderColor: "#2e7d32",
            justifyContent: "center", alignItems: "center", marginBottom: 15,
          }}>
            <Text style={{ fontSize: 50, color: "#2e7d32" }}>✔</Text>
          </View>

          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#2e7d32", marginBottom: 20 }}>
            ¡Compra exitosa!
          </Text>

          <View style={{ backgroundColor: "#dcd8c0", borderRadius: 20, padding: 15, width: "100%", marginBottom: 20 }}>

            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Productos:</Text>

            {items.map((item, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <Image
                  source={
                    item.imagen
                      ? { uri: item.imagen }
                      : (FOTOS_PRODUCTOS[item.nombre] ?? require("../Assets/imagenes/logos/placeholder.jpg"))
                  }
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>{item.nombre}</Text>
                  <Text style={{ color: "#666", fontSize: 12 }}>
                    {item.cantidad} {item.unidad} — ${(item.precio * item.cantidad).toLocaleString()}
                  </Text>
                </View>
              </View>
            ))}

            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              Total: ${Number(total).toLocaleString()}
            </Text>

            <Text style={{ marginTop: 10, color: "#2e7d32", fontWeight: "bold" }}>
              ¡Gracias por tu compra!
            </Text>
          </View>

          <Pressable onPress={volver} style={{
            backgroundColor: "#2e7d32", padding: 12,
            borderRadius: 25, width: "100%",
          }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
              Volver
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </View>
  );
}

export default CompraExitosa;
