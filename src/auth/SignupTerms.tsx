import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import closeIcon from "/src/assets/close_icon.png";
import checkIcon from "/src/assets/check_icon.png";

const SignupTerms = () => {
  const nav = useNavigate();
  const [isFullChecked, setIsFullChecked] = useState(false);
  const [isServiceChecked, setIsServiceChecked] = useState(false);
  const [isInfoChecked, setIsInfoChecked] = useState(false);

  const onChangeFullChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsFullChecked(checked);
    setIsServiceChecked(checked);
    setIsInfoChecked(checked);
  };

  useEffect(() => {
    if (isServiceChecked && isInfoChecked) {
      setIsFullChecked(true);
    } else {
      setIsFullChecked(false);
    }
  }, [isServiceChecked, isInfoChecked]);

  const isAllRequiredChecked = isServiceChecked && isInfoChecked;

  return (
    <div className="relative flex flex-col items-center justify-end w-full h-full gap-4">
      {/* 닫기 버튼 */}
      <div>
        <img
          src={closeIcon}
          alt="closeButton"
          className="absolute w-6 h-6 cursor-pointer top-6 left-6"
          onClick={() => {
            nav("/");
          }}
        />
      </div>

      {/* 약관  */}
      <div className="flex flex-col w-full gap-2 px-10">
        <div className="text-2xl font-semibold text-[#4C4C4C]">약관 동의</div>
        <div className="text-base font-normal text-[#4C4C4C]">
          서비스 이용을 위해 약관 동의가 필요합니다
        </div>
      </div>

      {/* 약관 동의 Container */}
      <div className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-8">
          {/* 모두 동의 */}
          <div className="flex gap-5">
            <label className="relative">
              <input
                type="checkbox"
                checked={isFullChecked}
                onChange={(e) => onChangeFullChecked(e)}
                className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                  ${isFullChecked ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
              />
              {isFullChecked && (
                <img
                  src={checkIcon}
                  alt="체크됨"
                  className="absolute w-4 h-4 top-[15%] left-1/4"
                />
              )}
            </label>
            <div className="flex flex-col gap-1">
              <div className="text-xl font-semibold text-[#4C4C4C]">
                모두 동의
              </div>
              <div className="text-[#4C4C4C] text-sm font-normal">
                서비스 이용을 위해 아래 약관에 모두 동의합니다
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-[1px] border-[#BCBCBC] h-[1px] w-full"></div>

          <div className="flex flex-col gap-5 flex-2">
            {/* 서비스 이용약관 동의 */}
            <div className="flex items-center w-full gap-5">
              <label className="relative">
                <input
                  type="checkbox"
                  checked={isServiceChecked}
                  onChange={(e) => setIsServiceChecked(e.target.checked)}
                  className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                  ${isServiceChecked ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
                />
                {isServiceChecked && (
                  <img
                    src={checkIcon}
                    alt="체크됨"
                    className="absolute w-4 h-4 top-[20%] left-1/4"
                  />
                )}
              </label>
              <div className="flex justify-between flex-1 w-full">
                <div className="flex gap-2">
                  <span className="text-base font-semibold text-[#465785]">
                    필수
                  </span>
                  <span className="text-base font-normal text-[#4C4C4C]">
                    서비스 이용 약관 동의
                  </span>
                </div>
                <a
                  href="https://sincere-rule-09e.notion.site/227d90f0248080488763fa5dd00790db"
                  target="_blank"
                  className="text-base font-normal text-[#BCBCBC]"
                >
                  보기
                </a>
              </div>
            </div>

            {/* 개인정보 처리 방침 동의 */}
            <div className="flex items-center w-full gap-5">
              <label className="relative">
                <input
                  type="checkbox"
                  checked={isInfoChecked}
                  onChange={(e) => setIsInfoChecked(e.target.checked)}
                  className={`w-[30px] h-[30px] rounded-full appearance-none cursor-pointer
                  ${isInfoChecked ? "bg-[#465785]" : "bg-[#F5F5F5]"}`}
                />
                {isInfoChecked && (
                  <img
                    src={checkIcon}
                    alt="체크됨"
                    className="absolute w-4 h-4 top-[20%] left-1/4"
                  />
                )}
              </label>
              <div className="flex justify-between flex-1 w-full">
                <div className="flex gap-2">
                  <span className="text-base font-semibold text-[#465785]">
                    필수
                  </span>
                  <span className="text-base font-normal text-[#4C4C4C]">
                    개인정보 처리 방침 동의
                  </span>
                </div>
                <a
                  href="https://sincere-rule-09e.notion.site/227d90f024808024b1aac7fbfdccb2d9"
                  target="_blank"
                  className="text-base font-normal text-[#BCBCBC]"
                >
                  보기
                </a>
              </div>
            </div>
          </div>
        </div>
        <Button
          disabled={!isAllRequiredChecked}
          text={"동의하고 가입하기"}
          type={"button"}
          onClick={() => {
            nav("/signup/email");
          }}
        />
      </div>
    </div>
  );
};

export default SignupTerms;
