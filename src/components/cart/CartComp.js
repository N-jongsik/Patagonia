import { React, useState } from "react";
import product1 from "../../assets/images/product1.jpg";
import foot_icon1 from "../../assets/images/icons_organic.png";
import foot_icon2 from "../../assets/images/icons_fairTrade2.png";
import foot_icon3 from "../../assets/images/icons_recycled2.png";
import foot_icon4 from "../../assets/images/icons_hemp.png";
import foot_icon5 from "../../assets/images/for-the-planet.png";
import sletter from "../../assets/images/ybonsletter.png";
const products = [
  {
    id: 1,
    name: "'73 Skyline Uprisal Hoody",
    sub_name: "73 스카이라인 업라이절 후디",
    href: "#",
    color: "Ink Black (INBK)",
    style_num: "26685P7",
    size: "XS",
    price: "159,000원",
    quantity: 1,
    imageSrc: product1,
    imageAlt: "",
  },
  {
    id: 2,
    name: "'73 Skyline Uprisal Hoody",
    sub_name: "73 스카이라인 업라이절 후디",
    href: "#",
    color: "Ink Black (INBK)",
    style_num: "26685P7",
    size: "XS",
    price: "159,000원",
    quantity: 1,
    imageSrc: product1,
    imageAlt: "",
  },
];

function CartComp() {
  const [open, setOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mt-8 mb-8">
      <div className="font-bold text-5xl ml-10 mb-16 mt-15">
        <p>장바구니</p>
      </div>
      <div className="flex justify-between">
        <div className="h-full">
          <div className="flex justify-between max-w-screen-xl">
            <div className="ml-6 mb-4">
              <label className="inline-flex items-center px-4 py-2 text-lg text-gray-900">
                <div
                  className={`h-6 w-6 border-2 border-gray-900 rounded flex items-center justify-center cursor-pointer ${
                    isChecked ? "bg-black" : "bg-white"
                  }`}
                  onClick={handleCheckboxChange}
                >
                  {isChecked && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
                <span
                  className="ml-2 cursor-pointer"
                  onClick={handleCheckboxChange}
                >
                  전체선택
                </span>
              </label>
            </div>

            <div>
              <button
                type="button"
                className="font-bold text-lg text-black ml-8 bg-white border-solid border-black border-4 px-10 py-1 rounded-full"
              >
                선택 삭제
              </button>
            </div>
          </div>
          <div className="flow-root min-h-full">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex ml-12 mb-4 py-6 max-w-screen-xl h-120"
                >
                  <div>
                    <div className="mb-4">
                      <label className="inline-flex items-center px-2 py-2 text-lg text-gray-900">
                        <div
                          className={`h-6 w-6 border-2 border-gray-900 rounded flex items-center justify-center cursor-pointer ${
                            isChecked ? "bg-black" : "bg-white"
                          }`}
                          onClick={handleCheckboxChange}
                        >
                          {isChecked && (
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={handleCheckboxChange}
                        ></span>
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <div className="h-80 w-72 flex-shrink-0 overflow-hidden  border border-gray-200">
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className="h-full w-full  object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <div className="flex justify-between">
                              <div>
                                <div className="flex justify-between text-3xl font-extrabold text-gray-700 mb-1">
                                  <a href={product.href}>{product.name}</a>
                                </div>
                                <div className="flex justify-between text-xl font-extrabold text-gray-500 mb-1 ml-2">
                                  {product.sub_name}
                                </div>
                              </div>
                              <div className="flex justify-between text-2xl font-extrabold text-gray-900 mb-1 ml-2">
                                {product.price}
                              </div>
                            </div>
                            <div className="flex justify-between text-xl font-medium text-gray-800 mb-1 ml-2">
                              {product.style_num}
                            </div>
                            <div className="flex justify-between text-xl font-medium text-gray-800 mb-1 ml-2">
                              Color: {product.color}
                            </div>
                            <div className="flex justify-between text-xl font-medium text-gray-800 mb-1 ml-2">
                              Size: {product.size}
                            </div>
                            <div className="flex justify-between text-xl font-medium text-gray-800 mb-1 ml-2">
                              <span className="underline">
                                Qty: {product.quantity}
                              </span>
                            </div>
                          </div>
                          <div className="mt-72">
                            <button
                              type="button"
                              className="font-bold mr-6 text-lg text-gray-900"
                            >
                              삭제
                            </button>
                            <button
                              type="button"
                              className="font-bold text-lg text-white ml-8 bg-gray-900 px-10 py-1 rounded-full"
                            >
                              바로구매
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* foot */}
          <div className="font-bold text-4xl ml-10 mb-12 mt-32">
            <p>Order Footprint</p>
          </div>
          <div className="flex justify-between w-60 ml-10">
            <div className="bg-white border-black border-solid border-4 w-12 h-12 rounded-full">
              <img src={foot_icon1} className="w-12 h-12"></img>
            </div>
            <div className="bg-white border-black border-solid border-4 w-12 h-12 rounded-full">
              <img src={foot_icon2} className="w-12 h-12"></img>
            </div>
            <div className="bg-white border-black border-solid border-4 w-12 h-12 rounded-full">
              <img src={foot_icon3} className="w-12 h-12"></img>
            </div>
            <div className="bg-white border-black border-solid border-4 w-12 h-12 rounded-full">
              <img src={foot_icon4} className="w-12 h-12"></img>
            </div>
          </div>

          <div className="flex justify-between  bg-gray-100 ml-10 mt-4 px-4 py-6 rounded-lg max-w-screen-xl">
            <div className="ml-4">
              <img src={foot_icon5} className="w-28 h-12"></img>
            </div>
            <div className="flex justify-between gap-2 mr-36 mt-3">
              <div className="text-2xl">
                <p>
                  구매하신 금액의 1%는 풀뿌리 환경단체에 지원금으로 전달됩니다.
                </p>
              </div>
              <div className="text-2xl font-bold">
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 창 */}
        <div className="bg-black w-1/3 rounded-lg py-4 ml-2 mr-8 h-3/5">
          <div className="ml-28">
            <div className="text-white font-bold text-xl ml-4 py-4">
              <p>전체합계</p>
            </div>
            <div className="text-white font-semibold text-md ml-4 mt-6 flex justify-between w-96">
              <p>총 상품금액</p>
              <p>349,000원</p>
            </div>
            <div className="text-white font-semibold text-md ml-4 mt-4 flex justify-between w-96">
              <p>총 할인금액</p>
              <p>0원</p>
            </div>
            <div className="text-white font-semibold text-md ml-4 mt-4 flex justify-between w-96">
              <p>총 배송비</p>
              <p>0원</p>
            </div>

            <div className="py-4 px-2 ml-4 text-white w-96">
              <hr></hr>
            </div>

            <div className="text-white font-semibold text-md ml-4 mt-6 flex justify-between w-96">
              <p>총 결제 예정 금액</p>
              <p>349,000원</p>
            </div>

            <div className="mt-8 mb-4">
              <button
                type="button"
                className="font-bold text-lg text-white ml-20 bg-cb-1000 border-solid border-cb-1000  border-4 px-10 py-1 rounded-full"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;구매하기&nbsp;&nbsp;&nbsp;
              </button>
            </div>
            <div className="mt-8 mb-4">
              <button
                type="button"
                className="font-bold text-lg text-white ml-20 bg-black border-solid border-white border-4 px-10 py-1 rounded-full"
              >
                쇼핑 계속하기
              </button>
            </div>

            <div>
              <img src={sletter} className="w-96 h-80"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComp;
