import { colors, typography } from "@/styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";

type Props = {
  error: {
    message: string;
  };
};

export default function Error({ error }: Props) {
  return (
    <View>
      <MaterialIcons
        name="error"
        size={40}
        color={colors.primary}
        style={{ alignSelf: "center" }}
      />
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
        {error.message}
      </Text>
    </View>
  );
}
