import { FallbackWrapper } from "@/components/FallbackWrapper";
import { ArcItem } from "@/features/FavouriteArc/ArcItem";
import { ArcContext, ArcList } from "@/features/FavouriteArc/ArcList";
import { getAllArcsManager } from "@/services/manager";
import { Arc } from "@/types/Arc";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import {
  FadeInDown,
  FadeOutUp,
  LinearTransition,
} from "react-native-reanimated";

const HomeScreenConsumer: React.FC = () => {
  const { value: favoriteArc, setValue: setArc } = useContext(ArcContext);

  const { data, refetch, ...status } = useQuery({
    queryKey: ["arc"],
    queryFn: getAllArcsManager,
    // staleTime: 10000,
    // retry: 10,
  });

  const onPressArc = (item: Arc) => {
    setArc(item);
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

export const HomeScreen: React.FC = () => (
  <ArcList>
    <HomeScreenConsumer />
  </ArcList>
);
