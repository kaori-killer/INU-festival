import { useEffect } from 'react';

const { kakao } = window;

type MapProps = {
    latitude: number;
    longitude: number;
}

export default function Map({ latitude, longitude }: MapProps) {
  useEffect(() => {
    const container = document.getElementById('map');
    if (!container) return;
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);
  return (
    <div
      id="map"
      style={{
        width: '500px',
        height: '500px',
      }}
    />
  );
}
