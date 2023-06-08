import { PhoneInput } from "../../../../shared/globals/UiElements/InputPhone";

export enum Modes {
  NAME = "NAME",
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD",
  PHONE = "PHONE",
}
export type ModeType = keyof typeof Modes;
export type SuccessStateType = { mode: ModeType | null; isSuccess: boolean };

export type FormValues = {
  name: string;
  email: string;
  phone: PhoneInput;
  oldPassword: string;
  newPassword: string;
  confirmedPassword: string;
};
