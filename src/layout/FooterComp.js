import React from 'react';
import foot1 from '../../src/assets/images/S24-Brand-Evergreen-Icons-footprint.svg';
import foot2 from '../../src/assets/images/S24-Brand-Evergreen-Icons-ironclad.svg'
import foot3 from '../../src/assets/images/S24-Brand-Evergreen-Icons-percent.svg'
import foot4 from '../../src/assets/images/S24-Brand-Evergreen-Icons-planet.svg'
import foot5 from '../../src/assets/images/S24-Brand-Evergreen-Icons-wornwear.svg'

const Footer = () => {
  return (
    <footer id="footer" className="fb__footer bg-black text-white">
      <div className="ptg__footer">
        <h4 className="hidden">Footer</h4>
        <ul className="flex gap-5 justify-center align-center">
          <li className="py-3 px-4">
            <div>
              <img
                className='h-16 w-16 pb-2'
                  src={foot2}
                  alt="Ironclad"
                />
            <h5 className='font-black pb-2'>모든 제품을<br/>보증합니다.</h5>
            <a className='text-xs'>철갑 보증</a>
            </div>
          </li>
          <li className="py-3 px-4">
            <div>
              <img
                className='h-16 w-16 pb-2'
                  src={foot1}
                  alt="Ironclad"
                />
            <h5 className='font-black pb-2'>사회와 환경에 <br/>책임을 다합니다.</h5>
            <a className='text-xs'>환경 발자국</a>
            </div>
          </li>
          <li className="py-3 px-4">
            <div>
              <img
                className='h-16 w-16 pb-2'
                  src={foot3}
                  alt="Ironclad"
                />
            <h5 className='font-black pb-2'>환경 단체를 <br/>지원합니다.</h5>
            <a className='text-xs'>파타고니아 액션웍스</a>
            </div>
          </li>
          <li className="py-3 px-4">
            <div>
              <img
                className='h-16 w-16 pb-2'
                  src={foot5}
                  alt="Ironclad"
                />
            <h5 className='font-black pb-2'>제품을 오래 쓸 수  <br/>있습니다.</h5>
            <a className='text-xs'>원웨어</a>
            </div>
          </li>
          <li className="py-3 px-4">
            <div>
              <img
                className='h-16 w-16 pb-2'
                  src={foot4}
                  alt="Ironclad"
                />
            <h5 className='font-black pb-2'>수익을 지구에 <br/>바칩니다.</h5>
            <a className='text-xs'>이본 쉬나드의 편지</a>
            </div>
          </li>
          {/* <li className="ptg__footer__list__item cetm">
            <i className="ptg__footer__list__item-icon">
            <img
              className='h-8 w-8'
                src={foot2}
                alt="Ironclad"
              />
            </i>
            <h5>사회와 환경에 책임을 다합니다.</h5>
            <a href="/our_footprint/main" className="ptg__footer-viewlink">환경 발자국</a>
          </li>
          <li className="ptg__footer__list__item cetm">
            <i className="ptg__footer__list__item-icon">
            <img
              className='h-8 w-8'
                src={foot3}
                alt="Ironclad"
              />
            </i>
            <h5>환경 단체를 지원합니다.</h5>
            <a href="/actionworks/home" className="ptg__footer-viewlink">파타고니아 액션웍스</a>
          </li>
          <li className="ptg__footer__list__item cetm">
            <i className="ptg__footer__list__item-icon">
            <img
              className='h-8 w-8'
                src={foot4}
                alt="Ironclad"
              />
            </i>
            <h5>제품을 오래 쓸 수 있습니다.</h5>
            <a href="/wornwear/wornwearList" className="ptg__footer-viewlink">원웨어</a>
          </li>
          <li className="ptg__footer__list__item cetm">
            <i className="ptg__footer__list__item-icon">
            <img
              className='h-8 w-8'
                src={foot5}
                alt="Ironclad"
              />
            </i>
            <h5>수익을 지구에 바칩니다.</h5>
            <a href="/ownership/main" className="ptg__footer-viewlink">이본 쉬나드의 편지</a>
          </li> */}
        </ul>

        {/* <ul className="ptg__footer__list bottom">
          <li className="ptg__footer__list__item">
            <h6>파타고니아 코리아 멤버십 가입하기</h6>
            <p className="ptg__footer-ko">
              ㈜파타고니아코리아의 회원으로 가입하시면 다양한 혜택을 누리실 수 있습니다.
              회원가입시 본인 인증 후 매장 가입 내역 및 구매 내역을 자동으로 통합하여 업데이트 합니다.
            </p>
            <a href="/member/login" className="btn btn-full-white btn-middle ptg__footer-joinlink btn-font">가입하기</a>
          </li>
          <li className="ptg__footer__list__item">
            <h6 className="item-tit eng-font">Need Help?</h6>
            <div className="mtop">
              <a href="/customer/" className="btn font-white card-cta btn-font">고객센터</a>
              <a href="/mypage" className="btn font-white card-cta btn-font">마이페이지</a>
              <a href="/customer/qna" className="btn font-white card-cta btn-font">1:1 문의</a>
              <a href="/customer/refund_guide" className="btn font-white card-cta btn-font">반품/환불 안내</a>
              <a href="/customer/repair" className="btn font-white card-cta btn-font">수선 안내 및 조회</a>
              <a href="/size-fit/main" className="btn font-white card-cta btn-font">사이즈 &amp; 핏 가이드</a>
              <a href="/member/login?url=" className="btn font-white card-cta btn-font">로그인</a>
              <p className="ptg__footer__list__item-tel">
                <br />
                <strong>대표전화 <a href="tel:1544-1876">1544-1876</a></strong>
                <br />
                (평일 오전 9시 반 ~ 오후 5시 / 점심시간 오후 12시 반 ~ 오후 1시 반)
                <br />
                주말 및 공휴일 휴무
              </p>
            </div>
          </li>

          <li className="ptg__footer__list__item last-child-none">
            <h6 className="item-tit-more">더보기</h6>
            <div className="ptg__footer__sitemap">
              <div className="ptg__footer__sitemap-item">
                <a href="/wornwear/wornwearList">Worn Wear</a>
                <a href="javascript:;" className="ptg__drawer__top__store">매장찾기</a>
                <a href="/customer/notice">공지사항</a>
                <a href="/customer/press">보도자료</a>
                <a href="/customer/event">이벤트</a>
              </div>
              <div className="ptg__footer__sitemap-item">
                <a href="/one_percent_for_the_planet/main">1% For The Planet</a>
                <a href="/shop/cart">장바구니</a>
                <a href="/recall/main">UPF 리콜</a>
                <a href="/review">모든 상품 리뷰 보기</a>
              </div>
            </div>
          </li>
        </ul> */}

        {/* <div className="ptg__footer__company__container">
          <div className="ptg__footer__company__wrapper">
            <div className="ptg__footer__company__wrapper centered">
              <span className="ptg__footer__company-info"><strong>(주)파타고니아코리아</strong></span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">서울 강남구 삼성로122길 25 (삼성동) 파타고니아코리아</span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">대표번호 : 1544-1876 (AS문의:내선번호2번/온라인쇼핑몰문의:내선번호3번)</span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">대표 : 브레멘볼프강슈멜츠</span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">개인정보보호책임자 : 최종필</span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">사업자등록번호 : 220-88-66550</span>
              <span className="division"></span>
              <br />
              <span className="ptg__footer__company-info"><a href="/company/agreement">개인정보처리방침</a></span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">통신판매업신고 : 2016-서울강남-03669 <a href="javascript:void(0)" className="company__register__link" onClick={() => window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-66550', '_blank', 'width=600,height=650')}>[사업자정보확인]</a></span>
              <span className="division"></span>
              <span className="ptg__footer__company-info">KG이니시스 구매안전 서비스 <a href="javascript:void(0)" className="company__register__link" onClick={() => window.open('https://mark.inicis.com/mark/popup_v1.php?mid=ESFBMpatag', '_blank', 'width=474,height=580')}>[서비스가입사실확인]</a></span>
              <span className="division"></span>
              <span className="ptg__footer__company-info"><a href="mailto:patagoniakorea@patagonia.kr">patagoniakorea@patagonia.kr</a></span>
            </div>
            <div>
              <span className="ptg__footer__company-info">© 2024 Patagonia, Inc. All Rights Reserved.</span>
            </div>
          </div>
        </div> */}
      </div>

    </footer>
  );
};

export default Footer;
