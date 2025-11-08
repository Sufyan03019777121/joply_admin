import React from "react";
import "./navbar.css"
import { Layout, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

export default function Navbar() {
  return (
    <Header className="navbar_header">
      <Title className="title" level={3} >
       Joply Super Admin
      </Title>
    </Header>
  );
}
