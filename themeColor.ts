export type ColorType = "primary" | "backgroundReverse" | "white";

export const themeColor =
  (color: ColorType) =>
  ({ theme }) =>
    theme.colors[color];
