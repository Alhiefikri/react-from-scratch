import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";

function AuthPage({ children }) {
  const { loading, user } = useContext(AuthContext);

  if (loading) return <h1>Loading! Please wait</h1>;

  if (user) return children;

  return <Navigate to="/login" />;
}
export default AuthPage;
