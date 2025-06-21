import { colors, typography } from "@/styles";
import { ActivityIndicator, Text, View } from "react-native";

export default function Loading() {
  return (
    <View>
      <ActivityIndicator size={40} color={colors.primary} />
      <Text
        style={[
          typography.body1,
          {
            textAlign: "center",
            paddingVertical: 16,
            color: colors.muted,
          },
        ]}
      >
        Loading...
      </Text>
    </View>
  );
}
