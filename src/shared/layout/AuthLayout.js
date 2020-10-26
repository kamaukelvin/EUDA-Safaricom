import React, { useEffect } from "react";
import routes from "../../routes";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from '../../components/header/Header'

const AuthLayout = (props) => {
    console.log("the props", props)
  const history = useHistory();
  const {Content } = Layout;

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      // User is not logged in. Redirect back to login
      history.push(routes.login);
      return;
    }
    // Fetch data for logged in user using token
  });
  return (
    <Layout>
    <Sidebar  />
    <Layout className="site-layout">
      <div className="content ht-100v pd-0">
       <Header/>
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
          }}
        >
            {props.children}
            </Content>
            </div>
            </Layout>
            </Layout>
            
      
    

  );
};

export default AuthLayout;
