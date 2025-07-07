import { useState } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";
import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";

const mockData = [{ email: "test@test.com" }];

const SignupEmail = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickNext = () => {
    setIsSubmitted(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailRegex.test(email);
    const isDuplicate = mockData.some((item) => item.email === email);

    if (!isFormatValid || !isDuplicate) {
      setErrorMessage("유효하지 않은 이메일이거나 이미 사용 중입니다.");
      return;
    }

    setErrorMessage("");
    nav("/signup/password");
  };

  return (
    <main
      className="relative flex flex-col items-center justify-end w-full h-full gap-4"
      role="회원 가입 이메일 입력 페이지"
    >
      {/* 닫기 버튼 */}
      <button
        onClick={() => nav("/")}
        aria-label="닫기"
        className="absolute top-6 left-6"
        role="닫기 버튼"
      >
        <img src={closeIcon} alt="닫기 아이콘" className="w-6 h-6" />
      </button>

      {/* 진행 상태바 */}
      <ProgressBar currentStep={1} totalSteps={3} />

      {/* 안내 문구 */}
      <header
        className="flex flex-col w-full gap-4 px-8"
        role="페이지 제목과 설명"
      >
        <h1 className="text-2xl font-semibold text-[#4C4C4C]">회원 가입</h1>
        <p className="text-base font-normal text-[#4C4C4C] mb-3">
          로그인에 사용할 아이디를 입력해 주세요
        </p>
      </header>

      {/* 입력 영역 */}
      <section
        className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]"
        role="입력 영역"
      >
        <form
          className="flex flex-col gap-8"
          onSubmit={(e) => e.preventDefault()}
          role="이메일 입력 폼"
        >
          <label htmlFor="email" className="sr-only">
            이메일 입력
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={20}
            placeholder="이메일을 입력해주세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
            role="이메일 입력란"
          />

          <Button
            disabled={email === ""}
            text="다음"
            type="button"
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

export default SignupEmail;
