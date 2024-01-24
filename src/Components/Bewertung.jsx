import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  LabelList,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Bewertung(props) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
          }}
        >
          <XAxis type="number" dataKey="Umfang" name="Umfang" unit="U" />
          <YAxis type="number" dataKey="Umfang" name="Flexibilität" unit="F" />
          <ZAxis type="text" dataKey="Name" name="Name" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          <Scatter data={props.filteredData} fill="#04049c" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
