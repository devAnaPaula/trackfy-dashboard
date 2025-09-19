import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import areas from '../data/areas';
import dados from '../data/Data.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2YW5hcGF1bGEiLCJhIjoiY21mb2x3bnM5MDBmNzJxb21wZWlybzBsayJ9.hevB72GWmM32fLbDDbAaEw';

export default function Mapa() {
  const mapContainerRef = useRef(null);

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-38.4547, -12.8543],
      zoom: 17,
    });

    const pessoasPorArea = (dados.dadosPessoas || []).reduce((acc, item) => {
      acc[item.area] = (acc[item.area] || 0) + item.quantidade;
      return acc;
    }, {});


    areas.forEach((area) => {
      const total = pessoasPorArea[area.nome] || 0;

      const marker = new mapboxgl.Marker({
        color: area.tipo === 'Produtiva' ? 'red' : 'blue',
      })
        .setLngLat([area.longitude, area.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <strong>${area.nome}</strong><br/>
            Tipo: ${area.tipo}<br/>
            <strong>Total de pessoas:</strong> ${total}
          `)
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: 'calc(100vh - 64px)',
      }}
    />
  );
}