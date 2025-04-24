import React, { Reducer, useReducer, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

type FormState = {
  email: string;
  error: boolean;
};

const initialState = {
  email: "",
  error: false,
};

function reducer(state: FormState, action: any): FormState {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "send":
      if (!state.email) {
        return { ...state, error: true };
      }
      return { ...state, error: false, email: "" };
    default:
      return state;
  }
}

export const FormScreen: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <View style={{ padding: 8, margin: 8, backgroundColor: "lightgrey" }}>
        <TextInput
          value={state.email}
          onChangeText={(text) => dispatch({ type: "setEmail", payload: text })}
        />
      </View>
      {state.error && <Text>Email não pode ser vazio</Text>}
      <Button title="Send" onPress={() => dispatch({ type: "send" })} />
    </>
  );
};
