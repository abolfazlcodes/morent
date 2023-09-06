import GlobalStyles from "./styles/GlobalStyles";
import sampleCar from "./assets/ad bg 1.png";

import Navbar from "./ui/Navbar";
import Button from "./ui/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <main
        style={{
          border: "1px solid blue",
          maxWidth: "170rem",
          margin: "auto",
          padding: "3rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "35rem",
              backgroundColor: "#54A6FF",
              padding: "1.5rem",
              borderRadius: "1rem",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                height: "100%",
                width: "40%",
                gap: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "3.2rem",
                  fontWeight: "500",
                }}
              >
                The Best PlatForm for Car Rental
              </h2>
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                Ease of doing a car rental safely and reliably. Of course at a
                low price
              </p>
              <Button size='medium' variation='primary'>
                Rent Car
              </Button>
            </div>

            <img
              style={{
                position: "absolute",
                bottom: "0",
                right: "30%",
              }}
              src={sampleCar}
              alt=''
            />
          </div>

          <div
            style={{
              width: "50%",
              height: "35rem",
              padding: "1.5rem",
              backgroundColor: "#3563E9",
              borderRadius: "1rem",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                height: "100%",
                width: "40%",
                gap: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "3.2rem",
                  fontWeight: "500",
                }}
              >
                Easy way to rent a car at a low price
              </h2>
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <Button size='medium' variation='secondary'>
                Rent Car
              </Button>
            </div>

            <img
              style={{
                position: "absolute",
                bottom: "0",
                right: "30%",
              }}
              src={sampleCar}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
