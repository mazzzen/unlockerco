import { AnyAction } from "@reduxjs/toolkit";
import { createContext } from "react";
import type { CartStorageState } from "./types";

export const Context = createContext<
  [CartStorageState, React.Dispatch<AnyAction>] | undefined
>(undefined);
