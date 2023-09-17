import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  max-width: 192rem;
  margin: auto;
  border: 1px solid black;
  min-height: 100dvh;
`;

function AppLayout() {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  );
}

export default AppLayout;
