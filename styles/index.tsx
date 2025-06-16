import { FlexAlignType, StyleSheet } from "react-native";

export const colors = {
  foreground: "#000000",
  background: "#F5F5F5 ",
  primary: "#1E1E1E",
  primaryForeground: "#FFFFFF",
  secondary: "#EEEEEE",
  secondaryForeground: "#1E1E1E",
  muted: "#6D6D6D",
};

export const typography = StyleSheet.create({
  heading1: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 38,
  },
  heading2: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 28,
  },
  heading3: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
  },
  body3: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  small: {
    fontSize: 10,
    fontWeight: 600,
    lineHeight: 14,
  },
});

const baseButtonStyles = {
  width: 160,
  paddingVertical: 12,
  borderRadius: 50,
  alignItems: "center" as FlexAlignType,
};

export const button = StyleSheet.create({
  primary: {
    ...baseButtonStyles,
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
  },
  secondary: {
    ...baseButtonStyles,
    backgroundColor: colors.secondary,
    color: colors.secondaryForeground,
  },
});

export const container = StyleSheet.create({
  main: {
    maxWidth: 640,
    paddingHorizontal: 32,
    marginHorizontal: "auto",
    gap: 24,
  },
  image: {
    width: "auto",
    height: "auto",
    borderRadius: 15,
    aspectRatio: 16 / 9,
  },
});
