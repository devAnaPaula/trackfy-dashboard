import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${(p) => p.theme?.colors?.cardBg || "#fff"};
  padding: 14px;
  border-radius: ${(p) => p.theme?.radii?.md || "8px"};
  box-shadow: 0 6px 18px rgba(27,40,71,0.06);
  display:flex;
  gap:12px;
  align-items:center;
  margin-bottom:20px;
  flex-wrap:wrap;
`;

const Select = styled.select`
  padding:10px 12px;
  border-radius: 8px;
  border: 1px solid #e6ecf5;
  min-width: 220px;
  background: #fff;
`;

const Button = styled.button`
  padding:8px 12px;
  border-radius:8px;
  border: none;
  cursor:pointer;
  background: #eef3ff;
`;

const areaTipoMap = {
  "Oficina Central": "produtiva",
  "Galpão XYZ": "produtiva",
  "Gaveteiro de Andaimes": "complementar",
  "Bomba 178": "produtiva",
  "Tanques": "complementar",
};

export default function Filters({
  functionsList = [],
  areasList = [],
  data = [],
  onFilter,
  onTimeChange,
}) {
  const [selectedFunction, setSelectedFunction] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    let result = Array.isArray(data) ? [...data] : [];

    if (selectedFunction) {
      result = result.filter((item) => (item.funcao || item.function) === selectedFunction);
    }
    if (selectedArea) {
      result = result.filter((item) => (item.area || item.location) === selectedArea);
    }
    if (selectedTipo) {
      result = result.filter((item) => {
        const areaKey = item.area || item.location;
        return areaTipoMap[areaKey] === selectedTipo;
      });
    }

    if (typeof onFilter === "function") onFilter(result);
  }, [data, selectedFunction, selectedArea, selectedTipo, onFilter]);

  useEffect(() => {
    if (typeof onTimeChange === "function") {
      onTimeChange(selectedTime);
    }
  }, [selectedTime, onTimeChange]);

  return (
    <Card>
      <Select value={selectedFunction} onChange={(e) => setSelectedFunction(e.target.value)}>
        <option value="">Todas as funções</option>
        {functionsList.map((f, idx) => (
          <option key={f + idx} value={f}> {f}</option>
        ))}
      </Select>

      <Select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
        <option value="">Todas as áreas</option>
        {areasList.map((a, idx) => (
          <option key={a + idx} value={a}>{a}</option>
        ))}
      </Select>

      <Select value={selectedTipo} onChange={(e) => setSelectedTipo(e.target.value)}>
        <option value="">Todos os tipos</option>
        <option value="produtiva">Produtiva</option>
        <option value="complementar">Complementar</option>
      </Select>

      <Select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        <option value="">Tempo</option>
        <option value="horas">Horas</option>
        <option value="dias">Dias</option>
        <option value="semanas">Semanas</option>
      </Select>

      <div style={{ marginLeft: "auto" }}>
        <Button
          onClick={() => {
            setSelectedFunction("");setSelectedArea("");
            setSelectedTipo(""); setSelectedTime("");}}>
          Limpar
        </Button>
      </div>
    </Card>
  );
}
