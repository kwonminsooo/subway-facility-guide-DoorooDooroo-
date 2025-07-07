import { useEffect, useState } from "react";
import SearchDetailModal from "../main/SearchDetailModal";
import { getRouteInfo } from "../api/map";
import { extractPolylinePoints } from "../utils/extractPolylinePoints";

const MapPage = () => {
  const [showModal, setShowModal] = useState(true);
  const start = "신반포";
  const end = "정릉";

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=td08p9p7t6&submodules=geocoder";
    script.async = true;

    script.onload = async () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.555, 126.9706),
        zoom: 13,
      });

      try {
        const data = await getRouteInfo("신반포", "정릉"); // 직접 넣어야 함
        console.log("API 응답", data);

        const points = extractPolylinePoints(data);

        const latlngs = points.map(
          (pos) => new window.naver.maps.LatLng(pos.y, pos.x)
        );

        // 지도에 Polyline
        new (window as any).naver.maps.Polyline({
          map: map,
          path: latlngs,
          strokeColor: "#FF0000",
          strokeWeight: 5,
          strokeOpacity: 0.8,
        });
      } catch (err) {
        console.error("경로 불러오기 실패:", err);
      }
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative w-full h-full overflow-y-hidden ">
      <div id="map" className="w-full h-[900px] " />
      <div className="absolute flex justify-between top-8 left-8 z-10 w-[350px] h-[50px] bg-white rounded-[50px] shadow-md">
        <img
          src="/Vector.png"
          alt="로고"
          className="w-[17px] h-[17px] mt-[17px] ml-[16px]"
        />
        <span className="w-[117px] h-[20px] mt-3.5 font-[400] text-[16px] text-[#4C4C4C]">
          {start}
        </span>
        <img
          src="/fromto.png"
          alt="로고"
          className="w-[10px] h-[20px] mt-[15px]"
        />
        <span className="w-[131px] h-[20px] mt-3.5 font-[400] text-[16px] text-[#4C4C4C]">
          {end}
        </span>
      </div>
      {showModal && (
        <div className="absolute bottom-0 left-3 z-20">
          <SearchDetailModal showDetailButton={false} />
        </div>
      )}
    </div>
  );
};

export default MapPage;
