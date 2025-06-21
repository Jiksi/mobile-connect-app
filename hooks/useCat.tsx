import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export default function useCat(id: string) {
  const { data, error, isLoading } = useSWR(
    process.env.EXPO_PUBLIC_CAT_API_URL! + "/breeds/" + id,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
