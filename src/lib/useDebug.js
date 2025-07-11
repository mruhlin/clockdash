import useQueryParms from "./useQueryParams";

export default function useDebug() {
  const { hasParam } = useQueryParms();

  return hasParam('debug');
}