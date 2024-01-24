import React, { useEffect, useState } from "react";
import { Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export function Anforderungen({ anforderungsFilter, setAnforderungsfilter }) {
  const [localChecked, setLocalChecked] = useState(
    anforderungsFilter.Action === "Extend with Controller"
  );
  const navigate = useNavigate();
  const openHelp = () => {
    navigate("/hilfe");
  };
  useEffect(() => {
    // Überprüfen, ob der anforderungsFilter.Action geändert wurde
    // und die lokale Checkbox entsprechend aktualisieren
    setLocalChecked(anforderungsFilter.Type === "Ansicht Variante");
  }, [anforderungsFilter.Type]);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setLocalChecked(isChecked);

    // Hier können Sie den anforderungsFilter basierend auf der Checkbox-Auswahl aktualisieren
    const updatedFilter = {
      Type: isChecked ? "Ansicht Variante" : "null",
    };
    setAnforderungsfilter(updatedFilter);
  };
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
        display: "grid",
      }}
    >
      <h2>Allgemeine Anforderung der Erweiterung </h2>
      <h3>Welche Kategorien treffen auf die gewünschte Erweiterung zu</h3>
      <p>Nicht zutreffende Felder auslassen</p>
      <h4>Visuell</h4>
      <h5>Varianten</h5>
      <div
        style={{
          display: "flex",
        }}
      >
        <Checkbox checked={localChecked} onChange={handleCheckboxChange}>
          Es soll die estehende Ansicht (Variante) einer Fiori Applikation
          geändert werden geändert werden
        </Checkbox>
        <Button onClick={openHelp} icon={<QuestionCircleOutlined />} />
      </div>
      <h5>UI Elemente existieren schon:</h5>
      <Checkbox>UI Elemente in der Fiori App einblenden/ausblenden</Checkbox>
      <Checkbox>UI Elemente in der Fiori App bewegen</Checkbox>
      <Checkbox>UI Elemente in der Fiori App umbenennen</Checkbox>
      <Checkbox> Eigenschaften von UI Elementen bearbeiten</Checkbox>

      <h5>Neue UI Elemente ergänzen:</h5>
      <Checkbox>
        Bei dem UI Element handelt es sich um ein einfaches Feld (z.B.
        Inputfield){" "}
      </Checkbox>
      <Checkbox>
        Bei dem UI Element handelt es sich um um ein komplexeres Element (z.B.
        Tabelle){" "}
      </Checkbox>
      <h4>Logik</h4>
      <Checkbox>
        Es soll die Logik für ein bestehendes UI Element geändert werden
      </Checkbox>
      <Checkbox>
        Es soll die Logik für ein neues UI Element geändert werden
      </Checkbox>
      <h4>Datenmodell</h4>
      <Checkbox>
        Das aktuelle Datenmodell liefert die nötigen Inhalte (z.B. Entitäten)
        für die gewünschte Erweiterung
      </Checkbox>
      <Checkbox>Das aktuelle Datenmodell soll erweitert werden</Checkbox>
    </div>
  );
}
