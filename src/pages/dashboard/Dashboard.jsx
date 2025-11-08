import React from "react";
import { Row, Col, Card, Statistic, Typography } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  DollarOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "./dashboard.css";

const { Title } = Typography;

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: 1024,
      icon: <UserOutlined />,
      color: "#1890ff",
    },
    {
      title: "Active Listings",
      value: 340,
      icon: <HomeOutlined />,
      color: "#52c41a",
    },
    {
      title: "Revenue (PKR)",
      value: 750000,
      icon: <DollarOutlined />,
      color: "#faad14",
    },
    {
      title: "Growth Rate",
      value: "23%",
      icon: <RiseOutlined />,
      color: "#722ed1",
    },
  ];

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title className="dashboard-title" level={3}>
        Dashboard Overview
      </Title>

      <Row gutter={[20, 20]}>
        {stats.map((item, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="users-card" hoverable>
                <Statistic
                  title={item.title}
                  value={item.value}
                  prefix={item.icon}
                  valueStyle={{ color: item.color }}
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}
