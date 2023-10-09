// import { NavLink, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
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

      <Outlet />
    </div>
  );
}

export default App;
