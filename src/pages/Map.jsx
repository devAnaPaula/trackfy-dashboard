import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2YW5hcGF1bGEiLCJhIjoiY21mb2x3bnM5MDBmNzJxb21wZWlybzBsayJ9.hevB72GWmM32fLbDDbAaEw';

export default function MapboxMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.625290, -23.533773],
    });

    new mapboxgl.Marker().setLngLat([-46.625290, -23.533773]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}