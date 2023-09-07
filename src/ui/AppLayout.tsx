import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";

const Main = styled.main`
  max-width: 170rem;
  margin: auto;
  padding: 3rem 1.5rem;
`;

function AppLayout() {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default AppLayout;
