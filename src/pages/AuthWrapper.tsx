import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return <h4>AuthWrapper</h4>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
