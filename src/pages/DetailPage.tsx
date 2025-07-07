import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (label: string) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };
  const isAnySelected = selected.length > 0;
  const navigate = useNavigate();
  const imageMap: Record<string, string> = {
    엘리베이터: "elevator.png",
    에스컬레이터: "escalator.png",
    수평보행기: "walker.png",
    "이동식 안전발판": "portable_ramp.png",
    "휠체어 리프트": "lift.png",
    "전동휠체어 급속충전기": "charger.png",
    음성유도기: "voice_guide.png",
    "수어 영상 전화기": "sign_video_phone.png",
    경사로: "slope.png",
  };

  const service1 = ["엘리베이터", "에스컬레이터"];
  const service2 = [
    "수평보행기",
    "이동식 안전발판",
    "휠체어 리프트",
    "전동휠체어 급속충전기",
    "음성유도기",
    "수어 영상 전화기",
    "경사로",
  ];
  return (
    <div className="h-full bg-[#FBFBFB] smooth scroll-smooth overflow-y-hidden overflow-x-hidden  [&::-webkit-scrollbar]:hidden">
      <div>
        <img
          src="/back.png"
          alt="로고"
          className="w-[16px] h-[32px] mt-[28px] ml-[24px]"
          onClick={() => navigate(-1)}
        />
        <p className="text-[24px] font-[600] mt-[99px] ml-[35px] text-[#4C4C4C]">
          어떤 시설을 이용하실 건가요?
        </p>
        <p className="text-[16px] font-[400] mt-[9px] ml-[35px] text-[#4C4C4C]">
          필요한 서비스를 선택해 주세요
        </p>
      </div>
      <div className="w-[380px] h-full mt-[33px] ml-[16px] pt-[26px] bg-white rounded-t-[19px]">
        <p className="text-[20px] font-[400] ml-[24px] text-[#4C4C4C]">
          주 이동장치
        </p>
        <div className="flex gap-[3px] ml-[10px]">
          {service1.map((label) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className={`relative w-[80px] h-[80px] rounded-[15px] ml-[7px] mt-[20px] overflow-hidden transition-colors duration-200`}
            >
              <img
                src={`/${imageMap[label]}`}
                alt={label}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {selected.includes(label) && (
                <div className="absolute top-0 left-0 w-full h-full bg-[#465785]  opacity-70"></div>
              )}
              <span
                className={`relative z-10 font-[400] text-[13px] text-center break-keep whitespace-normal
              ${selected.includes(label) ? "text-[#FFFFFF]" : "text-black"}`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
        <p className="text-[20px] font-[400] ml-[24px] mt-[50px] text-[#4C4C4C]">
          보조 이동 소통 설비
        </p>
        <div className="flex flex-wrap  gap-1 ml-[10px] ">
          {service2.map((label) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className={`relative w-[80px] h-[80px] rounded-[15px] ml-[7px] mt-[20px] overflow-hidden transition-colors duration-200`}
            >
              <img
                src={`/${imageMap[label]}`}
                alt={label}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {selected.includes(label) && (
                <div className="absolute top-0 left-0 w-full h-full bg-[#465785] opacity-70"></div>
              )}

              <span
                className={`relative z-10 font-[400] text-[13px] text-center break-keep whitespace-normal
              ${selected.includes(label) ? "text-[#FFFFFF]" : "text-black"}`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
        <button
          disabled={!isAnySelected}
          onClick={() => navigate("/setting", { state: selected })}
          className={`mt-[70px] mb-12 ml-[25px] w-[325px] h-[52px] rounded-[10px] ${
            isAnySelected
              ? "bg-[#465785] text-white"
              : "bg-[#BCBCBC] text-white "
          }`}
        >
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
