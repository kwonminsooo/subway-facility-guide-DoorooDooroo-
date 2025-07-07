import { createContext, useContext, useState, ReactNode } from "react";
import type { SignupData } from "../types/signup";

interface SignupContextType {
  signupData: SignupData;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  resetSignup: () => void;
}

const SignupContext = createContext<SignupContextType | null>(null);

export const useSignupContext = () => {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("SignupContext not found!");
  return ctx;
};

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [signupData, setSignupData] = useState<SignupData>({
    email: "",
    password: "",
  });

  const setEmail = (email: string) =>
    setSignupData((prev) => ({ ...prev, email }));

  const setPassword = (password: string) =>
    setSignupData((prev) => ({ ...prev, password }));

  const resetSignup = () => setSignupData({ email: "", password: "" });

  return (
    <SignupContext.Provider
      value={{ signupData, setEmail, setPassword, resetSignup }}
    >
      {children}
    </SignupContext.Provider>
  );
};
