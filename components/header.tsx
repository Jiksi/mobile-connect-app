import NavMenu from "@/components/nav-menu";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Header() {
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 16,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Image
            style={{ width: 32, height: 32 }}
            source={require("@/assets/images/manus-logo.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>manus</Text>
        </View>
        <View>
          <Pressable onPress={() => setIsNavMenuVisible(true)}>
            <Ionicons name="menu" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <NavMenu
        isVisible={isNavMenuVisible}
        onClose={() => setIsNavMenuVisible(false)}
      />
    </View>
  );
}
