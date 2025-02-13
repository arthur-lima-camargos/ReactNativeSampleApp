import React, { PropsWithChildren } from "react";
import { ActivityIndicator, Text } from "react-native";

export type FallbackWrapperProps = PropsWithChildren<{
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  refetch?: () => void;
}>;

export const FallbackWrapper: React.FC<FallbackWrapperProps> = (props) => {
  if (props.isLoading) return <ActivityIndicator />;
  if (props.isError) return <Text>Error to get the arcs.</Text>;
  if (props.isSuccess) return props.children;
  return null;
};
