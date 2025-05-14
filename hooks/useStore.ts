import { AppDispatch, RootState } from "@/store/root";
import {
  useSelector as useSelectorUntyped,
  useDispatch as useDispatchUntyped,
} from "react-redux";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = useDispatchUntyped.withTypes<AppDispatch>();
export const useSelector = useSelectorUntyped.withTypes<RootState>();
