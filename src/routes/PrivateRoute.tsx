// import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
// import { useUserContext } from '../context/user_context';
interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  return <h4>Private Route</h4>;
};
export default PrivateRoute;