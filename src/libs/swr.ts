import useSWR from "swr";

//@ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export { useSWR };
