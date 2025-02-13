import { usePromise } from "@/hooks/usePromise";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { getAllOnePieceArcs, OnePieceArc } from "@/services/onePieceApi";
import { useCallback } from "react";
import { FallbackWrapper } from "@/components/FallbackWrapper";

export const ArcsScreen = () => {
  const { data, refetch, ...status } =
    usePromise<OnePieceArc[]>(getAllOnePieceArcs);
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
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
            <Button title="Reload" onPress={refetch} color={"black"} />
          </View>
        </View>
      </FallbackWrapper>
    </View>
  );
};
