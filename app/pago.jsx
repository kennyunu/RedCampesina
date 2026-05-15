import Feather from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import global, { Colors } from "../Assets/StyleManager";
import { useCanasta } from "./context/CanastaContext";

export default function Pago() {
  const { total = 0 } = useLocalSearchParams();
  const { vaciarCanasta } = useCanasta();

  const [metodo, setMetodo] = useState(null);
  const [paso, setPaso] = useState(1);
  const [comprobante, setComprobante] = useState("");
  const [error, setError] = useState("");

  function seleccionarMetodo(m) {
    setMetodo(m);
    setPaso(2);
    setError("");
  }

  function confirmarPago() {
    if (!comprobante.trim()) {
      setError("Por favor ingresa el número de comprobante.");
      return;
    }
    setPaso(3);
    setTimeout(() => {
      vaciarCanasta();
      router.replace("/compraExitosa");
    }, 2000);
  }

  return (
    <ScrollView style={{ backgroundColor: Colors.fondoOscuro }}>
      <View style={global.panelPrincipal}>

        {/* HEADER */}
        <Pressable onPress={() => router.back()} style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 15 }}>
          <Feather name="arrow-left" size={18} color={Colors.verdeOscuro} />
          <Text style={global.headerTitulo}>Canasta</Text>
        </Pressable>

        <Text style={global.tituloPagina}>Realiza tu Compra</Text>

        {/* MONTO */}
        <View style={global.tarjetaResumen}>
          <Text style={global.textoGris}>Valor a pagar</Text>
          <Text style={{ fontSize: 26, fontWeight: "bold", color: Colors.verdeOscuro }}>
            ${Number(total).toLocaleString()}
          </Text>
        </View>

        {/* PASO 1 — ELEGIR */}
        {paso === 1 && (
          <>
            <Text style={[global.subtitulo, { marginTop: 20 }]}>Escoge tu forma de pago</Text>
            <Text style={[global.textoGris, { marginBottom: 10 }]}>
              Realiza la transferencia y revisa el comprobante
            </Text>

            <Pressable onPress={() => seleccionarMetodo("nequi")} style={global.opcionPagoInactiva}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Feather name="smartphone" size={22} color={Colors.verdeOscuro} />
                <View>
                  <Text style={global.opcionPagoTextoInactivo}>Nequi / Daviplata</Text>
                  <Text style={global.textoGris}>Escanea el código QR</Text>
                </View>
              </View>
              <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: Colors.gris }} />
            </Pressable>

            <Pressable onPress={() => seleccionarMetodo("banco")} style={global.opcionPagoInactiva}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Feather name="credit-card" size={22} color={Colors.verdeOscuro} />
                <View>
                  <Text style={global.opcionPagoTextoInactivo}>Transferencia Bancaria</Text>
                  <Text style={global.textoGris}>Banco Agrario</Text>
                </View>
              </View>
              <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: Colors.gris }} />
            </Pressable>
          </>
        )}

        {/* PASO 2 — NEQUI */}
        {paso === 2 && metodo === "nequi" && (
          <View style={{ marginTop: 15 }}>
            <View style={global.opcionPagoActiva}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 15 }}>
                <Feather name="smartphone" size={22} color={Colors.blanco} />
                <Text style={global.opcionPagoTextoActivo}>Nequi / Daviplata</Text>
                <View style={{ marginLeft: "auto", width: 20, height: 20, borderRadius: 10, backgroundColor: Colors.blanco, justifyContent: "center", alignItems: "center" }}>
                  <Feather name="check" size={12} color={Colors.verdeOscuro} />
                </View>
              </View>
              <Text style={{ color: Colors.blanco, marginBottom: 10 }}>Escanea el código QR:</Text>
              <Image
                source={require("../Assets/imagenes/logos/qr_nequi.png")}
                style={{ width: 160, height: 160, alignSelf: "center", borderRadius: 10 }}
                resizeMode="contain"
              />
            </View>

            <Text style={[global.textoGris, { marginTop: 15, marginBottom: 6 }]}>
              Ingresa el número de comprobante de pago:
            </Text>
            <TextInput
              value={comprobante}
              onChangeText={setComprobante}
              placeholder="Ej: 2345678901"
              keyboardType="numeric"
              style={[global.inputBuscador, { marginVertical: 0 }]}
            />
            {!!error && <Text style={{ color: Colors.rojo, marginTop: 4 }}>{error}</Text>}

            <Pressable onPress={confirmarPago} style={[global.botonVerde, { flex: 0, marginTop: 20 }]}>
              <Text style={global.botonTexto}>Confirmar pago</Text>
            </Pressable>
            <Pressable onPress={() => setPaso(1)} style={{ marginTop: 10, alignItems: "center" }}>
              <Text style={global.textoGris}>← Cambiar método</Text>
            </Pressable>
          </View>
        )}

        {/* PASO 2 — BANCO */}
        {paso === 2 && metodo === "banco" && (
          <View style={{ marginTop: 15 }}>
            <View style={global.opcionPagoActiva}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 15 }}>
                <Feather name="credit-card" size={22} color={Colors.blanco} />
                <Text style={global.opcionPagoTextoActivo}>Transferencia Bancaria</Text>
                <View style={{ marginLeft: "auto", width: 20, height: 20, borderRadius: 10, backgroundColor: Colors.blanco, justifyContent: "center", alignItems: "center" }}>
                  <Feather name="check" size={12} color={Colors.verdeOscuro} />
                </View>
              </View>
              {[["Banco","Banco Agrario"],["Número","1234 5678 9438"],["Tipo","Ahorros"],["Titular","Red Campesina SAS"],["Valor",`$${Number(total).toLocaleString()}`]].map(([l,v]) => (
                <View key={l} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                  <Text style={{ color: Colors.blanco, opacity: 0.8 }}>{l}:</Text>
                  <Text style={{ color: Colors.blanco, fontWeight: "bold" }}>{v}</Text>
                </View>
              ))}
            </View>

            <Text style={[global.textoGris, { marginTop: 15, marginBottom: 6 }]}>
              Ingresa el número de comprobante de transferencia:
            </Text>
            <TextInput
              value={comprobante}
              onChangeText={setComprobante}
              placeholder="Ej: TRF20260001"
              style={[global.inputBuscador, { marginVertical: 0 }]}
            />
            {!!error && <Text style={{ color: Colors.rojo, marginTop: 4 }}>{error}</Text>}

            <Pressable onPress={confirmarPago} style={[global.botonVerde, { flex: 0, marginTop: 20 }]}>
              <Text style={global.botonTexto}>Confirmar pago</Text>
            </Pressable>
            <Pressable onPress={() => setPaso(1)} style={{ marginTop: 10, alignItems: "center" }}>
              <Text style={global.textoGris}>← Cambiar método</Text>
            </Pressable>
          </View>
        )}

        {/* PASO 3 — PROCESANDO */}
        {paso === 3 && (
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Feather name="loader" size={50} color={Colors.verdeOscuro} />
            <Text style={[global.subtitulo, { marginTop: 15 }]}>Procesando tu pago...</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}
