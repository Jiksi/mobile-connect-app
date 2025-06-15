import EventSection from "@/components/event-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { colors } from "@/styles";
import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{}}>
          <View
            style={{
              maxWidth: 640,
              paddingHorizontal: 32,
              marginHorizontal: "auto",
              gap: 24,
            }}
          >
            <Header />
            <HeroSection />
            <EventSection />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
