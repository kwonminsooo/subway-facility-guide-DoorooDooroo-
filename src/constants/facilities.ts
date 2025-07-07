// constants/facilities.ts
export interface FacilityItem {
  id: string;
  label: string;
  category: "main" | "support";
}

export const FACILITIES: FacilityItem[] = [
  { id: "elevator", label: "엘리베이터", category: "main" },
  { id: "escalator", label: "에스컬레이터", category: "main" },
  { id: "horizontalWalker", label: "수평보행기", category: "support" },
  { id: "portableRamp", label: "이동식 안전발판", category: "support" },
  { id: "wheelchairLift", label: "휠체어 리프트", category: "support" },
  {
    id: "wheelchairCharger",
    label: "전동휠체어 급속충전기",
    category: "support",
  },
  { id: "voiceGuide", label: "음성유도기", category: "support" },
  { id: "signVideoPhone", label: "수어 영상 전화기", category: "support" },
  { id: "slope", label: "경사로", category: "support" },
];
