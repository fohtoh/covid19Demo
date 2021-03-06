import { useState, useEffect } from "react";

export function useStats(url) {
  const [stats, setStats] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url).then((res) => res.json());
      setStats(data);
    }
    fetchData();
  }, [url]);
  return stats;
}
