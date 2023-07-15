import { useEffect, useRef } from 'react';

export function useEventListener(
  eventType: keyof WindowEventMap,
  callback: (e: Event) => void,
  element: (Window & typeof globalThis) | null | MediaQueryList = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: MediaQueryListEvent) => {
      callbackRef.current(e);
    };

    element.addEventListener(eventType, handler as EventListener);

    return () =>
      element.removeEventListener(eventType, handler as EventListener);
  }, [eventType, element]);
}
