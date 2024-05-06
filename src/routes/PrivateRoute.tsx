import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth0();
  return <>{user ? children : <Navigate to="/"></Navigate>}</>;
};
export default PrivateRoute;
