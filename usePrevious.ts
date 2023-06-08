import { useRef, useEffect, useCallback } from "react";
import type { MutableRefObject } from "react";

export function usePrevious<T>(
  value: T
): [MutableRefObject<T | undefined>["current"], (value: T) => void] {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  const update = useCallback((value: T) => {
    ref.current = value;
  }, []);
  return [ref.current, update];
}
