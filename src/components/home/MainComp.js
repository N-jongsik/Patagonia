import React from "react";
import banner from "../../assets/images/main_banner.jpg"
import card1 from "../../assets/images/card1.jpg"
import card2 from "../../assets/images/card2.jpg"
import card3 from "../../assets/images/card3.jpg"
import card4 from "../../assets/images/card4.jpg"
import midbanner from "../../assets/images/middle_banner.jpg"
import final_banner from "../../assets/images/final_banner.jpg"
import SwiperComp from "./swiper/SwiperComp"
import SwiperComp2 from "./swiper/SwiperComp2"



function MainComp() {
  return <>
    <div className="mb-7"> {/* 메인 banner 사진 */}
      <div className="relative"> 

		<img src={banner} className="w-full"/>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg p-2 rounded-md pb-5">
      			<h3 class="anti_title text-7xl font-bold pb-3 mb-3">이제 곧, 파타고니아의 계절</h3>
      			<p className="pb-3 mb-3">이번 시즌 파타고니아의 오리지널 플리스 컬렉션을 만나보세요.</p>
      			<a href="#" class="bg-white text-black w-40 h-12 flex items-center justify-center rounded-3xl font-bold hover:scale-110 transition-transform duration-300">Shop</a>
			</div>
	  </div>
    </div>
	

	<div className="mb-7">   {/* 카드 */}
		<ul className="flex justify-center items-center gap-4 w-full mx-auto">
			<li><img src={card1} className="w-96 h-96" ></img></li>
			<li><img src={card2} className="w-96 h-96"></img></li>
			<li><img src={card3} className="w-96 h-96"></img></li>
			<li><img src={card4} className="w-96 h-96"></img></li>
		</ul>
	</div>

	<div className="mb-10"> {/* 2번째 banner 사진 */}
      <div className="relative"> 
		<img src={midbanner} className="w-full"/>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg p-2 rounded-md pb-5">
      			<h3 class="anti_title text-7xl font-bold pb-3 mb-3">New Arrivals</h3>
      			<p className="mb-0">FW'24 신상품이 입고되었습니다. 언제나 그렇듯 우리가 지키기 위해 노력하는 지구를 위한 마음을 담았습니다.</p>
				<p className="pb-3 mb-3">여러분이 앞으로도 계속 파타고니아를 통해 '품질의 차이'를 느낄 수 있도록 노력하겠습니다.</p>
      			
				<div className="flex gap-4">
				<a href="#" class="bg-white text-black w-40 h-12 flex items-center justify-center rounded-3xl text-base font-bold hover:scale-110 transition-transform duration-300">Women's</a>
      			<a href="#" class="bg-white text-black w-40 h-12 flex items-center justify-center rounded-3xl text-base font-bold hover:scale-110 transition-transform duration-300">Men's</a>
				<a href="#" class="bg-white text-black w-40 h-12 flex items-center justify-center rounded-3xl text-base font-bold hover:scale-110 transition-transform duration-300">Kids'& Baby</a>
      			<a href="#" class="bg-white text-black w-40 h-12 flex items-center justify-center rounded-3xl text-base font-bold hover:scale-110 transition-transform duration-300">Shop</a>
				</div>
				
			</div>
	  </div>
    </div>

	<div className="mb-10">{/* 스와이퍼 컴포넌트 */}
		<SwiperComp/>
	</div>

	<div className="mb-7"> 
      <div className="relative"> 
		<img src={final_banner} className="w-full"/>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg p-2 rounded-md pb-5">
      			<h3 class="anti_title text-7xl font-bold pb-3 mb-3">멤버십 혜택 안내</h3>
      			<p className="pb-3 mb-3">회원 가입하시고 다양한 혜택을 누리세요.</p>
      			<a href="#" class="bg-white text-black w-40 h-12 flex items-center justify-center rounded-3xl font-bold hover:scale-110 transition-transform duration-300">더보기</a>
			</div>
	  </div>
    </div>

	<div className="mb-52">
		<SwiperComp2/>
	</div>


  </>;
  


}

export default MainComp;

