import { typography } from "@/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export default function NavMenu({ isVisible, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" visible={isVisible}>
        <ScrollView>
          <View
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <View
              style={{
                paddingHorizontal: 32,
              }}
            >
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
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    manus
                  </Text>
                </View>
                <View>
                  <Pressable onPress={onClose}>
                    <Ionicons name="close" size={24} color="black" />
                  </Pressable>
                </View>
              </View>
              <View style={{ gap: 16, paddingVertical: 16 }}>
                <Link
                  href="/"
                  style={[typography.heading3, { textAlign: "center" }]}
                  onPress={onClose}
                >
                  Home
                </Link>
                <Link
                  href="/cats"
                  style={[typography.heading3, { textAlign: "center" }]}
                  onPress={onClose}
                >
                  Cats
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}
