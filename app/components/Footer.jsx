import Feather from "@expo/vector-icons/Feather";
import { router, usePathname } from "expo-router";
import { Pressable, Text, View } from "react-native";
import global, { Colors } from "../../Assets/StyleManager";

export default function Footer() {
  const pathname = usePathname();
  const enPerfil = pathname.includes("perfil");

  return (
    <View style={global.footer}>

      <Pressable
        onPress={() => router.replace("/comprador")}
        style={enPerfil ? global.footerItem : global.footerItemActivo}
      >
        <Feather
          name="shopping-bag"
          size={20}
          color={enPerfil ? Colors.gris : Colors.verdeOscuro}
        />
        <Text style={enPerfil ? global.footerTexto : global.footerTextoActivo}>
          Mercados
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.replace("/(tabs)/perfil")}
        style={enPerfil ? global.footerItemActivo : global.footerItem}
      >
        <Feather
          name="user"
          size={20}
          color={enPerfil ? Colors.verdeOscuro : Colors.gris}
        />
        <Text style={enPerfil ? global.footerTextoActivo : global.footerTexto}>
          Perfil
        </Text>
      </Pressable>

    </View>
  );
}
