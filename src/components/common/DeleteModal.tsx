import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DeleteModal = () => {
  const nav = useNavigate();
  return (
    <div className="absolute z-50 flex flex-col items-center justify-between w-[90%] px-10 pt-12 pb-8 bg-white border-2 border-black h-48 rounded-2xl top-1/3">
      <div className="text-2xl">정말 탈퇴하시겠어요?</div>
      <Button className="w-" text={"탈퇴하기"} onClick={() => nav("/")} />
    </div>
  );
};

export default DeleteModal;
