interface LoginbuttonProps {
  onClick?: () => void;
}

const LoginButton = ({ onClick }: LoginbuttonProps) => {
  return (
    <button
      role="로그인 버튼"
      onClick={onClick}
      className="w-[325px] h-[52px] rounded-[10px] text-[20px] bg-[#FFFFFF] text-[#465785] overfl"
    >
      로그인 하기
    </button>
  );
};
export default LoginButton;
