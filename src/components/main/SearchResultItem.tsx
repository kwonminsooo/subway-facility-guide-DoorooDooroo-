import logo from "/src/assets/dooroodooroo_icon(black).svg";
import arrow from "/src/assets/arrow.svg";

interface SearchResultItemProps {
  title: string;
  address?: string;
  onClick: () => void;
}

const SearchResultItem = ({
  title,
  address,
  onClick,
}: SearchResultItemProps) => {
  return (
    <div
      className="w-full h-[70px] flex gap-[12px] items-center rounded-[19px] border border-b-[#F2F2F2] cursor-pointer hover:bg-[#F5F5F5] transition-colors duration-200 px-[20px]"
      onClick={onClick}
    >
      <img src={logo} className="w-[24px] h-[24px]" alt="로고 아이콘" />
      <div className="text-[#4c4c4c] text-[20px] font-[400]">{title}</div>
      {address && (
        <>
          <img src={arrow} className="w-[18px] h-[18px]" alt="화살표" />
          <div className="text-[#4c4c4c] text-[20px] font-[400]">{address}</div>
        </>
      )}
    </div>
  );
};

export default SearchResultItem;
