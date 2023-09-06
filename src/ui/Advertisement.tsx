import Ad from "./Ad";

import sampleCarOne from "../assets/ad bg 1.png";
import sampleCarTwo from "../assets/ad bg 2.png";

function Advertisement() {
  return (
    <>
      <Ad
        type='adTypeA'
        image={sampleCarOne}
        title='The Best PlatForm for Car Rental'
        description='Ease of doing a car rental safely and reliably. Of course at a low
          price'
      />
      <Ad
        type='adTypeB'
        image={sampleCarTwo}
        title='Easy way to rent a car at a low price'
        description='Providing cheap car rental services and safe and comfortable
                facilities.'
      />
    </>
  );
}

export default Advertisement;
