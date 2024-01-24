import React from "react";

export default function Frontend({ change }) {
  const handleChanges = (event) => {
    change(event.target.value);
  };
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: "white",
      }}
    >
      <h2>Informantionen über das Frontend</h2>
    </div>
  );
}
