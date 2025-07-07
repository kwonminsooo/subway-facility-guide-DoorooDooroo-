interface FacilityBox {
  label: string;
}

const FacilityBox = ({ label }: FacilityBox) => {
  return (
    <div className="w-[75px] h-[75px] rounded-[15px] bg-[#E0E6F3] text-[#000000] text-sm font-[400] flex justify-center items-center text-center">
      {label}
    </div>
  );
};
export default FacilityBox;
