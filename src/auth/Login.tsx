import { useState } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "/src/assets/close_icon.png";

import Button from "../components/common/Button";

const mockData = [{ email: "test@test.com", pass: "!12345678" }];

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickNext = () => {
    setIsSubmitted(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    const isAuthorized = mockData.some(
      (item) => item.email === email && item.pass === password
    );

    if (!isEmailValid) {
      setErrorMessage("이메일 형식이 올바르지 않습니다.");
    } else if (!isPasswordValid) {
      setErrorMessage("비밀번호는 특수문자를 포함한 8자 이상이어야 합니다.");
    } else if (!isAuthorized) {
      setErrorMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage("");
      nav("/main");
    }
  };

  return (
    <main
      className="relative flex flex-col items-center justify-end w-full h-full gap-4"
      role="로그인 페이지"
    >
      {/* 닫기 버튼 */}
      <header role="상단 영역">
        <img
          src={closeIcon}
          alt="닫기 버튼"
          role="홈으로 돌아가기"
          className="absolute w-6 h-6 cursor-pointer top-6 left-6"
          onClick={() => nav("/")}
        />
      </header>

      {/* 제목 영역 */}
      <section className="flex flex-col w-full gap-4 px-10" role="타이틀 영역">
        <h1
          className="text-2xl font-semibold text-[#4C4C4C]"
          role="페이지 제목"
        >
          로그인
        </h1>
        <p
          className="text-base font-normal text-[#4C4C4C] mb-3"
          role="페이지 설명"
        >
          로그인 하고 두루두루 이용하기
        </p>
      </section>

      {/* 본문 폼 영역 */}
      <section
        className="w-96 h-[630px] bg-white rounded-2xl flex flex-col justify-between items-center pt-12 pb-20 px-7 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]"
        role="로그인 입력 영역"
      >
        <form
          className="flex flex-col gap-8"
          onSubmit={(e) => {
            e.preventDefault();
            onClickNext();
          }}
          role="로그인 폼"
        >
          {/* 이메일 입력 */}
          <label htmlFor="email" className="sr-only">
            이메일 입력
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={20}
            placeholder="아이디를 입력해주세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
            role="이메일 입력란"
          />

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
            placeholder="비밀번호를 입력하세요"
            className="w-[325px] h-14 bg-[#FBFBFB] rounded-2xl px-5"
            role="비밀번호 입력란"
          />

          {/* 로그인 버튼 */}
          <Button
            disabled={email === "" || password === ""}
            text={"다음"}
            type={"submit"}
            role="로그인 버튼"
          />

          {/* 에러 메시지 */}
          {isSubmitted && errorMessage && (
            <div
              className="px-2 -mt-4 text-sm font-bold text-red-600"
              role="에러 메시지"
              aria-live="assertive"
            >
              {errorMessage}
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default Login;
