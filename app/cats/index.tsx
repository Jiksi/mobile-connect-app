import CatCard from "@/components/cat-card";
import Error from "@/components/error";
import Header from "@/components/header";
import Loading from "@/components/loading";
import useCats from "@/hooks/useCats";
import { colors, container, typography } from "@/styles";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CatsPage() {
  const { page } = useLocalSearchParams<{ page: string }>();
  const currentPage = page ? Number(page) : 1;
  const { data, error, isLoading } = useCats(currentPage - 1);

  return (
    <SafeAreaProvider style={{ backgroundColor: colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={container.main}>
            <Header />
            <Text
              style={[
                typography.heading2,
                { color: colors.foreground, textAlign: "center" },
              ]}
            >
              Discover the Adorable World of Cats
            </Text>
            <Text
              style={[
                typography.body1,
                { color: colors.muted, textAlign: "center" },
              ]}
            >
              Discover a growing collection of adorable cat breeds, fun feline
              facts, and stunning images, all powered by&nbsp;
              <Link
                href="https://thecatapi.com/"
                style={{
                  color: colors.foreground,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
                numberOfLines={1}
              >
                the Cat API.
              </Link>
              &nbsp;Whether you&apos;re a curious cat lover or just here for the
              fluff, this is your purr-fect destination to learn, laugh, and
              fall in love with cats every day.
            </Text>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {data && (
              <>
                <FlatList
                  data={data}
                  renderItem={({ item }) => <CatCard data={item} />}
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Link href={`/cats?page=${currentPage - 1}`} asChild push>
                    <Entypo
                      name="chevron-left"
                      size={24}
                      color="black"
                      disabled={currentPage <= 1}
                      style={{ opacity: currentPage <= 1 ? 0.5 : 1 }}
                    />
                  </Link>
                  <Text
                    style={[
                      typography.body1,
                      { color: colors.muted, textAlign: "center" },
                    ]}
                  >
                    Page {currentPage}
                  </Text>
                  <Link href={`/cats?page=${currentPage + 1}`} asChild push>
                    <Entypo name="chevron-right" size={24} color="black" />
                  </Link>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
