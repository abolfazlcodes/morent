import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute() {
  const navigate = useNavigate();

  // step 1: check to see if we already have an authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // step 3: if there is no authenticated user, redirect to the login page
  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // step 2: while loading we need to show a spinner to the user
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // step 4: if the user is authenticated, render the pages
  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
