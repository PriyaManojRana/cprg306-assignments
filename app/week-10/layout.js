import { AuthContextProvider } from "../contexts/AuthContext";

export default function Week9Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
