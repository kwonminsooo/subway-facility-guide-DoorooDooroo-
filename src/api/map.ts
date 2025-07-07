import axios from "axios";
import { MapSearchResponse } from "../pages/map";

export const getRouteInfo = async (
  start: string,
  end: string
): Promise<MapSearchResponse> => {
  const baseURL = "https://umc.duruduru.p-e.kr";
  const res = await axios.get(
    `${baseURL}/map/search?start=${start}&end=${end}`
  );
  return res.data;
};
