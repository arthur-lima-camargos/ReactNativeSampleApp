import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// type Params<T> = Omit<UseQueryOptions<T, unknown, T, any>, "initialData"> & {
//   initialData?: () => undefined;
// };

// export function useGetAsync<T>(params: Params<T>) {
//   const query = useQuery({
//     ...params,
//   });

//   return query;
// }

export const useGetAsync = useQuery;
