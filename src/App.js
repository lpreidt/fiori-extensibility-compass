import { Image } from "antd";
import { Header } from "antd/es/layout/layout";
import { Homepage } from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          padding: 40,
          alignItems: "center",
        }}
      >
        <Image
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/MHP_Management-_und_IT-Beratung_logo.svg/500px-MHP_Management-_und_IT-Beratung_logo.svg.png"
        />
        <Header
          style={{
            background: "white",
            fontSize: "25px",
          }}
        >
          Fiori Extensibility Compass by MHP{" "}
        </Header>
      </div>

      <Homepage />
    </div>
  );
}

export default App;
