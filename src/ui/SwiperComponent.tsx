import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface SwiperComponentProps {
  children: React.ReactNode;
}

function SwiperComponent({ children }: SwiperComponentProps) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      grabCursor={true}
      style={{
        width: "95%",
      }}
      breakpoints={{
        1160: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        850: {
          slidesPerView: 3,
        },
        550: {
          slidesPerView: 2,
        },
        200: {
          slidesPerView: 1,
        },
      }}
    >
      {children}
    </Swiper>
  );
}

export default SwiperComponent;
