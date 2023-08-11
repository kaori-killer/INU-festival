import { useEffect } from 'react';

import styled from 'styled-components';

const { kakao } = window;

const Container = styled.div`
  border-radius: 2em;
  margin: 0;
  padding-block: 10em;
`;

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
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, [latitude, longitude]);
  return (
    <Container
      id="map"
    />
  );
}
