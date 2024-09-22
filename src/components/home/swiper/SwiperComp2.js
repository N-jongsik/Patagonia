// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Swiper의 기본 CSS
// import SwiperCore, { Pagination, Navigation } from 'swiper';
// import sw1 from '../../../assets/images/second_sw1.jpg';
// import sw2 from '../../../assets/images/second_sw2.jpg';
// import sw3 from '../../../assets/images/second_sw3.jpg';
// import sw4 from '../../../assets/images/second_sw4.jpg';
// import sw5 from '../../../assets/images/second_sw5.jpg';
// import sw6 from '../../../assets/images/second_sw6.jpg';

// // Swiper에 모듈 등록
// SwiperCore.use([Pagination, Navigation]);

// const SwiperComp2 = () => {
//   return (
//     <Swiper
//       spaceBetween={50} // 슬라이드 간격
//       slidesPerView={4} // 한 번에 보여줄 슬라이드 개수 (4개)
//       navigation // 내비게이션 (좌우 화살표) 활성화
//     >
//       {[sw1, sw2, sw3, sw4, sw5, sw6].map((image, index) => (
//         <SwiperSlide key={index}>
//           <div className="flex justify-center items-center w-96 h-96 bg-gray-200">
//             <img className="h-full w-full object-cover" src={image} alt={`slide-${index + 1}`} />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SwiperComp2;
