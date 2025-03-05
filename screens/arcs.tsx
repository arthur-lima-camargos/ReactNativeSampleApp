import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { FallbackWrapper } from "@/components/FallbackWrapper";
import {
  getAllArcsManager,
  getFavoriteArc,
  setFavoriteArc,
} from "@/services/manager";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StorageApi } from "@/services/StorageApi";
import { Arc } from "@/types/Arc";

export const ArcsScreen = () => {
  const { data, refetch, ...status } = useQuery({
    queryKey: ["arc"],
    queryFn: getAllArcsManager,
    // staleTime: 10000,
    // retry: 10,
  });

  //GET FAVORITE ARC
  const { data: favoriteArc } = useQuery({
    queryKey: [StorageApi.favoriteArcKey],
    queryFn: getFavoriteArc,
  });

  //CHANGE FAVORITE ARC
  const queryClient = useQueryClient();
  const { mutateAsync: onPressArc } = useMutation({
    mutationFn: (item: Arc) => setFavoriteArc(item),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [StorageApi.favoriteArcKey] }),
  });

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {favoriteArc && (
        <Text style={{ fontWeight: "800" }}>
          Favorite Arc: {favoriteArc.title}
        </Text>
      )}
      {status.isLoading && <Text>IS LOADING</Text>}
      {status.isFetching && <Text>IS FETCHING</Text>}
      <FallbackWrapper {...status} refetch={refetch}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onPressArc(item)}
              style={{ marginBottom: 20 }}
            >
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
            </TouchableOpacity>
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
