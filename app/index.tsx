import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 24,
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
        <Image source={require("@/assets/images/favicon.png")} />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>manus</Text>
      </View>
      <View>
        <Ionicons name="menu" size={24} color="black" />
      </View>
    </View>
  );
}
