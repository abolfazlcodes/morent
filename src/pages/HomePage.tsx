import Advertisement from "../ui/Advertisement";
import Row from "../ui/Row";

import HomePageCarsWrapper from "../ui/HomePageCarsWrapper";

function HomePage() {
  return (
    <>
      <Row type='vertical'>
        <Advertisement />
      </Row>

      <HomePageCarsWrapper />
    </>
  );
}

export default HomePage;
