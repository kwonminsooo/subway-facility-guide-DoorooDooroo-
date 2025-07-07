// src/types/naver.d.ts
declare namespace naver.maps {
    class LatLng {
      constructor(lat: number, lng: number);
    }
  
    interface MapOptions {
      center: LatLng;
      zoom: number;
    }
  
    class Map {
      constructor(container: string | HTMLElement, options: MapOptions);
    }
  
    class Marker {
      constructor(options: { position: LatLng; map: Map });
    }
  

  }
  