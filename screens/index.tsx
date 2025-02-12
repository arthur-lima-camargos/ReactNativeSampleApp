import { usePromise } from "@/hooks/usePromise";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { getAllOnePieceArcs, OnePieceArc } from "@/services/onePieceApi";

export const Index = () => {
  const { data, isLoading, isError, isSuccess, refetch } =
    usePromise<OnePieceArc[]>(getAllOnePieceArcs);
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Error to get the arcs.</Text>}
      {isSuccess && data && (
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
      )}
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View style={{ width: 150 }}>
          <Button title="Reload" onPress={refetch} color={"black"} />
        </View>
      </View>
    </View>
  );
};
