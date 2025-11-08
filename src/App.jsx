import React, { useState } from "react";
import { Layout } from "antd";
import Users from "./pages/users/Users";
import Agents from "./pages/agents/Agents";
import ZonesCities from "./pages/zonesCities/ZonesCities";
import Reports from "./pages/reports/Reports";
import Payments from "./pages/payments/Payments";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/layout/navbar/Navbar";
import Sidebar from "./components/layout/sidebar/Sidebar";
import "./App.css"
import JoplyLogo from "./pages/joplyLogo/JoplyLogo";
import Carousel from "./pages/listings/Carousel";


const { Content } = Layout;

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "users": return <Users />;
      case "agents": return <Agents />;
      case "ReqUserAsAgent": return <JoplyLogo />;
      case "Carousel": return <Carousel />;
      case "zones": return <ZonesCities />;
      case "reports": return <Reports />;
      case "payments": return <Payments />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar setPage={setPage} />
      <Layout>
        <Navbar />
        <Content className="custom_content">
          {renderPage()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
