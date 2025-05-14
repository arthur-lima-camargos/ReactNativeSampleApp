export type FormState = {
  email: string;
  error: boolean;
};

export const initialState: FormState = {
  email: "",
  error: false,
};

const PREFIX = "@FORM/";

const ACTIONS = {
  SET_EMAIL: `${PREFIX}SET_EMAIL`,
  SEND: `${PREFIX}SEND`,
};

export const setEmailAction = (text: string) => ({
  type: ACTIONS.SET_EMAIL,
  payload: text,
});

export const sendAction = () => ({ type: ACTIONS.SEND });

export function reducer(state = initialState, action: any): FormState {
  switch (action.type) {
    case ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.SEND:
      if (!state.email) {
        return { ...state, error: true };
      }
      return { ...state, error: false, email: "" };
    default:
      return state;
  }
}
