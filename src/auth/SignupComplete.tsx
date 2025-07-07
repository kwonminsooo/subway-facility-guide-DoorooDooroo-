import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";

import Button from "../components/common/Button";
import ProgressBar from "../components/common/ProgressBar";

const SignupComplete = () => {
  const nav = useNavigate();

  return (
    <main
      className="relative flex flex-col items-center justify-end w-full h-full gap-4"
      role="회원가입 완료 페이지"
    >
      {/* 닫기 버튼 */}
      <button
        onClick={() => nav("/")}
        className="absolute top-6 left-6"
        aria-label="닫기"
        role="닫기 버튼"
      >
        <img src={closeIcon} alt="닫기 아이콘" className="w-6 h-6" />
      </button>

      {/* 프로그래스 바 */}
      <ProgressBar currentStep={3} totalSteps={3} />

      {/* 안내 문구 영역 */}
      <header className="flex flex-col w-full gap-4 px-8" role="가입 완료 안내">
        <h1 className="text-2xl font-semibold text-[#4C4C4C]">
          회원 가입이 완료되었습니다!
        </h1>
        <p className="text-base font-normal text-[#4C4C4C] mb-3">
          이제 세부정보를 입력하러 가볼까요?
        </p>
      </header>

      {/* 버튼 영역 */}
      <section
        className="w-96 h-[630px] flex flex-col justify-end items-center pt-12 pb-20 px-7"
        role="로그인 이동 버튼 영역"
      >
        <Button
          text={"로그인 하기"}
          type={"button"}
          onClick={() => {
            nav("/login");
          }}
          role="로그인 버튼"
        />
      </section>
    </main>
  );
};

export default SignupComplete;
