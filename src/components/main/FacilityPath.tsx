import { FACILITIES } from "../../constants/facilities";
import { lineStyleMap } from "../../constants/lineStyleMap";
import FacilityBox from "../FacilityBox";

const routeData = [
  {
    line: "9",
    stationName: "신반포",
    facilities: [
      "horizontalWalker",
      "elevator",
      "wheelchairCharger",
      "voiceGuide",
      "slope",
    ],
  },
  {
    line: "4",
    stationName: "동작역",
    facilities: ["slope", "horizontalWalker", "elevator", "wheelchairCharger"],
  },
  {
    line: "우이신설",
    stationName: "정릉역",
    facilities: ["elevator"],
  },
];

const FacilityPath = () => (
  <div className="max-h-[222px] overflow-y-auto px-4 py-4 scrollbar-hide">
    <div className="flex flex-col gap-6">
      {routeData.map((item) => {
        const style = lineStyleMap[item.line] || {
          color: "#999",
          textSize: "10px",
        };

        return (
          <div key={item.stationName} className="flex">
            <div className="flex justify-center w-8 mr-4">
              <div
                className="flex items-center justify-center w-6 h-6 font-bold text-white rounded-full"
                style={{
                  backgroundColor: style.color,
                  fontSize: style.textSize,
                }}
              >
                {item.line}
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-2 text-[#4C4C4C] font-semibold">
                {item.stationName}
              </div>
              <div className="grid grid-cols-3 gap-1">
                {item.facilities.map((fid, idx) => (
                  <FacilityBox
                    key={`${fid}-${idx}`}
                    label={FACILITIES.find((f) => f.id === fid)?.label ?? fid}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default FacilityPath;
