import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "One Piece Arcs",
          title: "Arcs",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),

          headerStyle: { backgroundColor: "#008080" },
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          headerTitle: "Reducer Example",
          title: "Form",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="address-book" color={color} />
          ),

          headerStyle: { backgroundColor: "#008080" },
        }}
      />
    </Tabs>
  );
}
