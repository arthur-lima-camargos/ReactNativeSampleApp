import { Context } from "@/store/StoreProvider";
import { useContext } from "react";

export const useSelector = () => {
  const { state } = useContext(Context);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};
