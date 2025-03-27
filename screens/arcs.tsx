import { Button, FlatList, Text, TextInput, View } from "react-native";
import { FallbackWrapper } from "@/components/FallbackWrapper";
import {
  getAllArcsManager,
  getFavoriteArc,
  setFavoriteArc,
} from "@/services/manager";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StorageApi } from "@/services/StorageApi";
import { Arc } from "@/types/Arc";
import {
  FadeInDown,
  FadeOutUp,
  LinearTransition,
} from "react-native-reanimated";
import { ArcItem } from "@/components/ArcItem";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const ArcsScreen = () => {
  const inputRef = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const scrollRef = useRef<FlatList>(null);
  const inputText = useRef("");

  const valor = useRef(0);
  const [val, setVal] = useState(0);

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

  useEffect(() => {
    console.log("renderizou");
  });

  const onPress = () => {
    scrollRef?.current?.scrollToEnd();
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#B0E0E6" }}>
      {favoriteArc && (
        <Text style={{ fontWeight: "800" }}>
          Favorite Arc: {favoriteArc.title}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        style={{ height: 100 }}
        placeholder="Input"
        onChangeText={(text) => {
          inputText.current = text;
        }}
        onEndEditing={() => {
          inputRef2?.current?.focus();
        }}
      />
      <TextInput ref={inputRef2} style={{ height: 100 }} placeholder="Input2" />
      <Button title="asd" onPress={onPress} />
      <FallbackWrapper
        {...status}
        isLoading={status.isFetching}
        refetch={refetch}
      >
        <FlatList
          ref={scrollRef}
          onScroll={(a) => {
            setVal(a.nativeEvent.contentOffset.y);
            console.log(val);
          }}
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
