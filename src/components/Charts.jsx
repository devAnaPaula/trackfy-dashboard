import React, { useState } from "react";
import styled from "styled-components";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, 
  CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

const Card = styled.div`
  background: ${(p) => p.theme?.colors?.cardBg || "#fff"};
  border-radius: ${(p) => p.theme?.radii?.lg || "8px"};
  padding: 80px;
  box-shadow: 0 6px 18px rgba(27, 40, 71, 0.06);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledBtn = styled.button`
  border: none;
  padding: 10px 30px;
  border-radius: 6px;
  margin-right: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.2s ease;
  &:last-child {
    margin-right: 0;
  }
`;

const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"];

function groupKey(d, timeUnit) {
  const date = dayjs(d);
  if (timeUnit === "horas") return date.format("YYYY-MM-DD HH:00");
  if (timeUnit === "semanas") return "Semana " + date.isoWeek();
  return date.format("YYYY-MM-DD");
}

function ChartButton(props) {
  const style = {
    background: props.active ? "#1a3a7d" : "#e6f0ff",
    color: props.active ? "#fff" : "#1a3a7d"
  };
  return <StyledBtn onClick={props.onClick} style={style}>{props.children}</StyledBtn>;
}

export default function Charts(props) {
  const data = props.data || [];
  const timeUnit = props.timeUnit || "dias";
  const [chartType, setChartType] = useState("line");

  const chartData = [];
  const map = {};
  data.forEach((item) => {
    const key = groupKey(item.data, timeUnit);
    if (!map[key]) map[key] = { period: key };
    const func = item.funcao || item.function || "";
    map[key][func] = (map[key][func] || 0) + (item.quantidade || 0);
  });
  for (let k in map) chartData.push(map[k]);

  const pieMap = {};
  data.forEach((item) => {
    const area = item.area || item.location || "";
    pieMap[area] = (pieMap[area] || 0) + (item.quantidade || 0);
  });
  const pieData = [];
  for (let a in pieMap) pieData.push({ name: a, value: pieMap[a] });

  return (
    <Card>
      <Header>
        <h3 style={{ margin: 0 }}>Quantidade de Pessoas por {timeUnit}</h3>
        <div>
          <ChartButton active={chartType === "line"} onClick={() => setChartType("line")}>Linha</ChartButton>
          <ChartButton active={chartType === "bar"} onClick={() => setChartType("bar")}>Barra</ChartButton>
          <ChartButton active={chartType === "pie"} onClick={() => setChartType("pie")}>Circular</ChartButton>
        </div>
      </Header>

      <div style={{ marginBottom: 12 }}>
        <strong>Total registros:</strong> {data.length}
      </div>

      <div style={{ height: 420 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" && chartData.length > 0 ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(chartData[0]).filter(k => k !== "period").map((funcao, i) => (
                <Line key={funcao} type="monotone" dataKey={funcao} stroke={COLORS[i % COLORS.length]} />
              ))}
            </LineChart>
          ) : chartType === "bar" && chartData.length > 0 ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(chartData[0]).filter(k => k !== "period").map((funcao, i) => (
                <Bar key={funcao} dataKey={funcao} stackId="a" fill={COLORS[i % COLORS.length]} />
              ))}
            </BarChart>
          ) : chartType === "pie" && pieData.length > 0 ? (
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={140} label>
                {pieData.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
            </PieChart>
          ) : (
            <div></div>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
