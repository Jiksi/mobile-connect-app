import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";

export default function Rating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Entypo key={i} name="star" size={24} color="black" />);
    } else {
      stars.push(
        <Entypo key={i} name="star-outlined" size={24} color="black" />
      );
    }
  }
  return <View style={{ flexDirection: "row", gap: 8 }}>{stars}</View>;
}
