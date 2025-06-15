import Button from "@/components/ui/button";
import { colors, typography } from "@/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Text, View } from "react-native";

export default function HeroSection() {
  return (
    <View style={{ paddingVertical: 36, gap: 24 }}>
      <Text
        style={[
          typography.heading2,
          { color: colors.foreground, textAlign: "center" },
        ]}
      >
        Leave it to Manus!
      </Text>
      <Text
        style={[typography.body1, { color: colors.muted, textAlign: "center" }]}
      >
        Manus is a general AI agent that bridges minds and actions: it
        doesn&apos;t just think, it delivers results. Manus excels at various
        tasks in work and life, getting everything done while you rest.
      </Text>
      <View style={{ position: "relative" }}>
        <Image
          style={{
            width: "auto",
            height: "auto",
            borderRadius: 15,
            aspectRatio: 16 / 9,
          }}
          source={require("@/assets/images/home.webp")}
        />
        <FontAwesome
          name="play-circle-o"
          size={80}
          color="black"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </View>
      <View style={{ flexDirection: "row", gap: 24, justifyContent: "center" }}>
        <Button variant="primary">Try Manus</Button>
        <Button
          variant="secondary"
          onPress={() => {
            window.open("https://manus.im", "_blank");
          }}
        >
          Instagram
        </Button>
      </View>
    </View>
  );
}
