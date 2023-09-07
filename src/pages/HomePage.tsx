import Advertisement from "../ui/Advertisement";
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
