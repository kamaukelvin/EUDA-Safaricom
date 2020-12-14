import React, { useEffect } from "react";
import routes from "../../routes";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/header/Header";

const AuthLayout = (props) => {
  console.log("the props", props);
  const history = useHistory();
  const { Header, Footer, Sider, Content } = Layout;

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      // User is not logged in. Redirect back to login
      history.push(routes.login);
      return;
    }
    // Fetch data for logged in user using token
  });
  return (
    <>
      <Layout>
        <Sider style={{ background: "#fff" }}>
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={{ padding: "0px" }}>
            <TopBar />
          </Header>
          <Content>{props.children}</Content>
         
        </Layout>
      </Layout>
    </>
  );
};

export default AuthLayout;
