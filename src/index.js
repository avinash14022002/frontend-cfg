import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import Form from "./components/login/Form";
import DashboardContainer from "./pages/DashboardContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Form />}></Route>
        <Route path="/dashboard/*" element={<DashboardContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
