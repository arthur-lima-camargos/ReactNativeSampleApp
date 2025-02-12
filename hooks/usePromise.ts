import { useEffect, useState } from "react";

export function usePromise<T>(promise: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const refetch = async () => {
    try {
      setStatus("loading");
      const x = await promise();
      setStatus("success");
      setData(x);
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, status, isLoading, isError, isSuccess, refetch };
}