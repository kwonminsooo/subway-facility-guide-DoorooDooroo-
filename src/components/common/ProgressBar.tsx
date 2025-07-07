type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  onCancelClick?: () => void;
  cancelButtonText?: string;
};

export default function ProgressBar({
  currentStep,
  totalSteps,
  onCancelClick,
  cancelButtonText = "그만하기",
}: ProgressBarProps) {
  return (
    <div className="flex flex-col w-full px-8">
      <div className="flex pt-4 pb-3">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-[2px] ${
              index + 1 === currentStep ? "bg-[#465785]" : "bg-[#D1D1D1]"
            }`}
          />
        ))}
      </div>

      {onCancelClick && (
        <div className="flex justify-start">
          <button
            onClick={onCancelClick}
            className="w-[62px] h-6 px-2 bg-[#1F9BDA] hover:bg-[#1c8cc4] active:bg-[#197cae] text-white text-xs font-light rounded-md"
          >
            {cancelButtonText}
          </button>
        </div>
      )}
    </div>
  );
}
