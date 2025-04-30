import { FallbackWrapper } from "@/components/FallbackWrapper";
import { ArcItem } from "@/features/FavouriteArc/ArcItem";
import { useDispatch, useSelector } from "@/hooks/useStore";
import { getAllArcsManager } from "@/services/manager";
import { setArcAction } from "@/store/arcSlice";
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
  const {
    arc: { favorite },
    form,
  } = useSelector();
  const dispatch = useDispatch();

  const { data, refetch, ...status } = useQuery({
    queryKey: ["arc"],
    queryFn: getAllArcsManager,
    // staleTime: 10000,
    // retry: 10,
  });

  const onPressArc = (item: Arc) => {
    dispatch(setArcAction(item));
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {favorite && (
        <Text style={{ fontWeight: "800" }}>
          Favorite Arc: {favorite.title}
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
