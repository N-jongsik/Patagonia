import React from "react";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";
import product9 from "../../assets/images/product9.jpg";

const navigation = [
  { name: "모든상품", href: "#", current: true },
  { name: "신상품", href: "#", current: false },
  { name: "재킷&플리스", href: "#", current: false },
  { name: "플리스", href: "#", current: false },
  { name: "스웨트셔츠&후디", href: "#", current: false },
  { name: "셔츠", href: "#", current: false },
  { name: "티셔츠", href: "#", current: false },
  { name: "팬츠&레깅스", href: "#", current: false },
  { name: "언더웨어&스포츠 브라", href: "#", current: false },
  { name: "모자&액세서리", href: "#", current: false },
  { name: "베이스레이어", href: "#", current: false },
  { name: "웻슈트", href: "#", current: false },
];

const category = [
  {
    id: "1",
    category: "카테고리",
    sub_category: "",
    sub_items: [
      "모든상품",
      "신상품",
      "재킷 & 베스트",
      "플리스",
      "스웨트셔츠 & 후디",
      "셔츠",
      "티셔츠",
      "팬츠 & 레깅스",
      "언더웨어 & 스포츠 브라",
      "모자 & 액세서리",
      "베이스레이어",
      "웻슈트",
    ],
  },
  {
    id: "2",
    category: "사이즈",
    sub_category: "",
    sub_items: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "3",
    category: "색상",
    sub_category: "",
    sub_items: ["하위 카테고리 1", "하위 카테고리 2"],
  },
  {
    id: "4",
    category: "핏",
    sub_category: "",
    sub_items: ["Regular Fit", "Relaxed Fit"],
  },
  {
    id: "5",
    category: "제품 특징",
    sub_category: "",
    sub_items: ["후드"],
  },
  {
    id: "6",
    category: "소재 및 생산 과정",
    sub_category: "",
    sub_items: ["리사이클 소재 사용", "햄프/마"],
  },
  {
    id: "7",
    category: "상품 정렬",
    sub_category: "최근등록순",
    sub_items: ["낮은가격순", "높은가격순", "최신등록순"],
  },
];

