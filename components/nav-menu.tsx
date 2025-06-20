import Ionicons from "@expo/vector-icons/Ionicons";
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
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: 640,
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
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}
