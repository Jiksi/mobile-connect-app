import Error from "@/components/error";
import Header from "@/components/header";
import Loading from "@/components/loading";
import Rating from "@/components/rating";
import useCat from "@/hooks/useCat";
import { colors, container, typography } from "@/styles";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CatsDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, error, isLoading } = useCat(id);

  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={container.main}>
            <Header />
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {data && (
              <>
                <Image
                  source={{
                    uri:
                      "https://cdn2.thecatapi.com/images/" +
                      data.reference_image_id +
                      ".jpg",
                  }}
                  style={{ aspectRatio: 1 / 1, borderRadius: 15 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={[
                      typography.heading2,
                      {
                        color: colors.foreground,
                      },
                    ]}
                  >
                    {data.name}
                  </Text>
                  <Image
                    source={{
                      uri:
                        "https://flagsapi.com/" +
                        data.country_code +
                        "/flat/32.png",
                    }}
                    style={{ width: 32, height: 32 }}
                  />
                </View>
                <Text style={typography.body1}>{data.description}</Text>
                <View style={{ gap: 4 }}>
                  <Text style={typography.heading3}>Temperament</Text>
                  <Text style={typography.body1}>{data.temperament}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Life Span</Text>
                    <Text style={typography.body1}>
                      {data.life_span}&nbsp;years
                    </Text>
                  </View>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Weight</Text>
                    <Text style={typography.body1}>
                      {data.weight.metric}&nbsp;kg
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Adaptability</Text>
                    <Rating rating={data.adaptability} />
                  </View>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Affection Level</Text>
                    <Rating rating={data.affection_level} />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Child Friendly</Text>
                    <Rating rating={data.child_friendly} />
                  </View>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Dog Friendly</Text>
                    <Rating rating={data.dog_friendly} />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Energy Level</Text>
                    <Rating rating={data.energy_level} />
                  </View>
                  <View style={{ gap: 4, width: "50%" }}>
                    <Text style={typography.heading3}>Stranger Friendly</Text>
                    <Rating rating={data.stranger_friendly} />
                  </View>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
