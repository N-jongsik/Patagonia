import React, { useEffect } from "react";

const { kakao } = window;

function MapComp() {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);
  return (
    <>
      <div className="flex">
        <div className="container" style={{ width: "25%", height: "100vh" }}>
          <div
            className=" bg-black relative"
            style={{ height: "9.7rem", padding: "1.8rem 1rem" }}
          >
            <div className="relative w-full h-full block">
              <span
                className="map_store absolute"
                style={{
                  top: "50%",
                  left: "2.5rem",
                  width: "2.8rem",
                  height: "2.8rem",
                  marginTop: "-1.4rem",
                }}
              ></span>
              <input
                type="text"
                style={{
                  color: "#a9a9a9",
                  borderRadius: "2.5rem",
                  height: "5.8rem",
                  paddingLeft: "6rem",
                  fontSize: "1.6rem",
                  background: "#fafafa",
                  transition: "background 250ms ease-out",
                }}
                className="w-full
                pr-6"
              />
            </div>
          </div>
          <div className="h-4/5 bg-red-600"></div>
        </div>
        <div id="map" style={{ width: "75%", height: "100vh" }}></div>
      </div>
      <section style={{ paddingLeft: "6rem", paddingRight: "6rem" }}>
        <div
          className="title text-center"
          style={{ margin: "4rem 0 2.5rem", borderTop: "0.1rem solid #cccccc" }}
        >
          <h3
            className="relative inline-block font-bold text-3xl px-8 tracking-wide bg-white whitespace-pre-wrap"
            style={{ top: "-1rem" }}
          >
            Patagonia Retail Stores
          </h3>
        </div>
        <form>
          <div
            className="inline-block w-full font-normal text-center"
            style={{ marginBottom: "1rem", fontSize: "1.4rem" }}
          >
            <span className="font-extrabold">지역을 선택하세요</span>
          </div>
        </form>
        <select
          name="local_si"
          id="city"
          className="block w-full"
          style={{
            height: "4.2rem",
            marginBottom: "0.5rem",
            padding: "0.9rem 4.5rem 0.9rem 2.4rem",
            color: "#555555",
            fontSize: "1.4rem",
            lineHeight: "1.4286",
            border: "0.1rem solid #cccccc",
          }}
        >
          <option value="">전체</option>
          <option value="서울">서울</option>
          <option value="경기">경기</option>
          <option value="인천">인천</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
          <option value="광주">광주</option>
          <option value="대전">대전</option>
          <option value="울산">울산</option>
          <option value="세종">세종</option>
          <option value="강원">강원</option>
          <option value="충남">충남</option>
          <option value="충북">충북</option>
          <option value="전남">전남</option>
          <option value="전북">전북</option>
          <option value="경남">경남</option>
          <option value="경북">경북</option>
          <option value="제주">제주</option>
        </select>
      </section>
    </>
  );
}

export default MapComp;
