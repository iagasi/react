import { useEffect, useState } from 'react';
import axios from 'axios';
type useLoaderReturntype<T> = [T | null, boolean];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useLoader<Type>(url: string, _urlParams?: string): useLoaderReturntype<Type> {
  const [data, setData] = useState<Type | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function load() {
      const res = await axios.get(url);
      if (res) {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 400);
      }
    }
    load();
  }, [url]);
  return [data, loading];
}
