import React, { forwardRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { FlipInEasyX, FlipOutEasyX } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSelector } from "@/hooks/useStore";

export type ArcItemProps = {
  title?: string;
  description?: string;
  onPress?: () => void;
};

const StaticArcItem = forwardRef<View, ArcItemProps>(function StaticArcItem(
  { description, onPress, title },
  ref
) {
  const favorite = useSelector((state) => state.arc.favorite);
  const [showDescription, setShowDescription] = useState(false);

  const icon = favorite?.title === title ? "favorite" : "favorite-outline";
  return (
    <>
      <TouchableOpacity
        ref={ref}
        onPress={() => {
          setShowDescription((prev) => !prev);
        }}
        style={{ marginBottom: 20 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: 20,
            }}
          >
            {title ?? "No data found."}
          </Text>
          <MaterialIcons name={icon} size={24} onPress={() => onPress?.()} />
        </View>
      </TouchableOpacity>
      {showDescription && (
        <Animated.Text
          entering={FlipInEasyX.duration(500)}
          exiting={FlipOutEasyX.duration(200)}
          style={{ textAlign: "justify", fontSize: 16 }}
        >
          {description ?? "No data found."}
        </Animated.Text>
      )}
    </>
  );
});

export const ArcItem = Animated.createAnimatedComponent(StaticArcItem);
