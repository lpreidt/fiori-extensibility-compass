import React, { useState, useEffect } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { OverviewTable } from "./OverviewTable";
import { Anforderungen } from "./Anforderungen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Frontend from "./Frontend";
import { Backend } from "./Backend";
import Bewertung from "./Bewertung";
import Help from "./Help";
const { Header, Content, Footer, Sider } = Layout;

export function Homepage() {
  const navigate = useNavigate();

  const [anforderungsFilter, setAnforderungsfilter] = useState({
    Type: "null", // Hier können Sie einen Standardwert festlegen
  });
  const [transferFilteredData, setTransferFilteredData] = useState();
  const [backendValues, setBackenValues] = useState("");
  const [frontendValues, setFrontendValues] = useState("");
  function handleBackend(newValue) {
    setBackenValues(newValue);
  }
  function handlFrontend(newValue) {
    setFrontendValues(newValue);
  }

  return (
    <Layout>
      <Sider
        style={{
          paddingTop: 20,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "auto",
        }}
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: "/",
              label: "Anforderungen",
              icon: React.createElement(DashboardOutlined),
            },
            {
              key: "/frontend",
              label: "Frontend",
              icon: React.createElement(DesktopOutlined),
            },
            {
              key: "/backend",
              label: "Backend",
              icon: React.createElement(DatabaseOutlined),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Anforderungen
                  anforderungsFilter={anforderungsFilter}
                  setAnforderungsfilter={setAnforderungsfilter}
                />
              }
            />
            <Route path="/frontend" element={<Frontend />} />
            <Route
              path="/backend"
              element={
                <Backend
                  backendValues={backendValues}
                  setBackendValues={setBackenValues}
                />
              }
            />
            <Route path="/hilfe" element={<Help />} />
          </Routes>
        </Content>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
            }}
          >
            <h2>Mögliche Erweiterungen</h2>
            <p>{backendValues}</p>
            <div
              style={{
                maxWidth: "1200",
              }}
            >
              <OverviewTable
                setTransferFilteredData={setTransferFilteredData}
                anforderungsFilter={anforderungsFilter}
              />
            </div>
            <h2>Bewertung</h2>
            <Bewertung filteredData={transferFilteredData} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          MHP a Porsche Company ©2023 Created by Lukas Preidt
        </Footer>
      </Layout>
    </Layout>
  );
}
