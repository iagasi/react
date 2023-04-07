import { useEffect, useState } from 'react';
import axios from 'axios';
import { userType } from 'types/userType';
type useLoaderreturntype = [userType[] | userType | null, boolean];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useLoader(url: string, _urlParams?: string): useLoaderreturntype {
  const [data, setData] = useState<userType[] | userType | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function load() {
      const res = await axios.get(url);
      if (res) {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1000);
      }
    }
    load();
  }, [url]);
  return [data, loading];
}
