interface buttonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  role?: string;
}

const Button = ({
  text,
  onClick,
  type = "button",
  disabled,
  className,
  role = "버튼",
}: buttonProps) => {
  return (
    <button
      role={role}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-[325px] h-[52px] rounded-[10px] text-[20px] text-[#FFFFFF] ${className} ${!disabled ? "bg-[#465785] hover:bg-[#37466c] active:bg-[#28334f]" : "bg-[#D1D1D1]"}
`}
    >
      {text}
    </button>
  );
};
export default Button;
