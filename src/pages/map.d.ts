interface GraphPos {
  x: number;
  y: number;
}

interface Section {
  graphPos: GraphPos[];
}

interface Route {
  section: Section[];
}

export interface MapSearchResponse {
  success: {
    routes: Route[];
  };
}
