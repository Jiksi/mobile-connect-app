import { button, colors, typography } from "@/styles";
import { PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";

type Props = PropsWithChildren<{
  onPress?: () => void;
  variant?: "primary" | "secondary";
}>;

export default function Button({
  children,
  onPress,
  variant = "primary",
}: Props) {
  return (
    <View>
      <Pressable
        style={variant === "primary" ? button.primary : button.secondary}
        onPress={onPress}
      >
        <Text
          style={[
            typography.body1,
            {
              color:
                variant === "primary"
                  ? colors.primaryForeground
                  : colors.secondaryForeground,
            },
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
