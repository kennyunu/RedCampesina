import { StyleSheet } from "react-native";

const colors = {
  fondoOscuro: "#1c1c1c",
  fondoClaro: "#e8e4cf",
  card: "#e2ddc7",
  cardSecundaria: "#dcd8c0",
  verde: "#2e7d32",
  verdeClaro: "#4caf50",
  verdeSuave: "#cfe8b4",
  verdeSeleccion: "#dfe8c7",
  cafe: "#a67c52",
  blanco: "#fff",
  negro: "#000",
  gris: "#666"
};

const global = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.fondoOscuro
  },

  content: {
    backgroundColor: colors.fondoClaro,
    padding: 15,
    borderRadius: 20,
    flex: 1
  },

  center: {
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15
  },

  textCenter: {
    textAlign: "center"
  },

  textBold: {
    fontWeight: "bold"
  },

  textGreen: {
    color: colors.verde,
    fontWeight: "bold"
  },

  textWhite: {
    color: colors.blanco
  },

  textGray: {
    color: colors.gris
  },

  input: {
    backgroundColor: colors.cardSecundaria,
    borderRadius: 20,
    padding: 10,
    marginVertical: 15
  },

  card: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 20,
    marginBottom: 15
  },

  cardSmall: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15
  },

  cardHighlight: {
    backgroundColor: colors.cardSecundaria,
    padding: 15,
    borderRadius: 15,
    marginVertical: 15
  },

  button: {
    padding: 12,
    borderRadius: 25,
    alignItems: "center"
  },

  buttonGreen: {
    backgroundColor: colors.verde
  },

  buttonLightGreen: {
    backgroundColor: colors.verdeClaro
  },

  buttonSoft: {
    backgroundColor: colors.verdeSeleccion
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  flex1: {
    flex: 1
  },

  marginRight: {
    marginRight: 5
  },

  marginLeft: {
    marginLeft: 5
  },

  tag: {
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: "flex-start"
  },

  tagGreen: {
    backgroundColor: colors.verdeSuave
  },

  row: {
    flexDirection: "row",
    alignItems: "center"
  },

  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  imageFull: {
    width: "100%",
    borderRadius: 15
  },

  imageSmall: {
    width: 50,
    height: 50,
    borderRadius: 10
  },

  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: colors.verde,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  }

});

export default global;