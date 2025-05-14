import { sendAction, setEmailAction } from "@/store/formSlice";
import { useDispatch, useSelector } from "./useStore";

export const useForm = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const setEmail = (text: string) => {
    dispatch(setEmailAction(text));
  };

  const sendForm = () => {
    dispatch(sendAction());
  };

  return {
    form,
    setEmail,
    sendForm,
  };
};
