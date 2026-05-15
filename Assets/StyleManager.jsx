import { StyleSheet } from "react-native";

// ─── COLORES ───────────────────────────────────────────────
export const Colors = {
  fondoOscuro: "#1c1c1c",
  fondoCrudo: "#e8e4cf",
  fondoTarjeta: "#e2ddc7",
  fondoInput: "#dcd8c0",
  verdeOscuro: "#2e7d32",
  verdeMedio: "#4caf50",
  verdeClaro: "#cfe8b4",
  verdePastel: "#dfe8c7",
  cafeClaro: "#e8dcc7",
  cafeMedio: "#a67c52",
  gris: "#666",
  blanco: "#fff",
  rojo: "#e53935",
};

// ─── ESTILOS GLOBALES ──────────────────────────────────────
const global = StyleSheet.create({

  // Contenedores
  container: { flex: 1 },
  scroll: { backgroundColor: Colors.fondoOscuro },
  panelPrincipal: {
    backgroundColor: Colors.fondoCrudo,
    flex: 1,
    padding: 15,
    borderRadius: 20,
  },

  // ─── HEADER ───────────────────────────────────────────────
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitulo: {
    color: Colors.verdeOscuro,
    fontWeight: "bold",
    fontSize: 16,
  },
  headerVolverTexto: {
    color: Colors.verdeOscuro,
    fontWeight: "bold",
    fontSize: 15,
  },

  // ─── TIPOGRAFÍA ───────────────────────────────────────────
  tituloPagina: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.verdeOscuro,
    marginVertical: 15,
  },
  textoGris: { color: Colors.gris, fontSize: 13 },
  textoVerde: { color: Colors.verdeOscuro, fontWeight: "bold" },
  textoCafe: { color: Colors.cafeMedio },

  // ─── INPUT / BUSCADOR ─────────────────────────────────────
  inputBuscador: {
    backgroundColor: Colors.fondoInput,
    borderRadius: 20,
    padding: 10,
    marginVertical: 15,
    paddingLeft: 15,
  },

  // ─── TARJETAS ─────────────────────────────────────────────
  tarjeta: {
    backgroundColor: Colors.fondoTarjeta,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  tarjetaResumen: {
    backgroundColor: Colors.fondoInput,
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },

  // ─── ETIQUETAS ────────────────────────────────────────────
  etiqueta: {
    backgroundColor: Colors.verdeClaro,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: "flex-start",
    fontSize: 12,
    marginRight: 5,
    marginBottom: 6,
  },
  etiquetasRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 6,
  },

  // ─── BOTONES ──────────────────────────────────────────────
  botonVerde: {
    backgroundColor: Colors.verdeOscuro,
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    flex: 1,
  },
  botonVerdeMedio: {
    backgroundColor: Colors.verdeMedio,
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    flex: 1,
  },
  botonTexto: {
    color: Colors.blanco,
    fontWeight: "bold",
    textAlign: "center",
  },
  botonesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  },

  // ─── IMÁGENES ─────────────────────────────────────────────
  imagenProducto: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  imagenProductoChica: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    flexDirection: "row",
    backgroundColor: Colors.fondoCrudo,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.fondoInput,
  },
  footerItem: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
  },
  footerItemActivo: {
    backgroundColor: Colors.verdeMedio,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerTexto: { fontSize: 11, color: Colors.gris, marginTop: 2 },
  footerTextoActivo: {
    fontSize: 13,
    color: Colors.verdeOscuro,
    fontWeight: "bold",
    marginLeft: 4,
  },

  // ─── PAGO ─────────────────────────────────────────────────
  opcionPagoInactiva: {
    backgroundColor: Colors.fondoTarjeta,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  opcionPagoActiva: {
    backgroundColor: Colors.verdeOscuro,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  opcionPagoTextoActivo: { color: Colors.blanco, fontWeight: "bold" },
  opcionPagoTextoInactivo: { fontWeight: "bold", color: "#333" },
});

export default global;
