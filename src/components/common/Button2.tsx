interface buttonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button2 = ({
  text,
  onClick,
  type = "button",
  disabled,
  className,
}: buttonProps) => {
  return (
    <button
      role="버튼"
      type={type}
      onClick={onClick}
      className={`w-[165px] h-[45px] rounded-[10px] text-[20px] text-[#FFFFFF] ${className} ${!disabled ? "bg-[#465785] hover:bg-[#37466c] active:bg-[#28334f]" : "bg-[#D1D1D1]"}
`}
    >
      {text}
    </button>
  );
};
export default Button2;
