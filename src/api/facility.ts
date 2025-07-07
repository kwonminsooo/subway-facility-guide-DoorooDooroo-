import axios from "axios";

export const searchFacility = async (start: string, end: string) => {
  try {
    const response = await axios.get("/facility/search", {
      params: { start, end },
    });
    return response.data;
  } catch (err) {
    console.error("시설 검색 실패:", err);
    throw err;
  }
};
