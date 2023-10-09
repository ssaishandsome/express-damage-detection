import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Start from "./pages/Start/Start.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
// import NoPage from "./pages/NoPage.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import SignIn from "./pages/SignIn.jsx";
import Histroy from "./pages/History.jsx";
import Upload from "./pages/Start/Upload.jsx";
import Photographed from "./pages/Start/Photographed.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="start" element={<Start />}>
            <Route path="upload" element={<Upload />} />
            <Route path="photographed" element={<Photographed />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="user">
            <Route path="details" element={<UserDetails />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="history" element={<Histroy />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"home"} replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
