import { Link, useNavigate } from "react-router-dom";
import logo_icon from "/src/assets/dooroodooroo_icon.png";
import app_title from "../../public/app_title.png";
import LoginButton from "../components/LoginButton";

const LandingPage = () => {
  const nav = useNavigate();

  return (
    <main
      className="flex flex-col justify-between items-center bg-[#465785] h-full w-full relative pt-64"
      role="메인 콘텐츠 영역"
    >
      <header
        className="flex flex-col items-center gap-6"
        role="앱 소개 영역"
        aria-label="앱 이름과 설명"
      >
        <img
          src={logo_icon}
          width={60}
          height={76}
          alt="두루두루 로고 이미지"
          role="앱 로고 이미지"
        />
        <img
          src={app_title}
          width={210}
          alt="두루두루 앱 타이틀 이미지"
          role="앱 타이틀 이미지"
        />
        <p
          className="-mt-6 text-base font-medium text-white"
          role="앱 설명 텍스트"
        >
          교통시설 알림 플랫폼 두루두루
        </p>
      </header>

      <footer
        className="absolute flex flex-col gap-5 w-fit bottom-24"
        role="회원 인증 버튼 영역"
      >
        <LoginButton
          onClick={() => nav("/login")}
          aria-label="로그인 페이지로 이동"
        />
        <Link
          to="/signup/terms"
          role="회원가입 링크"
          aria-label="회원가입 약관 동의 페이지로 이동"
          className="w-full text-base font-normal text-center text-white"
        >
          회원가입
        </Link>
      </footer>
    </main>
  );
};

export default LandingPage;
