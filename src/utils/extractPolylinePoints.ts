import { GraphPos, MapSearchResponse } from "../pages/map";

export function extractPolylinePoints(response: MapSearchResponse): GraphPos[] {
  const points: GraphPos[] = [];

  response.success.routes.forEach((route) => {
    route.section.forEach((sec) => {
      sec.graphPos.forEach((pos) => {
        points.push(pos);
      });
    });
  });

  return points;
}
