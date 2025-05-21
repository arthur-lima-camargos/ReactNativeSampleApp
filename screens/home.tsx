import { FallbackWrapper } from "@/components/FallbackWrapper";
import { ArcItem } from "@/features/FavouriteArc/ArcItem";
import { useFavoriteArc } from "@/hooks/useFavoriteArc";
import { getAllArcsManager } from "@/services/manager";
import { Arc } from "@/types/Arc";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button, FlatList, Text, View } from "react-native";
import {
  FadeInDown,
  FadeOutUp,
  LinearTransition,
} from "react-native-reanimated";

export const HomeScreen: React.FC = () => {
  const { favoriteArc, setFavoriteArc } = useFavoriteArc();

  const { data, refetch, ...status } = useQuery({
    queryKey: ["arc"],
    queryFn: getAllArcsManager,
  });

  const onPressArc = (item: Arc) => {
    setFavoriteArc(item);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {favoriteArc && (
        <Text style={{ fontWeight: "800" }}>
          Favorite Arc: {favoriteArc.title}
        </Text>
      )}
      <FallbackWrapper
        {...status}
        isLoading={status.isFetching}
        refetch={refetch}
      >
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <ArcItem
              entering={FadeInDown.duration(800).delay(200 * index)}
              exiting={FadeOutUp.duration(800)}
              layout={LinearTransition.duration(300)}
              onPress={() => onPressArc(item)}
              {...item}
            />
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
