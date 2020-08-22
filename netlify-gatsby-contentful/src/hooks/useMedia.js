import { useEffect, useState } from 'react';

export function useMedia() {
  const queries = [
    '(min-width: 1024px)',
    '(min-width: 768px)',
    '(min-width: 512px)',
  ];
  const mediaQueryLists = queries.map(
    q => typeof window !== 'undefined' && window.matchMedia(q)
  );

  const getValue = () => {
    let index = mediaQueryLists.findIndex(mql => mql && mql.matches);
    if (index < 0) {
      index = 2;
    }
    return {
      desktop: index == 0,
      tab: index == 1,
      mobile: index == 2,
    };
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, []);

  return value;
}
