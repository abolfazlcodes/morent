import Advertisement from "../ui/Advertisement";
import Header from "../ui/Header";
import Row from "../ui/Row";

import CardsWrapper from "../ui/CardsWrapper";

function HomePage() {
  return (
    <>
      <Row type='vertical'>
        <Advertisement />
      </Row>

      <CardsWrapper />
    </>
  );
}

export default HomePage;
