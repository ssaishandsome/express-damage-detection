// import { NavLink, Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./components/Navigation";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layout
      style={{
        height: "100%",
        position: "absolute",
        width: "100%",
        left: 0,
        top: 0,
      }}
    >
      <Header
        style={{
          display: "flex",
          paddingRight: 0,
          paddingLeft: 0,
          justifyContent: "flex-end",
          backgroundColor: "white",
        }}
      >
        <Navigation />
      </Header>

      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
