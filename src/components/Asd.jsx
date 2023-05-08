import { Layout, Menu, theme } from "antd";
import React from "react";
import Inputs from "./Inputs";
const { Header, Content, Footer, Sider } = Layout;

const Asd = () => {
  return (
    <Layout hasSider className="flex">
      <Sider
        className="fixed h-screen w-6/12 left-0 top-0 bottom-0 overflow-auto min-w-250 "
        style={{
          minWidth: "50vw",
        }}
      >
        <Menu theme="dark" mode="inline">
          {/* <Inputs /> */}
        </Menu>
      </Sider>
      <Layout
        className="site-layout w-6/12 flex justify-center"
        style={{
          marginLeft: 0,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "blue",
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: "red",
            }}
          >
            <p> content</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Asd;
