import React from "react";
import { Card, Row, Col, Typography } from "antd";
const { Title } = Typography;

export default function Reports() {
  return (
    <>
      <Title level={2}>📑 Reports</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Active Listings">340</Card>
        </Col>
        <Col span={8}>
          <Card title="Top Agent">Ali Khan</Card>
        </Col>
        <Col span={8}>
          <Card title="Total Revenue">Rs. 750,000</Card>
        </Col>
      </Row>
    </>
  );
}
