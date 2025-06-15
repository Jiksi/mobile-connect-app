import { datas } from "@/datas";
import { colors, typography } from "@/styles";
import { Image, Text, View } from "react-native";

export default function EventSection() {
  return (
    <>
      <Text
        style={[
          typography.heading2,
          { color: colors.foreground, textAlign: "center" },
        ]}
      >
        Events
      </Text>
      <Text
        style={[typography.body1, { color: colors.muted, textAlign: "center" }]}
      >
        Join our community events to learn more about Manus AI and connect with
        other enthusiasts.
      </Text>
      <View>
        {datas.map((data, index) => (
          <View key={index} style={{ paddingBottom: 32 }}>
            <Image
              style={{
                width: "auto",
                height: "auto",
                borderRadius: 15,
                aspectRatio: 16 / 9,
              }}
              source={data.imageUrl}
            />
            <Text
              style={[
                typography.heading3,
                { color: colors.foreground, paddingVertical: 8 },
              ]}
            >
              {data.title}
            </Text>
            <Text style={[typography.body2, { color: colors.muted }]}>
              {data.date}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
}
