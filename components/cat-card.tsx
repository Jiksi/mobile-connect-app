import { colors, typography } from "@/styles";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import Button from "./ui/button";

type Props = {
  data: {
    id: number;
    name: string;
    image: {
      url: string;
    };
  };
};

export default function CatCard({ data }: Props) {
  return (
    <View key={data.id}>
      <Image
        source={{
          uri: data.image.url,
        }}
        style={{ aspectRatio: 1 / 1, borderRadius: 15 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <Text style={[typography.heading3, { color: colors.primary }]}>
          {data.name}
        </Text>
        <Link href={`/cats/${data.id}`} asChild>
          <Button>See Details</Button>
        </Link>
      </View>
    </View>
  );
}
