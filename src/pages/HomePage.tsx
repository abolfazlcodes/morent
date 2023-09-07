import Advertisement from "../ui/Advertisement";
import Header from "../ui/Header";
import Row from "../ui/Row";

function HomePage() {
  return (
    <>
      <Row type='vertical'>
        <Advertisement />
      </Row>

      <Header
        title='popular cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />

      {/* car cards */}
    </>
  );
}

export default HomePage;
