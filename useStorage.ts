import {
  useCallback,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { isBrowser } from "../lib/isBrowser";

export const LocalStorageKeys = {
  "cart-state": "cart-state",
  ref: "ref",
  "build-{productId}": (id: string) => `build-${id}`,
} as const;

type Key = keyof typeof LocalStorageKeys;
type HookReturn<T> = [T | undefined, Dispatch<SetStateAction<T>>, () => void];

export function useLocalStorage<T>(
  key: Key,
  defaultValue?: T | (() => T),
  ...args
): HookReturn<T> {
  const storage = isBrowser ? window?.localStorage : undefined;
  return useStorage<T>(key, defaultValue, storage, args);
}

export function useSessionStorage<T>(
  key: Key,
  defaultValue?: T | (() => T),
  ...args
): HookReturn<T> {
  const storageObject = isBrowser ? window?.localStorage : undefined;
  return useStorage<T>(key, defaultValue, storageObject, args);
}

function useStorage<T>(
  key: Key,
  defaultValue?: T | (() => T),
  storageObject?: Storage,
  args?
): HookReturn<T> {
  const keyValue = LocalStorageKeys[key];
  const keyName = typeof keyValue === "function" ? keyValue(args) : keyValue;

  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject?.getItem(keyName);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)?.();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject?.removeItem?.(keyName);
    storageObject?.setItem?.(keyName, JSON.stringify(value));
  }, [keyName, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
