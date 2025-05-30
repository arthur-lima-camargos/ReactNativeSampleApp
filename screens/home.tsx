import { FallbackWrapper } from "@/components/FallbackWrapper";
import { ArcItem } from "@/features/FavouriteArc/ArcItem";
import { useFavoriteArc } from "@/hooks/useFavoriteArc";
import { getAllArcsManager } from "@/services/manager";
import { Arc } from "@/types/Arc";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import {
  FadeInDown,
  FadeOutUp,
  LinearTransition,
} from "react-native-reanimated";

export const HomeScreen: React.FC = () => {
  const { favoriteArc, setFavoriteArc } = useFavoriteArc();
  const [text, setText] = useState("");

  const { data, refetch, ...status } = useQuery({
    queryKey: ["arc"],
    queryFn: getAllArcsManager,
  });

  const filteredData = useMemo(
    () =>
      data?.filter((item) =>
        item.title.toUpperCase().includes(text.toUpperCase())
      ),
    [text, data]
  );

  // const filteredData = (() => {
  //   console.log("executou a função");
  //   return data?.filter((item) => item.title.includes(text));
  // })();

  const onPressArc = (item: Arc) => {
    setFavoriteArc(item);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {favoriteArc.title && (
        <Text style={{ fontWeight: "800" }}>
          Favorite Arc: {favoriteArc.title}
        </Text>
      )}
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 8,
          marginTop: 8,
          marginBottom: 16,
          borderRadius: 8,
        }}
        value={text}
        onChangeText={setText}
        placeholder="Search"
      />
      <FallbackWrapper
        {...status}
        isLoading={status.isFetching}
        refetch={refetch}
      >
        <FlatList
          data={filteredData}
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
