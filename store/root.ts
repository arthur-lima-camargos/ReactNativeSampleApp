import { combineReducers, createStore } from "redux";

import { reducer as arcReducer } from "./arcSlice";
import { reducer as formReducer } from "./formSlice";
import { reactotron } from "@/utils/reactotron";

export const store = createStore(
  combineReducers({
    arc: arcReducer,
    form: formReducer,
  }),
  reactotron.createEnhancer()
);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
