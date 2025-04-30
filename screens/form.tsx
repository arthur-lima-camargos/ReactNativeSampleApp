import { useDispatch, useSelector } from "@/hooks/useStore";
import { sendAction, setEmailAction } from "@/store/formSlice";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export const FormScreen: React.FC = () => {
  const { arc, form } = useSelector();
  const dispatch = useDispatch();

  return (
    <>
      <View style={{ padding: 8, margin: 8, backgroundColor: "lightgrey" }}>
        <TextInput
          value={form.email}
          onChangeText={(text) => dispatch(setEmailAction(text))}
        />
      </View>
      {form.error && <Text>Email não pode ser vazio</Text>}
      <Button title="Send" onPress={() => dispatch(sendAction())} />
      <Text>{arc?.favorite.title}</Text>
    </>
  );
};
