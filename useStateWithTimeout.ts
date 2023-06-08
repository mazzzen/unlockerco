import * as React from "react";

export type Return<S> = [S, (arg0: S) => void, (arg0: S) => void, () => void];

export function useStateWithTimeout<S>(
  defaultValue: S,
  timeout?: number
): Return<S> {
  const [state, setState] = React.useState(defaultValue);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const setStateWithTimeout = React.useCallback(
    (value) => {
      if (typeof setTimeout === "function") {
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          setState(value);
        }, timeout);
      }
    },
    [timeout]
  );
  const clearStateTimeout = React.useCallback(() => {
    if (timeoutRef.current !== null && typeof clearTimeout === "function") {
      clearTimeout(timeoutRef.current);
    }
  }, []);
  React.useEffect(
    () => () => {
      clearStateTimeout();
    },
    [clearStateTimeout]
  );
  return [state, setState, setStateWithTimeout, clearStateTimeout];
}
