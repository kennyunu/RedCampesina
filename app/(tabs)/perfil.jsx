import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Red Campesina</Text>
          <Feather name="shopping-bag" size={22} color="#1f6f2f" />
        </View>

        <Text style={styles.sectionTitle}>Cuenta</Text>

        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "../Assets/imagenes/avatar.jpg" }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.saludo}>Hola, Carlos H.</Text>

        <Text style={styles.sectionTitle}>Compras exitosas</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "",
              }}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.label}>Producto:</Text>
              <Text>Huevos de Campo</Text>
            </View>
          </View>

          <Text style={styles.smallText}>Precio c/u: $25.000</Text>
          <Text style={styles.smallText}>Cantidad: 2</Text>
          <Text style={styles.smallText}>Total: $50.000</Text>
        </View>

        <Text style={styles.sectionTitle}>Pendientes por recoger</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "",
              }}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.label}>Producto:</Text>
              <Text>Papas Sabaneras</Text>
            </View>
          </View>

          <Text style={styles.smallText}>Precio c/u: $4.200</Text>
          <Text style={styles.smallText}>Cantidad: 3kg</Text>
          <Text style={styles.smallText}>Total: $12.600</Text>
        </View>

        {/* COMPRADORES */}
        <Text style={styles.sectionTitle}>Compradores contactados</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{ uri: "https://i.pravatar.cc/101" }}
              style={styles.avatarSmall}
            />
            <View>
              <Text style={styles.label}>Nombre:</Text>
              <Text>Don Juan</Text>
              <Text>Puntuación: 4.5/5</Text>
              <Text>Ordenes realizadas: +300</Text>
              <Text>Años activos: 30 años</Text>
            </View>
          </View>
        </View>

        {/* ESPACIO PARA TAB */}
        <View style={{ height: 80 }} />

      </ScrollView>

      {/* BOTTOM TAB (solo visual) */}
      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Feather name="shopping-bag" size={20} color="#555" />
          <Text style={styles.tabText}>Mercados</Text>
        </View>

        <View style={styles.tabActive}>
          <Feather name="user" size={20} color="#fff" />
          <Text style={styles.tabTextActive}>Perfil</Text>
        </View>
      </View>
    </View>
  );
}