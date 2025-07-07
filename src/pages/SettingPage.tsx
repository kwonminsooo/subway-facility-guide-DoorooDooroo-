import { useLocation, Link, useNavigate } from "react-router-dom";

const SettingPage = () => {
  const location = useLocation();
  const selectedItems = location.state as string[];
  const navigate = useNavigate();

  return (
    <div className="h-full bg-[#FBFBFB] scroll-smooth overflow-y-scroll overflow-x-hidden">
      <div>
        <img
          src="/Vector.png"
          alt="로고"
          className="w-[25px] h-[25px] mt-[28px] ml-[24px]"
          onClick={() => navigate("/main")}
        />
        <p className="text-[24px] font-[600] mt-[99px] ml-[35px] text-[#4C4C4C]">
          설정
        </p>
      </div>
      <div className="flex justify-between items-center mb-[20px]">
        <p className="text-[20px] font-[400] mt-[40px] ml-[35px] text-[#4C4C4C]">
          (두루두루)님의 등록 배려시설
        </p>

        <Link
          to="/fix"
          className="text-[14px] text-[#BCBCBC] mt-[40px] mr-[30px]"
        >
          수정
        </Link>
      </div>
      <div className="w-[380px] min-h-[200px] mt-[20px] ml-[16px] pt-[26px] pb-[30px] px-[16px] bg-white rounded-[19px]">
        <div className="flex flex-wrap gap-[5px]">
          {selectedItems?.length > 0 ? (
            selectedItems.map((item, idx) => (
              <div
                key={idx}
                className="w-[80px] h-[80px] bg-[#E0E6F3] rounded-[15px] flex items-center justify-center text-[13px] text-[#4C4C4C] text-center break-keep whitespace-normal"
              >
                {item}
              </div>
            ))
          ) : (
            <p className="text-[#999] text-sm">선택된 항목이 없습니다.</p>
          )}
        </div>
      </div>
      <p className="font-[400] text-[20px] ml-[30px] mt-[20px]">
        서비스 이용 약관
      </p>
      <div className="w-[380px] min-h-[120px] mt-[20px] ml-[16px] pt-[26px] pb-[30px] px-[16px] bg-white rounded-[19px]">
        <div className="flex justify-between items-center mb-[20px]">
          <p className="font-[400] text-[16px] mb-[30px] ml-[9px]">
            서비스 약관
          </p>
          <a
            href="https://sincere-rule-09e.notion.site/227d90f0248080488763fa5dd00790db"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[#BCBCBC] mb-[30px]"
          >
            보기
          </a>
        </div>
        <div className="flex justify-between items-center mb-[20px]">
          <p className="font-[400] text-[16px] ml-[9px]">이용 약관</p>
          <a
            href="https://sincere-rule-09e.notion.site/227d90f0248080488763fa5dd00790db"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[#BCBCBC] ml-[9px]"
          >
            보기
          </a>
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-[20px] ml-[40px] w-[325px] h-[52px] rounded-[10px] bg-[#465785] text-white "
      >
        로그아웃
      </button>
      <button
        onClick={() => navigate("/delete-account")}
        className="mt-[10px] mb-10 ml-[40px] w-[325px] h-[52px] rounded-[10px] bg-[#BCBCBC] text-white"
      >
        회원 탈퇴
      </button>
    </div>
  );
};

export default SettingPage;
