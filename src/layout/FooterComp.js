import React from 'react';
import foot1 from '../../src/assets/images/S24-Brand-Evergreen-Icons-footprint.svg';
import foot2 from '../../src/assets/images/S24-Brand-Evergreen-Icons-ironclad.svg';
import foot3 from '../../src/assets/images/S24-Brand-Evergreen-Icons-percent.svg';
import foot4 from '../../src/assets/images/S24-Brand-Evergreen-Icons-planet.svg';
import foot5 from '../../src/assets/images/S24-Brand-Evergreen-Icons-wornwear.svg';

const Footer = () => {
  return (
    <footer id="footer" className="fb__footer bg-black text-white py-10">
      {/* Top Section */}
      <div className="ptg__footer pb-8 border-b border-gray-700 px-10">
  <h4 className="hidden">Footer</h4>
  <ul className="flex flex-wrap justify-center">
    <li className="py-3 px-4 w-1/5 text-left">
      <div>
        <img
          className="h-16 w-16 pb-4"
          src={foot2}
          alt="Ironclad"
        />
        <h5 className="font-black pb-4">모든 제품을 보증합니다.</h5>
        <a href="#" className="text-xs block hover:underline">철갑 보증</a>
      </div>
    </li>
    <li className="py-3 px-4 w-1/5 text-left">
      <div>
        <img
          className="h-16 w-16 pb-4"
          src={foot1}
          alt="Environment Responsibility"
        />
        <h5 className="font-black pb-4">사회와 환경에 책임을 다합니다.</h5>
        <a href="#" className="text-xs block hover:underline">환경 발자국</a>
      </div>
    </li>
    <li className="py-3 px-4 w-1/5 text-left">
      <div>
        <img
          className="h-16 w-16 pb-4"
          src={foot3}
          alt="Supporting Environment Groups"
        />
        <h5 className="font-black pb-4">환경 단체를 지원합니다.</h5>
        <a href="#" className="text-xs block hover:underline">파타고니아 액션웍스</a>
      </div>
    </li>
    <li className="py-3 px-4 w-1/5 text-left">
      <div>
        <img
          className="h-16 w-16 pb-4"
          src={foot5}
          alt="Product Longevity"
        />
        <h5 className="font-black pb-4">제품을 오래 쓸 수 있습니다.</h5>
        <a href="#" className="text-xs block hover:underline">원웨어</a>
      </div>
    </li>
    <li className="py-3 px-4 w-1/5 text-left">
      <div>
        <img
          className="h-16 w-16 pb-4"
          src={foot4}
          alt="Donate to Earth"
        />
        <h5 className="font-black pb-4">수익을 지구에 바칩니다.</h5>
        <a href="#" className="text-xs block hover:underline">이본 쉬나드의 편지</a>
      </div>
    </li>
  </ul>
</div>



      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Support</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Order Status</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Shipping</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">More Information</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Sustainability */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Sustainability</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Footprint</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Patagonia Action Works</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Worn Wear</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Ironclad Guarantee</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Email Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Phone Support</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Find a Store</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
