import { useState } from "react";
import { useNavigate } from "react-router-dom";

import checkIcon from "/src/assets/check_icon.png";
import pleaseImg from "../../public/please.png";

import Button from "../components/common/Button";
import DeleteModal from "../components/common/DeleteModal";

// 임시 이메일 데이터
const mockData = [{ email: "test@test.com" }];

const DeleteAccount = () => {
  const nav = useNavigate();

  // 상태 정의
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  // 탈퇴 버튼 클릭 시 검증
  const onClickNext = () => {
    setIsSubmitted(true);
    const isValid = mockData.some((item) => item.email === email);
    if (!isValid) {
      setErrorMessage("존재하지 않는 계정입니다.");
      return;
    }
    setIsOpenModal(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-end w-full h-full overflow-hidden">
      {/* 메인 콘텐츠 (모달 열릴 때 blur 효과) */}
      <div
        className={`flex flex-col items-center justify-end w-full h-full transition-all duration-300 ${
          isOpenModal ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* 상단 안내 텍스트 */}
        <div className="w-full px-10 mb-3">
          <h2 className="text-2xl font-semibold text-[#4C4C4C]">회원 탈퇴</h2>
          <p className="text-base text-[#4C4C4C] mt-2">
            회원 탈퇴 전 아래 유의사항을 확인해주세요
          </p>
        </div>

        {/* 애니메이션 이미지 */}
        <div className="absolute w-32 h-32 pointer-events-none top-1/3 left-1/2 transform translate-x-[210px]">
          <img
            src={pleaseImg}
            alt="please"
            className={`transition-transform duration-700 ease-in-out
              ${isChecked1 && !isChecked2 ? "-translate-x-[300px]" : ""}
              ${isChecked2 ? "translate-x-[210px]" : ""}
            `}
          />
        </div>

        {/* 탈퇴 입력 박스 */}
        <div className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col w-full gap-4">
            {/* 이메일 입력 */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={20}
              placeholder="아이디를 입력해주세요"
              className="w-full h-14 bg-[#FBFBFB] rounded-2xl px-5"
            />

            {/* 유의사항 안내 */}
            <ul className="marker:text-gray-200 marker:text-xs list-inside list-disc font-light text-[13px] text-[#4C4C4C] flex flex-col gap-2 leading-5">
              <li>탈퇴 시 해당 계정으로 모든 서비스를 이용할 수 없습니다.</li>
              <li>계정이 삭제 된 이후에는 복구할 수 없습니다.</li>
              <li>
                탈퇴 즉시 같은 계정으로 7일 동안 다시 가입할 수 없습니다.
                <br />
                <span className="pl-4">
                  약관에 따라 자격 제한 또는 정지된 회원이 탈퇴할 경우, 해당
                  기간 동안 가입 불가합니다.
                </span>
              </li>
              <li>
                활동 내역은 모두 삭제되며{" "}
                <span className="pl-4">복구할 수 없습니다.</span>
              </li>
            </ul>

            {/* 구분선 */}
            <hr className="border border-[#BCBCBC]" />

            {/* 체크박스 영역 */}
            <div className="flex flex-col gap-2">
              {/* 체크박스 1 */}
              <label className="flex items-center justify-between w-full px-1 text-xs font-normal text-black">
                <span>
                  유의사항을 모두 확인하였으며, <br />
                  보유한 정보가 모두 소멸되는 것에 동의합니다.
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={(e) => setIsChecked1(e.target.checked)}
                    className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                    ${isChecked1 ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
                  />
                  {isChecked1 && (
                    <img
                      src={checkIcon}
                      alt="체크됨"
                      className="absolute w-4 h-4 top-[20%] left-1/4"
                    />
                  )}
                </div>
              </label>

              {/* 체크박스 2 */}
              <label className="flex items-center justify-between w-full px-1 text-xs font-normal text-black">
                <span>계정은 탈퇴 후 복구할 수 없으며, 이에 동의합니다.</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={(e) => setIsChecked2(e.target.checked)}
                    className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                    ${isChecked2 ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
                  />
                  {isChecked2 && (
                    <img
                      src={checkIcon}
                      alt="체크됨"
                      className="absolute w-4 h-4 top-[20%] left-1/4"
                    />
                  )}
                </div>
              </label>
            </div>

            {/* 버튼 영역 */}
            <div className="flex flex-col gap-3 mt-3">
              <Button
                disabled={email === "" || !isChecked1 || !isChecked2}
                text="탈퇴하기"
                type="button"
                onClick={onClickNext}
              />
              <Button
                text="취소하기"
                type="button"
                className="bg-[#D1D1D1]"
                onClick={() => nav("/setting")}
              />
            </div>

            {/* 에러 메시지 */}
            {isSubmitted && errorMessage && (
              <p className="px-2 text-sm font-bold text-red-600">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 모달 레이어 */}
      {isOpenModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
          <DeleteModal />
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
