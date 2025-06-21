import { button, colors, typography } from "@/styles";
import { PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";

type Props = PropsWithChildren<{
  onPress?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}>;

export default function Button({
  children,
  onPress,
  variant = "primary",
  disabled = false,
}: Props) {
  return (
    <View>
      <Pressable
        style={[
          variant === "primary" ? button.primary : button.secondary,
          { opacity: disabled ? 0.5 : 1 },
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={[
            typography.body1,
            {
              color:
                variant === "primary"
                  ? colors.primaryForeground
                  : colors.secondaryForeground,
              opacity: disabled ? 0.5 : 1,
            },
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
