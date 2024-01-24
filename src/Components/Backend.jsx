// Backend.js
import { Input, Checkbox } from "antd";
import React, { useEffect, useState } from "react";

export function Backend({ backendValues, setBackendValues }) {
  const handleChanges = (event) => {
    const newValue = event.target.value;
    setBackendValues(newValue);
  };

  useEffect(() => {
    // Setzt den initialen Wert beim ersten Rendern
    setSelectedValues(backendValues);
  }, [backendValues]);

  const [selectedValues, setSelectedValues] = useState("");

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
        display: "grid",
      }}
    >
      <h2>Informantionen über das Backend</h2>
      <Input value={selectedValues} onChange={handleChanges}></Input>
      <h3> Allgemeine Informationen</h3>
      <Checkbox>
        Der Business Context der Fiori App befindet sich im Extensibility
        Registry
      </Checkbox>
      <h3> Welche ODataservices konsumiert die Fiori App</h3>
      <Checkbox>SAP Gateway OData Service</Checkbox>
      <Checkbox>CDS mit BOPF</Checkbox>
      <Checkbox>CDS mit RAP</Checkbox>
    </div>
  );
}
