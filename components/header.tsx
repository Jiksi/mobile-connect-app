import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View } from "react-native";

export default function Header() {
  return (
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
        <Ionicons name="menu" size={24} color="black" />
      </View>
    </View>
  );
}
