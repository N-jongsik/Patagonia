import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper의 기본 CSS
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Swiper1 from '../../../assets/images/Swiper1.jpg';
import Swiper2 from '../../../assets/images/Swiper2.png';
import Swiper3 from '../../../assets/images/Swiper3.png';
import Swiper4 from '../../../assets/images/Swiper4.png';
import Swiper5 from '../../../assets/images/Swiper5.png';
import Swiper6 from '../../../assets/images/Swiper6.png';
import Swiper7 from '../../../assets/images/Swiper7.png';
import Swiperlast from '../../../assets/images/Swiperlast.png';


// Swiper에 모듈 등록
SwiperCore.use([Pagination, Navigation]);

const SwiperComp = () => {
  return (
    <Swiper
      spaceBetween={50} // 슬라이드 간격
      slidesPerView={4} // 한 번에 보여줄 슬라이드 개수 (4개)
      navigation // 내비게이션 (좌우 화살표) 활성화
    >
      {[Swiper1, Swiper2, Swiper3, Swiper4, Swiper5, Swiper6, Swiper7, Swiperlast ].map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center w-96 h-96 bg-gray-200">
            <img className="h-full w-full object-cover" src={image} alt={`slide-${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
