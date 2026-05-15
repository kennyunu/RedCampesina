import Feather from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import global, { Colors } from "../Assets/StyleManager";

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

const FOTOS_CAMPESINOS = [
  require("../Assets/imagenes/proveedores/campesino1.webp"),
  require("../Assets/imagenes/proveedores/campesino2.webp"),
  require("../Assets/imagenes/proveedores/campesino3.webp"),
  require("../Assets/imagenes/proveedores/campesino4.jpg"),
  require("../Assets/imagenes/proveedores/campesino5.jpg"),
  require("../Assets/imagenes/proveedores/campesino6.avif"),
  require("../Assets/imagenes/proveedores/campesino7.jpg"),
  require("../Assets/imagenes/proveedores/campesino8.avif"),
  require("../Assets/imagenes/proveedores/campesino9.avif"),
  require("../Assets/imagenes/proveedores/campesino10.avif"),
  require("../Assets/imagenes/proveedores/campesino11.jpg"),
  require("../Assets/imagenes/proveedores/campesino12.avif"),
  require("../Assets/imagenes/proveedores/campesino13.webp"),
  require("../Assets/imagenes/proveedores/campesino14.jpg"),
  require("../Assets/imagenes/proveedores/campesino15.avif"),
  require("../Assets/imagenes/proveedores/campesino16.jpg"),
  require("../Assets/imagenes/proveedores/campesino17.avif"),
  require("../Assets/imagenes/proveedores/campesino18.avif"),
  require("../Assets/imagenes/proveedores/campesino19.jpg"),
  require("../Assets/imagenes/proveedores/campesino20.jpg"),
];

const DESCRIPCIONES = [
  "Es un emprendimiento campesino dedicado a la producción y venta de productos frescos, orgánicos y de alta calidad, cultivados directamente en su finca.",
  "Su oferta incluye alimentos seleccionados con cuidado, garantizando sabor natural, frescura y prácticas sostenibles.",
  "Lleva al campo a la mesa productos saludables y confiables, cultivados con tradición y respeto por la tierra.",
  "Trabaja con métodos de cultivo tradicionales, asegurando productos libres de químicos dañinos y llenos de sabor.",
  "Cada cosecha es el resultado de años de experiencia campesina, dedicación y amor por la agricultura colombiana.",
  "Su compromiso con la calidad se refleja en cada producto que llega a tus manos, directo del campo a tu mesa.",
  "Apoya la economía campesina local y disfruta de productos frescos que hacen parte del patrimonio gastronómico colombiano.",
  "Cultivan con responsabilidad ambiental, cuidando los suelos y el agua para las generaciones futuras.",
  "Sus productos pasan por un riguroso proceso de selección para garantizar que solo llegue lo mejor a tu canasta.",
  "Finca familiar con más de una generación dedicada al campo, manteniendo vivas las tradiciones agrícolas de la región.",
  "Cada temporada trae nuevos productos y sabores que reflejan la diversidad agrícola de nuestro territorio.",
  "El trabajo en el campo comienza antes del amanecer; su dedicación garantiza que los productos lleguen frescos cada semana.",
  "Practican la rotación de cultivos y el compostaje, promoviendo una agricultura sostenible y respetuosa con el ecosistema.",
  "Sus productos han sido reconocidos en ferias campesinas locales por su calidad y sabor inigualable.",
  "Con cada compra apoyas directamente a una familia campesina colombiana y contribuyes al desarrollo rural sostenible.",
  "La finca cuenta con sistemas de recolección de agua lluvia y energías renovables para una producción más limpia.",
  "Todos los productos son cosechados en su punto óptimo de madurez para garantizar el mejor sabor y nutrición.",
  "La experiencia acumulada en el campo les permite ofrecer productos de temporada con precios justos para todos.",
  "Su relación directa con el consumidor les permite recibir retroalimentación y mejorar continuamente su oferta.",
  "Creen en el comercio justo y en la importancia de que el productor reciba una remuneración digna por su trabajo.",
];

