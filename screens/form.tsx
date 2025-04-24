import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const FormScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const onSend = () => {
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    setEmail("");
    console.log("enviado");
  };

  return (
    <>
      <View style={{ padding: 8, margin: 8, backgroundColor: "lightgrey" }}>
        <TextInput value={email} onChangeText={setEmail} />
      </View>
      {error && <Text>Email não pode ser vazio</Text>}
      <Button title="Send" onPress={onSend} />
    </>
  );
};
