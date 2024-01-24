import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";

export function OverviewTable({ anforderungsFilter, setTransferFilteredData }) {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    // Der Pfad zur JSON-Datei
    const jsonFilePath = "csvjson.json";

    fetch(jsonFilePath)
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.length > 0) {
          // Die Spaltennamen aus dem ersten Datensatz extrahiere
          setData(jsonData);
        } else {
          console.error("JSON data is empty or invalid.");
        }
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });

    if (data) {
      // Filtere die Daten mit den hartcodierten Filtern
      const filtered = data.filter((item) => {
        return item.Type === anforderungsFilter.Type;
      });
      //console.log("Filtere  " + filtered.length);
      setFilteredData(filtered);
    }
  }, [data]);
  useEffect(() => {
    setTransferFilteredData(filteredData);
  }, [filteredData]);
  // Validiere, ob data vorhanden ist, bevor du versuchst, zu filtern

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      width: 150,
    },
    {
      title: "Möglichkeiten",
      dataIndex: "Erweiterung",
      key: "Erweiterung",
      width: 150,
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      width: 200,
    },
    {
      title: "Domäne",
      dataIndex: "Tool",
      key: "Tool",
      width: 150,
    },
    // Weitere Spalten hinzufügen und die Breiten nach Bedarf anpassen
  ];

  return (
    <>
      <Button
        onClick={() => {
          console.log(filteredData);
        }}
      ></Button>
      <Table dataSource={filteredData} columns={columns} />
    </>
  );
}