export default function Productor() {
  const { campesinoId } = useLocalSearchParams();
  const [campesino, setCampesino] = useState(null);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/v1/campesinos`)
      .then((r) => r.json())
      .then((data) => {
        const encontrado = (data.data || []).find((c) => c.id === campesinoId);
        setCampesino(encontrado || null);
      })
      .catch((e) => console.log("Error cargando campesino:", e));
  }, [campesinoId]);

  const productosAleatorios = useMemo(() => {
    if (!campesino) return [];
    const todos = campesino.productor?.productos || [];
    const mezclados = [...todos].sort(() => Math.random() - 0.5);
    return mezclados.slice(0, 3);
  }, [campesino]);

  const productosRestantes = useMemo(() => {
    if (!campesino) return [];
    const todos = campesino.productor?.productos || [];
    const mostrados = new Set(productosAleatorios.map((p) => p.id));
    return todos.filter((p) => !mostrados.has(p.id));
  }, [campesino, productosAleatorios]);

  if (!campesino) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.fondoOscuro, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: Colors.blanco }}>Cargando...</Text>
      </View>
    );
  }

  const { nombre, granja, productos } = campesino.productor;

  const hashId = campesino.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const descripcion = DESCRIPCIONES[hashId % DESCRIPCIONES.length];
  const fotoCampesino = FOTOS_CAMPESINOS[hashId % FOTOS_CAMPESINOS.length];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.fondoOscuro }}>
      <ScrollView>
        <View style={global.panelPrincipal}>

          {/* HEADER */}
          <Pressable onPress={() => router.back()} style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Feather name="arrow-left" size={18} color={Colors.verdeOscuro} />
            <Text style={global.headerTitulo}>Red Campesina</Text>
          </Pressable>

          {/* NOMBRE */}
          <Text style={[global.tituloPagina, { color: Colors.verdeOscuro }]}>
            {nombre} – {granja}
          </Text>

          {/* IMAGEN */}
          <Image
            source={fotoCampesino}
            style={{ width: "100%", height: 220, borderRadius: 20, marginBottom: 15 }}
            resizeMode="cover"
          />

          {/* INFO GENERAL */}
          <Text style={global.subtitulo}>Información general</Text>

          <Text style={[global.textoGris, { marginBottom: 8, lineHeight: 20 }]}>
            {descripcion}
          </Text>

          {/* PRODUCTOS PRINCIPALES */}
          <Text style={global.subtitulo}>Productos principales en venta</Text>

          {productosAleatorios.map((p) => (
            <ProductoMini key={p.id} producto={p} />
          ))}

          {/* VER MÁS */}
          {productosRestantes.length > 0 && (
            <>
              <Pressable onPress={() => setVerMas(!verMas)}>
                <Text style={{
                  color: Colors.verdeMedio,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginVertical: 10,
                  fontSize: 15,
                }}>
                  {verMas ? "Ver menos ▲" : `Ver más productos (${productosRestantes.length}) ▼`}
                </Text>
              </Pressable>

              {verMas && productosRestantes.map((p) => (
                <ProductoMini key={p.id} producto={p} />
              ))}
            </>
          )}

        </View>
      </ScrollView>
    </View>
  );
}

function ProductoMini({ producto }) {
  return (
    <View style={[global.tarjeta, { flexDirection: "row", gap: 12, alignItems: "center" }]}>
      <Image
        source={
          producto.imagenes?.[0]
            ? { uri: producto.imagenes[0] }
            : (FOTOS_PRODUCTOS[producto.nombre] ?? require("../Assets/imagenes/logos/placeholder.jpg"))
        }
        style={{ width: 70, height: 70, borderRadius: 12 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{producto.nombre}</Text>
        <Text style={global.textoGris}>Precio por {producto.unidad_medida}</Text>
        <Text style={{ fontWeight: "bold", color: Colors.verdeOscuro }}>
          ${producto.precio_por_unidad?.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}
