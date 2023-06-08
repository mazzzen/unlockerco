import { useQuery } from "@apollo/client";
import { AuthState, USER } from "../../apollo/client-graphql";
import { logout } from "../utils";

export type RegisterType = "login" | "signup";

export type User = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
};

interface AuthHook {
  isLoggedIn: boolean;
  user: User | undefined;
  logout: () => void;
}

const useAuth = (): AuthHook => {
  const { data } = useQuery<{ user: AuthState }>(USER);
  return {
    isLoggedIn: !!data?.user?.id,
    user: data?.user,
    logout,
  };
};

export { useAuth };
