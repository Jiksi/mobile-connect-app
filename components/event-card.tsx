import { colors, container, typography } from "@/styles";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type Props = {
  data: {
    id: number;
    title: string;
    date: string;
    imageUrl: ImageSourcePropType;
  };
};

export default function EventCard({ data }: Props) {
  return (
    <View key={data.id} style={{ paddingBottom: 32 }}>
      <Image style={container.image} source={data.imageUrl} />
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
  );
}
