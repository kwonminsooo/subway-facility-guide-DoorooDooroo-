import { useState } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";

import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";

const mockData = [{ pass: "!12345678" }];

const SignupPassword = () => {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickNext = () => {
    setIsSubmitted(true);

    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isMatch = password === passwordCheck;
    const isAuthorized = mockData.some((item) => item.pass === password);

    if (!isMatch) {
      setErrorMessage("비밀번호가 일치하지 않습니다!");
    } else if (!isAuthorized) {
      setErrorMessage("등록된 비밀번호가 아닙니다.");
    } else if (!isPasswordValid) {
      setErrorMessage("비밀번호는 특수문자를 포함한 8자 이상이어야 합니다.");
    } else {
      setErrorMessage("");
      nav("/signup/complete");
    }
  };

  return (
    <main
      className="relative flex flex-col items-center justify-end w-full h-full gap-4"
      role="비밀번호 입력 페이지"
    >
      {/* 닫기 버튼 */}
      <button
        onClick={() => nav("/signup/complete")}
        className="absolute top-6 left-6"
        aria-label="닫기"
        role="닫기 버튼"
      >
        <img src={closeIcon} alt="닫기 아이콘" className="w-6 h-6" />
      </button>

      <ProgressBar currentStep={2} totalSteps={3} />

      <header
        className="flex flex-col w-full gap-4 px-10"
        role="페이지 제목과 설명"
      >
        <h1 className="text-2xl font-semibold text-[#4C4C4C]">회원 가입</h1>
        <p className="text-base font-normal text-[#4C4C4C] mb-3">
          사용할 비밀번호를 입력해 주세요
        </p>
      </header>

      {/* 입력 컨테이너 */}
      <section
        className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]"
        role="비밀번호 입력 영역"
      >
        <form
          className="flex flex-col items-center w-full gap-8"
          onSubmit={(e) => e.preventDefault()}
          role="비밀번호 입력 폼"
        >
          {/* 비밀번호 입력 */}
          <label htmlFor="password" className="sr-only">
            비밀번호 입력
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={20}
            placeholder="비밀번호를 입력해주세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
            role="비밀번호 입력란"
          />

          {/* 비밀번호 확인 입력 */}
          <label htmlFor="passwordCheck" className="sr-only">
            비밀번호 확인
          </label>
          <input
            id="passwordCheck"
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="비밀번호를 확인하세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
            role="비밀번호 확인 입력란"
          />

          <Button
            disabled={password === "" || passwordCheck === ""}
            text={"다음"}
            type={"button"}
            onClick={onClickNext}
            role="다음 버튼"
          />

          {isSubmitted && errorMessage && (
            <p
              className="px-2 -mt-4 text-sm font-bold text-red-600"
              role="오류 메시지"
              aria-live="assertive"
            >
              {errorMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default SignupPassword;
