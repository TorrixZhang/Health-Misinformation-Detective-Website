import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const CustomLayout = (props) => {
  return (
    <Layout className="layout">
      <Content style={contentStyle}>
        <div>{props.children}</div>
      </Content>
    </Layout>
  );
};

export default CustomLayout;

const contentStyle = {
    margin: '2.5%',
    padding: '2.5%',
    backgroundColor: '#d0e8f2',
    textAlign: 'center',

}
