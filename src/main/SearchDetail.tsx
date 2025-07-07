import { useNavigate } from "react-router-dom";
import LineProgress from "../components/LineProgress";
import FacilityPath from "../components/main/FacilityPath";
import Button2 from "../components/common/Button2";

const SearchDetailModal = () => {
  const nav = useNavigate();
  const segments = [
    { lineName: "9", ratio: 3 },
    { lineName: "4", ratio: 3 },
    { lineName: "우이신설", ratio: 4 },
  ];
  return (
    <div
      className="h-[490px] rounded-[19px] bg-[#FFFFFF] flex flex-col"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="flex gap-3 items-center justify-center mt-[32px] px-[26px]"
        role="group"
        aria-label="호선 구간"
      >
        <span className="text-[#4C4C4C] text-[24px] font-[500]" role="heading">
          신반포
        </span>
        <div
          className="w-[150px] h-[0.75px] bg-[#D1D1D1]"
          role="separator"
        ></div>
        <span className="text-[#4C4C4C] text-[24px] font-[500]" role="heading">
          정릉
        </span>
      </div>
      <div
        className="mt-[50px] mx-[26px]"
        role="region"
        aria-label="노선 진행도"
      >
        <LineProgress segments={segments} />
      </div>
      <div
        className="mt-[30px] px-[26px] overflow-y-auto max-h-[250px] scrollbar-hide"
        role="region"
        aria-label="역별 편의시설"
      >
        <FacilityPath />
      </div>
      <div
        className="mt-[26px] flex gap-[7px] justify-center"
        role="group"
        aria-label="경로 버튼"
      >
        <Button2 text="삭제 " onClick={() => nav("/main")} disabled={true} />
        <Button2 text="도착" onClick={() => nav("/main")} />
      </div>
    </div>
  );
};

export default SearchDetailModal;
