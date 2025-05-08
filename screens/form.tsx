import { useFavoriteArc } from "@/hooks/useFavoriteArc";
import { useForm } from "@/hooks/useForm";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export const FormScreen: React.FC = () => {
  const { favoriteArc } = useFavoriteArc();
  const { form, sendForm, setEmail } = useForm();

  return (
    <>
      <View style={{ padding: 8, margin: 8, backgroundColor: "lightgrey" }}>
        <TextInput value={form.email} onChangeText={setEmail} />
      </View>
      {form.error && <Text>Email não pode ser vazio</Text>}
      <Button title="Send" onPress={sendForm} />
      <Text>{favoriteArc?.title}</Text>
    </>
  );
};
