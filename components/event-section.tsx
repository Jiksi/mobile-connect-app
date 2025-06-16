import EventCard from "@/components/event-card";
import { datas } from "@/datas";
import { colors, typography } from "@/styles";
import { Text, View } from "react-native";

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
        {datas.map((data) => (
          <EventCard key={data.id} data={data} />
        ))}
      </View>
    </>
  );
}
