import { SettingFilled, UserOutlined } from "@ant-design/icons";
import { Row, Col, Button, Menu, Card, Typography } from "antd";

import React from "react";
import { useAppSelector } from "../../store/hook";

type SelectProductProps = {
  category?: string;
};
const SelectProduct: React.FC<SelectProductProps> = (
  props: SelectProductProps
) => {
  const categories = useAppSelector((state) => state.categories.data);
  return (
    <div>
      <Row gutter={8}>
        <Col xs={3}>
          <Menu
            style={{
              display: "flex",
              justifyItems: "center",
              flexDirection: "column",
            }}
          >
            {categories &&
              categories.map((category: string, index) => (
                <Menu.Item key={index}>{category}</Menu.Item>
              ))}
          </Menu>
        </Col>
        <Col xs={12} style={{ minHeight: 400 }}>
          <div style={{ border: "1px solid" }}></div>
        </Col>
        <Col xs={9}>
          <div>
            <div>
              <Typography.Text>Cajera</Typography.Text>
              <UserOutlined style={{ fontSize: "18pt" }} />
              <SettingFilled style={{ fontSize: "18pt" }} />
            </div>
            <Card style={{ border: "1px solid" }}></Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SelectProduct;
