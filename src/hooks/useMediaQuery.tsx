import { useState, useEffect } from 'react';

import { useEventListener } from './useEventListener';

export function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<
    (Window & typeof globalThis) | MediaQueryList | null
  >(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  const handler = (event: MediaQueryListEvent) => {
    setIsMatch(event.matches);
  };

  useEventListener('change', handler as EventListener, mediaQueryList);

  return isMatch;
}

// how to use
// const isLarge = useMediaQuery("(min-width: 200px)")
