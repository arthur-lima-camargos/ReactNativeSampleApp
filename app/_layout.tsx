import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import "../utils/reactotron";

const queryClient = new QueryClient();

function RootLayout() {
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />
    </QueryClientProvider>
  );
}
