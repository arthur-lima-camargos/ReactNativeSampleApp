import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "One Piece Arcs",
          headerStyle: { backgroundColor: "#008080" },
        }}
      />
    </Stack>
  );
}
