import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import Charts from "../components/Charts";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [timeUnit, setTimeUnit] = useState("dias");

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((json) => {
        const arr = Array.isArray(json?.dadosPessoas) ? json.dadosPessoas : [];
        setData(arr);
        setFilteredData(arr);
      })
      .catch((err) => console.error("", err));
  },  []);

  const FUNCTIONS = ["Pintor", "Caldeireiro", "Mecânico", "Eletricista", "Operador"];
  const AREAS = ["Oficina Central", "Galpão XYZ", "Gaveteiro de Andaimes", "Bomba 178", "Tanques"];

  return (
    <div style={{ padding: 16 }}>
      <Filters
        functionsList={FUNCTIONS}
        areasList={AREAS}
        data={data}
        onFilter={setFilteredData}
        onTimeChange={setTimeUnit}/>
      <Charts data={filteredData} timeUnit={timeUnit} />
    </div>
  );
}