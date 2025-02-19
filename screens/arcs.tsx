import { Button, FlatList, Text, View } from "react-native";
import { getAllOnePieceArcs } from "@/services/onePieceApi";
import { FallbackWrapper } from "@/components/FallbackWrapper";
import { useGetAsync } from "@/hooks/useGetAsync";

export const ArcsScreen = () => {
  const { data, refetch, ...status } = useGetAsync({
    queryKey: ["arc"],
    queryFn: getAllOnePieceArcs,
    // staleTime: 10000,
    // retry: 10,
  });

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {status.isLoading && <Text>IS LOADING</Text>}
      {status.isFetching && <Text>IS FETCHING</Text>}
      <FallbackWrapper {...status} refetch={refetch}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "justify",
                  fontSize: 20,
                }}
              >
                {item.title ?? "No data found."}
              </Text>
              <Text style={{ textAlign: "justify", fontSize: 16 }}>
                {item.description ?? "No data found."}
              </Text>
            </View>
          )}
        />
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={{ width: 150 }}>
            <Button title="Reload" onPress={() => refetch()} color={"black"} />
          </View>
        </View>
      </FallbackWrapper>
    </View>
  );
};
