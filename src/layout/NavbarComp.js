import { NavLink } from "react-router-dom";
import React from "react";
import { Router, Link } from "react-router-dom";

function NavbarComp() {
  return (
    <nav>
      <h1>patagonia</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/detail">Detail</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/map">Map</NavLink>
        </li>
      </ul>
      <div className="bg-black ">
        <div className="flex justify-between px-4">
          <div>&nbsp;</div>
          <nav className="container mx-auto flex justify-center px-4 md:px-0 text-white">
            <h1>
              <a
                href="#"
                className="font-bold h-full flex justify-center items-center text-center"
                style={{ fontSize: "1.2rem", height: "4.8rem" }}
              >
                추석 연휴 배송 안내
              </a>
            </h1>
          </nav>
          <div className="hidden md:flex text-white ">
            <Link
              to={"/map"}
              className="font-bold flex justify-center items-center h-full text-center"
              style={{
                fontSize: "1.2rem",
                padding: "0 20px",
                whiteSpace: "nowrap",
              }}
            >
              매장찾기
            </Link>
          </div>
        </div>
        <nav>
          <div className="flex justify-around" style={{ background: "white" }}>
            <div className="flex justify-center items-center">
              <Link to={"/"}>
                <img
                  src={require("../assets/images/logo_patagonia.jpg")}
                  alt="logo_patagonia"
                />
              </Link>
            </div>
            <ul className="flex py-5">
              <li>
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black "
                  style={{ padding: "0 3rem" }}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black "
                  style={{ padding: "0 3rem" }}
                >
                  Activism
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black "
                  style={{ padding: "0 3rem" }}
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold hidden md:block py-2 text-black "
                  style={{ padding: "0 3rem" }}
                >
                  Stories
                </a>
              </li>
            </ul>
            <div className="text-black block py-2">
              <ul className="flex justify-center items-center">
                <li className="p-5 hidden md:block">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </li>
                <li className="p-5">
                  <i class="fa-regular fa-user"></i>
                </li>
                <li className="p-5">
                  <i class="fa-regular fa-heart"></i>
                </li>
                <li className="p-5">
                  <i class="fa-solid fa-cart-shopping"></i>
                </li>
                <li className="p-5 hidden md:block">
                  <i class="fa-solid fa-bars"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default NavbarComp;
