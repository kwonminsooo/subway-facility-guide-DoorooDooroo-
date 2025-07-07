import Button from "../components/common/Button";
import logo_icon from "/src/assets/dooroodooroo_icon.png";
import logo_title from "/src/assets/dooroodooroo_title.png";
import vector from "/src/assets/Vector.svg";
import arrow from "/src/assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col" role="main">
      <div
        className="w-[412px] h-[87px] bg-[#465785] flex gap-[6px] pt-[34px] px-[27px]"
        role="banner"
      >
        <img
          src={logo_title}
          role="img"
          aria-label="두루두루 로고 텍스트"
          alt="로고제목"
          className="w-[78px] h-[23px]"
        />
        <img
          src={logo_icon}
          role="img"
          aria-label="두루두루 아이콘"
          alt="로고이미지"
          className="w-[20px] h-[26px]"
        />
      </div>

      <div
        className="text-[24px] text-[#4C4C4C] mt-[68px] mx-[23px]"
        role="heading"
        aria-level={1}
      >
        두루루님 안녕하세요!
      </div>

      <div
        className="text-[16px] text-[#4C4C4C] mt-[11px] mx-[27px]"
        role="note"
      >
        어디로 안내해드릴까요?
      </div>

      <div
        className="mt-[50px] text-[20px] font-[400] text-[#4C4C4C] mx-[23px]"
        role="heading"
        aria-level={2}
      >
        경로 확인하기
      </div>

      <div
        className="w-[380px] h-[243px] mx-[16px] px-[16px] mt-[44px] cursor-pointer"
        role="button"
        aria-label="경로 설정 화면으로 이동"
        onClick={() => {
          navigate("/search");
        }}
      >
        <div
          className="flex items-center"
          role="group"
          aria-label="출발지 및 도착지 입력"
        >
          <img role="img" src={vector} alt="경로 바꾸기 아이콘" />
          <div className="flex flex-col gap-[8px]">
            <input
              type="text"
              role="textbox"
              placeholder="출발지 입력"
              aria-label="출발지 입력"
              className="w-[300px] h-[40px] rounded-[22px] mx-[11px] px-[19px] bg-[#F7F7F7] text-[16px] font-[300] text-[#888888]"
            />
            <input
              type="text"
              role="textbox"
              placeholder="도착지 입력"
              aria-label="도착지 입력"
              className="w-[300px] h-[40px] rounded-[22px] mx-[11px] px-[19px] bg-[#F7F7F7] text-[16px] font-[300] text-[#888888]"
            />
          </div>
        </div>

        <div
          className="mt-[28px] flex justify-end mr-[11px]"
          role="button"
          aria-label="경로 설정하기 버튼"
        >
          <Button text="경로 설정하기" disabled={false} />
        </div>
      </div>

      <div
        className="flex justify-between mx-[16px] items-center w-[380px] h-[55px] rounded-[19px] px-[27px] bg-[#FFFFFF] cursor-pointer"
        role="button"
        aria-label="설정 페이지로 이동"
        onClick={() => {
          navigate("/setting");
        }}
      >
        <span className="text-[20px]" role="text">
          설정
        </span>
        <img src={arrow} role="img" alt="화살표 아이콘" />
      </div>

      <div
        className="w-full flex flex-col gap-[18px] mt-[101px] h-[116px] bg-[#F2F2F2] pt-[20px] px-[26px]"
        role="contentinfo"
      >
        <span className="text-[#BCBCBC] text-[12px] font-[400]" role="note">
          개인정보 처리 방침 &nbsp;&nbsp;|&nbsp;&nbsp; 고객문의
        </span>
        <span
          className="font-[300] text-[9px] text-[#BCBCBC]"
          role="doc-footnote"
        >
          대표이사: 위티 / 사업자등록번호: 110-81-14794 서울특별시 강서구 하늘길
          260 / 
          <br />
          고객센터: 02-6916-1500 / Fax: 02-6916-1430 <br />
          COPYRIGHT (C) WITHTIME.ALL RIGHT RESERVED
        </span>
      </div>
    </div>
  );
};

export default Main;
