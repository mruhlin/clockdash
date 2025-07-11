export default function useQueryParms() {
  const searchParams = new URLSearchParams(document.location.search);
  const get = (key) => searchParams.get(key);
  const set = (key, value) => {
    searchParams.set(key, value);
    document.location.search = searchParams.toString();
  }
  const remove = (key) => {
    searchParams.delete(key);
    document.location.search = searchParams.toString();
  }
  const has = (key) => searchParams.has(key);
  const keys = () => Array.from(searchParams.keys());   

  //The params as a plain object
  const params = Object.fromEntries(searchParams.entries());

  return {
    getParam: get,
    setParam: set,
    removeParam: remove,
    hasParam: has,
    paramKeys: keys,
    params
  };
};