import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import "../utils/reactotron";
import { Provider } from "@/store/StoreProvider";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function App() {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RootLayout />
      </QueryClientProvider>
    </Provider>
  );
}
