export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      "x-api-key": process.env.EXPO_PUBLIC_CAT_API_KEY!,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Gagal fetch data");
    return res.json();
  });
