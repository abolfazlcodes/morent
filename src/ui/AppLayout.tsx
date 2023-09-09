import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  max-width: 170rem;
  margin: auto;
  padding: 1rem 1.5rem;
  border: 1px solid red;
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
