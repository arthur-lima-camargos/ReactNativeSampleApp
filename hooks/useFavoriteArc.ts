import { Arc } from "@/types/Arc";
import { useDispatch, useSelector } from "./useStore";
import { setArcAction } from "@/store/arcSlice";
import { useCallback } from "react";

export const useFavoriteArc = () => {
  const {
    arc: { favorite },
  } = useSelector();
  const dispatch = useDispatch();

  const setFavoriteArc = useCallback(
    (arc: Arc) => {
      dispatch(setArcAction(arc));
    },
    [dispatch]
  );

  return {
    favoriteArc: favorite,
    setFavoriteArc,
  };
};
