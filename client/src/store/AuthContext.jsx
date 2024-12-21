import { createContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";

export const AuthContext = createContext({
  user: {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
