import {
  ArcState,
  initialState as arcInitialState,
  reducer as arcReducer,
} from "./arcSlice";
import {
  FormState,
  initialState as formInitialState,
  reducer as formReducer,
} from "./formSlice";

export const initialState: RootState = {
  arc: arcInitialState,
  form: formInitialState,
};

export type RootState = {
  arc: ArcState;
  form: FormState;
};

export function rootReducer(state: RootState, action: any): RootState {
  return {
    arc: arcReducer(state.arc, action),
    form: formReducer(state.form, action),
  };
}