const products = [
  {
    id: 1,
    name: "'73 Skyline Uprisal Hoody",
    sub_name: "73 스카이라인 업라이절 후디",
    href: "#",
    price: "159,000원",
    imageSrc: product1,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-50", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 2,
    name: "Snowbelle Beanie",
    sub_name: "스노우벨 비니",
    href: "#",
    price: "89,000원",
    imageSrc: product2,
    imageAlt: "",
    colors: [
      { name: "Brown", class: "bg-cb-100", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 3,
    name: "Fisherman's Rolled Beanie",
    sub_name: "피셔맨즈 롤드 비니",
    href: "#",
    price: "69,000원",
    imageSrc: product3,
    imageAlt: "",
    colors: [
      { name: "Gray", class: "bg-cb-200", selectedClass: "ring-gray-900" },
      { name: "Orange", class: "bg-cb-300", selectedClass: "ring-gray-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 4,
    name: "Bandana",
    sub_name: "밴대나",
    href: "#",
    price: "35,000원",
    imageSrc: product4,
    imageAlt: "",
    colors: [
      { name: "Blue", class: "bg-cb-400", selectedClass: "ring-gray-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-500", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 5,
    name: "W's Diamond Quilted Bomber Hoody",
    sub_name: "우먼즈 다이아몬드 퀼티드 보머 후디",
    href: "#",
    price: "299,000원",
    imageSrc: product5,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-50", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-500", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 6,
    name: "W's Synchilla® Jacket",
    sub_name: "우먼즈 신칠라 재킷",
    href: "#",
    price: "249,000원",
    imageSrc: product6,
    imageAlt: "",
    colors: [
      { name: "Yellow", class: "bg-cb-600", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 7,
    name: "'73 Skyline Uprisal Hoody",
    sub_name: "73 스카이라인 업라이절 후디",
    href: "#",
    price: "159,000원",
    imageSrc: product7,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-50", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 8,
    name: "Daily Hoody Sweatshirt",
    sub_name: "데일리 후디 스웨트셔츠",
    href: "#",
    price: "199,000원",
    imageSrc: product8,
    imageAlt: "",
    colors: [
      { name: "Green", class: "bg-cb-700", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-800", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: 9,
    name: "Daily Crewneck Sweatshirt",
    sub_name: "데일리 크루넥 스웨트셔츠",
    href: "#",
    price: "159,000원",
    imageSrc: product9,
    imageAlt: "",
    colors: [
      { name: "Green", class: "bg-cb-700", selectedClass: "ring-gray-900" },
      { name: "Brown", class: "bg-gray-100", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-800", selectedClass: "ring-gray-900" },
      { name: "Brown", class: "bg-cb-900", selectedClass: "ring-gray-900" },
    ],
  },
];

const product_color = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ShopComp() {
  const [selectedColor, setSelectedColor] = useState(product_color.colors[0]);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleSubCategory = (id) => {
    setOpenCategoryId((prevId) => (prevId === id ? null : id));
  };

  const handleColorChange = (productId, color) => {
    setSelectedColor((prevSelected) => ({
      ...prevSelected,
      [productId]: color,
    }));
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-full px-2 py-8">
          <h1 className="text-7xl font-bold tracking-tight text-gray-900 text-left ml-6">
            Women's
          </h1>
        </div>
      </header>
      {/* Navbar */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-300">
          <div className="max-w-full px-0 sm:px-0 lg:px-0">
            <div className="flex h-12 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "text-black active-link"
                            : "text-gray-500 hover:text-black",
                          "px-3 py-2 text-sm font-medium relative"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
        <style jsx>{`
          /* Navigation underline styling */
          nav a.active-link {
            position: relative;
          }

          nav a.active-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 4px;
            background-color: black;
          }

          nav a:hover::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 2px;
            background-color: black;
          }

          /* Product image hover effect */
          .product-image-container {
            position: relative;
            overflow: hidden;
          }

          .product-image-container img {
            transition: opacity 0.3s ease-in-out;
          }

          .product-image-container:hover .product-image {
            opacity: 1;
          }

          /* Sub-items hover effect */
          .sub-item:hover {
            background-color: #e5e7eb;
          }

          /* Checkbox and Radio button clicked effect */
          input[type="checkbox"]:checked,
          input[type="radio"]:checked {
            background-color: black;
          }
        `}</style>
      </div>
      <main>
        <div className="mx-auto max-w-full px-2 py-6 sm:px-2 lg:px-2">
          <div className="flex flex-row justify-center items-start space-x-6 py-16 px-2">
            {/* Category */}
            <ul
              role="list"
              className="w-full max-w-xs divide-y divide-gray-100 p-1 ml-8"
            >
              {category.map((category) => (
                <li
                  key={category.id}
                  className="w-full max-w-[16rem] divide-y divide-gray-100 p-1 ml-8"
                >
                  <div className="flex min-w-0 gap-x-4 items-center">
                    <div className="min-w-0 flex-auto py-2">
                      <div className="flex items-center justify-between">
                        {/* Category Name */}
                        <p className="text-md font-semibold leading-6 text-gray-900 text-left">
                          {category.category}
                        </p>
                        <p className="text-xs font-semibold leading-6 text-gray-900 ml-16">
                          {category.sub_category}
                        </p>
                        {/* Toggle sub-items (SVG on the right) */}
                        <button
                          onClick={() => toggleSubCategory(category.id)}
                          className="ml-auto flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
                        >
                          <svg
                            className="w-4 h-4 stroke-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      {/* Render sub-items if the category is open */}
                      {openCategoryId === category.id && (
                        <div className="mt-2 space-y-1">
                          {/* Check if the category is for checkboxes */}
                          {[
                            "사이즈",
                            "핏",
                            "제품 특징",
                            "소재 및 생산 과정",
                          ].includes(category.category) ? (
                            // Render checkboxes for specific categories
                            category.sub_items.map((sub_item, index) => (
                              <div
                                className="flex items-center space-x-2 cursor-pointer"
                                onClick={() =>
                                  document
                                    .getElementById(
                                      `checkbox-${category.id}-${index}`
                                    )
                                    .click()
                                }
                              >
                                <input
                                  type="checkbox"
                                  id={`checkbox-${category.id}-${index}`}
                                  className="hidden peer"
                                />
                                <div className="w-5 h-5 bg-gray-300 rounded-sm flex items-center justify-center peer-checked:block">
                                  {/* 체크 표시 */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 peer-checked:block hidden" // 체크되었을 때만 보이도록
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>

                                <span className="text-sm font-bold">
                                  {sub_item}
                                </span>
                              </div>
                            ))
                          ) : category.category === "상품 정렬" ? (
                            // Render radio buttons for "상품 정렬"
                            <RadioGroup
                              aria-label="상품 정렬"
                              className="space-y-1"
                            >
                              {category.sub_items.map((sub_item, index) => (
                                <div
                                  className="flex items-center space-x-2 cursor-pointer"
                                  onClick={() =>
                                    document
                                      .getElementById(
                                        `radio-${category.id}-${index}`
                                      )
                                      .click()
                                  }
                                >
                                  <input
                                    type="radio"
                                    name="product-sort"
                                    id={`radio-${category.id}-${index}`}
                                    className="hidden peer" // 기본 라디오 버튼 숨기기
                                  />
                                  <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center peer-checked:bg-black peer-checked:border-black">
                                    <div className="w-3 h-3 bg-white rounded-full hidden peer-checked:block"></div>
                                  </div>
                                  <span className="text-sm font-bold">
                                    {sub_item}
                                  </span>
                                </div>
                              ))}
                            </RadioGroup>
                          ) : (
                            // Render simple list items for other categories
                            category.sub_items.map((sub_item, index) => (
                              <div
                                key={index}
                                className="text-sm font-bold p-2 rounded cursor-pointer transition-colors hover:bg-slate-50 sub-item"
                              >
                                {sub_item}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Product */}
            <div className="bg-white">
              <div className="mx-auto max-w-full px-0 py-6 sm:px-6 sm:py-6 lg:max-w-full lg:px-0">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative product-image-container"
                    >
                      <a
                        href={product.href}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          {/* Image with hover zoom and opacity effect */}
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="h-full w-full object-cover object-center product-image transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                          />

                          {/* Heart icon (visible on hover) */}
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <button>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0398 20.4217C9.43508 17.8138 6.99606 15.3748 4.40603 12.7847C3.20165 11.5875 2.75895 10.2667 2.80296 9.02974C2.84761 7.77503 3.39628 6.55167 4.27244 5.59641C5.14865 4.64109 6.32022 3.98898 7.56451 3.83514C8.79109 3.68348 10.1398 4.00831 11.4248 5.09612L11.9296 5.52346L12.4442 5.108C15.7557 2.43458 20.8659 4.3423 21.1822 8.56343C21.3072 10.2429 20.7751 11.6392 19.5807 12.8301C18.5698 13.8689 17.5278 14.8942 16.4787 15.9263C14.9818 17.3992 13.4705 18.8861 12.0398 20.4217Z"
                                  stroke="black"
                                  strokeWidth="1.6"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </a>

                      <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-700 font-medium">
                        {product.sub_name}
                      </p>

                      {/* Color button */}
                      <div className="mt-4 ml-2">
                        <fieldset aria-label="Choose a color" className="mt-4">
                          <RadioGroup
                            value={selectedColor[product.id]}
                            onChange={(color) =>
                              handleColorChange(product.id, color)
                            }
                            className="flex items-center space-x-3"
                          >
                            {product.colors.map((color) => (
                              <Radio
                                key={color.name}
                                value={color}
                                aria-label={color.name}
                                className={classNames(
                                  color.selectedClass,
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-2 ring-offset-1"
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    color.class,
                                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                                  )}
                                />
                              </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>
                      </div>
                      <p className="mt-3 text-sm font-bold text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShopComp;
