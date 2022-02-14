import { Menu, Layout } from "antd";

import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { fetchProducts } from "../../store/thunks/fetchProducts";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchCategories } from "../../store/thunks/fetchCategories";
const { Header, Content, Footer, Sider } = Layout;

type SelectProductProps = {
  category?: string;
};
const SelectProduct: React.FC<SelectProductProps> = (
  props: SelectProductProps
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);
  const categories = useAppSelector((state) => state.categories.data);
  return (
    <Layout style={{ height: "99vh" }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0", background: "#fff", height: "100%" }}
        >
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              {categories &&
                categories.map((category, index, array) => (
                  <Menu.Item key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                  </Menu.Item>
                ))}
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", height: "100%" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        FlowerShop ©2022 Created by Yansel Robert
      </Footer>
    </Layout>
  );
};
export default SelectProduct;
