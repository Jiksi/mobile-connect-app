import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export default function useCats(page: number) {
  const { data, error, isLoading } = useSWR(
    process.env.EXPO_PUBLIC_CAT_API_URL! + "/breeds?limit=2&page=" + page,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
