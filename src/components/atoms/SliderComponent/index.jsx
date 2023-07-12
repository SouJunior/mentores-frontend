import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import CardMentor from "@/components/molecules/CardMentor";
import { Swiper, SwiperSlide } from "swiper/react";
import { mentores } from "@/mockups/mentores";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderComponent = () => {

	const styleSlide = {
		width: '10px',
		marginRight:'0px',
		marginLeft:'0px',
		gap:'0px'
	}
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
     
    >
      {mentores.map((mentor) => {
        return (
          <SwiperSlide style={styleSlide} key={mentor.name}>
            <CardMentor mentor={mentor} />
          </SwiperSlide>
        );
      })}
      ...
    </Swiper>
  );
};

export default SliderComponent;
