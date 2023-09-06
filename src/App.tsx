import GlobalStyles from "./styles/GlobalStyles";
import Advertisement from "./ui/Advertisement";

import Navbar from "./ui/Navbar";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <main
        style={{
          maxWidth: "170rem",
          margin: "auto",
          padding: "3rem 1.5rem",
        }}
      >
        <Row type='vertical'>
          <Advertisement />
        </Row>
      </main>
    </>
  );
}

export default App;
