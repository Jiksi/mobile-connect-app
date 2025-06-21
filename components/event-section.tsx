import EventCard from "@/components/event-card";
import { datas } from "@/datas";
import { colors, typography } from "@/styles";
import { FlatList, Text } from "react-native";

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
      <FlatList
        data={datas}
        renderItem={({ item }) => <EventCard data={item} />}
      />
    </>
  );
}
