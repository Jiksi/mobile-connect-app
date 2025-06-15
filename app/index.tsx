import EventSection from "@/components/event-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { colors, container } from "@/styles";
import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={container.main}>
            <Header />
            <HeroSection />
            <EventSection />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
